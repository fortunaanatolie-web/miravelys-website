import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright';

const baseUrl = process.env.MIRASCRIBE_PREVIEW_URL || 'http://127.0.0.1:4173';
const artifactDir = 'artifacts/mirascribe-visual-contract';

const viewports = [
  { name: 'desktop', width: 1440, height: 1100 },
  { name: 'mobile', width: 390, height: 844 },
];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

await mkdir(artifactDir, { recursive: true });
const browser = await chromium.launch({ headless: true });
const results = [];

try {
  for (const viewport of viewports) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      deviceScaleFactor: 1,
      reducedMotion: 'reduce',
    });
    const page = await context.newPage();
    const runtimeErrors = [];

    page.on('pageerror', error => runtimeErrors.push(`pageerror: ${error.message}`));
    page.on('console', message => {
      if (message.type() === 'error') runtimeErrors.push(`console: ${message.text()}`);
    });

    const response = await page.goto(`${baseUrl}/mirascribe`, {
      waitUntil: 'networkidle',
      timeout: 30_000,
    });

    assert(response?.ok(), `${viewport.name}: /mirascribe returned ${response?.status()}`);
    assert((await page.title()).includes('MiraScribe'), `${viewport.name}: document title is not MiraScribe`);

    const heading = page.getByRole('heading', {
      level: 1,
      name: 'Stop replaying recordings. Start reading them.',
    });
    await heading.waitFor({ state: 'visible' });

    const heroScreenshot = page.locator('img[src$="/01-transcript-complete.png"]').first();
    await heroScreenshot.waitFor({ state: 'visible' });
    const heroImageState = await heroScreenshot.evaluate(image => ({
      complete: image.complete,
      naturalWidth: image.naturalWidth,
      naturalHeight: image.naturalHeight,
      loading: image.loading,
      fetchPriority: image.fetchPriority,
    }));
    assert(heroImageState.complete && heroImageState.naturalWidth > 0, `${viewport.name}: hero transcript screenshot did not load`);
    assert(heroImageState.loading === 'eager', `${viewport.name}: hero screenshot is not eager-loaded`);
    assert(heroImageState.fetchPriority === 'high', `${viewport.name}: hero screenshot is not high priority`);

    const initialOverflow = await page.evaluate(() => ({
      viewport: window.innerWidth,
      documentWidth: document.documentElement.scrollWidth,
      bodyWidth: document.body.scrollWidth,
    }));
    assert(
      initialOverflow.documentWidth <= initialOverflow.viewport + 1 && initialOverflow.bodyWidth <= initialOverflow.viewport + 1,
      `${viewport.name}: horizontal overflow detected before scrolling (${JSON.stringify(initialOverflow)})`,
    );

    const libraryScreenshot = page.locator('img[src$="/02-library.png"]');
    await libraryScreenshot.scrollIntoViewIfNeeded();
    await libraryScreenshot.waitFor({ state: 'visible' });
    await page.waitForFunction(
      () => {
        const image = document.querySelector('img[src$="/02-library.png"]');
        return image instanceof HTMLImageElement && image.complete && image.naturalWidth > 0;
      },
      { timeout: 30_000 },
    );

    const libraryState = await libraryScreenshot.evaluate(image => {
      const style = getComputedStyle(image);
      const rect = image.getBoundingClientRect();
      return {
        naturalWidth: image.naturalWidth,
        naturalHeight: image.naturalHeight,
        renderedWidth: rect.width,
        renderedHeight: rect.height,
        objectFit: style.objectFit,
        objectPosition: style.objectPosition,
        loading: image.loading,
      };
    });

    assert(libraryState.objectFit === 'contain', `${viewport.name}: real library UI is being cropped (${libraryState.objectFit})`);
    assert(libraryState.naturalWidth > 0 && libraryState.renderedWidth >= 120, `${viewport.name}: library screenshot is not meaningfully visible`);
    assert(libraryState.loading === 'lazy', `${viewport.name}: below-the-fold library screenshot is not lazy-loaded`);

    const cta = page.getByRole('link', { name: 'Download MiraScribe for Mac' }).last();
    await cta.scrollIntoViewIfNeeded();
    const ctaBox = await cta.boundingBox();
    assert(ctaBox && ctaBox.height >= 44, `${viewport.name}: final CTA is below the 44px interaction target`);

    const finalOverflow = await page.evaluate(() => ({
      viewport: window.innerWidth,
      documentWidth: document.documentElement.scrollWidth,
      bodyWidth: document.body.scrollWidth,
    }));
    assert(
      finalOverflow.documentWidth <= finalOverflow.viewport + 1 && finalOverflow.bodyWidth <= finalOverflow.viewport + 1,
      `${viewport.name}: horizontal overflow detected after full-page interaction (${JSON.stringify(finalOverflow)})`,
    );

    await page.screenshot({
      path: `${artifactDir}/mirascribe-${viewport.name}.png`,
      fullPage: true,
    });

    assert(runtimeErrors.length === 0, `${viewport.name}: browser runtime errors:\n${runtimeErrors.join('\n')}`);

    results.push({
      viewport,
      heroImageState,
      libraryState,
      initialOverflow,
      finalOverflow,
      ctaHeight: ctaBox.height,
      runtimeErrors,
    });

    await context.close();
  }
} finally {
  await browser.close();
}

console.log(JSON.stringify({
  status: 'PASS',
  route: '/mirascribe',
  results,
}, null, 2));

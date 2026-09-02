import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright';

const baseUrl = process.env.MIRASCRIBE_PREVIEW_URL || 'http://127.0.0.1:4173';
const artifactDir = 'artifacts/mirascribe-visual-contract';
const viewports = [
  { name: 'desktop', width: 1440, height: 1000 },
  { name: 'mobile', width: 390, height: 844 },
];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function assertImagesLoaded(page) {
  const images = page.locator('.mira-mkt img');
  for (let index = 0; index < await images.count(); index += 1) {
    const image = images.nth(index);
    await image.scrollIntoViewIfNeeded();
    await image.evaluate(async element => {
      if (!(element instanceof HTMLImageElement)) return;
      if (!element.complete || element.naturalWidth === 0) {
        await new Promise((resolve, reject) => {
          const timeout = setTimeout(() => reject(new Error(`Image load timeout: ${element.currentSrc || element.src}`)), 30_000);
          element.addEventListener('load', () => { clearTimeout(timeout); resolve(); }, { once: true });
          element.addEventListener('error', () => { clearTimeout(timeout); reject(new Error(`Image failed: ${element.currentSrc || element.src}`)); }, { once: true });
        });
      }
      await element.decode?.().catch(() => {});
    });
    assert(await image.evaluate(element => element.complete && element.naturalWidth > 0), `Marketing image ${index} did not load`);
  }
  await page.evaluate(async () => {
    if (document.fonts?.ready) await document.fonts.ready;
    window.scrollTo({ top: 0, behavior: 'instant' });
  });
}

await mkdir(artifactDir, { recursive: true });
const browser = await chromium.launch({ headless: true });

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
    page.on('console', message => { if (message.type() === 'error') runtimeErrors.push(`console: ${message.text()}`); });

    try {
      const response = await page.goto(`${baseUrl}/mirascribe`, { waitUntil: 'networkidle', timeout: 30_000 });
      assert(response?.ok(), `${viewport.name}: /mirascribe returned ${response?.status()}`);
      assert((await page.title()).startsWith('MiraScribe'), `${viewport.name}: title is not product-specific`);
      assert(await page.locator('html[data-app-identity="mirascribe"]').count() === 1, `${viewport.name}: app identity is not MiraScribe`);
      assert((await page.locator('link[rel="shortcut icon"]').getAttribute('href'))?.includes('/identities/mirascribe/'), `${viewport.name}: MiraScribe favicon missing`);
      assert((await page.locator('link[rel="manifest"]').getAttribute('href'))?.includes('/identities/mirascribe/'), `${viewport.name}: MiraScribe manifest missing`);

      await page.getByRole('heading', { level: 1, name: 'Stop replaying recordings. Start reading them.' }).waitFor({ state: 'visible' });
      const hero = page.locator('.ms-editorial-hero__image img');
      assert(await hero.count() === 1, `${viewport.name}: expected one editorial hero image`);
      await assertImagesLoaded(page);
      const heroProof = await hero.evaluate(element => ({
        src: element.currentSrc || element.src,
        naturalWidth: element.naturalWidth,
        naturalHeight: element.naturalHeight,
        box: element.getBoundingClientRect().toJSON(),
      }));
      assert(heroProof.src.includes('/images/mirascribe/mirascribe-hero-hd.webp'), `${viewport.name}: approved HD hero is not active`);
      assert(heroProof.naturalWidth >= 1000 && heroProof.naturalHeight >= 600, `${viewport.name}: hero source resolution is unexpectedly low`);
      assert(heroProof.box.width >= (viewport.name === 'desktop' ? 500 : 300), `${viewport.name}: hero collapsed`);

      assert(await page.locator('.ms-editorial-story img').count() === 2, `${viewport.name}: study/film editorial photography is incomplete`);
      assert(await page.locator('.ms-search-demo').count() === 1, `${viewport.name}: transcript search instrument missing`);
      await page.getByRole('button', { name: 'deadline' }).click();
      await page.getByText('32:18', { exact: true }).waitFor({ state: 'visible' });
      await page.getByRole('button', { name: 'Jump to source' }).click();
      await page.getByRole('button', { name: 'Source moment selected' }).waitFor({ state: 'visible' });

      const overflow = await page.evaluate(() => ({
        viewport: window.innerWidth,
        documentWidth: document.documentElement.scrollWidth,
        bodyWidth: document.body.scrollWidth,
      }));
      assert(overflow.documentWidth <= overflow.viewport + 1 && overflow.bodyWidth <= overflow.viewport + 1, `${viewport.name}: horizontal overflow ${JSON.stringify(overflow)}`);

      const cta = page.getByRole('link', { name: 'Download MiraScribe for Mac' }).last();
      await cta.scrollIntoViewIfNeeded();
      const ctaBox = await cta.boundingBox();
      assert(ctaBox && ctaBox.height >= 44, `${viewport.name}: CTA is below 44px`);
      assert(runtimeErrors.length === 0, `${viewport.name}: runtime errors:\n${runtimeErrors.join('\n')}`);

      await page.screenshot({ path: `${artifactDir}/mirascribe-${viewport.name}.png`, fullPage: true });
    } catch (error) {
      await page.screenshot({ path: `${artifactDir}/mirascribe-${viewport.name}-failure.png`, fullPage: true }).catch(() => {});
      throw error;
    } finally {
      await context.close();
    }
  }
} finally {
  await browser.close();
}

console.log(JSON.stringify({ status: 'PASS', route: '/mirascribe', contract: 'editorial-instrument' }, null, 2));

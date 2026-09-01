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

async function loadAllMarketingImages(page) {
  const images = page.locator('.mira-mkt img');
  const count = await images.count();
  for (let index = 0; index < count; index += 1) {
    const image = images.nth(index);
    await image.scrollIntoViewIfNeeded();
    await image.waitFor({ state: 'visible' });
    await image.evaluate(async element => {
      if (!(element instanceof HTMLImageElement)) return;
      if (!element.complete || element.naturalWidth === 0) {
        await new Promise((resolve, reject) => {
          const timeout = setTimeout(() => reject(new Error(`Image load timeout: ${element.currentSrc || element.src}`)), 30_000);
          element.addEventListener('load', () => { clearTimeout(timeout); resolve(); }, { once: true });
          element.addEventListener('error', () => { clearTimeout(timeout); reject(new Error(`Image failed: ${element.currentSrc || element.src}`)); }, { once: true });
        });
      }
      if (typeof element.decode === 'function') await element.decode().catch(() => {});
    });
    const loaded = await image.evaluate(element => element.complete && element.naturalWidth > 0);
    assert(loaded, `Marketing image ${index} did not load`);
  }

  await page.evaluate(async () => {
    if (document.fonts?.ready) await document.fonts.ready;
    window.scrollTo({ top: 0, behavior: 'instant' });
  });
  await page.waitForTimeout(150);
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
    page.on('console', message => {
      if (message.type() === 'error') runtimeErrors.push(`console: ${message.text()}`);
    });

    try {
      const response = await page.goto(`${baseUrl}/mirascribe`, { waitUntil: 'networkidle', timeout: 30_000 });
      assert(response?.ok(), `${viewport.name}: /mirascribe returned ${response?.status()}`);
      assert((await page.title()).includes('MiraScribe'), `${viewport.name}: document title is not MiraScribe`);

      await page.getByRole('heading', { level: 1, name: 'Stop replaying recordings. Start reading them.' }).waitFor({ state: 'visible' });

      const detachedProductScreens = await page.locator([
        '.mira-mkt img[src$="/01-transcript-complete.png"]:not(.mira-mkt__embedded-ui)',
        '.mira-mkt img[src$="/02-library.png"]:not(.mira-mkt__embedded-ui)',
        '.mira-mkt img[src$="/03-settings-transcription.png"]',
        '.mira-mkt img[src$="/05-settings-privacy.png"]',
        '.mira-mkt img[src$="/03-settings-general.png"]',
      ].join(',')).count();
      assert(detachedProductScreens === 0, `${viewport.name}: detached product screenshots remain on the page`);

      const embeddedUi = page.locator('.mira-mkt__device-art .mira-mkt__embedded-ui');
      assert(await embeddedUi.count() === 3, `${viewport.name}: expected exactly 3 device-embedded UI screenshots`);

      const studentArt = page.locator('.mira-mkt__device-art--student');
      const filmmakerArt = page.locator('.mira-mkt__device-art--filmmaker');
      await studentArt.scrollIntoViewIfNeeded();
      await studentArt.waitFor({ state: 'visible' });
      await filmmakerArt.scrollIntoViewIfNeeded();
      await filmmakerArt.waitFor({ state: 'visible' });

      await loadAllMarketingImages(page);

      const overlayGeometry = await embeddedUi.evaluateAll(elements => elements.map(element => {
        const rect = element.getBoundingClientRect();
        const parent = element.closest('.mira-mkt__device-art')?.getBoundingClientRect();
        return {
          width: rect.width,
          height: rect.height,
          insideParent: Boolean(parent) && rect.left >= parent.left - 2 && rect.top >= parent.top - 2 && rect.right <= parent.right + 2 && rect.bottom <= parent.bottom + 2,
        };
      }));
      assert(overlayGeometry.every(item => item.width > 40 && item.height > 40 && item.insideParent), `${viewport.name}: an embedded UI screen escapes its computer artwork`);

      const overflow = await page.evaluate(() => ({
        viewport: window.innerWidth,
        documentWidth: document.documentElement.scrollWidth,
        bodyWidth: document.body.scrollWidth,
      }));
      assert(overflow.documentWidth <= overflow.viewport + 1 && overflow.bodyWidth <= overflow.viewport + 1, `${viewport.name}: horizontal overflow detected (${JSON.stringify(overflow)})`);

      const cta = page.getByRole('link', { name: 'Download MiraScribe for Mac' }).last();
      await cta.scrollIntoViewIfNeeded();
      const ctaBox = await cta.boundingBox();
      assert(ctaBox && ctaBox.height >= 44, `${viewport.name}: final CTA is below the 44px interaction target`);

      await page.screenshot({ path: `${artifactDir}/mirascribe-${viewport.name}.png`, fullPage: true });
      assert(runtimeErrors.length === 0, `${viewport.name}: browser runtime errors:\n${runtimeErrors.join('\n')}`);
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

console.log(JSON.stringify({ status: 'PASS', route: '/mirascribe', contract: 'product-ui-inside-computers-only' }, null, 2));

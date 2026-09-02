import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright';

const baseUrl = process.env.MIRA_PREVIEW_URL || process.env.MIRASCRIBE_PREVIEW_URL || 'http://127.0.0.1:4173';
const artifactDir = 'artifacts/premium-ecosystem';
const viewports = [
  { name: '390', width: 390, height: 844 },
  { name: '430', width: 430, height: 932 },
  { name: '768', width: 768, height: 1024 },
  { name: '1024', width: 1024, height: 900 },
  { name: '1440', width: 1440, height: 1000 },
];

const productRoutes = [
  { path: '/', id: 'miravelys', heading: /caught in loops/i },
  { path: '/mirascribe', id: 'mirascribe', heading: 'Stop replaying recordings. Start reading them.' },
  { path: '/miravoxis', id: 'miravoxis', heading: 'Give written words a voice you can direct.' },
];

const secondaryRoutes = [
  ['/mirascribe/support', 'mirascribe', 'MiraScribe Support'],
  ['/mirascribe/privacy', 'mirascribe', 'MiraScribe Privacy'],
  ['/mirascribe/legal', 'mirascribe', 'MiraScribe Legal'],
  ['/mirascribe/acknowledgements', 'mirascribe', 'MiraScribe Acknowledgements'],
  ['/miravoxis/support', 'miravoxis', 'MiraVoxis Support'],
  ['/miravoxis/privacy', 'miravoxis', 'MiraVoxis Privacy'],
];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function identitySnapshot(page) {
  return page.evaluate(() => ({
    id: document.documentElement.dataset.appIdentity,
    title: document.title,
    shortcut: document.querySelector('link[rel="shortcut icon"]')?.getAttribute('href') || '',
    touch: document.querySelector('link[rel="apple-touch-icon"]')?.getAttribute('href') || '',
    manifest: document.querySelector('link[rel="manifest"]')?.getAttribute('href') || '',
    canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href') || '',
  }));
}

async function assertIdentity(page, path, expectedId) {
  const identity = await identitySnapshot(page);
  assert(identity.id === expectedId, `${path}: expected data-app-identity=${expectedId}, got ${identity.id}`);
  for (const [surface, href] of [['favicon', identity.shortcut], ['touch icon', identity.touch], ['manifest', identity.manifest]]) {
    assert(href.includes(`/identities/${expectedId}/`), `${path}: ${surface} does not belong to ${expectedId}: ${href}`);
  }
  assert(identity.canonical === new URL(path, 'https://miravelys.com').toString(), `${path}: canonical mismatch ${identity.canonical}`);
}

async function assertNoOverflow(page, label) {
  const overflow = await page.evaluate(() => ({
    viewport: window.innerWidth,
    html: document.documentElement.scrollWidth,
    body: document.body.scrollWidth,
  }));
  assert(overflow.html <= overflow.viewport + 1 && overflow.body <= overflow.viewport + 1, `${label}: horizontal overflow ${JSON.stringify(overflow)}`);
}

async function loadVisualAssets(page) {
  const images = page.locator('main img');
  const count = await images.count();
  for (let index = 0; index < count; index += 1) {
    const image = images.nth(index);
    await image.scrollIntoViewIfNeeded().catch(() => {});
    await image.evaluate(async element => {
      if (!(element instanceof HTMLImageElement)) return;
      if (!element.complete || element.naturalWidth === 0) {
        await new Promise((resolve, reject) => {
          const timeout = setTimeout(() => reject(new Error(`Image load timeout: ${element.currentSrc || element.src}`)), 20_000);
          element.addEventListener('load', () => { clearTimeout(timeout); resolve(); }, { once: true });
          element.addEventListener('error', () => { clearTimeout(timeout); reject(new Error(`Image failed: ${element.currentSrc || element.src}`)); }, { once: true });
        });
      }
      await element.decode?.().catch(() => {});
    });
  }
  await page.evaluate(async () => {
    if (document.fonts?.ready) await document.fonts.ready;
    window.scrollTo({ top: 0, behavior: 'instant' });
  });
  await page.waitForTimeout(100);
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

    for (const product of productRoutes) {
      const response = await page.goto(`${baseUrl}${product.path}`, { waitUntil: 'networkidle', timeout: 30_000 });
      assert(response?.ok(), `${viewport.name} ${product.path}: HTTP ${response?.status()}`);
      const heading = page.getByRole('heading', { level: 1, name: product.heading });
      await heading.waitFor({ state: 'visible' });
      await assertIdentity(page, product.path, product.id);
      await assertNoOverflow(page, `${viewport.name} ${product.path}`);

      if (product.id === 'mirascribe') {
        await page.getByRole('button', { name: 'original wording' }).click();
        await page.getByText('47:06', { exact: true }).waitFor({ state: 'visible' });
      }

      if (product.id === 'miravoxis') {
        assert(await page.locator('.mx-studio-hero__stage').count() === 1, `${viewport.name}: MiraVoxis hero performance stage missing`);
        await page.getByRole('button', { name: 'she' }).click();
        await page.getByText(/SHE — the person is the contrast/).waitFor({ state: 'visible' });

        const languageDetails = page.locator('.mx-studio-language-details');
        assert(await languageDetails.count() === 1, `${viewport.name}: transcription coverage disclosure missing`);
        assert(!(await languageDetails.evaluate(element => element.open)), `${viewport.name}: transcription language catalog should be collapsed by default`);
        const languageSummary = page.getByText('Browse transcription coverage', { exact: true });
        await languageSummary.click();
        await page.getByLabel('Search MiraVoxis transcription languages').waitFor({ state: 'visible' });
        await languageSummary.click();
        assert(!(await languageDetails.evaluate(element => element.open)), `${viewport.name}: transcription language catalog failed to close`);
      }

      await loadVisualAssets(page);
      await assertNoOverflow(page, `${viewport.name} ${product.path} after asset load`);
      await page.screenshot({ path: `${artifactDir}/${product.id}-${viewport.name}.png`, fullPage: true });
    }

    assert(runtimeErrors.length === 0, `${viewport.name}: runtime errors:\n${runtimeErrors.join('\n')}`);
    await context.close();
  }

  const context = await browser.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: 'reduce' });
  const page = await context.newPage();
  for (const [path, id, titlePrefix] of secondaryRoutes) {
    const response = await page.goto(`${baseUrl}${path}`, { waitUntil: 'networkidle', timeout: 30_000 });
    assert(response?.ok(), `${path}: HTTP ${response?.status()}`);
    await assertIdentity(page, path, id);
    assert((await page.title()).startsWith(titlePrefix), `${path}: title is not product-specific: ${await page.title()}`);
  }

  // Client-side identity transition: Products → MiraScribe → back → MiraVoxis.
  await page.goto(`${baseUrl}/products`, { waitUntil: 'networkidle' });
  const scribeLink = page.getByRole('link', { name: /MiraScribe/i }).first();
  await scribeLink.click();
  await page.waitForURL('**/mirascribe');
  await assertIdentity(page, '/mirascribe', 'mirascribe');
  await page.goBack({ waitUntil: 'networkidle' });
  const voxisLink = page.getByRole('link', { name: /MiraVoxis/i }).first();
  await voxisLink.click();
  await page.waitForURL('**/miravoxis');
  await assertIdentity(page, '/miravoxis', 'miravoxis');
  await context.close();
} finally {
  await browser.close();
}

console.log(JSON.stringify({ status: 'PASS', viewports: viewports.map(viewport => viewport.width), products: productRoutes.map(route => route.id) }, null, 2));

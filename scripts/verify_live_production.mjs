import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const BASE_URL = (process.env.LIVE_BASE_URL || 'https://www.miravelys.com').replace(/\/$/, '');
const ARTIFACT_DIR = path.resolve('artifacts/live-production-verification');
const KEY_ROUTES = ['/', '/products', '/mirascribe', '/miravoxis'];
const EXPLICIT_ROUTES = [
  '/',
  '/products',
  '/mirascribe',
  '/mirascribe/support',
  '/mirascribe/privacy',
  '/mirascribe/legal',
  '/mirascribe/acknowledgements',
  '/miravoxis',
  '/miravoxis/support',
  '/miravoxis/privacy',
];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function normalizePath(value) {
  try {
    const url = new URL(value, BASE_URL);
    if (url.origin !== new URL(BASE_URL).origin) return null;
    let pathname = url.pathname || '/';
    if (pathname.length > 1) pathname = pathname.replace(/\/+$/, '');
    return pathname || '/';
  } catch {
    return null;
  }
}

async function getSitemapRoutes() {
  const response = await fetch(`${BASE_URL}/sitemap.xml`, { redirect: 'follow' });
  assert(response.ok, `sitemap.xml returned ${response.status}`);
  const xml = await response.text();
  const routes = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map(match => normalizePath(match[1]))
    .filter(Boolean);
  return [...new Set(routes)];
}

async function inspectPage(page, route) {
  const pageErrors = [];
  const consoleErrors = [];
  const failedSameOrigin = [];
  const baseOrigin = new URL(BASE_URL).origin;

  const onPageError = error => pageErrors.push(String(error?.message || error));
  const onConsole = message => {
    if (message.type() === 'error') consoleErrors.push(message.text());
  };
  const onRequestFailed = request => {
    try {
      if (new URL(request.url()).origin === baseOrigin) {
        failedSameOrigin.push(`${request.resourceType()}: ${request.url()} :: ${request.failure()?.errorText || 'failed'}`);
      }
    } catch {}
  };

  page.on('pageerror', onPageError);
  page.on('console', onConsole);
  page.on('requestfailed', onRequestFailed);

  const response = await page.goto(`${BASE_URL}${route}`, { waitUntil: 'domcontentloaded', timeout: 30_000 });
  assert(response, `${route}: navigation returned no response`);
  const status = response.status();
  assert(status >= 200 && status < 400, `${route}: document status ${status}`);
  await page.waitForLoadState('networkidle', { timeout: 10_000 }).catch(() => {});
  await page.waitForTimeout(250);

  const snapshot = await page.evaluate(() => {
    const visible = element => {
      const style = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0;
    };
    const h1s = [...document.querySelectorAll('h1')].filter(visible).map(el => el.textContent?.trim() || '');
    const brokenImages = [...document.images]
      .filter(visible)
      .filter(img => !img.complete || img.naturalWidth === 0)
      .map(img => ({ src: img.currentSrc || img.src, alt: img.alt }));
    const canonical = document.querySelector('link[rel="canonical"]')?.href || '';
    const favicon = document.querySelector('link[rel~="icon"]')?.href || '';
    const manifest = document.querySelector('link[rel="manifest"]')?.href || '';
    const appIdentity = document.documentElement.dataset.appIdentity || '';
    return {
      title: document.title,
      h1s,
      canonical,
      favicon,
      manifest,
      appIdentity,
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      brokenImages,
      bodyText: document.body.innerText.slice(0, 20_000),
    };
  });

  assert(snapshot.h1s.length === 1, `${route}: expected 1 visible h1, got ${snapshot.h1s.length}: ${JSON.stringify(snapshot.h1s)}`);
  assert(snapshot.scrollWidth <= snapshot.clientWidth + 1, `${route}: horizontal overflow ${snapshot.scrollWidth} > ${snapshot.clientWidth}`);
  assert(snapshot.brokenImages.length === 0, `${route}: broken visible images ${JSON.stringify(snapshot.brokenImages)}`);
  assert(pageErrors.length === 0, `${route}: page errors ${JSON.stringify(pageErrors)}`);
  assert(failedSameOrigin.length === 0, `${route}: failed same-origin requests ${JSON.stringify(failedSameOrigin)}`);

  page.off('pageerror', onPageError);
  page.off('console', onConsole);
  page.off('requestfailed', onRequestFailed);

  return {
    route,
    status,
    title: snapshot.title,
    h1: snapshot.h1s[0],
    canonical: snapshot.canonical,
    favicon: snapshot.favicon,
    manifest: snapshot.manifest,
    appIdentity: snapshot.appIdentity,
    consoleErrors,
  };
}

async function assertPremiumSignatures(page, route) {
  if (route === '/') {
    assert(await page.locator('.site-shell--keynote').count(), '/: premium keynote shell missing');
    assert(await page.locator('.loop-hero__atmosphere').count(), '/: premium hero atmosphere missing');
    const h1 = (await page.locator('h1').first().innerText()).trim();
    assert(h1.includes('We all get caught in loops'), `/: unexpected hero ${h1}`);
    return;
  }

  if (route === '/products') {
    const text = await page.locator('body').innerText();
    for (const product of ['Miravelys', 'MiraScribe', 'MiraVoxis']) {
      assert(text.includes(product), `/products: missing ${product}`);
    }
    return;
  }

  if (route === '/mirascribe') {
    assert(await page.locator('.ms-editorial-hero').count(), '/mirascribe: editorial hero missing');
    assert(await page.locator('.ms-search-demo__instrument').count(), '/mirascribe: search instrument missing');
    const h1 = (await page.locator('h1').first().innerText()).trim();
    assert(h1 === 'Stop replaying recordings. Start reading them.', `/mirascribe: unexpected hero ${h1}`);
    return;
  }

  if (route === '/miravoxis') {
    assert(await page.locator('.mx-studio-hero__stage').count(), '/miravoxis: studio hero stage missing');
    assert(await page.locator('.mx-performance__sentence').count(), '/miravoxis: performance control missing');
    const h1 = (await page.locator('h1').first().innerText()).trim();
    assert(h1 === 'Give written words a voice you can direct.', `/miravoxis: unexpected hero ${h1}`);
    const firstTarget = await page.locator('.mx-performance__sentence button').first().evaluate(el => {
      const rect = el.getBoundingClientRect();
      return { width: rect.width, height: rect.height };
    });
    assert(firstTarget.width >= 24 && firstTarget.height >= 44, `/miravoxis: production emphasis target regressed ${JSON.stringify(firstTarget)}`);
    const detailsOpen = await page.locator('.mx-studio-language-details').evaluate(el => el.open);
    assert(detailsOpen === false, '/miravoxis: transcription coverage should be collapsed by default');
  }
}

await fs.mkdir(ARTIFACT_DIR, { recursive: true });
const sitemapRoutes = await getSitemapRoutes();
const routes = [...new Set([...sitemapRoutes, ...EXPLICIT_ROUTES])].sort();

const browser = await chromium.launch({ headless: true });
const desktopContext = await browser.newContext({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1, reducedMotion: 'reduce' });
const desktopPage = await desktopContext.newPage();
const report = {
  baseUrl: BASE_URL,
  verifiedAt: new Date().toISOString(),
  sitemapRouteCount: sitemapRoutes.length,
  routeCount: routes.length,
  routes: [],
  premiumSignatures: {},
};

try {
  for (const route of routes) {
    const result = await inspectPage(desktopPage, route);
    report.routes.push(result);
    if (KEY_ROUTES.includes(route)) {
      await assertPremiumSignatures(desktopPage, route);
      report.premiumSignatures[route] = 'PASS';
      await desktopPage.screenshot({ path: path.join(ARTIFACT_DIR, `${route === '/' ? 'home' : route.slice(1).replaceAll('/', '-')}-1440.png`), fullPage: true });
    }
  }

  const mobileContext = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, reducedMotion: 'reduce' });
  const mobilePage = await mobileContext.newPage();
  try {
    for (const route of KEY_ROUTES) {
      const result = await inspectPage(mobilePage, route);
      await assertPremiumSignatures(mobilePage, route);
      await mobilePage.screenshot({ path: path.join(ARTIFACT_DIR, `${route === '/' ? 'home' : route.slice(1)}-390.png`), fullPage: true });
      report[`mobile:${route}`] = { status: result.status, title: result.title, h1: result.h1 };
    }
  } finally {
    await mobileContext.close();
  }

  report.status = 'PASS';
  await fs.writeFile(path.join(ARTIFACT_DIR, 'report.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify({ status: 'PASS', baseUrl: BASE_URL, sitemapRoutes: sitemapRoutes.length, routesVerified: routes.length, keyRoutes: KEY_ROUTES }, null, 2));
} catch (error) {
  report.status = 'FAIL';
  report.error = String(error?.stack || error);
  await fs.writeFile(path.join(ARTIFACT_DIR, 'report.json'), JSON.stringify(report, null, 2));
  throw error;
} finally {
  await desktopContext.close();
  await browser.close();
}

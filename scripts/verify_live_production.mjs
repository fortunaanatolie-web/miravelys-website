import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const BASE_URL = (process.env.LIVE_BASE_URL || 'https://www.miravelys.com').replace(/\/$/, '');
const ARTIFACT_DIR = path.resolve('artifacts/live-production-verification');
const KEY_ROUTES = ['/', '/products', '/mirascribe', '/miravoxis'];
const EXPLICIT_ROUTES = [
  '/', '/products',
  '/mirascribe', '/mirascribe/support', '/mirascribe/privacy', '/mirascribe/legal', '/mirascribe/acknowledgements',
  '/miravoxis', '/miravoxis/support', '/miravoxis/privacy',
];

const canonicalHost = hostname => hostname.toLowerCase().replace(/^www\./, '');
const expectedHost = canonicalHost(new URL(BASE_URL).hostname);

function normalizePath(value) {
  try {
    const url = new URL(value, BASE_URL);
    if (canonicalHost(url.hostname) !== expectedHost) return null;
    let pathname = url.pathname || '/';
    if (pathname.length > 1) pathname = pathname.replace(/\/+$/, '');
    return pathname || '/';
  } catch {
    return null;
  }
}

async function getSitemapRoutes() {
  const response = await fetch(`${BASE_URL}/sitemap.xml`, { redirect: 'follow' });
  if (!response.ok) throw new Error(`sitemap.xml returned ${response.status}`);
  const xml = await response.text();
  const routes = [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/gi)]
    .map(match => normalizePath(match[1]))
    .filter(Boolean);
  return [...new Set(routes)];
}

async function loadVisualAssets(page) {
  const images = page.locator('img');
  const count = await images.count();
  const failures = [];

  for (let index = 0; index < count; index += 1) {
    const image = images.nth(index);
    await image.scrollIntoViewIfNeeded().catch(() => {});
    try {
      await image.evaluate(async element => {
        if (!(element instanceof HTMLImageElement)) return;
        if (!element.complete || element.naturalWidth === 0) {
          await new Promise((resolve, reject) => {
            const timeout = setTimeout(() => reject(new Error(`timeout: ${element.currentSrc || element.src}`)), 15_000);
            const done = () => { clearTimeout(timeout); resolve(); };
            const fail = () => { clearTimeout(timeout); reject(new Error(`failed: ${element.currentSrc || element.src}`)); };
            element.addEventListener('load', done, { once: true });
            element.addEventListener('error', fail, { once: true });
            if (element.complete && element.naturalWidth > 0) done();
          });
        }
        await element.decode?.().catch(() => {});
      });
    } catch (error) {
      failures.push(String(error?.message || error));
    }
  }

  await page.evaluate(async () => {
    if (document.fonts?.ready) await document.fonts.ready;
    window.scrollTo({ top: 0, behavior: 'instant' });
  });
  await page.waitForTimeout(120);
  return failures;
}

async function inspectPage(page, route, { loadAssets = true } = {}) {
  const pageErrors = [];
  const consoleErrors = [];
  const failedSameOrigin = [];
  const httpErrors = [];
  const issues = [];
  const baseHost = canonicalHost(new URL(BASE_URL).hostname);

  const onPageError = error => pageErrors.push(String(error?.message || error));
  const onConsole = message => { if (message.type() === 'error') consoleErrors.push(message.text()); };
  const onRequestFailed = request => {
    try {
      if (canonicalHost(new URL(request.url()).hostname) === baseHost) {
        failedSameOrigin.push(`${request.resourceType()}: ${request.url()} :: ${request.failure()?.errorText || 'failed'}`);
      }
    } catch {}
  };
  const onResponse = response => {
    try {
      if (canonicalHost(new URL(response.url()).hostname) === baseHost && response.status() >= 400) {
        httpErrors.push(`${response.status()} ${response.request().resourceType()}: ${response.url()}`);
      }
    } catch {}
  };

  page.on('pageerror', onPageError);
  page.on('console', onConsole);
  page.on('requestfailed', onRequestFailed);
  page.on('response', onResponse);

  let status = null;
  let assetLoadFailures = [];
  let snapshot = { title: '', h1s: [], canonical: '', favicon: '', manifest: '', appIdentity: '', scrollWidth: 0, clientWidth: 0, brokenImages: [] };

  try {
    const response = await page.goto(`${BASE_URL}${route}`, { waitUntil: 'domcontentloaded', timeout: 30_000 });
    status = response?.status() ?? null;
    if (!response) issues.push('navigation returned no response');
    if (status == null || status < 200 || status >= 400) issues.push(`document status ${status}`);
    await page.waitForLoadState('networkidle', { timeout: 10_000 }).catch(() => {});
    if (loadAssets) assetLoadFailures = await loadVisualAssets(page);

    snapshot = await page.evaluate(() => {
      const rendered = element => {
        const style = getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0;
      };
      const h1s = [...document.querySelectorAll('h1')].filter(rendered).map(el => el.textContent?.trim() || '');
      const brokenImages = [...document.images]
        .filter(rendered)
        .filter(img => !img.complete || img.naturalWidth === 0)
        .map(img => ({ src: img.currentSrc || img.src, alt: img.alt }));
      return {
        title: document.title,
        h1s,
        canonical: document.querySelector('link[rel="canonical"]')?.href || '',
        favicon: document.querySelector('link[rel~="icon"]')?.href || '',
        manifest: document.querySelector('link[rel="manifest"]')?.href || '',
        appIdentity: document.documentElement.dataset.appIdentity || '',
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        brokenImages,
      };
    });

    if (snapshot.h1s.length !== 1) issues.push(`expected 1 visible h1, got ${snapshot.h1s.length}: ${JSON.stringify(snapshot.h1s)}`);
    if (snapshot.scrollWidth > snapshot.clientWidth + 1) issues.push(`horizontal overflow ${snapshot.scrollWidth} > ${snapshot.clientWidth}`);
    if (snapshot.brokenImages.length) issues.push(`broken visible images ${JSON.stringify(snapshot.brokenImages)}`);
    if (assetLoadFailures.length) issues.push(`asset-load failures ${JSON.stringify(assetLoadFailures)}`);
    if (pageErrors.length) issues.push(`page errors ${JSON.stringify(pageErrors)}`);
    if (failedSameOrigin.length) issues.push(`failed same-origin requests ${JSON.stringify(failedSameOrigin)}`);
    if (httpErrors.length) issues.push(`same-origin HTTP errors ${JSON.stringify(httpErrors)}`);
  } catch (error) {
    issues.push(`inspection exception: ${String(error?.message || error)}`);
  } finally {
    page.off('pageerror', onPageError);
    page.off('console', onConsole);
    page.off('requestfailed', onRequestFailed);
    page.off('response', onResponse);
  }

  return {
    route, status,
    title: snapshot.title,
    h1: snapshot.h1s[0] || '',
    canonical: snapshot.canonical,
    favicon: snapshot.favicon,
    manifest: snapshot.manifest,
    appIdentity: snapshot.appIdentity,
    brokenImages: snapshot.brokenImages,
    assetLoadFailures, pageErrors, consoleErrors, failedSameOrigin, httpErrors,
    issues,
    pass: issues.length === 0,
  };
}

async function premiumSignatureIssues(page, route) {
  const issues = [];
  try {
    if (route === '/') {
      if (!(await page.locator('.site-shell--keynote').count())) issues.push('premium keynote shell missing');
      if (!(await page.locator('.loop-hero__atmosphere').count())) issues.push('premium hero atmosphere missing');
      const h1 = (await page.locator('h1').first().innerText()).trim();
      if (!h1.includes('We all get caught in loops')) issues.push(`unexpected hero: ${h1}`);
    }
    if (route === '/products') {
      const text = await page.locator('body').innerText();
      for (const product of ['Miravelys', 'MiraScribe', 'MiraVoxis']) if (!text.includes(product)) issues.push(`missing ${product}`);
    }
    if (route === '/mirascribe') {
      if (!(await page.locator('.ms-editorial-hero').count())) issues.push('editorial hero missing');
      if (!(await page.locator('.ms-search-demo__instrument').count())) issues.push('search instrument missing');
      const h1 = (await page.locator('h1').first().innerText()).trim();
      if (h1 !== 'Stop replaying recordings. Start reading them.') issues.push(`unexpected hero: ${h1}`);
    }
    if (route === '/miravoxis') {
      if (!(await page.locator('.mx-studio-hero__stage').count())) issues.push('studio hero stage missing');
      if (!(await page.locator('.mx-performance__sentence').count())) issues.push('performance control missing');
      const h1 = (await page.locator('h1').first().innerText()).trim();
      if (h1 !== 'Give written words a voice you can direct.') issues.push(`unexpected hero: ${h1}`);
      const first = page.locator('.mx-performance__sentence button').first();
      if (await first.count()) {
        const target = await first.evaluate(el => { const r = el.getBoundingClientRect(); return { width: r.width, height: r.height }; });
        if (target.width < 24 || target.height < 44) issues.push(`emphasis target regressed ${JSON.stringify(target)}`);
      }
      const details = page.locator('.mx-studio-language-details');
      if (await details.count() && await details.evaluate(el => el.open)) issues.push('transcription coverage is open by default');
    }
  } catch (error) {
    issues.push(`signature exception: ${String(error?.message || error)}`);
  }
  return issues;
}

await fs.mkdir(ARTIFACT_DIR, { recursive: true });
const sitemapRoutes = await getSitemapRoutes();
const routes = [...new Set([...sitemapRoutes, ...EXPLICIT_ROUTES])].sort();
const browser = await chromium.launch({ headless: true });
const report = {
  baseUrl: BASE_URL,
  verifiedAt: new Date().toISOString(),
  sitemapRouteCount: sitemapRoutes.length,
  routeCount: routes.length,
  routes: [], premiumSignatures: {}, mobile: {},
};

try {
  const desktopContext = await browser.newContext({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1, reducedMotion: 'reduce' });
  const desktopPage = await desktopContext.newPage();
  try {
    for (const route of routes) {
      const result = await inspectPage(desktopPage, route, { loadAssets: true });
      report.routes.push(result);
      if (KEY_ROUTES.includes(route)) {
        const signatureIssues = await premiumSignatureIssues(desktopPage, route);
        report.premiumSignatures[route] = { pass: signatureIssues.length === 0, issues: signatureIssues };
        await desktopPage.screenshot({ path: path.join(ARTIFACT_DIR, `${route === '/' ? 'home' : route.slice(1).replaceAll('/', '-')}-1440.png`), fullPage: true });
      }
    }
  } finally { await desktopContext.close(); }

  const mobileContext = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, reducedMotion: 'reduce' });
  const mobilePage = await mobileContext.newPage();
  try {
    for (const route of KEY_ROUTES) {
      const result = await inspectPage(mobilePage, route, { loadAssets: true });
      const signatureIssues = await premiumSignatureIssues(mobilePage, route);
      report.mobile[route] = { ...result, signatureIssues };
      await mobilePage.screenshot({ path: path.join(ARTIFACT_DIR, `${route === '/' ? 'home' : route.slice(1)}-390.png`), fullPage: true });
    }
  } finally { await mobileContext.close(); }

  const desktopFailures = report.routes.filter(route => !route.pass);
  const signatureFailures = Object.entries(report.premiumSignatures).filter(([, value]) => !value.pass);
  const mobileFailures = Object.entries(report.mobile).filter(([, value]) => !value.pass || value.signatureIssues.length);
  const failures = desktopFailures.length + signatureFailures.length + mobileFailures.length;
  report.status = failures ? 'FAIL' : 'PASS';
  report.summary = {
    routesVerified: report.routes.length,
    desktopFailures: desktopFailures.map(route => route.route),
    signatureFailures: signatureFailures.map(([route]) => route),
    mobileFailures: mobileFailures.map(([route]) => route),
  };
  await fs.writeFile(path.join(ARTIFACT_DIR, 'report.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify({ status: report.status, baseUrl: BASE_URL, sitemapRoutes: sitemapRoutes.length, ...report.summary }, null, 2));
  if (failures) throw new Error(`live production verification found ${failures} failing route/signature checks`);
} finally { await browser.close(); }

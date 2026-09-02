import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const BASE = (process.env.LIVE_BASE_URL || 'https://www.miravelys.com').replace(/\/$/, '');
const OUT = path.resolve('artifacts/live-production-verification');
const KEY = ['/', '/products', '/mirascribe', '/miravoxis'];
const EXPLICIT = [
  '/', '/products',
  '/mirascribe', '/mirascribe/support', '/mirascribe/privacy', '/mirascribe/legal', '/mirascribe/acknowledgements',
  '/miravoxis', '/miravoxis/support', '/miravoxis/privacy',
];
const hostKey = host => host.toLowerCase().replace(/^www\./, '');
const SITE_HOST = hostKey(new URL(BASE).hostname);

function pathFrom(value) {
  try {
    const u = new URL(value, BASE);
    if (hostKey(u.hostname) !== SITE_HOST) return null;
    const p = u.pathname || '/';
    return p.length > 1 ? p.replace(/\/+$/, '') : p;
  } catch { return null; }
}

async function sitemapRoutes() {
  const response = await fetch(`${BASE}/sitemap.xml`, { redirect: 'follow' });
  if (!response.ok) throw new Error(`sitemap.xml HTTP ${response.status}`);
  const xml = await response.text();
  return [...new Set([...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/gi)].map(m => pathFrom(m[1])).filter(Boolean))];
}

async function triggerLazyAssets(page) {
  await page.evaluate(async () => {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    let previousHeight = 0;
    for (let pass = 0; pass < 2; pass += 1) {
      const height = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      for (let y = 0; y <= height; y += Math.max(520, Math.floor(innerHeight * 0.7))) {
        window.scrollTo(0, y);
        await sleep(24);
      }
      window.scrollTo(0, height);
      await sleep(80);
      if (height === previousHeight) break;
      previousHeight = height;
    }
  });
  await page.waitForLoadState('networkidle', { timeout: 6_000 }).catch(() => {});
  await page.evaluate(async () => {
    if (document.fonts?.ready) await document.fonts.ready;
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(120);
}

async function inspect(page, route) {
  const pageErrors = [];
  const consoleErrors = [];
  const requestFailures = [];
  const httpErrors = [];
  const onPageError = error => pageErrors.push(error.message || String(error));
  const onConsole = msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); };
  const onFailed = req => {
    try { if (hostKey(new URL(req.url()).hostname) === SITE_HOST) requestFailures.push(`${req.resourceType()} ${req.url()} ${req.failure()?.errorText || ''}`); } catch {}
  };
  const onResponse = res => {
    try { if (hostKey(new URL(res.url()).hostname) === SITE_HOST && res.status() >= 400) httpErrors.push(`${res.status()} ${res.request().resourceType()} ${res.url()}`); } catch {}
  };
  page.on('pageerror', onPageError);
  page.on('console', onConsole);
  page.on('requestfailed', onFailed);
  page.on('response', onResponse);

  const issues = [];
  let status = null;
  let snap = {};
  try {
    const response = await page.goto(`${BASE}${route}`, { waitUntil: 'domcontentloaded', timeout: 30_000 });
    status = response?.status() ?? null;
    if (!response || status < 200 || status >= 400) issues.push(`document HTTP ${status}`);
    await page.waitForLoadState('networkidle', { timeout: 8_000 }).catch(() => {});
    await triggerLazyAssets(page);
    snap = await page.evaluate(() => {
      const rendered = el => {
        const s = getComputedStyle(el); const r = el.getBoundingClientRect();
        return s.display !== 'none' && s.visibility !== 'hidden' && r.width > 0 && r.height > 0;
      };
      const h1s = [...document.querySelectorAll('h1')].filter(rendered).map(el => el.textContent.trim());
      const brokenImages = [...document.images].filter(rendered).filter(img => !img.complete || img.naturalWidth === 0).map(img => img.currentSrc || img.src);
      return {
        title: document.title,
        h1s,
        brokenImages,
        canonical: document.querySelector('link[rel="canonical"]')?.href || '',
        identity: document.documentElement.dataset.appIdentity || '',
        shortcut: document.querySelector('link[rel="shortcut icon"]')?.href || document.querySelector('link[rel~="icon"]')?.href || '',
        manifest: document.querySelector('link[rel="manifest"]')?.href || '',
        htmlWidth: document.documentElement.scrollWidth,
        bodyWidth: document.body.scrollWidth,
        viewport: innerWidth,
      };
    });
    if (snap.h1s.length !== 1) issues.push(`visible h1 count ${snap.h1s.length}: ${JSON.stringify(snap.h1s)}`);
    if (snap.htmlWidth > snap.viewport + 1 || snap.bodyWidth > snap.viewport + 1) issues.push(`horizontal overflow viewport=${snap.viewport} html=${snap.htmlWidth} body=${snap.bodyWidth}`);
    if (snap.brokenImages.length) issues.push(`broken images ${JSON.stringify(snap.brokenImages)}`);
    if (pageErrors.length) issues.push(`page errors ${JSON.stringify(pageErrors)}`);
    if (requestFailures.length) issues.push(`request failures ${JSON.stringify(requestFailures)}`);
    if (httpErrors.length) issues.push(`HTTP asset errors ${JSON.stringify(httpErrors)}`);
  } catch (error) { issues.push(`exception ${error.message || error}`); }

  page.off('pageerror', onPageError); page.off('console', onConsole); page.off('requestfailed', onFailed); page.off('response', onResponse);
  return { route, status, ...snap, pageErrors, consoleErrors, requestFailures, httpErrors, issues, pass: issues.length === 0 };
}

async function signature(page, route) {
  const issues = [];
  if (route === '/') {
    if (!(await page.locator('.site-shell--keynote').count())) issues.push('premium keynote shell missing');
    if (!(await page.locator('.loop-hero__atmosphere').count())) issues.push('premium atmosphere missing');
    if (!((await page.locator('h1').first().innerText()).includes('We all get caught in loops'))) issues.push('premium hero heading mismatch');
  } else if (route === '/products') {
    const text = await page.locator('body').innerText();
    for (const name of ['Miravelys', 'MiraScribe', 'MiraVoxis']) if (!text.includes(name)) issues.push(`missing ${name}`);
  } else if (route === '/mirascribe') {
    if (!(await page.locator('.ms-editorial-hero').count())) issues.push('editorial hero missing');
    if (!(await page.locator('.ms-search-demo__instrument').count())) issues.push('search instrument missing');
    if ((await page.locator('h1').first().innerText()).trim() !== 'Stop replaying recordings. Start reading them.') issues.push('hero heading mismatch');
  } else if (route === '/miravoxis') {
    if (!(await page.locator('.mx-studio-hero__stage').count())) issues.push('studio stage missing');
    if (!(await page.locator('.mx-performance__sentence').count())) issues.push('performance control missing');
    if ((await page.locator('h1').first().innerText()).trim() !== 'Give written words a voice you can direct.') issues.push('hero heading mismatch');
    const first = page.locator('.mx-performance__sentence button').first();
    if (await first.count()) {
      const r = await first.evaluate(el => { const b = el.getBoundingClientRect(); return { w: b.width, h: b.height }; });
      if (r.w < 24 || r.h < 44) issues.push(`touch target ${JSON.stringify(r)}`);
    }
    const details = page.locator('.mx-studio-language-details');
    if (await details.count() && await details.evaluate(el => el.open)) issues.push('language catalog open by default');
  }
  return issues;
}

await fs.mkdir(OUT, { recursive: true });
const fromSitemap = await sitemapRoutes();
const routes = [...new Set([...fromSitemap, ...EXPLICIT])].sort();
const browser = await chromium.launch({ headless: true });
const report = { baseUrl: BASE, verifiedAt: new Date().toISOString(), sitemapRoutes: fromSitemap, routes: [], signatures: {}, mobile: {} };

try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' });
  const page = await context.newPage();
  for (const route of routes) {
    const result = await inspect(page, route);
    report.routes.push(result);
    if (KEY.includes(route)) {
      report.signatures[route] = await signature(page, route);
      await page.screenshot({ path: path.join(OUT, `${route === '/' ? 'home' : route.slice(1).replaceAll('/', '-')}-1440.png`), fullPage: true });
    }
  }
  await context.close();

  const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
  const mobilePage = await mobile.newPage();
  for (const route of KEY) {
    const result = await inspect(mobilePage, route);
    const signatureIssues = await signature(mobilePage, route);
    report.mobile[route] = { ...result, signatureIssues };
    await mobilePage.screenshot({ path: path.join(OUT, `${route === '/' ? 'home' : route.slice(1)}-390.png`), fullPage: true });
  }
  await mobile.close();

  const desktopFailures = report.routes.filter(r => !r.pass).map(r => r.route);
  const signatureFailures = Object.entries(report.signatures).filter(([, issues]) => issues.length).map(([route]) => route);
  const mobileFailures = Object.entries(report.mobile).filter(([, r]) => !r.pass || r.signatureIssues.length).map(([route]) => route);
  report.summary = { sitemapRouteCount: fromSitemap.length, routesVerified: routes.length, desktopFailures, signatureFailures, mobileFailures };
  report.status = desktopFailures.length || signatureFailures.length || mobileFailures.length ? 'FAIL' : 'PASS';
  await fs.writeFile(path.join(OUT, 'report.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify({ status: report.status, ...report.summary }, null, 2));
  if (report.status !== 'PASS') throw new Error('live production exhaustive verification failed');
} finally { await browser.close(); }

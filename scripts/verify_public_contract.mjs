import { access, readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { languages } from '../src/i18n/publicSiteCopy.js';
import { resolveFounderStoryCopy } from '../src/i18n/loopStoryCopy.js';
import { resolvePublicLegalDocument } from '../src/i18n/publicLegalCopy.js';
import { resolveEarlyAccessCopy } from '../src/i18n/earlyAccessCopy.js';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = join(root, 'dist');
const deployedAssets = join(root, 'public-site', 'miravelys-screenshots', 'sticky-phone');
const screenshotCodes = ['overview', 'write', 'layers', 'patterns', 'body', 'sounds', 'settings'];
const routes = ['/', '/story', '/support', '/faq', '/legal-notice', '/terms', '/privacy', '/cookies'];

function isNoIndexFallback(language, route) {
  if (route === '/story') return Boolean(resolveFounderStoryCopy(language).languageFallback);

  const documentIds = {
    '/legal-notice': 'legalNotice',
    '/terms': 'userAgreement',
    '/privacy': 'privacyPolicy',
    '/cookies': 'cookies',
  };
  return Boolean(
    documentIds[route]
      && resolvePublicLegalDocument(language, documentIds[route])?.languageFallback,
  );
}

function routePath(lang, route) {
  const localized = lang === 'en' ? route : route === '/' ? `/${lang}` : `/${lang}${route}`;
  return localized === '/' ? join(dist, 'index.html') : join(dist, localized.slice(1), 'index.html');
}

async function mustExist(path, label) {
  try {
    await access(path);
  } catch {
    throw new Error(`${label} is missing: ${path}`);
  }
}

for (const language of languages) {
  const endpointCopy = resolveEarlyAccessCopy(language.code, 'endpoint');
  for (const key of ['cta', 'body', 'note', 'submit', 'success', 'privacy']) {
    if (!endpointCopy[key]) {
      throw new Error(`endpoint copy is incomplete for ${language.code}: ${key}`);
    }
  }

  for (const code of screenshotCodes) {
    for (const suffix of ['390.avif', '780.avif', '1206.avif', '780.jpg']) {
      await mustExist(
        join(deployedAssets, language.code, `${code}-${suffix}`),
        `optimized ${language.code}/${code} asset`,
      );
    }
  }

  for (const route of routes) {
    const page = routePath(language.code, route);
    await mustExist(page, `static route ${language.code}${route}`);
    const html = await readFile(page, 'utf8');
    const canonical = `https://miravelys.com${language.code === 'en' ? route : route === '/' ? `/${language.code}` : `/${language.code}${route}`}`;
    if (!html.includes(`<link rel="canonical" href="${canonical}">`)) {
      throw new Error(`canonical metadata is missing for ${language.code}${route}`);
    }
    if (!html.includes('hreflang="x-default"') || !html.includes('og-miravelys.jpg')) {
      throw new Error(`alternate or social metadata is missing for ${language.code}${route}`);
    }
    const expectedNoIndex = isNoIndexFallback(language.code, route);
    const hasNoIndex = html.includes('<meta name="robots" content="noindex,follow">');
    if (expectedNoIndex !== hasNoIndex) {
      throw new Error(`noindex fallback metadata is incorrect for ${language.code}${route}`);
    }

    for (const alternate of languages) {
      const alternateUrl = `https://miravelys.com${alternate.code === 'en' ? route : route === '/' ? `/${alternate.code}` : `/${alternate.code}${route}`}`;
      const isDeclaredAlternate = html.includes(`hreflang="${alternate.code}" href="${alternateUrl}"`);
      const shouldDeclareAlternate = !isNoIndexFallback(alternate.code, route);
      if (isDeclaredAlternate !== shouldDeclareAlternate) {
        throw new Error(`hreflang contract is incorrect for ${language.code}${route} -> ${alternate.code}`);
      }
    }
  }
}

const sitemap = await readFile(join(dist, 'sitemap.xml'), 'utf8');
for (const language of languages) {
  for (const route of routes) {
    const url = `https://miravelys.com${language.code === 'en' ? route : route === '/' ? `/${language.code}` : `/${language.code}${route}`}`;
    const includedInSitemap = sitemap.includes(`<loc>${url}</loc>`);
    if (includedInSitemap === isNoIndexFallback(language.code, route)) {
      throw new Error(`sitemap indexing contract is incorrect for ${language.code}${route}`);
    }
  }
}

const legacyLoader = await readFile(join(root, 'src', 'config', 'mockupScreens.js'), 'utf8');
if (legacyLoader.includes('import.meta.glob')) {
  throw new Error('legacy mockup import glob is still in the production graph');
}

const heroAsset = await stat(join(deployedAssets, 'en', 'overview-780.avif'));
if (heroAsset.size > 300_000) {
  throw new Error(`hero AVIF exceeds the 300 KB delivery budget (${heroAsset.size} bytes)`);
}

const notFound = await readFile(join(dist, '404.html'), 'utf8');
if (!notFound.includes('<title>404 — Miravelys</title>') || !notFound.includes('name="robots" content="noindex,follow"')) {
  throw new Error('branded static 404 contract is missing');
}

const mirascribeRoutes = [
  '/mirascribe',
  '/mirascribe/privacy',
  '/mirascribe/support',
  '/mirascribe/legal',
  '/mirascribe/acknowledgements',
];
for (const route of mirascribeRoutes) {
  const page = join(dist, route.slice(1), 'index.html');
  await mustExist(page, `MiraScribe static route ${route}`);
  const html = await readFile(page, 'utf8');
  if (!html.includes(`<link rel="canonical" href="https://miravelys.com${route}">`)) {
    throw new Error(`MiraScribe canonical metadata is missing for ${route}`);
  }
}

const mirascribePublicSources = await Promise.all([
  'MiraScribePage.jsx',
  'MiraScribePrivacyPage.jsx',
  'MiraScribeSupportPage.jsx',
  'MiraScribeLegalPage.jsx',
  'MiraScribeAcknowledgementsPage.jsx',
].map(file => readFile(join(root, 'src', 'pages', 'mirascribe', file), 'utf8')));
const mirascribePublicText = mirascribePublicSources.join('\n');

for (const required of [
  'Private transcription for Mac + iPhone',
  'This Privacy Policy applies to MiraScribe for supported Mac and iPhone devices.',
  'Help for MiraScribe on Mac and iPhone.',
  'Privacy Policy',
  'End User License Agreement',
]) {
  if (!mirascribePublicText.includes(required)) {
    throw new Error(`MiraScribe public/App Store support contract is missing: ${required}`);
  }
}

for (const forbidden of [
  'large-v3-turbo',
  'large-v3-v20240930',
  '216 MB',
  '632 MB',
  'approximately 600 MB',
]) {
  if (mirascribePublicText.includes(forbidden)) {
    throw new Error(`MiraScribe public pages expose retired implementation detail: ${forbidden}`);
  }
}

const vercelConfig = JSON.parse(await readFile(join(root, 'vercel.json'), 'utf8'));
if (vercelConfig.trailingSlash !== false || vercelConfig.cleanUrls !== true || vercelConfig.rewrites) {
  throw new Error('Vercel canonical-routing contract is incomplete');
}
const redirects = new Map(
  (vercelConfig.redirects ?? []).map(redirect => [redirect.source, redirect.destination]),
);
for (const [source, destination] of [
  ['/en', '/'],
  ['/en/:path*', '/:path*'],
  ['/en/origin', '/story'],
  ['/en/privacy-policy', '/privacy'],
  ['/en/user-agreement', '/terms'],
]) {
  if (redirects.get(source) !== destination) {
    throw new Error(`Vercel canonical redirect is missing: ${source} -> ${destination}`);
  }
}

process.stdout.write(`Public contract passed: ${languages.length} locales, ${routes.length} static routes, ${screenshotCodes.length} responsive screen families.\n`);

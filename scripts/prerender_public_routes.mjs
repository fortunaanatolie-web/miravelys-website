import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { languages, resolvePublicSiteCopy } from '../src/i18n/publicSiteCopy.js';
import { resolveFounderStoryCopy } from '../src/i18n/loopStoryCopy.js';
import { resolvePublicFaqCopy } from '../src/i18n/publicFaqCopy.js';
import { resolvePublicLegalDocument } from '../src/i18n/publicLegalCopy.js';
import { resolveHomeMeta } from '../src/lib/publicRouteMeta.js';
import { productPageMeta } from '../src/config/productCapabilities.js';
import {
  absoluteAssetUrl,
  identityIconHeadMarkup,
  resolveAppIdentity,
} from '../src/config/appIdentity.js';

const siteUrl = 'https://miravelys.com';
const distDir = fileURLToPath(new URL('../dist/', import.meta.url));
const publicSiteDir = fileURLToPath(new URL('../public-site/', import.meta.url));

const routes = [
  { path: '/', key: 'home' },
  { path: '/story', key: 'story' },
  { path: '/support', key: 'support' },
  { path: '/faq', key: 'faq' },
  { path: '/legal-notice', key: 'legalNotice' },
  { path: '/terms', key: 'userAgreement' },
  { path: '/privacy', key: 'privacyPolicy' },
  { path: '/cookies', key: 'cookies' },
];

const standaloneRoutes = [
  {
    path: '/products',
    title: 'Products — Miravelys',
    description: 'Thoughtful software built around attention, clarity, privacy, and human agency. The Miravelys family of products.',
    priority: '0.8', frequency: 'monthly',
  },
  {
    path: '/mirascribe',
    title: 'MiraScribe — Private Offline Transcription for Mac',
    description: productPageMeta.mirascribe.description,
    priority: '0.9', frequency: 'weekly',
  },
  {
    path: '/mirascribe/support',
    title: 'MiraScribe Support',
    description: 'Get help with MiraScribe for Mac: transcription, permissions, exports, and local workflows.',
    priority: '0.7', frequency: 'monthly',
  },
  {
    path: '/mirascribe/privacy',
    title: 'MiraScribe Privacy',
    description: 'MiraScribe privacy information for local transcription and files on your Mac.',
    priority: '0.6', frequency: 'yearly',
  },
  {
    path: '/mirascribe/legal',
    title: 'MiraScribe Legal',
    description: 'Legal information for MiraScribe: end user license, copyright, trademark, and disclaimer.',
    priority: '0.4', frequency: 'yearly',
  },
  {
    path: '/mirascribe/acknowledgements',
    title: 'MiraScribe Acknowledgements',
    description: 'Third-party software and model license notices for MiraScribe.',
    priority: '0.4', frequency: 'yearly',
  },
  {
    path: '/miravoxis',
    title: 'MiraVoxis — Local Voice Studio for Mac',
    description: productPageMeta.miravoxis.description,
    priority: '0.9', frequency: 'weekly',
  },
  {
    path: '/miravoxis/support',
    title: 'MiraVoxis Support',
    description: 'Get help with MiraVoxis models, speech generation, transcription, voice selection, and local runtime issues.',
    priority: '0.7', frequency: 'monthly',
  },
  {
    path: '/miravoxis/privacy',
    title: 'MiraVoxis Privacy',
    description: 'MiraVoxis privacy information for local voice generation, transcription, model downloads, projects, and reference audio.',
    priority: '0.6', frequency: 'yearly',
  },
];

function localizedPath(lang, path) {
  if (lang === 'en') return path;
  return path === '/' ? `/${lang}` : `/${lang}${path}`;
}

function urlFor(path) {
  return new URL(path, siteUrl).toString();
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function getPageMeta(lang, route) {
  const site = resolvePublicSiteCopy(lang);
  if (route.key === 'home') return resolveHomeMeta(lang);
  if (route.key === 'story') {
    const story = resolveFounderStoryCopy(lang);
    return { title: `${story.eyebrow} — Miravelys`, description: story.intro, noIndex: Boolean(story.languageFallback) };
  }
  if (route.key === 'faq') {
    const faq = resolvePublicFaqCopy(lang);
    return { title: `${faq.title} — Miravelys`, description: faq.title };
  }
  if (route.key === 'support') {
    return { title: `${site.nav.support} — Miravelys`, description: site.footer.line };
  }
  const legal = resolvePublicLegalDocument(lang, route.key);
  return {
    title: `${legal?.title ?? 'Miravelys'} — Miravelys`,
    description: legal?.intro ?? site.footer.line,
    noIndex: Boolean(legal?.languageFallback),
  };
}

function getIndexableLanguages(route) {
  return languages.filter(language => !getPageMeta(language.code, route).noIndex);
}

function socialHead(identity, canonical, title, description) {
  const image = absoluteAssetUrl(identity.assets.ogImage, siteUrl);
  return [
    '<meta property="og:type" content="website">',
    `<meta property="og:site_name" content="${escapeHtml(identity.siteName)}">`,
    `<meta property="og:url" content="${canonical}">`,
    `<meta property="og:title" content="${escapeHtml(title)}">`,
    `<meta property="og:description" content="${escapeHtml(description)}">`,
    `<meta property="og:image" content="${image}">`,
    `<meta property="og:image:alt" content="${escapeHtml(identity.ogImageAlt)}">`,
    '<meta name="twitter:card" content="summary_large_image">',
    `<meta name="twitter:url" content="${canonical}">`,
    `<meta name="twitter:title" content="${escapeHtml(title)}">`,
    `<meta name="twitter:description" content="${escapeHtml(description)}">`,
    `<meta name="twitter:image" content="${image}">`,
    `<meta name="twitter:image:alt" content="${escapeHtml(identity.ogImageAlt)}">`,
  ].join('\n    ');
}

function routeHead(lang, route) {
  const path = localizedPath(lang, route.path);
  const canonical = urlFor(path);
  const meta = getPageMeta(lang, route);
  const identity = resolveAppIdentity(path);
  const alternates = getIndexableLanguages(route)
    .map(language => `<link rel="alternate" hreflang="${language.code}" href="${urlFor(localizedPath(language.code, route.path))}" data-miravelys-alternate>`)
    .join('\n    ');

  return [
    `<title>${escapeHtml(meta.title)}</title>`,
    `<meta name="description" content="${escapeHtml(meta.description)}">`,
    meta.noIndex ? '<meta name="robots" content="noindex,follow">' : '',
    `<link rel="canonical" href="${canonical}">`,
    alternates,
    `<link rel="alternate" hreflang="x-default" href="${urlFor(route.path)}" data-miravelys-alternate>`,
    socialHead(identity, canonical, meta.title, meta.description),
    identityIconHeadMarkup(identity),
  ].filter(Boolean).join('\n    ');
}

function standaloneHead(route) {
  const canonical = urlFor(route.path);
  const identity = resolveAppIdentity(route.path);
  return [
    `<title>${escapeHtml(route.title)}</title>`,
    `<meta name="description" content="${escapeHtml(route.description)}">`,
    `<link rel="canonical" href="${canonical}">`,
    socialHead(identity, canonical, route.title, route.description),
    identityIconHeadMarkup(identity),
  ].join('\n    ');
}

function noScriptMarkup(lang, title, description, actionLabel) {
  const site = resolvePublicSiteCopy(lang);
  const supportPath = localizedPath(lang, '/support');
  const privacyPath = localizedPath(lang, '/privacy');
  return `<noscript>
      <style>
        .miravelys-noscript { box-sizing: border-box; min-height: 100vh; padding: 12vh max(24px, 8vw); color: #f2efe9; background: #061818; font: 17px/1.6 -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
        .miravelys-noscript * { box-sizing: border-box; }
        .miravelys-noscript p { max-width: 42rem; margin: 0 0 1.25rem; }
        .miravelys-noscript h1 { max-width: 15ch; margin: 0 0 1.25rem; font: 500 clamp(3rem, 8vw, 5.5rem)/.95 Georgia, serif; letter-spacing: -.045em; }
        .miravelys-noscript a { display: inline-block; margin: .5rem 1rem .5rem 0; color: #061818; background: #42e0d4; border-radius: 999px; padding: .7rem 1rem; font-weight: 700; text-decoration: none; }
        .miravelys-noscript a + a { color: #f2efe9; background: transparent; border: 1px solid rgba(242, 239, 233, .42); }
      </style>
      <main class="miravelys-noscript">
        <p>Miravelys</p>
        <h1>${escapeHtml(title)}</h1>
        <p>${escapeHtml(description)}</p>
        <a href="${actionLabel?.href ?? supportPath}">${escapeHtml(actionLabel?.label ?? site.nav.support)}</a>
        <a href="${privacyPath}">${escapeHtml(site.footer.privacyPolicy)}</a>
      </main>
    </noscript>`;
}

function stripManagedHead(template) {
  return template
    .replace(/<title>[\s\S]*?<\/title>\s*/i, '')
    .replace(/\s*<meta\s+(?:name|property)="(?:description|robots|theme-color|twitter:[^"]+|og:[^"]+)"[^>]*>/gi, '')
    .replace(/\s*<link\s+rel="(?:canonical|alternate|icon|shortcut icon|apple-touch-icon|manifest)"[^>]*>/gi, '');
}

function withHead(template, lang, path, head, title, description, actionLabel) {
  return stripManagedHead(template)
    .replace('<html lang="en">', `<html lang="${lang}">`)
    .replace('</head>', `    ${head}\n  </head>`)
    .replace(/<noscript>[\s\S]*?<\/noscript>/i, noScriptMarkup(lang, title, description, actionLabel))
    .replace('data-prerender-path=""', `data-prerender-path="${path}"`);
}

function withNotFoundHead(template) {
  const title = '404 — Miravelys';
  const description = 'The requested Miravelys page could not be found.';
  const identity = resolveAppIdentity('/');
  const head = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}">`,
    '<meta name="robots" content="noindex,follow">',
    identityIconHeadMarkup(identity),
  ].join('\n    ');
  return withHead(template, 'en', '/404', head, title, description, { href: '/', label: 'Back to Miravelys' });
}

function outputFile(path) {
  if (path === '/') return join(distDir, 'index.html');
  return join(distDir, path.replace(/^\//, ''), 'index.html');
}

function sitemapXml() {
  const localizedEntries = languages.flatMap(language => routes
    .filter(route => !getPageMeta(language.code, route).noIndex)
    .map(route => {
      const path = localizedPath(language.code, route.path);
      const priority = route.key === 'home' ? '1.0' : route.key === 'story' ? '0.8' : '0.5';
      const frequency = route.key === 'home' ? 'weekly' : route.key === 'story' || route.key === 'faq' ? 'monthly' : 'yearly';
      return `  <url>\n    <loc>${urlFor(path)}</loc>\n    <changefreq>${frequency}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    }));

  const standaloneEntries = standaloneRoutes.map(route =>
    `  <url>\n    <loc>${urlFor(route.path)}</loc>\n    <changefreq>${route.frequency}</changefreq>\n    <priority>${route.priority}</priority>\n  </url>`,
  );

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...localizedEntries, ...standaloneEntries].join('\n')}\n</urlset>\n`;
}

const template = await readFile(join(distDir, 'index.html'), 'utf8');

for (const language of languages) {
  for (const route of routes) {
    const path = localizedPath(language.code, route.path);
    const output = outputFile(path);
    const meta = getPageMeta(language.code, route);
    await mkdir(dirname(output), { recursive: true });
    await writeFile(output, withHead(template, language.code, path, routeHead(language.code, route), meta.title, meta.description));
  }
}

for (const route of standaloneRoutes) {
  const output = outputFile(route.path);
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, withHead(template, 'en', route.path, standaloneHead(route), route.title, route.description, { href: route.path, label: route.title }));
}

await writeFile(join(distDir, 'sitemap.xml'), sitemapXml());
await writeFile(join(publicSiteDir, 'sitemap.xml'), sitemapXml());
await writeFile(join(distDir, '404.html'), withNotFoundHead(template));

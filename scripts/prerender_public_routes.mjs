import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { languages, resolvePublicSiteCopy } from '../src/i18n/publicSiteCopy.js';
import { resolveFounderStoryCopy } from '../src/i18n/loopStoryCopy.js';
import { resolvePublicFaqCopy } from '../src/i18n/publicFaqCopy.js';
import { resolvePublicLegalDocument } from '../src/i18n/publicLegalCopy.js';
import { resolveHomeMeta } from '../src/lib/publicRouteMeta.js';

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

  if (route.key === 'home') {
    return resolveHomeMeta(lang);
  }

  if (route.key === 'story') {
    const story = resolveFounderStoryCopy(lang);
    return {
      title: `${story.eyebrow} — Miravelys`,
      description: story.intro,
      noIndex: Boolean(story.languageFallback),
    };
  }

  if (route.key === 'faq') {
    const faq = resolvePublicFaqCopy(lang);
    return { title: `${faq.title} — Miravelys`, description: faq.title };
  }

  if (route.key === 'support') {
    return {
      title: `${site.nav.support} — Miravelys`,
      description: site.footer.line,
    };
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

function routeHead(lang, route) {
  const path = localizedPath(lang, route.path);
  const canonical = urlFor(path);
  const { title, description, noIndex } = getPageMeta(lang, route);
  const alternates = getIndexableLanguages(route)
    .map(language => `<link rel="alternate" hreflang="${language.code}" href="${urlFor(localizedPath(language.code, route.path))}" data-miravelys-alternate>`)
    .join('\n    ');

  return [
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeHtml(description)}">`,
    noIndex ? '<meta name="robots" content="noindex,follow">' : '',
    `<link rel="canonical" href="${canonical}">`,
    alternates,
    `<link rel="alternate" hreflang="x-default" href="${urlFor(route.path)}" data-miravelys-alternate>`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="Miravelys">`,
    `<meta property="og:url" content="${canonical}">`,
    `<meta property="og:title" content="${escapeHtml(title)}">`,
    `<meta property="og:description" content="${escapeHtml(description)}">`,
    `<meta property="og:image" content="${siteUrl}/og-miravelys.jpg">`,
    `<meta property="og:image:alt" content="Miravelys — a private place to return to what is true">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:url" content="${canonical}">`,
    `<meta name="twitter:title" content="${escapeHtml(title)}">`,
    `<meta name="twitter:description" content="${escapeHtml(description)}">`,
    `<meta name="twitter:image" content="${siteUrl}/og-miravelys.jpg">`,
    `<meta name="twitter:image:alt" content="Miravelys — a private place to return to what is true">`,
  ].join('\n    ');
}

function noScriptMarkup(lang, title, description, actionLabel) {
  const site = resolvePublicSiteCopy(lang);
  const supportPath = localizedPath(lang, '/support');
  const privacyPath = localizedPath(lang, '/privacy');

  return `<noscript>
      <style>
        .miravelys-noscript { box-sizing: border-box; min-height: 100vh; padding: 12vh max(24px, 8vw); color: #f2efe9; background: radial-gradient(circle at 78% 18%, rgba(66, 224, 212, .16), transparent 34%), #061818; font: 17px/1.6 -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
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


function withRouteHead(template, lang, route) {
  const path = localizedPath(lang, route.path);
  const head = routeHead(lang, route);
  const { title, description } = getPageMeta(lang, route);
  const favicon = '/identities/miravelys/favicon.7dc7e212.ico';
  const faviconType = 'image/x-icon';

  const withoutManagedHead = template
    .replace(/<title>[\s\S]*?<\/title>\s*/i, '')
    .replace(/\s*<meta\s+(?:name|property)="(?:description|twitter:[^"]+|og:[^"]+)"[^>]*>/gi, '')
    .replace(/\s*<link\s+rel="canonical"[^>]*>/gi, '')
    .replace(/\s*<link\s+rel="icon"[^>]*>/gi, '');

  return withoutManagedHead
    .replace('<html lang="en">', `<html lang="${lang}">`)
    .replace('</head>', `    ${head}\n    <link rel="icon" type="${faviconType}" href="${favicon}" />\n  </head>`)
    .replace(/<noscript>[\s\S]*?<\/noscript>/i, noScriptMarkup(lang, title, description))
    .replace('data-prerender-path=""', `data-prerender-path="${path}"`);
}


function withNotFoundHead(template) {
  const title = '404 — Miravelys';
  const description = 'The requested Miravelys page could not be found.';
  const favicon = '/identities/miravelys/favicon.7dc7e212.ico';
  const faviconType = 'image/x-icon';

  const withoutManagedHead = template
    .replace(/<title>[\s\S]*?<\/title>\s*/i, '')
    .replace(/\s*<meta\s+(?:name|property)="(?:description|twitter:[^"]+|og:[^"]+)"[^>]*>/gi, '')
    .replace(/\s*<link\s+rel="canonical"[^>]*>/gi, '')
    .replace(/\s*<link\s+rel="icon"[^>]*>/gi, '');
  const head = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}">`,
    '<meta name="robots" content="noindex,follow">',
    `<link rel="icon" type="${faviconType}" href="${favicon}" />`
  ].join('\n    ');

  return withoutManagedHead
    .replace('</head>', `    ${head}\n  </head>`)
    .replace(
      /<noscript>[\s\S]*?<\/noscript>/i,
      noScriptMarkup('en', title, description, { href: '/', label: 'Back to Miravelys' }),
    );
}

function outputFile(path) {
  if (path === '/') return join(distDir, 'index.html');
  return join(distDir, path.replace(/^\//, ''), 'index.html');
}

const standaloneRoutes = [
  {
    path: '/miravoxis',
    title: 'MiraVoxis — Voice cloning and text-to-speech for Mac',
    description: 'Design voices, clone your own, and synthesize speech locally on your Mac. MiraVoxis is a private, on-device voice studio.',
    priority: '0.9',
    frequency: 'weekly',
  },
  {
    path: '/miravoxis/support',
    title: 'MiraVoxis Support',
    description: 'Get help with MiraVoxis. Contact support or find answers to common questions about voice cloning, synthesis, and more.',
    priority: '0.7',
    frequency: 'monthly',
  },
  {
    path: '/miravoxis/privacy',
    title: 'Privacy Policy — MiraVoxis',
    description: 'MiraVoxis privacy policy. Voice models run locally on your Mac. Audio and transcripts are not uploaded to a remote service.',
    priority: '0.6',
    frequency: 'yearly',
  },

  {
    path: '/products',
    title: 'Products — Miravelys',
    description: 'Thoughtful software built around attention, clarity, privacy, and human agency. The Miravelys family of products.',
    priority: '0.8',
    frequency: 'monthly',
  },
  {
    path: '/mirascribe',
    title: 'MiraScribe — Private transcription for Mac',
    description: 'Turn recordings into clear, editable text — locally on your Mac. MiraScribe uses a bundled speech model so your audio never leaves your machine.',
    priority: '0.9',
    frequency: 'weekly',
  },
  {
    path: '/mirascribe/support',
    title: 'MiraScribe Support',
    description: 'Get help with MiraScribe for Mac. Contact support or find answers to common questions about transcription, permissions, exports, and more.',
    priority: '0.7',
    frequency: 'monthly',
  },
  {
    path: '/mirascribe/privacy',
    title: 'Privacy Policy — MiraScribe',
    description: 'MiraScribe privacy policy. Transcription runs locally on your Mac. Audio and transcripts are not uploaded to a remote service.',
    priority: '0.6',
    frequency: 'yearly',
  },
  {
    path: '/mirascribe/legal',
    title: 'Legal — MiraScribe',
    description: 'Legal information for MiraScribe: end user license, copyright, trademark, and disclaimer.',
    priority: '0.4',
    frequency: 'yearly',
  },
  {
    path: '/mirascribe/acknowledgements',
    title: 'Acknowledgements — MiraScribe',
    description: 'Third-party software and model license notices for MiraScribe.',
    priority: '0.4',
    frequency: 'yearly',
  },
];


function withStandaloneHead(template, route) {
  const canonical = urlFor(route.path);
  let favicon = '/favicon.svg';
  let faviconType = 'image/svg+xml';
  
  if (route.path.startsWith('/mirascribe')) {
    favicon = '/identities/mirascribe/favicon.c650d6bc.ico';
    faviconType = 'image/x-icon';
  } else if (route.path.startsWith('/miravoxis')) {
    favicon = '/identities/miravoxis/favicon.5dd1a702.ico';
    faviconType = 'image/x-icon';
  } else {
    favicon = '/identities/miravelys/favicon.7dc7e212.ico';
    faviconType = 'image/x-icon';
  }

  const head = [
    `<title>${escapeHtml(route.title)}</title>`,
    `<meta name="description" content="${escapeHtml(route.description)}">`,
    `<link rel="canonical" href="${canonical}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="Miravelys">`,
    `<meta property="og:url" content="${canonical}">`,
    `<meta property="og:title" content="${escapeHtml(route.title)}">`,
    `<meta property="og:description" content="${escapeHtml(route.description)}">`,
    `<meta property="og:image" content="${siteUrl}/og-miravelys.jpg">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:url" content="${canonical}">`,
    `<meta name="twitter:title" content="${escapeHtml(route.title)}">`,
    `<meta name="twitter:description" content="${escapeHtml(route.description)}">`,
    `<meta name="twitter:image" content="${siteUrl}/og-miravelys.jpg">`,
    `<link rel="icon" type="${faviconType}" href="${favicon}" />`
  ].join('\n    ');

  const withoutManagedHead = template
    .replace(/<title>[\s\S]*?<\/title>\s*/i, '')
    .replace(/\s*<meta\s+(?:name|property)="(?:description|twitter:[^"]+|og:[^"]+)"[^>]*>/gi, '')
    .replace(/\s*<link\s+rel="canonical"[^>]*>/gi, '')
    .replace(/\s*<link\s+rel="icon"[^>]*>/gi, '');

  return withoutManagedHead
    .replace('<html lang="en">', '<html lang="en">')
    .replace('</head>', `    ${head}\n  </head>`)
    .replace(/<noscript>[\s\S]*?<\/noscript>/i, noScriptMarkup('en', route.title, route.description, { href: route.path, label: route.title }))
    .replace('data-prerender-path=""', `data-prerender-path="${route.path}"`);
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

  const standaloneEntries = standaloneRoutes.map(route => {
    return `  <url>\n    <loc>${urlFor(route.path)}</loc>\n    <changefreq>${route.frequency}</changefreq>\n    <priority>${route.priority}</priority>\n  </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...localizedEntries, ...standaloneEntries].join('\n')}\n</urlset>\n`;
}

const template = await readFile(join(distDir, 'index.html'), 'utf8');

for (const language of languages) {
  for (const route of routes) {
    const path = localizedPath(language.code, route.path);
    const output = outputFile(path);
    await mkdir(dirname(output), { recursive: true });
    await writeFile(output, withRouteHead(template, language.code, route));
  }
}

for (const route of standaloneRoutes) {
  const output = outputFile(route.path);
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, withStandaloneHead(template, route));
}

await writeFile(join(distDir, 'sitemap.xml'), sitemapXml());
await writeFile(join(publicSiteDir, 'sitemap.xml'), sitemapXml());
await writeFile(join(distDir, '404.html'), withNotFoundHead(template));


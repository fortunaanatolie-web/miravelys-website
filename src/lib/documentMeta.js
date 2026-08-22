import { languages } from '../i18n/publicSiteCopy';

const siteUrl = 'https://miravelys.com';
const canonicalRoutePaths = new Set([
  '/',
  '/story',
  '/support',
  '/faq',
  '/legal-notice',
  '/terms',
  '/privacy',
  '/cookies',
  '/products',
  '/mirascribe',
  '/mirascribe/support',
  '/mirascribe/privacy',
  '/mirascribe/legal',
  '/mirascribe/acknowledgements',
]);

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertLink(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function localizedPath(lang, routePath) {
  if (lang === 'en') return routePath;
  return routePath === '/' ? `/${lang}` : `/${lang}${routePath}`;
}

function getPathLanguage(pathname) {
  const firstSegment = pathname.split('/').filter(Boolean)[0];
  return languages.some(language => language.code === firstSegment) ? firstSegment : 'en';
}

function getCanonicalRoutePath(pathname) {
  const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  const segments = normalizedPath.split('/').filter(Boolean);
  const firstSegmentIsLocale = languages.some(language => language.code === segments[0]);
  const routePath = firstSegmentIsLocale
    ? (segments.length > 1 ? `/${segments.slice(1).join('/')}` : '/')
    : normalizedPath;

  return canonicalRoutePaths.has(routePath) ? routePath : null;
}

function getCanonicalPathname(pathname) {
  const routePath = getCanonicalRoutePath(pathname);
  if (routePath) return localizedPath(getPathLanguage(pathname), routePath);
  return pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
}

function updateAlternates(routePath, alternateLanguages) {
  document.head
    .querySelectorAll('link[rel="alternate"][hreflang]')
    .forEach(link => link.remove());

  if (!routePath) return;

  const availableLanguages = new Set(
    alternateLanguages.map(language => typeof language === 'string' ? language : language.code),
  );
  const entries = [
    ...languages.filter(language => availableLanguages.has(language.code)).map(language => ({
      language: language.code,
      href: new URL(localizedPath(language.code, routePath), siteUrl).toString(),
    })),
    { language: 'x-default', href: new URL(routePath, siteUrl).toString() },
  ];

  entries.forEach(({ language, href }) => {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = language;
    link.href = href;
    link.dataset.miravelysAlternate = '';
    document.head.appendChild(link);
  });
}

function updateRobots(noIndex) {
  const existing = document.head.querySelector('meta[name="robots"]');
  if (!noIndex) {
    existing?.remove();
    return;
  }

  const robots = existing ?? document.createElement('meta');
  robots.name = 'robots';
  robots.content = 'noindex,follow';
  robots.dataset.miravelysRobots = '';
  if (!existing) document.head.appendChild(robots);
}

export function setDocumentMeta({
  title,
  description,
  ogTitle,
  ogDescription,
  noIndex = false,
  alternateLanguages = languages,
}) {
  if (title) document.title = title;

  const canonicalUrl = new URL(getCanonicalPathname(window.location.pathname), siteUrl).toString();
  upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonicalUrl });
  upsertMeta('meta[property="og:url"]', {
    property: 'og:url',
    content: canonicalUrl,
  });
  upsertMeta('meta[name="twitter:url"]', {
    name: 'twitter:url',
    content: canonicalUrl,
  });

  if (description) {
    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: description,
    });
  }

  if (ogTitle || title) {
    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: ogTitle || title,
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: ogTitle || title,
    });
  }

  if (ogDescription || description) {
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: ogDescription || description,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: ogDescription || description,
    });
  }

  updateAlternates(getCanonicalRoutePath(window.location.pathname), alternateLanguages);
  updateRobots(noIndex);
}

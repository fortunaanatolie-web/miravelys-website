import { languages } from '../i18n/publicSiteCopy';
import {
  absoluteAssetUrl,
  identityIconLinkDescriptors,
  resolveAppIdentity,
} from '../config/appIdentity';

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
  '/miravoxis',
  '/miravoxis/support',
  '/miravoxis/privacy',
]);

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    if (value != null) element.setAttribute(key, value);
  });
}

function upsertLink(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    if (value != null) element.setAttribute(key, value);
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

function updateAppIdentity(identity, fallbackFavicon) {
  document.head
    .querySelectorAll('link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"], link[rel="manifest"]')
    .forEach(link => link.remove());

  const descriptors = identity?.assets
    ? identityIconLinkDescriptors(identity)
    : [{ rel: 'icon', type: fallbackFavicon?.endsWith('.ico') ? 'image/x-icon' : 'image/png', href: fallbackFavicon }];

  descriptors.filter(descriptor => descriptor.href).forEach(descriptor => {
    const link = document.createElement('link');
    Object.entries(descriptor).forEach(([key, value]) => link.setAttribute(key, value));
    link.dataset.appIdentity = identity?.id ?? 'fallback';
    document.head.appendChild(link);
  });

  if (identity) {
    document.documentElement.dataset.appIdentity = identity.id;
    upsertMeta('meta[name="theme-color"]', {
      name: 'theme-color',
      content: identity.themeColor,
      'data-app-identity': identity.id,
    });
  }
}

export function setDocumentMeta({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  ogImageAlt,
  noIndex = false,
  alternateLanguages = languages,
  favicon,
}) {
  const pathname = window.location.pathname;
  const identity = resolveAppIdentity(pathname);

  if (title) document.title = title;
  updateAppIdentity(identity, favicon);

  const canonicalUrl = new URL(getCanonicalPathname(pathname), siteUrl).toString();
  upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonicalUrl });
  upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
  upsertMeta('meta[name="twitter:url"]', { name: 'twitter:url', content: canonicalUrl });
  upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: identity.siteName });

  if (description) {
    upsertMeta('meta[name="description"]', { name: 'description', content: description });
  }

  const resolvedTitle = ogTitle || title;
  if (resolvedTitle) {
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: resolvedTitle });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: resolvedTitle });
  }

  const resolvedDescription = ogDescription || description;
  if (resolvedDescription) {
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: resolvedDescription });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: resolvedDescription });
  }

  const resolvedImage = ogImage || identity.assets?.ogImage;
  const resolvedImageAlt = ogImageAlt || identity.ogImageAlt;
  if (resolvedImage) {
    const imageUrl = absoluteAssetUrl(resolvedImage, siteUrl);
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: imageUrl });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: imageUrl });
  }
  if (resolvedImageAlt) {
    upsertMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: resolvedImageAlt });
    upsertMeta('meta[name="twitter:image:alt"]', { name: 'twitter:image:alt', content: resolvedImageAlt });
  }
  upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });

  updateAlternates(getCanonicalRoutePath(pathname), alternateLanguages);
  updateRobots(noIndex);
}

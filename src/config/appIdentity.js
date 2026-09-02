/**
 * Canonical product identity registry.
 *
 * Adding a future app:
 * 1. Provide the canonical App Store / macOS icon master in the sibling repo.
 * 2. Register source paths in scripts/generate_app_identity_assets.py.
 * 3. Run `npm run generate:app-identity`.
 * 4. Add an entry below with `routePrefixes` (longest prefix wins).
 *
 * Do not scatter favicon logic across pages. Route ownership lives here.
 */
import { languages } from '../i18n/publicSiteCopy.js';
import { APP_IDENTITY_ASSETS } from './appIdentityAssets.js';

const localeCodes = new Set(languages.map(language => language.code));

export const DEFAULT_APP_ID = 'miravelys';

export const APP_IDENTITY_RECORDS = {
  miravelys: {
    id: 'miravelys',
    name: 'Miravelys',
    siteName: 'Miravelys',
    routePrefixes: [],
    themeColor: '#f7f3ed',
    ogImageAlt: 'Miravelys — a private place to return to what is true',
  },
  mirascribe: {
    id: 'mirascribe',
    name: 'MiraScribe',
    siteName: 'MiraScribe',
    routePrefixes: ['/mirascribe'],
    themeColor: '#0d0f14',
    ogImageAlt: 'MiraScribe — private transcription for Mac',
  },
  miraveris: {
    id: 'miraveris',
    name: 'MiraVeris',
    siteName: 'MiraVeris',
    routePrefixes: ['/miraveris'],
    themeColor: '#1e3a5f',
    ogImageAlt: 'MiraVeris — marketplace verification',
  },
  miravoxis: {
    id: 'miravoxis',
    name: 'MiraVoxis',
    siteName: 'MiraVoxis',
    routePrefixes: ['/miravoxis'],
    themeColor: '#0847bb',
    ogImageAlt: 'MiraVoxis — local transcription and voice generation for Mac',
  },
  // MiraForge: add routePrefixes and generate assets when the canonical icon exists.
  miraforge: {
    id: 'miraforge',
    name: 'MiraForge',
    siteName: 'MiraForge',
    routePrefixes: ['/miraforge'],
    themeColor: '#0d0f14',
    ogImageAlt: 'MiraForge',
  },
};

export function stripLocalePrefix(pathname) {
  const normalized = pathname === '/' ? '/' : pathname.replace(/\/+$/, '') || '/';
  const segments = normalized.split('/').filter(Boolean);
  if (segments[0] && localeCodes.has(segments[0])) {
    return segments.length > 1 ? `/${segments.slice(1).join('/')}` : '/';
  }
  return normalized;
}

function matchRecord(pathname) {
  const routePath = stripLocalePrefix(pathname);
  let best = APP_IDENTITY_RECORDS[DEFAULT_APP_ID];
  let bestLength = -1;

  for (const record of Object.values(APP_IDENTITY_RECORDS)) {
    for (const prefix of record.routePrefixes) {
      if (routePath === prefix || routePath.startsWith(`${prefix}/`)) {
        if (prefix.length > bestLength) {
          best = record;
          bestLength = prefix.length;
        }
      }
    }
  }

  return best;
}

export function hydrateAppIdentity(record) {
  const assets = APP_IDENTITY_ASSETS[record.id] ?? APP_IDENTITY_ASSETS[DEFAULT_APP_ID];
  return { ...record, assets };
}

export function resolveAppIdentity(pathname) {
  return hydrateAppIdentity(matchRecord(pathname));
}

export function identityIconLinkDescriptors(identity) {
  const { assets } = identity;
  const links = [];

  if (assets.faviconSvg) {
    links.push({ rel: 'icon', type: 'image/svg+xml', href: assets.faviconSvg });
  }

  links.push(
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: assets.icon16 },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: assets.icon32 },
    { rel: 'icon', type: 'image/png', sizes: '48x48', href: assets.icon48 },
    { rel: 'shortcut icon', href: assets.faviconIco },
    { rel: 'apple-touch-icon', href: assets.appleTouchIcon, sizes: '180x180' },
    { rel: 'manifest', href: assets.manifest },
  );

  return links;
}

export function absoluteAssetUrl(path, siteUrl = 'https://miravelys.com') {
  if (!path) return path;
  return path.startsWith('http') ? path : `${siteUrl}${path}`;
}

export function identityIconHeadMarkup(identity) {
  const links = identityIconLinkDescriptors(identity)
    .map(link => {
      const attrs = Object.entries(link)
        .map(([key, value]) => (value ? `${key}="${value}"` : ''))
        .filter(Boolean)
        .join(' ');
      return `<link ${attrs} data-app-identity="${identity.id}">`;
    })
    .join('\n    ');

  return `${links}\n    <meta name="theme-color" content="${identity.themeColor}" data-app-identity="${identity.id}">`;
}

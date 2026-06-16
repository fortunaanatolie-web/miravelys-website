/**
 * Localized marketing screen mockups.
 *
 * Reference-grade captures from miravelys-redesign-v5 (see scripts/lib/mockup_screen_profiles.mjs).
 * npm run build:mockups — capture EN, trim, distribute to all language folders.
 */
import { languages } from '../i18n/siteCopy.js';
import { mockupImageDimensions } from './imageAssets.js';

export { mockupImageDimensions };

export const mockupScreens = [
  { id: 'welcome', copyKey: 'welcome', asset: 'screen-welcome' },
  { id: 'today', copyKey: 'home', asset: 'screen-today' },
  { id: 'clear', copyKey: 'clear', asset: 'screen-clear' },
  { id: 'truth', copyKey: 'truth', asset: 'screen-truth' },
  { id: 'calm', copyKey: 'calm', asset: 'screen-calm' },
  { id: 'rest', copyKey: 'sleep', asset: 'screen-rest' },
  { id: 'mirror', copyKey: 'mirror', asset: 'screen-mirror' },
];

const lazyModules = import.meta.glob('../assets/mockups/**/*.png');
const cache = new Map();
const canonicalLang = 'en';

function resolveLangCode(lang) {
  return languages.some(item => item.code === lang) ? lang : canonicalLang;
}

function cacheKey(lang, asset) {
  return `${resolveLangCode(lang)}/${asset}`;
}

/** Cached URL only — empty until loadMockupScreenImage resolves. */
export function resolveMockupScreenImage(lang, asset) {
  return cache.get(cacheKey(lang, asset)) ?? '';
}

export async function loadMockupScreenImage(lang, asset) {
  const key = cacheKey(lang, asset);
  if (cache.has(key)) return cache.get(key);

  const code = resolveLangCode(lang);
  const candidates = [
    `../assets/mockups/${code}/${asset}.png`,
    `../assets/mockups/${canonicalLang}/${asset}.png`,
  ];

  for (const path of candidates) {
    const loader = lazyModules[path];
    if (!loader) continue;
    const mod = await loader();
    const url = mod.default;
    cache.set(key, url);
    return url;
  }

  return '';
}

/** Warm the current language set (7 screens) without loading all 10 languages up front. */
export function preloadMockupLanguage(lang) {
  return Promise.all(mockupScreens.map(screen => loadMockupScreenImage(lang, screen.asset)));
}

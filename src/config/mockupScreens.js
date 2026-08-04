/**
 * Localized marketing screen mockups.
 *
 * The live site uses optimized public assets generated from the source captures.
 * Keeping source captures outside Vite's import graph prevents retired fallback
 * images from turning into dozens of production chunks.
 */
import { languages } from '../i18n/publicSiteCopy.js';
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

const canonicalLang = 'en';
const screenshotCodeByAsset = {
  'screen-welcome': 'welcome',
  'screen-today': 'overview',
  'screen-clear': 'write',
  'screen-truth': 'layers',
  'screen-calm': 'body',
  'screen-rest': 'sounds',
  'screen-mirror': 'patterns',
};

function resolveLangCode(lang) {
  return languages.some(item => item.code === lang) ? lang : canonicalLang;
}

function optimizedPublicPath(lang, asset) {
  const code = screenshotCodeByAsset[asset];
  if (!code) return '';
  return `/miravelys-screenshots/sticky-phone/${resolveLangCode(lang)}/${code}-780.jpg?v=1`;
}

/** Compatibility bridge for retired components; active screens use the shared manifest. */
export function resolveMockupScreenImage(lang, asset) {
  return optimizedPublicPath(lang, asset);
}

export async function loadMockupScreenImage(lang, asset) {
  return optimizedPublicPath(lang, asset);
}

/** Warm the current language set (7 screens) without loading all 10 languages up front. */
export function preloadMockupLanguage(lang) {
  return Promise.all(mockupScreens.map(screen => loadMockupScreenImage(lang, screen.asset)));
}

/**
 * Miravelys website screenshot manifest — single source for all mockup image paths.
 * Upload PNG files to public/miravelys-screenshots/{group}/{locale}/{code}.png
 */
import { languages } from '../i18n/siteCopy.js';
import { productSceneOrder } from '../config/productScenes.js';
import { originBlockOrder } from '../config/originBlocks.js';
import { resolveScreenshotAlt } from '../i18n/screenshotAltCopy.js';
import { loadMockupScreenImage, resolveMockupScreenImage } from '../config/mockupScreens.js';

/** Sticky-phone screenshots are screen-only app captures (1170×2532 @3x, 390×844 logical). */
export const SCREENSHOT_ASSET_MODE = 'screen-only';

/** @typedef {'screen-only' | 'already-framed'} ScreenshotAssetMode */
export const SCREENSHOT_BASE = '/miravelys-screenshots';
export const SCREENSHOT_EXTENSION = 'png';
export const CANONICAL_LOCALE = 'en';

export const supportedLocales = languages.map(language => language.code);

/** @typedef {'sticky-phone'|'hero'|'story-page'|'grounding'|'privacy'|'final-cta'|'secondary'} ScreenshotGroup */

export const screenshotGroups = {
  'sticky-phone': ['overview', 'write', 'layers', 'patterns', 'body', 'sounds', 'welcome'],
  hero: ['main'],
  'story-page': ['writing', 'grounding', 'reflection'],
  grounding: ['breathe', 'meditate', 'sleep', 'align', 'player'],
  privacy: ['privacy', 'settings', 'correction', 'local-first'],
  'final-cta': ['main'],
  secondary: ['contact', 'support', 'privacy-summary', 'early-access'],
};

/** Product scene keys → sticky-phone screenshot codes */
export const stickyPhoneSceneToCode = {
  overview: 'overview',
  writeInside: 'write',
  separateLayers: 'layers',
  patternsOverTime: 'patterns',
  calmFirst: 'body',
  soundsAndSleep: 'sounds',
  privacyControl: 'welcome',
};

/** Legacy v5 PNG assets (src/assets/mockups) — fallback when public PNG is missing */
export const stickyPhoneLegacyAssets = {
  overview: 'screen-today',
  write: 'screen-clear',
  layers: 'screen-truth',
  patterns: 'screen-mirror',
  body: 'screen-calm',
  sounds: 'screen-rest',
  welcome: 'screen-welcome',
};

export const storyPageLegacyAssets = {
  writing: 'screen-clear',
  grounding: 'screen-calm',
  reflection: 'screen-mirror',
};

export const groundingLegacyAssets = {
  breathe: 'screen-calm',
  meditate: 'screen-calm',
  sleep: 'screen-rest',
  align: 'screen-calm',
  player: 'screen-rest',
};

export const privacyLegacyAssets = {
  privacy: 'screen-welcome',
  settings: 'screen-welcome',
  correction: 'screen-welcome',
  'local-first': 'screen-welcome',
};

export const heroLegacyAssets = { main: 'screen-today' };
export const finalCtaLegacyAssets = { main: 'screen-today' };
export const secondaryLegacyAssets = {
  contact: 'screen-welcome',
  support: 'screen-welcome',
  'privacy-summary': 'screen-welcome',
  'early-access': 'screen-today',
};

/** Gallery mockup id → sticky-phone code */
export const mockupIdToStickyCode = {
  today: 'overview',
  clear: 'write',
  truth: 'layers',
  mirror: 'patterns',
  calm: 'body',
  rest: 'sounds',
  welcome: 'welcome',
};

/** Origin story blocks → screenshot group + code */
export const originBlockScreenshotMap = {
  writing: { group: 'story-page', code: 'writing' },
  mirror: { group: 'story-page', code: 'reflection' },
  separation: { group: 'story-page', code: 'reflection' },
  grounding: { group: 'story-page', code: 'grounding' },
  sounds: { group: 'grounding', code: 'player' },
  places: { group: 'hero', code: 'main' },
  finale: { group: 'final-cta', code: 'main' },
};

const legacyByGroup = {
  'sticky-phone': stickyPhoneLegacyAssets,
  hero: heroLegacyAssets,
  'story-page': storyPageLegacyAssets,
  grounding: groundingLegacyAssets,
  privacy: privacyLegacyAssets,
  'final-cta': finalCtaLegacyAssets,
  secondary: secondaryLegacyAssets,
};

export function resolveLocale(locale) {
  return supportedLocales.includes(locale) ? locale : CANONICAL_LOCALE;
}

export function getScreenshotPath(locale, group, code) {
  const safeLocale = resolveLocale(locale);
  return `${SCREENSHOT_BASE}/${group}/${safeLocale}/${code}.${SCREENSHOT_EXTENSION}?v=5`;
}

export function getLegacyAssetForScreenshot(group, code) {
  return legacyByGroup[group]?.[code] ?? null;
}

export function isApprovedScreenshotCode(group, code) {
  return screenshotGroups[group]?.includes(code) ?? false;
}

/**
 * Build a website screenshot descriptor for PhoneMockup and related UI.
 * @returns {{ group: string, code: string, locale: string, publicPath: string, legacyAsset: string|null, alt: string, mockupId?: string }}
 */
export function resolveWebsiteScreenshot({ locale, group, code, mockupId }) {
  const safeLocale = resolveLocale(locale);
  if (!isApprovedScreenshotCode(group, code)) {
    throw new Error(`Unknown screenshot code "${code}" for group "${group}"`);
  }

  return {
    group,
    code,
    locale: safeLocale,
    publicPath: getScreenshotPath(safeLocale, group, code),
    legacyAsset: getLegacyAssetForScreenshot(group, code),
    alt: resolveScreenshotAlt(safeLocale, group, code),
    mockupId,
  };
}

/** Sticky-phone scroll story step */
export function resolveStickyPhoneScreenshot(stepId, locale) {
  const code = stickyPhoneSceneToCode[stepId];
  const config = productSceneOrder.find(scene => scene.key === stepId);
  if (!code) {
    return resolveWebsiteScreenshot({ locale, group: 'sticky-phone', code: 'overview', mockupId: 'today' });
  }
  return resolveWebsiteScreenshot({
    locale,
    group: 'sticky-phone',
    code,
    mockupId: config?.mockupId,
  });
}

export function resolveOriginBlockScreenshot(blockKey, locale) {
  const mapping = originBlockScreenshotMap[blockKey];
  if (!mapping) return null;
  const config = originBlockOrder.find(block => block.key === blockKey);
  return resolveWebsiteScreenshot({
    locale,
    group: mapping.group,
    code: mapping.code,
    mockupId: config?.mockupId,
  });
}

export function resolveMockupGalleryScreenshot(mockupId, locale) {
  const code = mockupIdToStickyCode[mockupId];
  if (!code) return null;
  return resolveWebsiteScreenshot({ locale, group: 'sticky-phone', code, mockupId });
}

export function resolveTrustScreenshot(locale) {
  return resolveWebsiteScreenshot({ locale, group: 'sticky-phone', code: 'welcome', mockupId: 'welcome' });
}

/** Preload sticky-phone public PNGs for a locale (plus legacy fallbacks). */
export function preloadMiravelysScreenshots(locale) {
  const safeLocale = resolveLocale(locale);
  const urls = new Set();

  for (const code of screenshotGroups['sticky-phone']) {
    urls.add(getScreenshotPath(safeLocale, 'sticky-phone', code));
    if (safeLocale !== CANONICAL_LOCALE) {
      urls.add(getScreenshotPath(CANONICAL_LOCALE, 'sticky-phone', code));
    }
  }

  Object.values(stickyPhoneLegacyAssets).forEach(asset => {
    urls.add(resolveMockupScreenImage(safeLocale, asset));
    if (safeLocale !== CANONICAL_LOCALE) {
      urls.add(resolveMockupScreenImage(CANONICAL_LOCALE, asset));
    }
  });

  return Promise.all(
    [...urls].map(
      src =>
        new Promise(resolve => {
          const img = new Image();
          img.onload = () => resolve(src);
          img.onerror = () => resolve(src);
          img.src = src;
        }),
    ),
  );
}

/**
 * Resolve display URL: public PNG path (primary) with legacy PNG loaded async via hook.
 * Sync legacy cache for immediate fallback.
 */
export function resolveLegacyScreenshotUrl(locale, legacyAsset) {
  if (!legacyAsset) return '';
  return resolveMockupScreenImage(locale, legacyAsset);
}

export async function loadLegacyScreenshotUrl(locale, legacyAsset) {
  if (!legacyAsset) return '';
  return loadMockupScreenImage(locale, legacyAsset);
}

/** English public path for production fallback */
export function getEnglishScreenshotPath(group, code) {
  return getScreenshotPath(CANONICAL_LOCALE, group, code);
}

export const websiteScreenshotReferences = [
  ...productSceneOrder.map(scene => ({
    group: 'sticky-phone',
    code: stickyPhoneSceneToCode[scene.key],
    source: `StickyPhoneStory / buildMarketingSteps (${scene.key})`,
  })),
  ...originBlockOrder
    .filter(block => originBlockScreenshotMap[block.key])
    .map(block => ({
      group: originBlockScreenshotMap[block.key].group,
      code: originBlockScreenshotMap[block.key].code,
      source: `OriginStorySection (${block.key})`,
    })),
  { group: 'sticky-phone', code: 'welcome', source: 'TrustSection' },
];

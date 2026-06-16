import { resolveStickyPhoneScreenshot } from './miravelysScreenshots.js';

/**
 * Returns localized screenshot descriptor for a sticky-phone scroll story step.
 * @param {string} stepId - Scene key (e.g. overview, writeInside)
 * @param {string} locale
 */
export function getLocalizedScreen(stepId, locale) {
  const shot = resolveStickyPhoneScreenshot(stepId, locale);
  return {
    mockupId: shot.mockupId ?? 'today',
    asset: shot.legacyAsset,
    group: shot.group,
    code: shot.code,
    publicPath: shot.publicPath,
    legacyAsset: shot.legacyAsset,
    alt: shot.alt,
    src: '',
  };
}

export { resolveStickyPhoneScreenshot } from './miravelysScreenshots.js';

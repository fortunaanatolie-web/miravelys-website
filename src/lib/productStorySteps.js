import { productSceneOrder } from '../config/productScenes';
import { resolvePresentation } from '../i18n/presentationCopy';
import {
  getScreenshotPath,
  resolveStickyPhoneScreenshot,
  stickyPhoneSceneToCode,
} from './miravelysScreenshots.js';

/** @typedef {'overview'|'write'|'layers'|'patterns'|'body'|'sounds'|'privacy'} StickyPhoneScreenshotCode */

/**
 * @typedef {Object} ProductStoryStep
 * @property {string} id
 * @property {string} sectionId
 * @property {string} eyebrow
 * @property {string} title
 * @property {string} body
 * @property {string} [note]
 * @property {string} [shift]
 * @property {StickyPhoneScreenshotCode} screenshotCode
 * @property {string} alt
 * @property {string} mockupId
 * @property {string} mood
 * @property {Array<{label: string, hint?: string}>} [doors]
 * @property {string} [doorsAriaLabel]
 * @property {Object} screen
 */

/**
 * Canonical localized product story steps — single source for all layouts.
 * @param {string} locale
 * @returns {ProductStoryStep[]}
 */
export function buildProductStorySteps(locale) {
  const presentation = resolvePresentation(locale);

  return productSceneOrder.map(config => {
    const scene = presentation.scenes[config.key] ?? {};
    const shot = resolveStickyPhoneScreenshot(config.key, locale);
    const screenshotCode = stickyPhoneSceneToCode[config.key] ?? 'overview';

    return {
      id: config.key,
      sectionId: config.sectionId,
      eyebrow: scene.eyebrow ?? '',
      title: scene.title ?? '',
      body: scene.body ?? '',
      note: scene.shift,
      shift: scene.shift,
      screenshotCode,
      alt: shot.alt,
      mockupId: config.mockupId,
      mood: config.mood ?? config.tone ?? 'default',
      doors: scene.doors,
      doorsAriaLabel: scene.doorsAriaLabel,
      screen: {
        id: config.key,
        group: 'sticky-phone',
        code: screenshotCode,
        locale,
        publicPath: getScreenshotPath(locale, 'sticky-phone', screenshotCode),
        legacyAsset: shot.legacyAsset,
        alt: shot.alt,
      },
    };
  });
}

/**
 * Phone mockup screen stack for sticky layouts (desktop + landscape).
 * @param {ProductStoryStep[]} steps
 * @param {string} locale
 */
export function stepsToPhoneScreens(steps, locale) {
  return steps.map(step => ({
    id: step.id,
    group: 'sticky-phone',
    code: step.screenshotCode,
    lang: locale,
    locale,
    publicPath: getScreenshotPath(locale, 'sticky-phone', step.screenshotCode),
    legacyAsset: step.screen?.legacyAsset ?? null,
    alt: step.alt,
  }));
}

/** @deprecated Use buildProductStorySteps */
export const buildMarketingSteps = buildProductStorySteps;

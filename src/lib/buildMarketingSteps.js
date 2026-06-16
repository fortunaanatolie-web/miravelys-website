import { productSceneOrder } from '../config/productScenes';
import { resolvePresentation } from '../i18n/presentationCopy';
import { getLocalizedScreen } from './getLocalizedScreen';

/**
 * @typedef {Object} MarketingStepScreen
 * @property {string} asset
 * @property {string} src
 * @property {string} alt
 * @property {string} mockupId
 *
 * @typedef {Object} MarketingStep
 * @property {string} id
 * @property {string} sectionId
 * @property {string} eyebrow
 * @property {string} title
 * @property {string} body
 * @property {string} [shift]
 * @property {Array<{label: string, hint?: string}>} [doors]
 * @property {string} [doorsAriaLabel]
 * @property {string} mockupId
 * @property {string} mood
 * @property {MarketingStepScreen} screen
 */

/**
 * Builds the localized marketing scroll story steps for the active locale.
 * Text comes from presentationCopy; screenshots from localized mockup assets.
 *
 * @param {string} lang
 * @returns {MarketingStep[]}
 */
export function buildMarketingSteps(lang) {
  const presentation = resolvePresentation(lang);

  return productSceneOrder.map(config => {
    const scene = presentation.scenes[config.key] ?? {};
    const screen = getLocalizedScreen(config.key, lang);

    return {
      id: config.key,
      sectionId: config.sectionId,
      eyebrow: scene.eyebrow ?? '',
      title: scene.title ?? '',
      body: scene.body ?? '',
      shift: scene.shift,
      doors: scene.doors,
      doorsAriaLabel: scene.doorsAriaLabel,
      mockupId: config.mockupId,
      mood: config.mood ?? config.tone ?? 'default',
      screen,
    };
  });
}

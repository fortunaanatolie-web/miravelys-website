import { screenshotAltDefaults } from './screenshotAltDefaults.js';
import { screenshotAltTranslations } from './screenshotAltTranslations.js';

const CANONICAL_LOCALE = 'en';

const GROUP_KEY_MAP = {
  'sticky-phone': 'stickyPhone',
  hero: 'hero',
  'story-page': 'storyPage',
  grounding: 'grounding',
  privacy: 'privacy',
  'final-cta': 'finalCta',
  secondary: 'secondary',
};

function deepGet(obj, path) {
  return path.reduce((acc, key) => (acc && acc[key] != null ? acc[key] : undefined), obj);
}

export function resolveScreenshotAlt(locale, group, code) {
  const groupKey = GROUP_KEY_MAP[group];
  if (!groupKey) return `Miravelys ${code}`;

  const path = [groupKey, code];
  const localized = deepGet(screenshotAltTranslations[locale], path);
  if (localized) return localized;

  const english = deepGet(screenshotAltDefaults, path);
  if (english) return english;

  if (locale !== CANONICAL_LOCALE) {
    return resolveScreenshotAlt(CANONICAL_LOCALE, group, code);
  }

  return `Miravelys ${code}`;
}

export function screenshotAltKey(group, code) {
  const groupKey = GROUP_KEY_MAP[group];
  return groupKey ? `screenshots.${groupKey}.${code}.alt` : null;
}

import { mockupDefaults } from './mockupDefaults.js';
import { mockupPresentationCaptions } from './mockupPresentationCaptions.js';
import { mockupTranslations } from './mockupTranslations.js';

function deepMerge(base, patch) {
  if (!patch) return structuredClone(base);
  const out = structuredClone(base);
  for (const [key, value] of Object.entries(patch)) {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      out[key] = deepMerge(out[key] || {}, value);
    } else {
      out[key] = value;
    }
  }
  return out;
}

export function resolveMockup(lang) {
  const code = lang || 'en';
  const translated = deepMerge(mockupDefaults, mockupTranslations[code] ?? mockupTranslations.en ?? {});
  return deepMerge(translated, mockupPresentationCaptions[code] ?? {});
}

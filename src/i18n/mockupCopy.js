// Resolved mockup UI copy for all site languages (defaults + translations).
import { languages } from './siteCopy.js';
import { resolveMockup } from './mockupResolver.js';

export const mockupCopy = Object.fromEntries(
  languages.map(language => [language.code, resolveMockup(language.code)]),
);

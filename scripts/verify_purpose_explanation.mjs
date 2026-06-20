/** Verifies the purpose explanation is now integrated into the scrollytelling flow. */
import { languages } from '../src/i18n/siteCopy.js';
import { presentationCopy } from '../src/i18n/presentationCopy.js';
import { productSceneOrder } from '../src/config/productScenes.js';
import fs from 'node:fs';

const errors = [];
const assert = (condition, message) => { if (!condition) errors.push(message); };
const required = ['overview','writeInside','separateLayers','patternsOverTime','calmFirst','soundsAndSleep','privacyControl'];
const sceneKeys = productSceneOrder.map(scene => scene.key);

assert(JSON.stringify(sceneKeys) === JSON.stringify(required), 'Product scene order must match the requested marketing journey');

for (const language of languages) {
  const code = language.code;
  const copy = presentationCopy[code];
  assert(copy?.journey?.progressAria, `Missing journey aria in ${code}`);
  for (const key of required) {
    const scene = copy?.scenes?.[key];
    assert(scene?.title, `Missing scene ${key} title in ${code}`);
    assert(scene?.body, `Missing scene ${key} body in ${code}`);
    assert(scene?.before && scene?.after && scene?.shift, `Scene ${key} must include before/after/shift in ${code}`);
  }
  assert((copy?.scenes?.calmFirst?.doors ?? []).length === 4, `calmFirst must include four door labels in ${code}`);
}

const app = fs.readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8');
const journey = fs.readFileSync(new URL('../src/components/marketing/sections/ProductStory.jsx', import.meta.url), 'utf8');
const stickyLayout = fs.readFileSync(new URL('../src/components/marketing/sections/StickyStoryLayout.jsx', import.meta.url), 'utf8');
const storyPortrait = fs.readFileSync(new URL('../src/components/marketing/sections/ProductStoryMobilePortrait.jsx', import.meta.url), 'utf8');
const storyLandscape = fs.readFileSync(new URL('../src/components/marketing/sections/ProductStoryMobileLandscape.jsx', import.meta.url), 'utf8');
assert(app.includes('StickyPhoneStory'), 'App must mount StickyPhoneStory');
assert(!app.includes('PurposeExplanationFlow'), 'Legacy purpose flow must not compete with the main scrollytelling page');
assert(journey.includes('ProductStoryDesktop'), 'ProductStory must render desktop sticky layout');
assert(journey.includes('ProductStoryMobilePortrait'), 'ProductStory must render portrait mobile sticky stage');
assert(journey.includes('ProductStoryMobileLandscape'), 'ProductStory must render landscape mobile layout');
assert(stickyLayout.includes('ProductStoryStepContent'), 'Sticky story must render shared step content panels');
assert(stickyLayout.includes('PhoneMockup'), 'Sticky story must use one stable phone mockup');
assert(storyPortrait.includes('mobile-portrait-story__stage'), 'Portrait mobile must reserve a sticky media stage');
assert(storyLandscape.includes('landscape-story'), 'Landscape mobile must use dedicated layout region');

const forbidden = [/diagnos(es|e) the user/i, /therapy replacement/i, /absolute truth/i, /who you truly are/i];
for (const language of languages) {
  const blob = JSON.stringify(presentationCopy[language.code]);
  for (const pattern of forbidden) assert(!pattern.test(blob), `Forbidden claim ${pattern} in presentationCopy ${language.code}`);
}

if (errors.length) {
  console.error('❌ Purpose scrollytelling verification failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}
console.log(`✅ Purpose scrollytelling verified (${languages.length} languages, ${required.length} fixed-phone scenes).`);

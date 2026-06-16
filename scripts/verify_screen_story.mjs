/** Verifies the screen story is now the fixed-phone scrollytelling flow. */
import { languages } from '../src/i18n/siteCopy.js';
import { presentationCopy } from '../src/i18n/presentationCopy.js';
import { productSceneOrder } from '../src/config/productScenes.js';
import fs from 'node:fs';

const errors = [];
const assert = (condition, message) => { if (!condition) errors.push(message); };

const expectedPairs = {
  overview: 'today',
  writeInside: 'clear',
  separateLayers: 'truth',
  patternsOverTime: 'mirror',
  calmFirst: 'calm',
  soundsAndSleep: 'rest',
  privacyControl: 'welcome',
};

for (const scene of productSceneOrder) assert(expectedPairs[scene.key] === scene.mockupId, `${scene.key} must pair with ${expectedPairs[scene.key]} mockup`);

for (const language of languages) {
  const code = language.code;
  const copy = presentationCopy[code];
  for (const scene of productSceneOrder) {
    const item = copy?.scenes?.[scene.key];
    assert(item?.title, `Missing title for ${scene.key} in ${code}`);
    assert(item?.body, `Missing body for ${scene.key} in ${code}`);
    assert(item?.before && item?.after, `Missing before/after for ${scene.key} in ${code}`);
  }
}

const app = fs.readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8');
const journey = fs.readFileSync(new URL('../src/components/marketing/sections/StickyPhoneStory.jsx', import.meta.url), 'utf8');
const frame = fs.readFileSync(new URL('../src/components/marketing/primitives/RevealingDeviceFrame.jsx', import.meta.url), 'utf8');
const phone = fs.readFileSync(new URL('../src/components/marketing/primitives/PhoneMockup.jsx', import.meta.url), 'utf8');
assert(!app.includes('ScreenStorySection'), 'Legacy separate screen story must not be mounted on the main page');
assert(journey.includes('useActiveStep'), 'StickyPhoneStory must use useActiveStep');
assert(journey.includes('activeIndex'), 'Journey must synchronize active text with phone screen');
assert(journey.includes('PhoneMockup'), 'Journey must use one stable PhoneMockup for internal screen crossfade');
assert(phone.includes('phone-mockup__screen-stack--crossfade'), 'Phone must crossfade internal screens');

const forbidden = [/this image shows/i, /mockup near/i, /screenshot showing/i, /phone floating/i, /browser frame/i];
for (const language of languages) {
  const blob = JSON.stringify(presentationCopy[language.code]);
  for (const pattern of forbidden) assert(!pattern.test(blob), `Forbidden meta-copy ${pattern} in presentationCopy ${language.code}`);
}

if (errors.length) {
  console.error('❌ Fixed-phone screen story verification failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}
console.log(`✅ Fixed-phone screen story verified (${languages.length} languages, ${productSceneOrder.length} paired screens).`);

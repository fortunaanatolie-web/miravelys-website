import fs from 'node:fs';
import { languages, siteCopy } from '../src/i18n/siteCopy.js';
import { mockupCopy } from '../src/i18n/mockupCopy.js';
import { presentationCopy } from '../src/i18n/presentationCopy.js';
import { productSceneOrder } from '../src/config/productScenes.js';

const requiredSiteKeys = ['meta','nav','hero','works','download','footer'];
const requiredMockScreens = ['welcome','home','clear','truth','calm','sleep','mirror'];
const mockupAssetNames = ['screen-welcome.png','screen-today.png','screen-clear.png','screen-truth.png','screen-calm.png','screen-rest.png','screen-mirror.png'];
const sceneKeys = productSceneOrder.map(scene => scene.key);

function fail(message) { console.error(`❌ ${message}`); process.exitCode = 1; }

if (languages.length !== 10) fail(`Expected 10 languages, found ${languages.length}.`);

for (const language of languages) {
  const code = language.code;
  const site = siteCopy[code];
  const mock = mockupCopy[code];
  const presentation = presentationCopy[code];
  if (!site) fail(`Missing site copy for ${code}.`);
  if (!mock) fail(`Missing mockup copy for ${code}.`);
  if (!presentation) fail(`Missing presentation copy for ${code}.`);

  for (const key of requiredSiteKeys) if (!site?.[key]) fail(`Missing site section "${key}" in ${code}.`);
  for (const key of ['works','origin','beta','download']) if (!site?.nav?.[key]) fail(`Missing nav key "${key}" in ${code}.`);
  if (!site?.hero?.subtitle || !site?.hero?.body) fail(`Hero copy missing in ${code}.`);
  if (!site?.works?.title || !site?.works?.intro) fail(`Works scrollytelling intro missing in ${code}.`);
  if (!presentation?.journey?.progressAria) fail(`Presentation progress aria missing in ${code}.`);
  for (const key of sceneKeys) {
    const scene = presentation?.scenes?.[key];
    if (!scene?.title || !scene?.body || !scene?.shift) fail(`Missing presentation scene "${key}" in ${code}.`);
  }
  if ((presentation?.scenes?.calmFirst?.doors ?? []).length !== 4) fail(`calmFirst needs four doorway labels in ${code}.`);
  if (!presentation?.finale?.title) fail(`Missing presentation finale copy in ${code}.`);

  for (const screen of requiredMockScreens) if (!mock?.[screen]) fail(`Missing mockup screen "${screen}" in ${code}.`);
  if ((mock?.home?.doors ?? []).length !== 4) fail(`Home mockup needs 4 door labels in ${code}.`);

  for (const file of mockupAssetNames) {
    const assetPath = new URL(`../src/assets/mockups/${code}/${file}`, import.meta.url);
    if (!fs.existsSync(assetPath)) fail(`Missing localized mockup: src/assets/mockups/${code}/${file}`);
  }
}

const app = fs.readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8');
const router = fs.readFileSync(new URL('../src/SiteRouter.jsx', import.meta.url), 'utf8');
const revealJourney = fs.readFileSync(new URL('../src/components/marketing/sections/StickyPhoneStory.jsx', import.meta.url), 'utf8');
const phone = fs.readFileSync(new URL('../src/components/marketing/primitives/PhoneMockup.jsx', import.meta.url), 'utf8');

if (!app.includes('StickyPhoneStory')) fail('Marketing site must use StickyPhoneStory scroll presentation.');
if (app.includes('MockupsSection') || app.includes('ScreenStorySection') || app.includes('OriginStorySection')) fail('Main page still contains legacy competing marketing sections.');
if (!router.includes('path="/story"')) fail('Story route missing.');
if (!revealJourney.includes('PhoneMockup') || !revealJourney.includes('activeIndex={activeIndex}')) fail('Fixed phone flow must use one PhoneMockup synchronized to activeIndex.');
if (!phone.includes('phone-mockup__screen-stack--crossfade')) fail('Phone mockup must crossfade internal screens.');
if (/href="#"\s*[^>]*>/.test(`${app}\n${revealJourney}`)) fail('Found placeholder href="#" CTA.');

const srcBlob = fs.readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8')
  + fs.readFileSync(new URL('../src/i18n/siteCopy.js', import.meta.url), 'utf8')
  + fs.readFileSync(new URL('../src/i18n/mockupCopy.js', import.meta.url), 'utf8')
  + fs.readFileSync(new URL('../src/i18n/presentationCopy.js', import.meta.url), 'utf8');
const legacyPattern = new RegExp(['Auto', 'lysis'].join(''), 'i');
if (legacyPattern.test(srcBlob)) fail('Found legacy product-name reference in website source.');

if (!process.exitCode) console.log(`✅ Miravelys focused website verification passed (${languages.length} languages, ${sceneKeys.length} scroll scenes, ${requiredMockScreens.length} mockup screens).`);

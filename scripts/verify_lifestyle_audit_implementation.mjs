import fs from 'node:fs';
import { languages, siteCopy } from '../src/i18n/siteCopy.js';
import { mockupCopy } from '../src/i18n/mockupCopy.js';
import { marketingCopy } from '../src/i18n/marketingCopy.js';
import { experienceCopy } from '../src/i18n/experienceCopy.js';
import { presentationCopy } from '../src/i18n/presentationCopy.js';

const requiredExperience = ['scenarios', 'proof', 'positioning', 'beta', 'sticky'];
const requiredScenarioItems = 4;
const requiredProofItems = 3;
const requiredPositioningItems = 4;

const errors = [];

function assert(condition, message) {
  if (!condition) errors.push(message);
}

for (const language of languages) {
  const code = language.code;
  assert(siteCopy[code], `${code}: missing site copy`);
  assert(mockupCopy[code], `${code}: missing mockup copy`);
  assert(marketingCopy[code], `${code}: missing marketing copy`);
  assert(experienceCopy[code], `${code}: missing lifestyle audit experience copy`);
  assert(presentationCopy[code]?.scenes?.overview, `${code}: missing presentation overview scene`);
  assert(presentationCopy[code]?.trust?.title, `${code}: missing presentation trust copy`);

  const experience = experienceCopy[code];
  if (!experience) continue;

  for (const key of requiredExperience) {
    assert(experience[key], `${code}: missing experience.${key}`);
  }

  assert(experience.scenarios?.items?.length === requiredScenarioItems, `${code}: scenarios must include ${requiredScenarioItems} items`);
  assert(experience.proof?.items?.length === requiredProofItems, `${code}: proof must include ${requiredProofItems} items`);
  assert(experience.positioning?.items?.length === requiredPositioningItems, `${code}: positioning must include ${requiredPositioningItems} items`);
  assert(Boolean(experience.beta?.placeholder), `${code}: beta placeholder missing`);
  assert(Boolean(experience.sticky?.appStore && experience.sticky?.mockups), `${code}: sticky CTA copy missing`);
}

const responsiveCss = fs.readFileSync(
  new URL('../src/styles/site-responsive.css', import.meta.url),
  'utf8'
);
const mockupCss = fs.readFileSync(
  new URL('../src/styles/mockup-screens.css', import.meta.url),
  'utf8'
);
assert(responsiveCss.includes('repeat(auto-fit'), 'site-responsive.css must use fluid auto-fit grids');
assert(responsiveCss.includes('--page-gutter'), 'site-responsive.css must define fluid page gutters');
assert(mockupCss.includes('repeat(auto-fit'), 'mockup-screens.css must use fluid screen grid');

const fluidCss = fs.readFileSync(
  new URL('../src/styles/site-layout-fluid.css', import.meta.url),
  'utf8'
);
assert(fluidCss.includes('repeat(auto-fit'), 'site-layout-fluid.css must use auto-fit split grids');
assert(fluidCss.includes('--split-col-min'), 'site-layout-fluid.css must define fluid column minimums');

const presentationCss = fs.readFileSync(
  new URL('../src/styles/site-presentation.css', import.meta.url),
  'utf8'
);
assert(presentationCss.includes('.hero-section--keynote'), 'site-presentation.css must define keynote hero');

const phoneMockupCss = fs.readFileSync(
  new URL('../src/styles/site-phone-mockup.css', import.meta.url),
  'utf8'
);
assert(phoneMockupCss.includes('.phone-mockup__device'), 'site-phone-mockup.css must define clean device presentation');
assert(!phoneMockupCss.includes('__notch'), 'phone mockup must not add CSS notch chrome');

const revealCss = fs.readFileSync(
  new URL('../src/styles/site-reveal.css', import.meta.url),
  'utf8'
);
assert(revealCss.includes('.reveal-journey'), 'site-reveal.css must define reveal journey layout');
assert(!revealCss.includes('__shell'), 'site-reveal.css must not define double device shell frames');

const tokensCss = fs.readFileSync(
  new URL('../src/styles/site-tokens.css', import.meta.url),
  'utf8'
);
assert(tokensCss.includes('--mira-midnight'), 'site-tokens.css must define Miravelys premium palette');
assert(tokensCss.includes('--mira-ease-cinematic'), 'site-tokens.css must define motion tokens');

const motionCss = fs.readFileSync(
  new URL('../src/styles/site-motion.css', import.meta.url),
  'utf8'
);
assert(motionCss.includes('prefers-reduced-motion'), 'site-motion.css must support reduced motion');

const breakpointsCss = fs.readFileSync(
  new URL('../src/styles/site-breakpoints.css', import.meta.url),
  'utf8'
);
assert(breakpointsCss.includes('--touch-min'), 'site-breakpoints.css must define touch-friendly targets');
assert(breakpointsCss.includes('text-wrap: balance'), 'site-breakpoints.css must balance headlines for all languages');

if (errors.length) {
  console.error('❌ Lifestyle audit verification failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`✅ Lifestyle audit implementation verified for ${languages.length} languages and the focused fixed-phone presentation system.`);

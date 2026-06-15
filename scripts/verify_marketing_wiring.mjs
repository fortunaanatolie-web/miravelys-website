/**
 * Verifies focused scroll-driven marketing page wiring.
 */
import fs from 'node:fs';
import { languages } from '../src/i18n/siteCopy.js';
import { resolveExperience } from '../src/i18n/experienceCopy.js';
import { marketingCtas, headerNavItems, mobileNavItems } from '../src/config/marketingWiring.js';

const errors = [];
const assert = (condition, message) => { if (!condition) errors.push(message); };

const app = fs.readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8');
const router = fs.readFileSync(new URL('../src/SiteRouter.jsx', import.meta.url), 'utf8');
const topNav = fs.readFileSync(new URL('../src/components/marketing/MarketingTopNav.jsx', import.meta.url), 'utf8');
const stickyCta = fs.readFileSync(new URL('../src/components/marketing/MarketingStickyCta.jsx', import.meta.url), 'utf8');
const hero = fs.readFileSync(new URL('../src/components/marketing/sections/HeroSection.jsx', import.meta.url), 'utf8');
const revealJourney = fs.readFileSync(new URL('../src/components/marketing/sections/ProductRevealJourney.jsx', import.meta.url), 'utf8');
const revealFrame = fs.readFileSync(new URL('../src/components/marketing/primitives/RevealingDeviceFrame.jsx', import.meta.url), 'utf8');
const footer = fs.readFileSync(new URL('../src/components/marketing/MarketingSiteFooter.jsx', import.meta.url), 'utf8');

assert(app.includes('ProductRevealJourney'), 'Main page must mount ProductRevealJourney');
assert(app.includes('StoryTeaserSection'), 'Main page must link tastefully to the story page');
assert(!app.includes('OriginStorySection'), 'Founder story must not overload the main page');
assert(!app.includes('MockupsSection'), 'Main page must not be a separate mockup gallery');
assert(!app.includes('ScreenStorySection'), 'Main page must use one fixed-phone scrollytelling flow instead of separate screen cards');
assert(!app.includes('ProblemBridgeSection'), 'Main page must not be cluttered by legacy marketing blocks');
assert(!app.includes('PurposeExplanationFlow'), 'Purpose explanation must be integrated into the scrollytelling flow');
assert(router.includes('path="/story"') && router.includes('FounderStoryPage'), 'Router must expose /story FounderStoryPage');
assert(revealJourney.includes('id="works"'), 'Scrollytelling flow must expose id="works"');
assert(revealJourney.includes('ProductRevealJourney'), 'Scrollytelling component must exist');
assert(revealJourney.includes('float={false}'), 'Fixed phone must not use floating device motion');
assert(revealJourney.includes('activeIndex={activeIndex}'), 'Phone screen must be synchronized to active scroll step');
assert(revealFrame.includes('screens = useMemo'), 'RevealingDeviceFrame must build one screen stack for crossfade changes');
assert(app.includes('id="beta"') || fs.readFileSync(new URL('../src/components/marketing/sections/BetaSection.jsx', import.meta.url), 'utf8').includes('id="beta"'), 'Beta section must expose id="beta"');
assert(app.includes('DownloadSection'), 'Main page must keep a clear final download CTA');
assert(app.includes('MarketingStickyCta'), 'Sticky CTA must remain wired');
assert(marketingCtas.primary.anchor === 'beta', 'Primary CTA must target #beta');
assert(marketingCtas.secondary.anchor === 'works', 'Secondary CTA must target #works scrollytelling');
assert(marketingCtas.appStore.external === true, 'App Store CTA must use external app-store config/fallback');
assert(hero.includes('role="primary"') && hero.includes('role="secondary"'), 'Hero must expose primary and secondary CTAs');
assert(!hero.includes('RevealingDeviceFrame'), 'Hero must not create a second competing phone mockup');
assert(!stickyCta.includes('APP_STORE_URL'), 'Sticky CTA must not duplicate App Store (download finale only)');
assert(topNav.includes('item.route') && topNav.includes('Link'), 'Top nav must support the /story route');
assert(headerNavItems.length === 3, 'Header must expose exactly 3 navigation choices');
assert(mobileNavItems.some(item => item.route === '/story'), 'Mobile nav must include the story route');
assert(footer.includes('marketingRoutes.story'), 'Footer must link to story route');
assert(footer.includes('marketingRoutes.privacyPolicy'), 'Footer must link to privacy policy route');

for (const language of languages) {
  const experience = resolveExperience(language.code);
  assert(experience.sticky?.earlyAccess, `Missing sticky.earlyAccess CTA in ${language.code}`);
  assert(experience.sticky?.mockups, `Missing sticky.mockups CTA in ${language.code}`);
  assert(experience.sticky?.appStore, `Missing sticky.appStore CTA in ${language.code}`);
}

if (errors.length) {
  console.error('❌ Marketing wiring verification failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`✅ Focused marketing wiring verified (${languages.length} languages, fixed-phone story + /story route).`);

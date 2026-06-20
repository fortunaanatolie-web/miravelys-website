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
const productStory = fs.readFileSync(new URL('../src/components/marketing/sections/ProductStory.jsx', import.meta.url), 'utf8');
const stickyLayout = fs.readFileSync(new URL('../src/components/marketing/sections/StickyStoryLayout.jsx', import.meta.url), 'utf8');
const storyPortrait = fs.readFileSync(new URL('../src/components/marketing/sections/ProductStoryMobilePortrait.jsx', import.meta.url), 'utf8');
const storyLandscape = fs.readFileSync(new URL('../src/components/marketing/sections/ProductStoryMobileLandscape.jsx', import.meta.url), 'utf8');
const portraitCss = fs.readFileSync(new URL('../src/styles/product-story/ProductStoryPortrait.css', import.meta.url), 'utf8');
const landscapeCss = fs.readFileSync(new URL('../src/styles/product-story/ProductStoryLandscape.css', import.meta.url), 'utf8');
const revealFrame = fs.readFileSync(new URL('../src/components/marketing/primitives/RevealingDeviceFrame.jsx', import.meta.url), 'utf8');
const footer = fs.readFileSync(new URL('../src/components/marketing/MarketingSiteFooter.jsx', import.meta.url), 'utf8');

assert(app.includes('StickyPhoneStory'), 'Main page must mount StickyPhoneStory');
assert(app.includes('StoryTeaserSection'), 'Main page must link tastefully to the story page');
assert(!app.includes('OriginStorySection'), 'Founder story must not overload the main page');
assert(!app.includes('MockupsSection'), 'Main page must not be a separate mockup gallery');
assert(!app.includes('ScreenStorySection'), 'Main page must use one fixed-phone scrollytelling flow instead of separate screen cards');
assert(!app.includes('ProblemBridgeSection'), 'Main page must not be cluttered by legacy marketing blocks');
assert(!app.includes('PurposeExplanationFlow'), 'Purpose explanation must be integrated into the scrollytelling flow');
assert(router.includes('path="/story"') && router.includes('FounderStoryPage'), 'Router must expose /story FounderStoryPage');
assert(productStory.includes('id="works"'), 'Scrollytelling flow must expose id="works"');
assert(productStory.includes('marketing-scroll-story'), 'Scrollytelling must use marketing-scroll-story layout');
assert(productStory.includes('product-story__desktop'), 'Product story must split desktop/mobile/landscape via CSS');
assert(productStory.includes('product-story__mobile-portrait'), 'Product story must render portrait mobile sticky stage');
assert(productStory.includes('product-story__landscape'), 'Product story must render landscape mobile layout');
assert(productStory.includes('ProductStoryDesktop'), 'ProductStory must render desktop sticky layout');
assert(productStory.includes('ProductStoryMobilePortrait'), 'ProductStory must render portrait mobile layout');
assert(productStory.includes('ProductStoryMobileLandscape'), 'ProductStory must render landscape mobile layout');
assert(stickyLayout.includes('phone-mockup--scroll-story'), 'Sticky layout phone must use scroll-story variant');
assert(stickyLayout.includes('activeIndex'), 'Sticky layout phone screen must sync to active scroll step');
assert(stickyLayout.includes('stepsToPhoneScreens'), 'Sticky layout must build screens from canonical steps');
assert(storyPortrait.includes('useNearestStep'), 'Portrait mobile must use nearest-step scroll sync');
assert(storyPortrait.includes('mobile-portrait-story__stage'), 'Portrait mobile must use sticky media stage');
assert(storyLandscape.includes('useNearestStep'), 'Landscape mobile must use nearest-step scroll sync');
assert(storyLandscape.includes('landscape-story'), 'Landscape mobile must use dedicated layout region');
assert(portraitCss.includes('mobile-portrait-story__stage'), 'Product story CSS must define portrait sticky stage');
assert(landscapeCss.includes('landscape-story'), 'Product story CSS must define landscape mobile layout');
assert(revealFrame.includes('screens = useMemo'), 'RevealingDeviceFrame must build one screen stack for crossfade changes');
assert(!app.includes('BetaSection'), 'Main page must not include legacy beta section block');
assert(app.includes('DownloadSection'), 'Main page must keep a clear final download CTA');
assert(app.includes('MarketingStickyCta'), 'Sticky CTA must remain wired');
assert(app.includes('EarlyAccessModal'), 'Early access email flow must use EarlyAccessModal');
assert(app.includes('openEarlyAccess'), 'App must wire openEarlyAccess for modal CTAs');
assert(marketingCtas.primary.modal === true, 'Primary CTA must open early-access modal');
assert(marketingCtas.secondary.anchor === 'works', 'Secondary CTA must target #works scrollytelling');
assert(marketingCtas.appStore.external === true, 'App Store CTA must use external app-store config/fallback');
assert(hero.includes('role="primary"'), 'Hero must expose primary early-access CTA');
assert(!hero.includes('beta-form'), 'Hero must not include inline email form');
assert(!stickyCta.includes('APP_STORE_URL'), 'Sticky CTA must not duplicate App Store (download finale only)');
assert(topNav.includes('item.route') && topNav.includes('Link'), 'Top nav must support the /story route');
assert(topNav.includes('hidden={!menuOpen}'), 'Mobile menu panel must use hidden when closed');
assert(headerNavItems.length === 2, 'Header must expose exactly 2 navigation choices');
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

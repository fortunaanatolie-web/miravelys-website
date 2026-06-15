import fs from 'node:fs';

const app = fs.readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8');
const topNav = fs.readFileSync(new URL('../src/components/marketing/MarketingTopNav.jsx', import.meta.url), 'utf8');
const legalPage = fs.readFileSync(new URL('../src/pages/LegalDocumentPage.jsx', import.meta.url), 'utf8');
const cookie = fs.readFileSync(new URL('../src/components/CookieConsent.jsx', import.meta.url), 'utf8');
const gallery = fs.readFileSync(new URL('../src/components/marketing/ScreenMockupGallery.jsx', import.meta.url), 'utf8');

const sectionDir = new URL('../src/components/marketing/sections/', import.meta.url);
const sectionFiles = fs.readdirSync(sectionDir).filter(name => name.endsWith('.jsx'));
const sectionSources = sectionFiles.map(name =>
  fs.readFileSync(new URL(name, sectionDir), 'utf8')
).join('\n');

const primitiveDir = new URL('../src/components/marketing/primitives/', import.meta.url);
const primitiveSources = fs
  .readdirSync(primitiveDir)
  .filter(name => name.endsWith('.jsx'))
  .map(name => fs.readFileSync(new URL(name, primitiveDir), 'utf8'))
  .join('\n');

const marketingBundle = `${app}\n${topNav}\n${legalPage}\n${sectionSources}\n${primitiveSources}`;

const errors = [];

function assert(condition, message) {
  if (!condition) errors.push(message);
}

const requiredHandlers = [
  'onClick={() => setMenuOpen',
  'onClick={event => onNavClick',
  'onSubmit={handleWaitlistSubmit',
  'onClick={() => setLang',
  'subscribeSiteLanguage',
  'keynote-link',
  'keynote-cta',
  'aria-pressed',
  'handleMockupSelect',
  'activeMockupId',
  'ProductRevealJourney',
  'RevealingDeviceFrame',
];

for (const token of requiredHandlers) {
  assert(marketingBundle.includes(token) || cookie.includes(token), `App wiring missing: ${token}`);
}

assert(
  marketingBundle.includes('href={APP_STORE_URL}') || marketingBundle.includes('APP_STORE_URL'),
  'App Store links must use APP_STORE_URL via MarketingCta'
);
assert(marketingBundle.includes('MarketingCta'), 'Marketing CTAs must use centralized MarketingCta component');
assert(legalPage.includes('/privacy-policy'), 'Legal pages must include privacy policy route');
assert(legalPage.includes('privacyPolicy'), 'Legal pages must render privacy policy document');
assert(legalPage.includes('MarketingPageShell'), 'Legal pages must use MarketingPageShell');
assert(legalPage.includes('glass-card'), 'Legal pages must use harbor glass cards');
assert(cookie.includes('onClick={accept}'), 'Cookie accept button must call accept()');
assert(cookie.includes('subscribeSiteLanguage'), 'Cookie banner must follow language changes');
assert(gallery.includes('onSelect?.(screen.id)'), 'Mockup gallery cards must call onSelect');
assert(gallery.includes('mockup-screen-select'), 'Mockup gallery must use selectable screen buttons');
assert(gallery.includes('PhoneMockup'), 'Mockup gallery must use PhoneMockup component');
assert(topNav.includes('headerNavItems'), 'MarketingTopNav must use simplified headerNavItems');
assert(topNav.includes('aria-expanded={menuOpen}'), 'Mobile menu must expose expanded state');
assert(topNav.includes('Escape'), 'Mobile menu must close on Escape');
assert(!/<Link[^>]*>[\s\S]*<button/i.test(app), 'Do not nest buttons inside router links in App.jsx');

const crossBrowserCss = fs.readFileSync(
  new URL('../src/styles/site-cross-browser.css', import.meta.url),
  'utf8'
);
const indexHtml = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
assert(crossBrowserCss.includes('safe-area-inset'), 'Cross-browser CSS must handle safe areas');
assert(crossBrowserCss.includes('min-resolution: 2dppx'), 'Cross-browser CSS must include Retina hairline rules');
assert(crossBrowserCss.includes('-webkit-backdrop-filter'), 'Cross-browser CSS must prefix backdrop-filter for Safari');
assert(indexHtml.includes('viewport-fit=cover'), 'index.html must use viewport-fit=cover for notched devices');
assert(indexHtml.includes('color-scheme'), 'index.html must declare color-scheme for browser chrome');

if (errors.length) {
  console.error('❌ Site interaction verification failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('✅ Site interaction verification passed (navigation, tabs, language, waitlist, cookies).');

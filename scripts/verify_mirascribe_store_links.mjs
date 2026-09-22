import { chromium } from 'playwright';

const baseUrl = process.env.MIRASCRIBE_PREVIEW_URL || 'http://127.0.0.1:4173';
const macUrl = 'https://apps.apple.com/app/id6803891486';
const iphoneUrl = 'https://apps.apple.com/md/app/mirascribe/id6803891486';
const routes = [
  '/mirascribe',
  '/mirascribe/support',
  '/mirascribe/privacy',
  '/mirascribe/legal',
  '/mirascribe/acknowledgements',
  '/products',
];
const deviceProfiles = [
  {
    name: 'mac',
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_6) AppleWebKit/537.36 Chrome/128.0.0.0 Safari/537.36',
    platform: 'MacIntel',
    maxTouchPoints: 0,
    storeUrl: macUrl,
    viewport: { width: 1440, height: 900 },
  },
  {
    name: 'iphone',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 Version/18.0 Mobile/15E148 Safari/604.1',
    platform: 'iPhone',
    maxTouchPoints: 5,
    storeUrl: iphoneUrl,
    viewport: { width: 390, height: 844 },
  },
  {
    name: 'ipad',
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/605.1.15 Version/18.0 Safari/605.1.15',
    platform: 'MacIntel',
    maxTouchPoints: 5,
    storeUrl: iphoneUrl,
    viewport: { width: 1024, height: 768 },
  },
  {
    name: 'android',
    userAgent: 'Mozilla/5.0 (Linux; Android 15; Pixel 9) AppleWebKit/537.36 Chrome/128.0.0.0 Mobile Safari/537.36',
    platform: 'Linux armv8l',
    maxTouchPoints: 5,
    storeUrl: iphoneUrl,
    viewport: { width: 390, height: 844 },
  },
  {
    name: 'windows',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/128.0.0.0 Safari/537.36',
    platform: 'Win32',
    maxTouchPoints: 0,
    storeUrl: iphoneUrl,
    viewport: { width: 1440, height: 900 },
  },
];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const browser = await chromium.launch({ headless: true, channel: 'chrome' });
try {
  for (const profile of deviceProfiles) {
    const context = await browser.newContext({
      viewport: profile.viewport,
      userAgent: profile.userAgent,
      hasTouch: profile.maxTouchPoints > 0,
      locale: 'en-US',
    });
    await context.addInitScript(({ platform, maxTouchPoints }) => {
      Object.defineProperty(navigator, 'platform', { configurable: true, get: () => platform });
      Object.defineProperty(navigator, 'maxTouchPoints', { configurable: true, get: () => maxTouchPoints });
    }, profile);
    const page = await context.newPage();
    page.setDefaultTimeout(10_000);
    page.setDefaultNavigationTimeout(30_000);

    try {
      for (const route of routes) {
        const response = await page.goto(baseUrl + route, { waitUntil: 'domcontentloaded' });
        assert(response?.ok(), profile.name + ' ' + route + ': HTTP ' + response?.status());

        if (route.startsWith('/mirascribe')) {
          await page.locator('.ms-shell').waitFor({ state: 'attached' });
        }

        const storeLinks = page.locator('a[href^="https://apps.apple.com/"]');
        const expectedCount = route === '/mirascribe' ? 2 : route === '/products' ? 1 : 0;
        if (expectedCount > 0) {
          await storeLinks.first().waitFor({ state: 'attached' });
        }

        assert(await page.locator('.ms-store-promo').count() === 0, profile.name + ' ' + route + ': redundant Now on Mac/iPhone strip remains');
        const count = await storeLinks.count();
        assert(count === expectedCount, profile.name + ' ' + route + ': expected ' + expectedCount + ' store links, found ' + count);
        for (const link of await storeLinks.all()) {
          assert(await link.getAttribute('href') === profile.storeUrl, profile.name + ' ' + route + ': wrong App Store destination');
          assert(await link.getAttribute('target') === '_blank', profile.name + ' ' + route + ': external link target missing');
          assert((await link.getAttribute('rel'))?.includes('noopener'), profile.name + ' ' + route + ': noopener missing');
        }

        if (route === '/mirascribe') {
          await page.getByRole('link', { name: 'View in App Store', exact: true }).waitFor({ state: 'visible' });
          await page.getByRole('link', { name: 'Download MiraScribe', exact: true }).waitFor({ state: 'visible' });
          if (profile.name === 'iphone') {
            const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
            assert(!overflow, 'iPhone: page has horizontal overflow');
          }
        }
      }
    } finally {
      await context.close();
    }
  }
} finally {
  await browser.close();
}

console.log(JSON.stringify({
  status: 'PASS',
  routes: routes.length,
  deviceProfiles: deviceProfiles.map(profile => profile.name),
}, null, 2));

import { chromium } from 'playwright';

const baseUrl = process.env.MIRA_PREVIEW_URL || process.env.MIRASCRIBE_PREVIEW_URL || 'http://127.0.0.1:4173';
const routes = ['/', '/mirascribe', '/miravoxis'];
const viewports = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'desktop', width: 1440, height: 1000 },
];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const browser = await chromium.launch({ headless: true });

try {
  for (const viewport of viewports) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      reducedMotion: 'reduce',
    });
    const page = await context.newPage();

    for (const route of routes) {
      const response = await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle', timeout: 30_000 });
      assert(response?.ok(), `${viewport.name} ${route}: HTTP ${response?.status()}`);
      await page.locator('h1').first().waitFor({ state: 'visible' });

      const audit = await page.evaluate(() => {
        const visible = element => {
          const style = getComputedStyle(element);
          const rect = element.getBoundingClientRect();
          return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0;
        };
        const label = element => (
          element.getAttribute('aria-label')
          || element.getAttribute('title')
          || element.textContent
          || ''
        ).trim();

        const ids = [...document.querySelectorAll('[id]')].map(element => element.id).filter(Boolean);
        const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
        const visibleH1 = [...document.querySelectorAll('h1')].filter(visible);
        const unnamedButtons = [...document.querySelectorAll('button,[role="button"]')]
          .filter(visible)
          .filter(element => !label(element))
          .map(element => element.outerHTML.slice(0, 180));
        const unnamedLinks = [...document.querySelectorAll('a[href]')]
          .filter(visible)
          .filter(element => !label(element) && !element.querySelector('img[alt]'))
          .map(element => element.outerHTML.slice(0, 180));
        const imagesWithoutAlt = [...document.querySelectorAll('img')]
          .filter(element => !element.hasAttribute('alt'))
          .map(element => element.getAttribute('src') || '(unknown image)');
        const tinyButtons = [...document.querySelectorAll('button,[role="button"]')]
          .filter(visible)
          .map(element => {
            const rect = element.getBoundingClientRect();
            return { label: label(element), width: rect.width, height: rect.height };
          })
          .filter(item => item.width < 24 || item.height < 24);
        const primaryControls = [...document.querySelectorAll('.keynote-cta,.ms-btn,.mx-btn')]
          .filter(visible)
          .map(element => {
            const rect = element.getBoundingClientRect();
            return { label: label(element), width: rect.width, height: rect.height };
          })
          .filter(item => item.height < 44);

        return {
          lang: document.documentElement.lang,
          mainCount: document.querySelectorAll('main').length,
          visibleH1Count: visibleH1.length,
          duplicateIds,
          unnamedButtons,
          unnamedLinks,
          imagesWithoutAlt,
          tinyButtons,
          primaryControls,
        };
      });

      assert(audit.lang, `${viewport.name} ${route}: html lang is missing`);
      assert(audit.mainCount >= 1, `${viewport.name} ${route}: main landmark is missing`);
      assert(audit.visibleH1Count === 1, `${viewport.name} ${route}: expected one visible h1, got ${audit.visibleH1Count}`);
      assert(audit.duplicateIds.length === 0, `${viewport.name} ${route}: duplicate ids ${audit.duplicateIds.join(', ')}`);
      assert(audit.unnamedButtons.length === 0, `${viewport.name} ${route}: unnamed controls ${audit.unnamedButtons.join(' | ')}`);
      assert(audit.unnamedLinks.length === 0, `${viewport.name} ${route}: unnamed links ${audit.unnamedLinks.join(' | ')}`);
      assert(audit.imagesWithoutAlt.length === 0, `${viewport.name} ${route}: images missing alt attributes ${audit.imagesWithoutAlt.join(', ')}`);
      assert(audit.tinyButtons.length === 0, `${viewport.name} ${route}: control below 24px target floor ${JSON.stringify(audit.tinyButtons)}`);
      assert(audit.primaryControls.length === 0, `${viewport.name} ${route}: primary/secondary control below 44px height ${JSON.stringify(audit.primaryControls)}`);

      await page.keyboard.press('Tab');
      const focus = await page.evaluate(() => {
        const element = document.activeElement;
        if (!element || element === document.body) return { valid: false };
        const style = getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        const visibleIndicator = (
          (style.outlineStyle !== 'none' && Number.parseFloat(style.outlineWidth) > 0)
          || style.boxShadow !== 'none'
          || style.backgroundColor !== 'rgba(0, 0, 0, 0)'
        );
        return {
          valid: true,
          tag: element.tagName,
          label: (element.getAttribute('aria-label') || element.textContent || '').trim().slice(0, 80),
          inViewport: rect.bottom > 0 && rect.top < innerHeight && rect.right > 0 && rect.left < innerWidth,
          visibleIndicator,
        };
      });
      assert(focus.valid && focus.inViewport && focus.visibleIndicator, `${viewport.name} ${route}: first keyboard focus is not visibly surfaced ${JSON.stringify(focus)}`);

      if (route === '/miravoxis') {
        const reducedMotion = await page.locator('.mx-studio-hero__signal i').first().evaluate(element => {
          const style = getComputedStyle(element);
          return { animationName: style.animationName, animationDuration: style.animationDuration };
        });
        assert(reducedMotion.animationName === 'none' || reducedMotion.animationDuration === '0s', `${viewport.name} /miravoxis: reduced motion did not disable hero waveform animation ${JSON.stringify(reducedMotion)}`);
      }
    }

    await context.close();
  }
} finally {
  await browser.close();
}

console.log(JSON.stringify({
  status: 'PASS',
  routes,
  viewports: viewports.map(viewport => viewport.width),
  contract: 'semantic structure + accessible names + keyboard focus + target sizing + reduced motion',
}, null, 2));

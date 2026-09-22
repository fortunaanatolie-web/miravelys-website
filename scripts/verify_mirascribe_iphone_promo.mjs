import { chromium } from 'playwright';

const baseUrl = process.env.MIRASCRIBE_PREVIEW_URL || 'http://127.0.0.1:4173';
const storeTargets = {
  iphone: {
    url: 'https://apps.apple.com/md/app/mirascribe/id6803891486',
  },
  mac: {
    url: 'https://apps.apple.com/app/id6803891486',
  },
};
const routes = [
  '/mirascribe',
  '/mirascribe/support',
  '/mirascribe/privacy',
  '/mirascribe/legal',
  '/mirascribe/acknowledgements',
  '/products',
];
const localizedCopy = {
  en: {
    iphone: {
      region: 'MiraScribe for iPhone',
      title: 'Now on iPhone',
      cta: 'Download on the App Store',
      badgeLead: 'Download on the',
      badgeStore: 'App Store',
    },
    mac: {
      region: 'MiraScribe for Mac',
      title: 'Now on Mac',
      cta: 'Download on the Mac App Store',
      badgeLead: 'Download on the',
      badgeStore: 'Mac App Store',
    },
  },
  ru: {
    iphone: {
      region: 'MiraScribe для iPhone',
      title: 'Теперь и на iPhone',
      cta: 'Скачать в App Store',
      badgeLead: 'Скачать в',
      badgeStore: 'App Store',
    },
    mac: {
      region: 'MiraScribe для Mac',
      title: 'Теперь и на Mac',
      cta: 'Скачать в Mac App Store',
      badgeLead: 'Скачать в',
      badgeStore: 'Mac App Store',
    },
  },
  ro: {
    iphone: {
      region: 'MiraScribe pentru iPhone',
      title: 'Acum și pe iPhone',
      cta: 'Descarcă din App Store',
      badgeLead: 'Descarcă din',
      badgeStore: 'App Store',
    },
    mac: {
      region: 'MiraScribe pentru Mac',
      title: 'Acum și pe Mac',
      cta: 'Descarcă din Mac App Store',
      badgeLead: 'Descarcă din',
      badgeStore: 'Mac App Store',
    },
  },
  fr: {
    iphone: {
      region: 'MiraScribe pour iPhone',
      title: 'Maintenant sur iPhone',
      cta: 'Télécharger dans l’App Store',
      badgeLead: 'Télécharger dans',
      badgeStore: 'l’App Store',
    },
    mac: {
      region: 'MiraScribe pour Mac',
      title: 'Maintenant sur Mac',
      cta: 'Télécharger dans le Mac App Store',
      badgeLead: 'Télécharger dans le',
      badgeStore: 'Mac App Store',
    },
  },
  hi: {
    iphone: {
      region: 'iPhone के लिए MiraScribe',
      title: 'अब iPhone पर भी',
      cta: 'App Store से डाउनलोड करें',
      badgeLead: 'यहाँ से डाउनलोड करें',
      badgeStore: 'App Store',
    },
    mac: {
      region: 'Mac के लिए MiraScribe',
      title: 'अब Mac पर भी',
      cta: 'Mac App Store से डाउनलोड करें',
      badgeLead: 'यहाँ से डाउनलोड करें',
      badgeStore: 'Mac App Store',
    },
  },
  zh: {
    iphone: {
      region: 'iPhone 版 MiraScribe',
      title: '现已登陆 iPhone',
      cta: '前往 App Store 下载',
      badgeLead: '前往下载',
      badgeStore: 'App Store',
    },
    mac: {
      region: 'Mac 版 MiraScribe',
      title: '现已登陆 Mac',
      cta: '前往 Mac App Store 下载',
      badgeLead: '前往下载',
      badgeStore: 'Mac App Store',
    },
  },
  de: {
    iphone: {
      region: 'MiraScribe für iPhone',
      title: 'Jetzt auch auf dem iPhone',
      cta: 'Im App Store laden',
      badgeLead: 'Laden im',
      badgeStore: 'App Store',
    },
    mac: {
      region: 'MiraScribe für Mac',
      title: 'Jetzt auch auf dem Mac',
      cta: 'Im Mac App Store laden',
      badgeLead: 'Laden im',
      badgeStore: 'Mac App Store',
    },
  },
  ja: {
    iphone: {
      region: 'iPhone版MiraScribe',
      title: 'iPhoneでも利用可能に',
      cta: 'App Storeでダウンロード',
      badgeLead: 'ダウンロード',
      badgeStore: 'App Store',
    },
    mac: {
      region: 'Mac版MiraScribe',
      title: 'Macでも利用可能に',
      cta: 'Mac App Storeでダウンロード',
      badgeLead: 'ダウンロード',
      badgeStore: 'Mac App Store',
    },
  },
  es: {
    iphone: {
      region: 'MiraScribe para iPhone',
      title: 'Ahora también en iPhone',
      cta: 'Descargar en el App Store',
      badgeLead: 'Descárgalo en el',
      badgeStore: 'App Store',
    },
    mac: {
      region: 'MiraScribe para Mac',
      title: 'Ahora también en Mac',
      cta: 'Descargar en el Mac App Store',
      badgeLead: 'Descárgalo en el',
      badgeStore: 'Mac App Store',
    },
  },
  pt: {
    iphone: {
      region: 'MiraScribe para iPhone',
      title: 'Agora também no iPhone',
      cta: 'Baixar na App Store',
      badgeLead: 'Baixe na',
      badgeStore: 'App Store',
    },
    mac: {
      region: 'MiraScribe para Mac',
      title: 'Agora também no Mac',
      cta: 'Baixar na Mac App Store',
      badgeLead: 'Baixe na',
      badgeStore: 'Mac App Store',
    },
  },
};

const platformProfiles = {
  iphone: {
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 Version/18.0 Mobile/15E148 Safari/604.1',
    platform: 'iPhone',
    maxTouchPoints: 5,
  },
  ipad: {
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/605.1.15 Version/18.0 Safari/605.1.15',
    platform: 'MacIntel',
    maxTouchPoints: 5,
  },
  android: {
    userAgent: 'Mozilla/5.0 (Linux; Android 15; Pixel 9) AppleWebKit/537.36 Chrome/128.0.0.0 Mobile Safari/537.36',
    platform: 'Linux armv8l',
    maxTouchPoints: 5,
  },
  mac: {
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_6) AppleWebKit/537.36 Chrome/128.0.0.0 Safari/537.36',
    platform: 'MacIntel',
    maxTouchPoints: 0,
  },
  windows: {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/128.0.0.0 Safari/537.36',
    platform: 'Win32',
    maxTouchPoints: 0,
  },
};

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function createContext(browser, profileName, viewport) {
  const profile = platformProfiles[profileName];
  const context = await browser.newContext({
    viewport,
    userAgent: profile.userAgent,
    hasTouch: profile.maxTouchPoints > 0,
  });
  await context.addInitScript(({ platform, maxTouchPoints }) => {
    Object.defineProperty(window.navigator, 'platform', {
      configurable: true,
      get: () => platform,
    });
    Object.defineProperty(window.navigator, 'maxTouchPoints', {
      configurable: true,
      get: () => maxTouchPoints,
    });
  }, profile);
  return context;
}

async function setLanguage(page, language) {
  await page.evaluate(code => {
    window.localStorage.setItem('miravelys.site.language', code);
  }, language);
}

async function assertPromo(page, language, route, targetName) {
  const copy = localizedCopy[language][targetName];
  const target = storeTargets[targetName];
  const promo = page.getByRole('region', { name: copy.region });
  await promo.waitFor({ state: 'visible' });
  await promo.getByText(copy.title, { exact: true }).waitFor({ state: 'visible' });
  await promo.getByText(copy.badgeLead, { exact: true }).waitFor({ state: 'visible' });
  await promo.getByText(copy.badgeStore, { exact: true }).waitFor({ state: 'visible' });

  const icon = promo.locator('img[src*="/identities/mirascribe/icon-192."]');
  await icon.waitFor({ state: 'visible' });
  const iconDecoded = await icon.evaluate(image => image.decode().then(() => true, () => false));
  assert(
    iconDecoded && await icon.evaluate(image => image.naturalWidth > 0),
    `${route} (${language}/${targetName}): MiraScribe app icon did not load`,
  );

  const cta = promo.getByRole('link', { name: copy.cta });
  await cta.waitFor({ state: 'visible' });
  assert(await cta.getAttribute('href') === target.url, `${route} (${language}): wrong ${targetName} App Store URL`);
  assert(await cta.getAttribute('target') === '_blank', `${route} (${language}): App Store link must open externally`);
  assert((await cta.getAttribute('rel'))?.includes('noopener'), `${route} (${language}): App Store link is missing noopener`);
}

async function assertMiraScribeDownloadLinks(page, targetName, route) {
  const expectedUrl = storeTargets[targetName].url;
  if (route === '/mirascribe') {
    for (const label of ['View in App Store', 'Download MiraScribe']) {
      const link = page.getByRole('link', { name: label, exact: true });
      assert(await link.getAttribute('href') === expectedUrl, `${route} (${targetName}): ${label} points to the wrong product or platform`);
    }
  }
  if (route === '/products') {
    const card = page.getByRole('listitem').filter({ has: page.getByRole('heading', { name: 'MiraScribe' }) });
    const link = card.getByRole('link', { name: /App Store/ });
    assert(await link.getAttribute('href') === expectedUrl, `${route} (${targetName}): MiraScribe card points to the wrong product or platform`);
  }
}

async function assertRoutesAndLocales(browser, profileName, targetName, viewport) {
  const context = await createContext(browser, profileName, viewport);
  const page = await context.newPage();
  page.setDefaultTimeout(5_000);

  try {
    await page.goto(`${baseUrl}/mirascribe`, { waitUntil: 'domcontentloaded' });
    await setLanguage(page, 'en');

    for (const route of routes) {
      const response = await page.goto(`${baseUrl}${route}`, { waitUntil: 'domcontentloaded' });
      assert(response?.ok(), `${route}: returned ${response?.status()}`);
      await assertPromo(page, 'en', route, targetName);
      await assertMiraScribeDownloadLinks(page, targetName, route);
    }

    await page.goto(`${baseUrl}/mirascribe/privacy`, { waitUntil: 'domcontentloaded' });
    for (const language of Object.keys(localizedCopy)) {
      await setLanguage(page, language);
      await page.reload({ waitUntil: 'domcontentloaded' });
      await assertPromo(page, language, '/mirascribe/privacy', targetName);
    }

    return page;
  } catch (error) {
    await context.close();
    throw error;
  }
}

const browser = await chromium.launch({
  headless: true,
  channel: 'chrome',
});

try {
  const macPage = await assertRoutesAndLocales(browser, 'mac', 'mac', { width: 1440, height: 900 });
  await macPage.context().close();

  const iphonePage = await assertRoutesAndLocales(browser, 'iphone', 'iphone', { width: 390, height: 844 });
  try {
    await setLanguage(iphonePage, 'ru');
    await iphonePage.goto(`${baseUrl}/mirascribe`, { waitUntil: 'domcontentloaded' });
    await assertPromo(iphonePage, 'ru', '/mirascribe', 'iphone');

    const ctaBox = await iphonePage.getByRole('region', { name: localizedCopy.ru.iphone.region })
      .getByRole('link', { name: localizedCopy.ru.iphone.cta })
      .boundingBox();
    assert(ctaBox && ctaBox.height >= 44, `mobile: App Store CTA is below 44px (${ctaBox?.height ?? 'missing'})`);

    const overflow = await iphonePage.evaluate(() => ({
      viewport: window.innerWidth,
      documentWidth: document.documentElement.scrollWidth,
      bodyWidth: document.body.scrollWidth,
    }));
    assert(
      overflow.documentWidth <= overflow.viewport + 1 && overflow.bodyWidth <= overflow.viewport + 1,
      `mobile: App Store promotion creates horizontal overflow ${JSON.stringify(overflow)}`,
    );
  } finally {
    await iphonePage.context().close();
  }

  for (const [profileName, targetName] of [
    ['ipad', 'iphone'],
    ['android', 'iphone'],
    ['windows', 'iphone'],
  ]) {
    const context = await createContext(browser, profileName, { width: 1024, height: 768 });
    const page = await context.newPage();
    page.setDefaultTimeout(5_000);
    try {
      await page.goto(`${baseUrl}/mirascribe`, { waitUntil: 'domcontentloaded' });
      await setLanguage(page, 'en');
      await page.reload({ waitUntil: 'domcontentloaded' });
      await assertPromo(page, 'en', '/mirascribe', targetName);
      await assertMiraScribeDownloadLinks(page, targetName, '/mirascribe');
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
  locales: Object.keys(localizedCopy).length,
  targets: Object.keys(storeTargets),
  deviceProfiles: Object.keys(platformProfiles),
}, null, 2));

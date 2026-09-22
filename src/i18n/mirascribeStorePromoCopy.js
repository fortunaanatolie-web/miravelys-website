const mirascribeStorePromoCopy = {
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

export function resolveMiraScribeStorePromoCopy(language, target = 'iphone') {
  const localizedCopy = mirascribeStorePromoCopy[language] ?? mirascribeStorePromoCopy.en;
  return localizedCopy[target] ?? localizedCopy.iphone;
}

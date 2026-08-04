/**
 * The small, public-facing language contract.
 *
 * Older copy modules contain experiments and screen-specific text. Keeping this
 * surface separate means navigation, safety wording, and route validation all
 * share the same current product language without loading historical copy.
 */
export const languages = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'ru', label: 'Русский', short: 'RU' },
  { code: 'ro', label: 'Română', short: 'RO' },
  { code: 'fr', label: 'Français', short: 'FR' },
  { code: 'hi', label: 'हिन्दी', short: 'HI' },
  { code: 'zh', label: '简体中文', short: 'ZH' },
  { code: 'de', label: 'Deutsch', short: 'DE' },
  { code: 'ja', label: '日本語', short: 'JA' },
  { code: 'es', label: 'Español', short: 'ES' },
  { code: 'pt', label: 'Português', short: 'PT' },
];

function defineCopy(locale, languageName, nav, footer) {
  return {
    meta: { locale, languageName },
    nav,
    footer,
  };
}

export const publicSiteCopy = {
  en: defineCopy('en', 'English', {
    works: 'How it works', privacy: 'Privacy', origin: 'The story', faq: 'Questions', support: 'Support',
  }, {
    line: 'Miravelys — a quiet place to step out of the loop.',
    safety: 'For personal reflection. It does not replace medical care, therapy, or crisis support.',
    legalNotice: 'Legal notice', userAgreement: 'Terms of use', privacyPolicy: 'Privacy policy', cookies: 'Cookie choices',
    legalNavAria: 'Legal details and support',
  }),
  ru: defineCopy('ru', 'Русский', {
    works: 'Как это работает', privacy: 'Приватность', origin: 'История', faq: 'Вопросы', support: 'Поддержка',
  }, {
    line: 'Miravelys — тихое место, чтобы выйти из привычного круга.',
    safety: 'Для личной рефлексии. Не заменяет медицинскую, психотерапевтическую или кризисную помощь.',
    legalNotice: 'Правовое уведомление', userAgreement: 'Условия использования', privacyPolicy: 'Политика приватности', cookies: 'Настройки cookie',
    legalNavAria: 'Правовая информация и поддержка',
  }),
  ro: defineCopy('ro', 'Română', {
    works: 'Cum funcționează', privacy: 'Confidențialitate', origin: 'Povestea', faq: 'Întrebări', support: 'Asistență',
  }, {
    line: 'Miravelys — un loc liniștit în care poți ieși din cerc.',
    safety: 'Pentru reflecție personală. Nu înlocuiește îngrijirea medicală, terapia sau ajutorul în criză.',
    legalNotice: 'Notă legală', userAgreement: 'Termeni de utilizare', privacyPolicy: 'Politica de confidențialitate', cookies: 'Opțiuni cookie',
    legalNavAria: 'Detalii legale și asistență',
  }),
  fr: defineCopy('fr', 'Français', {
    works: 'Comment cela fonctionne', privacy: 'Confidentialité', origin: 'L’histoire', faq: 'Questions', support: 'Support',
  }, {
    line: 'Miravelys — un endroit calme pour sortir de la boucle.',
    safety: 'Pour la réflexion personnelle. Ne remplace pas les soins médicaux, la thérapie ou l’aide de crise.',
    legalNotice: 'Mentions légales', userAgreement: 'Conditions d’utilisation', privacyPolicy: 'Politique de confidentialité', cookies: 'Choix des cookies',
    legalNavAria: 'Informations légales et support',
  }),
  hi: defineCopy('hi', 'हिन्दी', {
    works: 'यह कैसे काम करता है', privacy: 'गोपनीयता', origin: 'कहानी', faq: 'सवाल', support: 'सहायता',
  }, {
    line: 'Miravelys — चक्र से बाहर आने की एक शांत जगह।',
    safety: 'निजी आत्म-चिंतन के लिए। यह चिकित्सा, थेरेपी या संकट सहायता का विकल्प नहीं है।',
    legalNotice: 'कानूनी सूचना', userAgreement: 'उपयोग की शर्तें', privacyPolicy: 'गोपनीयता नीति', cookies: 'कुकी विकल्प',
    legalNavAria: 'कानूनी जानकारी और सहायता',
  }),
  zh: defineCopy('zh', '简体中文', {
    works: '如何运作', privacy: '隐私', origin: '故事', faq: '问题', support: '支持',
  }, {
    line: 'Miravelys — 一个走出循环的安静空间。',
    safety: '用于个人反思，不替代医疗照护、心理治疗或危机支持。',
    legalNotice: '法律声明', userAgreement: '使用条款', privacyPolicy: '隐私政策', cookies: 'Cookie 设置',
    legalNavAria: '法律信息与支持',
  }),
  de: defineCopy('de', 'Deutsch', {
    works: 'So funktioniert es', privacy: 'Datenschutz', origin: 'Die Geschichte', faq: 'Fragen', support: 'Support',
  }, {
    line: 'Miravelys — ein ruhiger Ort, um aus der Schleife herauszutreten.',
    safety: 'Für persönliche Reflexion. Es ersetzt keine medizinische Versorgung, Therapie oder Krisenhilfe.',
    legalNotice: 'Impressum', userAgreement: 'Nutzungsbedingungen', privacyPolicy: 'Datenschutzrichtlinie', cookies: 'Cookie-Einstellungen',
    legalNavAria: 'Rechtliches und Support',
  }),
  ja: defineCopy('ja', '日本語', {
    works: '仕組み', privacy: 'プライバシー', origin: 'ストーリー', faq: '質問', support: 'サポート',
  }, {
    line: 'Miravelys — ループから一歩抜け出すための静かな場所。',
    safety: '個人の内省のためのものです。医療、心理療法、危機支援の代わりにはなりません。',
    legalNotice: '法的情報', userAgreement: '利用規約', privacyPolicy: 'プライバシーポリシー', cookies: 'Cookie の設定',
    legalNavAria: '法的情報とサポート',
  }),
  es: defineCopy('es', 'Español', {
    works: 'Cómo funciona', privacy: 'Privacidad', origin: 'La historia', faq: 'Preguntas', support: 'Soporte',
  }, {
    line: 'Miravelys — un lugar tranquilo para salir del bucle.',
    safety: 'Para la reflexión personal. No sustituye la atención médica, la terapia ni el apoyo en una crisis.',
    legalNotice: 'Aviso legal', userAgreement: 'Términos de uso', privacyPolicy: 'Política de privacidad', cookies: 'Opciones de cookies',
    legalNavAria: 'Información legal y soporte',
  }),
  pt: defineCopy('pt', 'Português', {
    works: 'Como funciona', privacy: 'Privacidade', origin: 'A história', faq: 'Perguntas', support: 'Suporte',
  }, {
    line: 'Miravelys — um lugar calmo para sair do ciclo.',
    safety: 'Para reflexão pessoal. Não substitui cuidados médicos, terapia ou apoio em crise.',
    legalNotice: 'Aviso legal', userAgreement: 'Termos de utilização', privacyPolicy: 'Política de privacidade', cookies: 'Opções de cookies',
    legalNavAria: 'Informações legais e suporte',
  }),
};

export function resolvePublicSiteCopy(lang) {
  return publicSiteCopy[lang] ?? publicSiteCopy.en;
}

export function isSupportedPublicLanguage(lang) {
  return Boolean(publicSiteCopy[lang]);
}

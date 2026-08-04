// Public legal copy deliberately stays small and product-safe. It describes the
// current local-first model without promising implementation details that may
// change between app releases.

const updatedEn = '4 August 2026';
const updatedRu = '4 августа 2026 г.';

const englishMeta = {
  backToSite: 'Back to Miravelys',
  updatedLabel: 'Last updated',
  governingNote: 'This document is written in plain language. Where a translation is provided, the English text is the reference version unless applicable law requires otherwise.',
};

const russianMeta = {
  backToSite: 'Вернуться к Miravelys',
  updatedLabel: 'Обновлено',
  governingNote: 'Этот документ написан простым языком. Если доступен перевод, английская версия является справочной, если применимое законодательство не требует иного.',
};

const englishDocuments = {
  legalNotice: {
    title: 'Legal notice',
    updated: updatedEn,
    intro: 'This notice explains the scope of Miravelys and the basic boundaries for using its website and app.',
    sections: [
      {
        title: 'Who operates Miravelys',
        paragraphs: [
          'Miravelys is operated by the Miravelys product team. Questions about the website, app, or these documents can be sent to support@miravelys.com.',
        ],
      },
      {
        title: 'What the product is for',
        paragraphs: [
          'Miravelys is a reflective-writing companion. It is designed to help you slow down, separate an event from the story built around it, and notice recurring patterns in your own words.',
        ],
      },
      {
        title: 'Not therapy or emergency support',
        paragraphs: [
          'Miravelys is not therapy, diagnosis, medical or psychiatric care, a crisis line, or an emergency service. It cannot determine another person’s intentions or tell you what is true about your life.',
          'If you may be in immediate danger, are considering harming yourself or someone else, or need urgent support, contact local emergency services or an appropriate crisis resource now.',
        ],
      },
      {
        title: 'Local-first, with an optional choice',
        paragraphs: [
          'Personal reflections are intended to stay on your device by default. Some versions of Miravelys may offer optional cloud or provider assistance. That assistance is used only when you intentionally enable the relevant option; review the in-app notice before choosing it.',
        ],
      },
      {
        title: 'Changes',
        paragraphs: [
          'Miravelys may evolve as the product evolves. Material updates to these public documents will be posted on this website with a revised date.',
        ],
      },
    ],
  },
  userAgreement: {
    title: 'Terms of use',
    updated: updatedEn,
    intro: 'These Terms govern your use of the Miravelys website and app. By using either, you agree to use them within these boundaries.',
    sections: [
      {
        title: 'Reflective support, not professional care',
        paragraphs: [
          'Miravelys is a tool for personal reflection. It is not therapy, diagnosis, medical or psychiatric advice, crisis support, or an emergency service. Do not rely on it in place of qualified care or urgent help.',
          'If you are in immediate danger or need urgent support, contact local emergency services or an appropriate crisis resource.',
        ],
      },
      {
        title: 'Your choices and responsibility',
        paragraphs: [
          'You decide what to write, what to keep, and whether to act on an insight. The app can guide reflection, but it does not verify your interpretation, make decisions for you, or establish facts about another person.',
          'Please use Miravelys lawfully and do not interfere with the website, app, or other people’s access to them.',
        ],
      },
      {
        title: 'Optional cloud or provider assistance',
        paragraphs: [
          'The core experience is local-first. If an optional cloud or provider-assisted feature is available, it is a separate choice that you must intentionally enable. Data needed for that chosen feature may be processed by the relevant provider under the notice shown for that feature.',
        ],
      },
      {
        title: 'Availability and changes',
        paragraphs: [
          'We may update, pause, or retire parts of Miravelys as it develops. If paid features are offered, the price, renewal terms, and cancellation information shown at the point of purchase apply to that purchase.',
        ],
      },
      {
        title: 'Content and ownership',
        paragraphs: [
          'Miravelys and its website content are protected by applicable intellectual-property laws. You remain responsible for the material you choose to enter into the app.',
        ],
      },
      {
        title: 'No guarantee',
        paragraphs: [
          'Miravelys is provided as available. To the extent permitted by law, we do not promise that it will always be uninterrupted, error-free, or suitable for every situation.',
        ],
      },
    ],
  },
  privacyPolicy: {
    title: 'Privacy policy',
    updated: updatedEn,
    intro: 'Privacy in Miravelys starts with a simple boundary: your reflections are intended to remain on your device by default, and optional help should be a deliberate choice.',
    sections: [
      {
        title: 'The local-first default',
        paragraphs: [
          'Miravelys is designed so personal reflections remain on your device by default. This does not mean every possible feature is permanently offline; it means optional sharing or assistance should not be assumed or switched on silently.',
        ],
      },
      {
        title: 'Optional cloud or provider assistance',
        paragraphs: [
          'A version of the app may offer cloud or provider assistance for a specific feature. It is available only when you intentionally enable that feature. Before doing so, read the notice presented in the app so you can understand the choice and any provider involved.',
        ],
      },
      {
        title: 'Website and early-access information',
        paragraphs: [
          'The website stores basic preferences in your browser, such as language and appearance. If you request early access, you may provide an email address. Depending on the website configuration, that request is either prepared in your email app or sent to the configured early-access endpoint.',
          'We use an early-access email to handle that request and, where you asked for them, product updates. The website also keeps a local confirmation so it does not repeatedly ask you to submit the same request on that browser.',
        ],
      },
      {
        title: 'Your browser controls',
        paragraphs: [
          'You can remove website storage through your browser settings. Doing so resets saved website preferences and the local early-access confirmation on that browser. It does not retract an email you already sent or a request already delivered to an endpoint.',
        ],
      },
      {
        title: 'Questions and requests',
        paragraphs: [
          'For privacy questions or a request concerning an email you submitted through the website, contact support@miravelys.com and include the email address used. We will handle requests in line with applicable law.',
        ],
      },
      {
        title: 'A safety boundary',
        paragraphs: [
          'Miravelys is a reflection tool, not therapy, medical care, or crisis support. Do not use it as a substitute for urgent professional or emergency help.',
        ],
      },
    ],
  },
  cookies: {
    title: 'Cookies and browser storage',
    updated: updatedEn,
    intro: 'This page explains the small amount of browser storage used to make the Miravelys website work more smoothly.',
    sections: [
      {
        title: 'What the website remembers',
        paragraphs: [
          'The website may save your language preference and appearance preference in local browser storage. If an early-access request succeeds through a configured endpoint, it also saves a local confirmation associated with the email you entered.',
        ],
      },
      {
        title: 'Why it is used',
        paragraphs: [
          'These items let the website remember your settings and avoid asking you to repeat the same early-access request from the same browser.',
        ],
      },
      {
        title: 'Early-access email',
        paragraphs: [
          'An email address is only requested if you choose to ask for early access. Depending on the website configuration, the request is prepared in your email app or sent to the configured early-access endpoint. See the Privacy policy for more detail.',
        ],
      },
      {
        title: 'Your control',
        paragraphs: [
          'You can clear site data in your browser settings at any time. That removes locally saved settings from that browser; it does not undo a request or email already sent.',
        ],
      },
    ],
  },
};

const russianDocuments = {
  legalNotice: {
    title: 'Правовое уведомление',
    updated: updatedRu,
    intro: 'Это уведомление объясняет границы Miravelys и основные правила использования сайта и приложения.',
    sections: [
      {
        title: 'Кто работает над Miravelys',
        paragraphs: [
          'Miravelys развивает команда продукта Miravelys. Вопросы о сайте, приложении или этих документах можно направить на support@miravelys.com.',
        ],
      },
      {
        title: 'Для чего создан продукт',
        paragraphs: [
          'Miravelys — помощник для рефлексивного письма. Он помогает замедлиться, отделить событие от истории, которую вокруг него строит ум, и заметить повторяющиеся паттерны в собственных словах.',
        ],
      },
      {
        title: 'Не терапия и не экстренная помощь',
        paragraphs: [
          'Miravelys не является терапией, диагнозом, медицинской или психиатрической помощью, кризисной линией или экстренной службой. Он не может определить намерения другого человека и не сообщает абсолютную истину о вашей жизни.',
          'Если вы в непосредственной опасности, думаете о причинении вреда себе или кому-то ещё либо нуждаетесь в срочной помощи, немедленно обратитесь в местные экстренные службы или на подходящую кризисную линию.',
        ],
      },
      {
        title: 'Local-first и отдельный выбор',
        paragraphs: [
          'Личные записи по умолчанию задуманы так, чтобы оставаться на вашем устройстве. В некоторых версиях Miravelys может быть доступна необязательная облачная помощь или помощь провайдера. Она используется только после того, как вы сами включите соответствующую опцию; перед этим прочитайте уведомление в приложении.',
        ],
      },
      {
        title: 'Изменения',
        paragraphs: [
          'Miravelys может меняться вместе с продуктом. Существенные обновления этих публичных документов будут опубликованы на этом сайте с новой датой.',
        ],
      },
    ],
  },
  userAgreement: {
    title: 'Условия использования',
    updated: updatedRu,
    intro: 'Эти Условия регулируют использование сайта и приложения Miravelys. Используя их, вы соглашаетесь соблюдать эти границы.',
    sections: [
      {
        title: 'Рефлексия, а не профессиональная помощь',
        paragraphs: [
          'Miravelys — инструмент для личной рефлексии. Он не является терапией, диагнозом, медицинским или психиатрическим советом, кризисной поддержкой или экстренной службой. Не полагайтесь на него вместо квалифицированной или срочной помощи.',
          'Если вы в непосредственной опасности или нуждаетесь в срочной поддержке, обратитесь в местные экстренные службы или на подходящую кризисную линию.',
        ],
      },
      {
        title: 'Ваш выбор и ответственность',
        paragraphs: [
          'Вы решаете, что писать, что сохранять и как относиться к найденным мыслям. Приложение может направлять рефлексию, но не проверяет вашу интерпретацию, не принимает решения за вас и не устанавливает факты о другом человеке.',
          'Пожалуйста, используйте Miravelys законно и не вмешивайтесь в работу сайта, приложения или доступ других людей к ним.',
        ],
      },
      {
        title: 'Необязательная облачная помощь или помощь провайдера',
        paragraphs: [
          'Основной опыт построен по принципу local-first. Если доступна необязательная облачная функция или функция с помощью провайдера, это отдельный выбор, который вы включаете сами. Данные, необходимые для выбранной функции, могут обрабатываться соответствующим провайдером в соответствии с уведомлением, показанным для этой функции.',
        ],
      },
      {
        title: 'Доступность и изменения',
        paragraphs: [
          'Мы можем обновлять, приостанавливать или завершать отдельные части Miravelys по мере развития продукта. Если будут предложены платные функции, цена, условия продления и отмены, показанные в момент покупки, применяются к этой покупке.',
        ],
      },
      {
        title: 'Контент и права',
        paragraphs: [
          'Miravelys и материалы сайта защищены применимым законодательством об интеллектуальной собственности. Вы несёте ответственность за материалы, которые сами решаете ввести в приложение.',
        ],
      },
      {
        title: 'Без гарантий',
        paragraphs: [
          'Miravelys предоставляется по мере доступности. В пределах, разрешённых законом, мы не гарантируем, что он всегда будет работать без перерывов, ошибок или подходить для любой ситуации.',
        ],
      },
    ],
  },
  privacyPolicy: {
    title: 'Политика конфиденциальности',
    updated: updatedRu,
    intro: 'Приватность в Miravelys начинается с простой границы: ваши записи задуманы так, чтобы по умолчанию оставаться на устройстве, а необязательная помощь должна быть осознанным выбором.',
    sections: [
      {
        title: 'Принцип local-first',
        paragraphs: [
          'Miravelys разработан так, чтобы личные записи по умолчанию оставались на вашем устройстве. Это не означает, что каждая возможная функция навсегда работает офлайн; это означает, что необязательная передача данных или помощь не должны подразумеваться или включаться незаметно.',
        ],
      },
      {
        title: 'Необязательная облачная помощь или помощь провайдера',
        paragraphs: [
          'В одной из версий приложения может быть доступна облачная помощь или помощь провайдера для конкретной функции. Она доступна только после того, как вы сами включите эту функцию. Прежде чем это сделать, прочитайте уведомление в приложении, чтобы понять свой выбор и участие провайдера.',
        ],
      },
      {
        title: 'Данные сайта и ранний доступ',
        paragraphs: [
          'Сайт сохраняет в браузере базовые предпочтения: язык и внешний вид. Если вы запрашиваете ранний доступ, вы можете указать email. В зависимости от настройки сайта запрос либо готовится в вашем почтовом приложении, либо отправляется на настроенный endpoint раннего доступа.',
          'Email для раннего доступа используется, чтобы обработать этот запрос и, если вы этого просили, присылать обновления продукта. Сайт также хранит локальное подтверждение, чтобы не предлагать вам повторно отправлять тот же запрос из того же браузера.',
        ],
      },
      {
        title: 'Управление в браузере',
        paragraphs: [
          'Вы можете удалить данные сайта в настройках браузера. Это сбросит сохранённые предпочтения сайта и локальное подтверждение раннего доступа в этом браузере. Это не отменит уже отправленное письмо или запрос, уже доставленный на endpoint.',
        ],
      },
      {
        title: 'Вопросы и запросы',
        paragraphs: [
          'По вопросам приватности или запросам, связанным с email, который вы отправили через сайт, напишите на support@miravelys.com и укажите использованный адрес. Мы рассмотрим запрос в соответствии с применимым законодательством.',
        ],
      },
      {
        title: 'Граница безопасности',
        paragraphs: [
          'Miravelys — инструмент для рефлексии, а не терапия, медицинская помощь или кризисная поддержка. Не используйте его вместо срочной профессиональной или экстренной помощи.',
        ],
      },
    ],
  },
  cookies: {
    title: 'Cookie и хранение в браузере',
    updated: updatedRu,
    intro: 'Эта страница объясняет небольшое использование хранения в браузере, которое помогает сайту Miravelys работать удобнее.',
    sections: [
      {
        title: 'Что запоминает сайт',
        paragraphs: [
          'Сайт может сохранять в локальном хранилище браузера язык и внешний вид. Если запрос раннего доступа успешно прошёл через настроенный endpoint, он также сохраняет локальное подтверждение, связанное с введённым email.',
        ],
      },
      {
        title: 'Зачем это нужно',
        paragraphs: [
          'Эти данные позволяют сайту запоминать ваши настройки и не просить повторно отправлять одинаковый запрос раннего доступа из того же браузера.',
        ],
      },
      {
        title: 'Email для раннего доступа',
        paragraphs: [
          'Email запрашивается только если вы сами хотите получить ранний доступ. В зависимости от настройки сайта запрос готовится в почтовом приложении или отправляется на настроенный endpoint раннего доступа. Подробнее — в Политике конфиденциальности.',
        ],
      },
      {
        title: 'Ваш контроль',
        paragraphs: [
          'Вы можете очистить данные сайта в настройках браузера в любое время. Это удалит сохранённые настройки с этого браузера, но не отменит уже отправленное письмо или запрос.',
        ],
      },
    ],
  },
};

const publicLegalCopy = {
  en: { meta: englishMeta, documents: englishDocuments },
  ru: { meta: russianMeta, documents: russianDocuments },
};

const supportedLanguages = new Set(Object.keys(publicLegalCopy));

/**
 * Returns the public legal document for the requested website language.
 * English is the intentionally visible fallback for locales without an
 * authored legal translation, rather than inheriting an older unsafe one.
 */
export function resolvePublicLegalDocument(lang, docId) {
  const requestedLanguage = typeof lang === 'string' ? lang : 'en';
  const sourceLanguage = supportedLanguages.has(requestedLanguage) ? requestedLanguage : 'en';
  const source = publicLegalCopy[sourceLanguage];
  const document = source.documents[docId];

  if (!document) return null;

  return {
    ...document,
    meta: source.meta,
    language: sourceLanguage,
    languageFallback: sourceLanguage === requestedLanguage
      ? null
      : 'This legal document is currently available in English. A Russian version is available when you select Русский.',
  };
}

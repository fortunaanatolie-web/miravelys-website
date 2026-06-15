/** Localized header chrome — menu a11y labels and language selector. */

export const headerCopy = {
  en: {
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    menuLabel: 'Main navigation',
    chooseLanguage: 'Choose language',
    homeLabel: 'Miravelys home',
    skipToContent: 'Skip to content',
  },
  ru: {
    openMenu: 'Открыть меню',
    closeMenu: 'Закрыть меню',
    menuLabel: 'Главная навигация',
    chooseLanguage: 'Выбор языка',
    homeLabel: 'Главная Miravelys',
    skipToContent: 'Перейти к содержанию',
  },
  ro: {
    openMenu: 'Deschide meniul',
    closeMenu: 'Închide meniul',
    menuLabel: 'Navigare principală',
    chooseLanguage: 'Alege limba',
    homeLabel: 'Pagina principală Miravelys',
    skipToContent: 'Sari la conținut',
  },
  fr: {
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    menuLabel: 'Navigation principale',
    chooseLanguage: 'Choisir la langue',
    homeLabel: 'Accueil Miravelys',
    skipToContent: 'Aller au contenu',
  },
  hi: {
    openMenu: 'मेनू खोलें',
    closeMenu: 'मेनू बंद करें',
    menuLabel: 'मुख्य नेविगेशन',
    chooseLanguage: 'भाषा चुनें',
    homeLabel: 'Miravelys होम',
    skipToContent: 'सामग्री पर जाएँ',
  },
  zh: {
    openMenu: '打开菜单',
    closeMenu: '关闭菜单',
    menuLabel: '主导航',
    chooseLanguage: '选择语言',
    homeLabel: 'Miravelys 首页',
    skipToContent: '跳到内容',
  },
  de: {
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    menuLabel: 'Hauptnavigation',
    chooseLanguage: 'Sprache wählen',
    homeLabel: 'Miravelys Startseite',
    skipToContent: 'Zum Inhalt springen',
  },
  ja: {
    openMenu: 'メニューを開く',
    closeMenu: 'メニューを閉じる',
    menuLabel: 'メインナビゲーション',
    chooseLanguage: '言語を選択',
    homeLabel: 'Miravelys ホーム',
    skipToContent: 'コンテンツへスキップ',
  },
  es: {
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    menuLabel: 'Navegación principal',
    chooseLanguage: 'Elegir idioma',
    homeLabel: 'Inicio de Miravelys',
    skipToContent: 'Ir al contenido',
  },
  pt: {
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    menuLabel: 'Navegação principal',
    chooseLanguage: 'Escolher idioma',
    homeLabel: 'Início Miravelys',
    skipToContent: 'Ir para o conteúdo',
  },
};

export function resolveHeaderCopy(lang) {
  return headerCopy[lang] ?? headerCopy.en;
}

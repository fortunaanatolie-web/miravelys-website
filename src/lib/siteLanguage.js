import { siteCopy } from '../i18n/siteCopy';

export const SITE_LANGUAGE_KEY = 'miravelys.site.language';
export const SITE_LANGUAGE_EVENT = 'miravelys:language-change';

const fallbackLanguage = 'en';

export function getSiteLanguage() {
  if (typeof window === 'undefined') return fallbackLanguage;
  
  const pathSegments = window.location.pathname.split('/').filter(Boolean);
  const urlLang = pathSegments[0];
  if (urlLang && siteCopy[urlLang]) return urlLang;

  const saved = window.localStorage.getItem(SITE_LANGUAGE_KEY);
  if (saved && siteCopy[saved]) return saved;
  
  const browserLanguage = window.navigator.language?.slice(0, 2);
  return siteCopy[browserLanguage] ? browserLanguage : fallbackLanguage;
}

export function setSiteLanguage(code) {
  if (!siteCopy[code]) return;
  window.localStorage.setItem(SITE_LANGUAGE_KEY, code);
  window.dispatchEvent(new CustomEvent(SITE_LANGUAGE_EVENT, { detail: code }));
}

export function subscribeSiteLanguage(listener) {
  if (typeof window === 'undefined') return () => {};
  const onCustom = event => listener(event.detail);
  const onStorage = event => {
    if (event.key === SITE_LANGUAGE_KEY && event.newValue) {
      listener(event.newValue);
    }
  };
  window.addEventListener(SITE_LANGUAGE_EVENT, onCustom);
  window.addEventListener('storage', onStorage);
  return () => {
    window.removeEventListener(SITE_LANGUAGE_EVENT, onCustom);
    window.removeEventListener('storage', onStorage);
  };
}

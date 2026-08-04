import { isSupportedPublicLanguage } from '../i18n/publicSiteCopy';

export const SITE_LANGUAGE_KEY = 'miravelys.site.language';
export const SITE_LANGUAGE_EVENT = 'miravelys:language-change';

const fallbackLanguage = 'en';

export function getLanguageFromPath(pathname) {
  const urlLang = pathname?.split('/').filter(Boolean)[0];
  return urlLang && isSupportedPublicLanguage(urlLang) ? urlLang : null;
}

export function getSiteLanguage() {
  if (typeof window === 'undefined') return fallbackLanguage;
  
  const pathLanguage = getLanguageFromPath(window.location.pathname);
  if (pathLanguage) return pathLanguage;

  const saved = window.localStorage.getItem(SITE_LANGUAGE_KEY);
  if (saved && isSupportedPublicLanguage(saved)) return saved;
  
  const browserLanguage = window.navigator.language?.slice(0, 2);
  return isSupportedPublicLanguage(browserLanguage) ? browserLanguage : fallbackLanguage;
}

export function setSiteLanguage(code) {
  if (!isSupportedPublicLanguage(code)) return;
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

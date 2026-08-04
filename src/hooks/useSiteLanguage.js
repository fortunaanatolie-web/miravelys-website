import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getLanguageFromPath, setSiteLanguage } from '../lib/siteLanguage';

export function useSiteLanguage() {
  const location = useLocation();
  const routeLanguage = getLanguageFromPath(location.pathname) ?? 'en';
  const [lang, setLangState] = useState(routeLanguage);

  useEffect(() => {
    setLangState(routeLanguage);
  }, [routeLanguage]);

  const setLang = useCallback(code => {
    setSiteLanguage(code);
    setLangState(code);
  }, []);

  return [lang, setLang];
}

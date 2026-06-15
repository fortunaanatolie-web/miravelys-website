import { useCallback, useEffect, useState } from 'react';
import { getSiteLanguage, setSiteLanguage, subscribeSiteLanguage } from '../lib/siteLanguage';

export function useSiteLanguage() {
  const [lang, setLangState] = useState(getSiteLanguage);

  useEffect(() => subscribeSiteLanguage(setLangState), []);

  const setLang = useCallback(code => {
    setSiteLanguage(code);
    setLangState(code);
  }, []);

  return [lang, setLang];
}

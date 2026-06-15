import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { siteCopy } from '../i18n/siteCopy';
import { getSiteLanguage, subscribeSiteLanguage } from '../lib/siteLanguage';

const STORAGE_KEY = 'miravelys.site.cookieConsent';
const fallbackLanguage = 'en';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [lang, setLang] = useState(getSiteLanguage);

  const t = useMemo(() => siteCopy[lang] || siteCopy[fallbackLanguage], [lang]);

  useEffect(() => {
    if (window.localStorage.getItem(STORAGE_KEY) === 'accepted') return;
    setVisible(true);
  }, []);

  useEffect(() => subscribeSiteLanguage(setLang), []);

  function accept() {
    window.localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <aside className="cookie-banner" role="dialog" aria-modal="false" aria-label={t.footer.cookies}>
      <p>{t.footer.cookieBanner}</p>
      <div className="cookie-banner-actions">
        <Link to="/privacy-policy" className="secondary-action">
          {t.footer.privacyPolicy}
        </Link>
        <Link to="/cookies" className="secondary-action">
          {t.footer.cookies}
        </Link>
        <button type="button" className="primary-action" onClick={accept}>
          {t.footer.cookieAccept}
        </button>
      </div>
    </aside>
  );
}

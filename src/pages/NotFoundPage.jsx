import { useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Compass } from 'lucide-react';
import { resolvePublicSiteCopy } from '../i18n/publicSiteCopy';
import { useSiteLanguage } from '../hooks/useSiteLanguage';
import { setDocumentMeta } from '../lib/documentMeta';
import MarketingPageShell from '../components/marketing/MarketingPageShell';
import MarketingTopNav from '../components/marketing/MarketingTopNav';
import MarketingSiteFooter from '../components/marketing/MarketingSiteFooter';
import { localizeRoute } from '../lib/localizeRoute';

const copy = {
  en: { eyebrow: 'This page is not here', title: 'The path ended. The quiet place is still open.', action: 'Back to Miravelys' },
  ru: { eyebrow: 'Этой страницы здесь нет', title: 'Путь закончился. Но тихое место всё ещё открыто.', action: 'Вернуться в Miravelys' },
};

export default function NotFoundPage() {
  const { pathname } = useLocation();
  const [lang, setLang] = useSiteLanguage();
  const t = useMemo(() => resolvePublicSiteCopy(lang), [lang]);
  const page = copy[lang] ?? copy.en;

  useEffect(() => {
    document.documentElement.lang = t.meta.locale;
    setDocumentMeta({
      title: `404 — Miravelys`,
      description: 'The requested Miravelys page could not be found.',
      noIndex: true,
    });
  }, [t.meta.locale]);

  return (
    <MarketingPageShell lang={lang} skipLinkTarget="#not-found-main">
      <MarketingTopNav variant="legal" lang={lang} setLang={setLang} t={t} />
      <main id="not-found-main" className="public-info-page public-info-page--paper">
        <div className="public-info-page__inner public-info-page__inner--narrow not-found-page">
          <p className="loop-kicker"><Compass size={16} aria-hidden="true" />404</p>
          <h1>{page.title}</h1>
          <p>{pathname}</p>
          <Link to={localizeRoute('/', lang)} className="keynote-cta keynote-cta--primary">{page.action}</Link>
        </div>
      </main>
      <MarketingSiteFooter t={t} lang={lang} />
    </MarketingPageShell>
  );
}

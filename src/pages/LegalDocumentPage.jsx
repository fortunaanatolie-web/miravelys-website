import { useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { languages, resolvePublicSiteCopy } from '../i18n/publicSiteCopy';
import { resolvePublicLegalDocument } from '../i18n/publicLegalCopy';
import { useSiteLanguage } from '../hooks/useSiteLanguage';
import MarketingPageShell from '../components/marketing/MarketingPageShell';
import MarketingTopNav from '../components/marketing/MarketingTopNav';
import MarketingSiteFooter from '../components/marketing/MarketingSiteFooter';
import { setDocumentMeta } from '../lib/documentMeta';

const DOC_BY_PATH = {
  '/legal-notice': 'legalNotice',
  '/user-agreement': 'userAgreement',
  '/terms': 'userAgreement',
  '/privacy-policy': 'privacyPolicy',
  '/privacy': 'privacyPolicy',
  '/cookies': 'cookies',
};

export default function LegalDocumentPage() {
  const { pathname } = useLocation();
  const [lang, setLang] = useSiteLanguage();
  const normalizedPath = pathname.replace(/^\/[a-z]{2}(?=\/)/, '');
  const docId = DOC_BY_PATH[normalizedPath];

  const t = useMemo(() => resolvePublicSiteCopy(lang), [lang]);
  const legalDoc = useMemo(
    () => (docId ? resolvePublicLegalDocument(lang, docId) : null),
    [lang, docId],
  );
  const legalMeta = useMemo(
    () => legalDoc?.meta ?? resolvePublicLegalDocument(lang, 'legalNotice')?.meta,
    [lang, legalDoc],
  );
  const legalAlternates = useMemo(
    () => docId
      ? languages.filter(language => !resolvePublicLegalDocument(language.code, docId)?.languageFallback)
      : [],
    [docId],
  );
  const homePath = lang && lang !== 'en' ? `/${lang}` : '/';

  useEffect(() => {
    document.documentElement.lang = t.meta.locale;
    setDocumentMeta({
      title: legalDoc ? `${legalDoc.title} — Miravelys` : 'Miravelys',
      description: legalDoc?.intro ?? t.footer.line,
      ogTitle: legalDoc ? `${legalDoc.title} — Miravelys` : 'Miravelys',
      ogDescription: legalDoc?.intro ?? t.footer.line,
      noIndex: Boolean(legalDoc?.languageFallback),
      alternateLanguages: legalAlternates,
    });
  }, [t.meta.locale, legalAlternates, legalDoc]);

  if (!legalDoc) {
    return (
      <MarketingPageShell lang={lang} skipLinkTarget="#legal-main">
        <MarketingTopNav variant="legal" lang={lang} setLang={setLang} t={t} />
        <main id="legal-main" className="public-info-page public-info-page--paper">
          <article className="public-info-page__inner legal-paper legal-paper--missing">
            <h1>Miravelys</h1>
            <Link to={homePath} className="loop-text-link">
              {legalMeta?.backToSite}
            </Link>
          </article>
        </main>
        <MarketingSiteFooter t={t} lang={lang} />
      </MarketingPageShell>
    );
  }

  return (
    <MarketingPageShell lang={lang} skipLinkTarget="#legal-main">
      <MarketingTopNav variant="legal" lang={lang} setLang={setLang} t={t} />

      <main id="legal-main" className="public-info-page public-info-page--paper">
        <div className="public-info-page__inner">
          <header className="public-info-page__header">
            <p className="loop-kicker">
            <ShieldCheck size={16} />
            {t.footer.legalNotice}
          </p>
            <h1>{legalDoc.title}</h1>
            <p className="public-info-page__meta">
              <Link to={homePath}>
              {legalMeta?.backToSite}
              </Link>
              <span aria-hidden="true"> · </span>
              <span>
                {legalMeta?.updatedLabel}: {legalDoc.updated}
              </span>
            </p>
          </header>

          <article className="legal-paper" lang={legalDoc.language}>
            {legalDoc.languageFallback ? (
              <p className="legal-paper__translation-note" lang="en">
                {legalDoc.languageFallback}
              </p>
            ) : null}
            <p className="legal-paper__intro">{legalDoc.intro}</p>

            {legalDoc.sections.map(section => (
              <section key={section.title} className="legal-paper__section">
                <h2>{section.title}</h2>
                {section.paragraphs.map(paragraph => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}

            <p className="legal-paper__governing">{legalMeta?.governingNote}</p>
          </article>
        </div>
      </main>

      <MarketingSiteFooter t={t} lang={lang} />
    </MarketingPageShell>
  );
}

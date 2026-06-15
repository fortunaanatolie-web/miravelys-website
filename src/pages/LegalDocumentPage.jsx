import { useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { siteCopy } from '../i18n/siteCopy';
import { legalCopy, legalDocuments } from '../i18n/legalCopy';
import { useSiteLanguage } from '../hooks/useSiteLanguage';
import { experienceCopy, resolveExperience } from '../i18n/experienceCopy';
import MarketingPageShell from '../components/marketing/MarketingPageShell';
import MarketingTopNav from '../components/marketing/MarketingTopNav';
import MarketingSiteFooter from '../components/marketing/MarketingSiteFooter';
import MarketingStickyCta from '../components/marketing/MarketingStickyCta';

const fallbackLanguage = 'en';

const DOC_BY_PATH = {
  '/legal-notice': 'legalNotice',
  '/user-agreement': 'userAgreement',
  '/privacy-policy': 'privacyPolicy',
  '/cookies': 'cookies',
};

export default function LegalDocumentPage() {
  const { pathname } = useLocation();
  const docId = DOC_BY_PATH[pathname];
  const [lang, setLang] = useSiteLanguage();

  const t = useMemo(() => siteCopy[lang] || siteCopy[fallbackLanguage], [lang]);
  const legal = useMemo(() => legalCopy[lang] || legalCopy[fallbackLanguage], [lang]);
  const experience = useMemo(() => resolveExperience(lang), [lang]);
  const legalDoc = docId && legalDocuments.includes(docId) ? legal[docId] : null;

  useEffect(() => {
    document.documentElement.lang = t.meta.locale;
    document.title = legalDoc ? `${legalDoc.title} — Miravelys` : 'Miravelys';
  }, [t.meta.locale, legalDoc]);

  if (!legalDoc) {
    return (
      <MarketingPageShell skipLinkTarget="#legal-main">
        <MarketingTopNav variant="legal" lang={lang} setLang={setLang} t={t} />
        <section id="legal-main" className="content-section legal-document-section">
          <article className="glass-card legal-document-card">
            <h1>Miravelys</h1>
            <Link to="/" className="secondary-action legal-document-back">
              {legal.meta.backToSite}
            </Link>
          </article>
        </section>
        <MarketingSiteFooter t={t} />
      </MarketingPageShell>
    );
  }

  return (
    <MarketingPageShell skipLinkTarget="#legal-main">
      <MarketingTopNav variant="legal" lang={lang} setLang={setLang} t={t} />

      <section id="legal-main" className="content-section legal-document-section">
        <div className="section-header legal-document-header">
          <p className="eyebrow">
            <ShieldCheck size={16} />
            {t.footer.legalNotice}
          </p>
          <h1 className="gold-wordmark legal-document-title">
            {legalDoc.title}
          </h1>
          <p className="legal-document-meta">
            <Link to="/" className="legal-document-back">
              {legal.meta.backToSite}
            </Link>
            <span aria-hidden="true"> · </span>
            <span>
              {legal.meta.updatedLabel}: {legalDoc.updated}
            </span>
          </p>
        </div>

        <article className="glass-card legal-document-card">
          <p className="legal-document-intro">{legalDoc.intro}</p>

          {legalDoc.sections.map(section => (
            <section key={section.title} className="legal-document-section-block">
              <h2>{section.title}</h2>
              {section.paragraphs.map(paragraph => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}

          <p className="legal-document-governing">{legal.meta.governingNote}</p>
        </article>
      </section>

      <MarketingSiteFooter t={t} />

      <MarketingStickyCta
        experience={experience}
        secondaryLabel={legal.meta.backToSite}
        secondaryHref="/"
        secondaryAsLink
      />
    </MarketingPageShell>
  );
}

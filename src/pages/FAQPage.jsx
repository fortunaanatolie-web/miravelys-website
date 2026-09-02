import { APP_IDENTITY_ASSETS } from '../config/appIdentityAssets';
import { useEffect, useMemo } from 'react';
import { HelpCircle, Plus } from 'lucide-react';
import { resolvePublicSiteCopy } from '../i18n/publicSiteCopy';
import { resolvePublicFaqCopy } from '../i18n/publicFaqCopy';
import { useSiteLanguage } from '../hooks/useSiteLanguage';
import MarketingPageShell from '../components/marketing/MarketingPageShell';
import MarketingTopNav from '../components/marketing/MarketingTopNav';
import MarketingSiteFooter from '../components/marketing/MarketingSiteFooter';
import { setDocumentMeta } from '../lib/documentMeta';

export default function FAQPage() {
  const [lang, setLang] = useSiteLanguage();
  const t = useMemo(() => resolvePublicSiteCopy(lang), [lang]);
  const faq = useMemo(() => resolvePublicFaqCopy(lang), [lang]);

  useEffect(() => {
    document.documentElement.lang = t.meta.locale;
    setDocumentMeta({
      favicon: APP_IDENTITY_ASSETS.miravelys.faviconIco,
      title: `${faq.title} — Miravelys`,
      description: faq.title,
      ogTitle: `${faq.title} — Miravelys`,
      ogDescription: faq.title,
    });
  }, [faq.title, t.meta.locale]);

  return (
    <MarketingPageShell lang={lang} skipLinkTarget="#faq-main">
      <MarketingTopNav variant="legal" lang={lang} setLang={setLang} t={t} />

      <main id="faq-main" className="public-info-page public-info-page--paper">
        <div className="public-info-page__inner public-info-page__inner--narrow">
          <header className="public-info-page__header">
            <p className="loop-kicker">
              <HelpCircle size={16} aria-hidden="true" />
              {faq.eyebrow}
            </p>
            <h1>{faq.title}</h1>
          </header>

          <div className="public-faq-list">
            {faq.items.map(([question, answer], index) => (
              <details key={question} className="public-faq-item" open={index === 0}>
                <summary>
                  <span>{question}</span>
                  <Plus size={18} aria-hidden="true" />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </main>

      <MarketingSiteFooter t={t} lang={lang} />
    </MarketingPageShell>
  );
}

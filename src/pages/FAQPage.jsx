import { useEffect, useMemo } from 'react';
import { HelpCircle } from 'lucide-react';
import { siteCopy } from '../i18n/siteCopy';
import { useSiteLanguage } from '../hooks/useSiteLanguage';
import MarketingPageShell from '../components/marketing/MarketingPageShell';
import MarketingTopNav from '../components/marketing/MarketingTopNav';
import MarketingSiteFooter from '../components/marketing/MarketingSiteFooter';
import { setDocumentMeta } from '../lib/documentMeta';

const fallbackLanguage = 'en';

const faqCopy = {
  en: {
    title: 'Frequently Asked Questions',
    intro: 'Everything you need to know about Miravelys.',
    questions: [
      { q: 'What is Miravelys?', a: 'Miravelys is an immersive wellness companion designed to help you find focus, calm your mind, and reclaim your time through guided breathing, ambient soundscapes, and cinematic relaxation modes.' },
      { q: 'Is Miravelys free?', a: 'Miravelys offers a free trial so you can experience the full benefits. After the trial, it requires an active subscription to access all premium content and modes.' },
      { q: 'How do I cancel my subscription?', a: 'You can manage or cancel your subscription at any time directly through your Apple ID settings on your device.' },
      { q: 'What devices are supported?', a: 'Miravelys is currently available exclusively on the App Store for iPhone and requires iOS 16.0 or later.' },
    ]
  },
  ru: {
    title: 'Часто задаваемые вопросы',
    intro: 'Всё, что вам нужно знать о Miravelys.',
    questions: [
      { q: 'Что такое Miravelys?', a: 'Miravelys — это иммерсивное приложение для хорошего самочувствия, которое помогает сосредоточиться и успокоить разум.' },
      { q: 'Miravelys — бесплатное приложение?', a: 'Мы предлагаем бесплатную пробную версию. После нее требуется подписка.' },
      { q: 'Как отменить подписку?', a: 'Вы можете управлять подпиской в настройках Apple ID на вашем устройстве.' },
      { q: 'Какие устройства поддерживаются?', a: 'Miravelys доступен на iPhone с iOS 16.0 или новее.' },
    ]
  },
  // Fallbacks for other languages
};

export default function FAQPage() {
  const [lang, setLang] = useSiteLanguage();
  const t = useMemo(() => siteCopy[lang] || siteCopy[fallbackLanguage], [lang]);
  const copy = useMemo(() => faqCopy[lang] || faqCopy[fallbackLanguage], [lang]);

  useEffect(() => {
    document.documentElement.lang = t.meta.locale;
    setDocumentMeta({
      title: `${copy.title} — Miravelys`,
      description: copy.intro,
      ogTitle: `${copy.title} — Miravelys`,
      ogDescription: copy.intro,
    });
  }, [t.meta.locale, copy]);

  return (
    <MarketingPageShell skipLinkTarget="#faq-main">
      <MarketingTopNav variant="legal" lang={lang} setLang={setLang} t={t} />

      <section id="faq-main" className="content-section legal-document-section" style={{ minHeight: '60vh' }}>
        <div className="section-header legal-document-header">
          <p className="eyebrow">
            <HelpCircle size={16} />
            FAQ
          </p>
          <h1 className="gold-wordmark legal-document-title">
            {copy.title}
          </h1>
          <p className="legal-document-meta">
            {copy.intro}
          </p>
        </div>

        <div className="glass-card legal-document-card" style={{ padding: '3rem 2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {copy.questions.map((item, index) => (
              <div key={index} style={{ textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--mira-ivory, #fff)' }}>{item.q}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.5 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MarketingSiteFooter t={t} />
    </MarketingPageShell>
  );
}

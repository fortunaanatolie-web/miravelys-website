import { useEffect, useMemo } from 'react';
import { LifeBuoy, Mail } from 'lucide-react';
import { resolvePublicSiteCopy } from '../i18n/publicSiteCopy';
import { useSiteLanguage } from '../hooks/useSiteLanguage';
import { SUPPORT_EMAIL, SUPPORT_MAILTO } from '../config/siteLinks';
import MarketingPageShell from '../components/marketing/MarketingPageShell';
import MarketingTopNav from '../components/marketing/MarketingTopNav';
import MarketingSiteFooter from '../components/marketing/MarketingSiteFooter';
import { setDocumentMeta } from '../lib/documentMeta';

const supportCopy = {
  en: {
    eyebrow: 'Direct support',
    title: 'Support',
    intro: 'A real person, a clear reply.',
    body: 'If something in Miravelys is unclear, not working, or needs attention, write to us directly.',
    response: 'We usually reply within 1–2 business days.',
    button: 'Email support',
  },
  ru: {
    eyebrow: 'Прямая связь',
    title: 'Поддержка',
    intro: 'Живой человек и ясный ответ.',
    body: 'Если в Miravelys что-то непонятно, не работает или требует внимания, напишите нам напрямую.',
    response: 'Обычно мы отвечаем в течение 1–2 рабочих дней.',
    button: 'Написать в поддержку',
  },
  ro: {
    eyebrow: 'Asistență directă',
    title: 'Asistență',
    intro: 'O persoană reală, un răspuns clar.',
    body: 'Dacă ceva din Miravelys este neclar, nu funcționează sau are nevoie de atenție, scrie-ne direct.',
    response: 'De obicei răspundem în 1–2 zile lucrătoare.',
    button: 'Trimite un email',
  },
  fr: {
    eyebrow: 'Support direct',
    title: 'Support',
    intro: 'Une vraie personne, une réponse claire.',
    body: 'Si quelque chose dans Miravelys n’est pas clair, ne fonctionne pas ou demande notre attention, écrivez-nous directement.',
    response: 'Nous répondons généralement sous 1 à 2 jours ouvrés.',
    button: 'Contacter le support',
  },
  hi: {
    eyebrow: 'सीधी सहायता',
    title: 'सहायता',
    intro: 'एक वास्तविक व्यक्ति, एक स्पष्ट उत्तर।',
    body: 'यदि Miravelys में कुछ अस्पष्ट है, काम नहीं कर रहा है, या ध्यान की आवश्यकता है, तो हमें सीधे लिखें।',
    response: 'हम आमतौर पर 1–2 कार्यदिवसों में जवाब देते हैं।',
    button: 'ईमेल समर्थन',
  },
  zh: {
    eyebrow: '直接支持',
    title: '支持',
    intro: '真人回复，清晰回应。',
    body: '如果 Miravelys 中有任何不清楚、无法正常使用或需要关注的地方，请直接联系我们。',
    response: '我们通常会在 1–2 个工作日内回复。',
    button: '发送邮件给支持团队',
  },
  de: {
    eyebrow: 'Direkter Support',
    title: 'Support',
    intro: 'Ein echter Mensch, eine klare Antwort.',
    body: 'Wenn in Miravelys etwas unklar ist, nicht funktioniert oder Aufmerksamkeit braucht, schreib uns direkt.',
    response: 'Wir antworten normalerweise innerhalb von 1–2 Werktagen.',
    button: 'Support per E-Mail kontaktieren',
  },
  ja: {
    eyebrow: '直接サポート',
    title: 'サポート',
    intro: '人から、明確な返答を。',
    body: 'Miravelys で分かりにくいこと、うまく動かないこと、確認が必要なことがあれば、直接ご連絡ください。',
    response: '通常、1〜2営業日以内に返信します。',
    button: 'サポートにメールする',
  },
  es: {
    eyebrow: 'Soporte directo',
    title: 'Soporte',
    intro: 'Una persona real, una respuesta clara.',
    body: 'Si algo en Miravelys no está claro, no funciona o necesita atención, escríbenos directamente.',
    response: 'Normalmente respondemos en 1–2 días laborables.',
    button: 'Enviar correo al soporte',
  },
  pt: {
    eyebrow: 'Suporte direto',
    title: 'Suporte',
    intro: 'Uma pessoa real, uma resposta clara.',
    body: 'Se algo no Miravelys não estiver claro, não funcionar ou precisar de atenção, escreva-nos diretamente.',
    response: 'Normalmente respondemos em 1–2 dias úteis.',
    button: 'Enviar e-mail para o suporte',
  },
};

export default function SupportPage() {
  const [lang, setLang] = useSiteLanguage();
  const t = useMemo(() => resolvePublicSiteCopy(lang), [lang]);
  const copy = useMemo(() => supportCopy[lang] || supportCopy.en, [lang]);

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
    <MarketingPageShell lang={lang} skipLinkTarget="#support-main">
      <MarketingTopNav variant="legal" lang={lang} setLang={setLang} t={t} />

      <main id="support-main" className="public-info-page public-info-page--support">
        <div className="public-info-page__inner">
          <header className="public-info-page__header">
            <p className="loop-kicker">
              <LifeBuoy size={16} aria-hidden="true" />
              {copy.eyebrow}
            </p>
            <h1>{copy.title}</h1>
            <p>{copy.intro}</p>
          </header>

          <article className="support-contact-card">
            <p className="support-contact-card__body">{copy.body}</p>
            <a href={SUPPORT_MAILTO} className="keynote-cta keynote-cta--primary support-contact-card__action">
              <Mail size={17} aria-hidden="true" />
              {copy.button}
            </a>
            <a href={SUPPORT_MAILTO} className="support-contact-card__email">{SUPPORT_EMAIL}</a>
            <p className="support-contact-card__response">{copy.response}</p>
            <p className="support-contact-card__note">{t.footer.safety}</p>
          </article>
        </div>
      </main>

      <MarketingSiteFooter t={t} lang={lang} />
    </MarketingPageShell>
  );
}

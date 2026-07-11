import { useEffect, useMemo } from 'react';
import { Mail } from 'lucide-react';
import { siteCopy } from '../i18n/siteCopy';
import { useSiteLanguage } from '../hooks/useSiteLanguage';
import MarketingPageShell from '../components/marketing/MarketingPageShell';
import MarketingTopNav from '../components/marketing/MarketingTopNav';
import MarketingSiteFooter from '../components/marketing/MarketingSiteFooter';
import { setDocumentMeta } from '../lib/documentMeta';

const fallbackLanguage = 'en';

const supportCopy = {
  en: {
    title: 'Support',
    intro: 'We are here to help.',
    body: 'If you have any questions, encounter issues, or need to request account deletion, please contact us directly at:',
    response: 'We typically respond within 24-48 hours.',
    button: 'Email Support',
  },
  ru: {
    title: 'Поддержка',
    intro: 'Мы здесь, чтобы помочь.',
    body: 'Если у вас есть вопросы, проблемы или вы хотите удалить аккаунт, свяжитесь с нами:',
    response: 'Обычно мы отвечаем в течение 24-48 часов.',
    button: 'Написать в поддержку',
  },
  ro: {
    title: 'Asistență',
    intro: 'Suntem aici pentru a vă ajuta.',
    body: 'Dacă aveți întrebări, întâmpinați probleme sau doriți ștergerea contului, contactați-ne:',
    response: 'De obicei răspundem în 24-48 de ore.',
    button: 'Trimite un email',
  },
  fr: {
    title: 'Support',
    intro: 'Nous sommes là pour vous aider.',
    body: 'Si vous avez des questions, des problèmes ou si vous souhaitez supprimer votre compte, contactez-nous :',
    response: 'Nous répondons généralement sous 24 à 48 heures.',
    button: 'Contacter le support',
  },
  hi: {
    title: 'सहायता',
    intro: 'हम आपकी मदद के लिए यहाँ हैं।',
    body: 'यदि आपके कोई प्रश्न हैं, कोई समस्या है, या खाता हटाने का अनुरोध करना चाहते हैं, तो कृपया हमसे संपर्क करें:',
    response: 'हम आमतौर पर 24-48 घंटों के भीतर जवाब देते हैं।',
    button: 'ईमेल समर्थन',
  },
  zh: {
    title: '支持',
    intro: '我们在这里为您提供帮助。',
    body: '如果您有任何问题、遇到困难或需要申请删除帐户，请通过以下方式联系我们：',
    response: '我们通常会在 24-48 小时内回复。',
    button: '发送电子邮件支持',
  },
  de: {
    title: 'Support',
    intro: 'Wir sind hier, um zu helfen.',
    body: 'Wenn Sie Fragen haben, auf Probleme stoßen oder die Löschung Ihres Kontos beantragen möchten, kontaktieren Sie uns:',
    response: 'Wir antworten normalerweise innerhalb von 24-48 Stunden.',
    button: 'Support per E-Mail kontaktieren',
  },
  ja: {
    title: 'サポート',
    intro: '私たちはあなたを助けるためにここにいます。',
    body: 'ご質問、問題の発生、またはアカウント削除のリクエストが必要な場合は、こちらまでご連絡ください：',
    response: '通常24〜48時間以内に返信いたします。',
    button: 'サポートにメールする',
  },
  es: {
    title: 'Soporte',
    intro: 'Estamos aquí para ayudarte.',
    body: 'Si tienes alguna pregunta, encuentras problemas o necesitas solicitar la eliminación de tu cuenta, contáctanos:',
    response: 'Normalmente respondemos en 24-48 horas.',
    button: 'Enviar correo al soporte',
  },
  pt: {
    title: 'Suporte',
    intro: 'Estamos aqui para ajudar.',
    body: 'Se você tiver alguma dúvida, encontrar problemas ou precisar solicitar a exclusão da conta, entre em contato:',
    response: 'Normalmente respondemos dentro de 24 a 48 horas.',
    button: 'Enviar e-mail para o suporte',
  },
};

export default function SupportPage() {
  const [lang, setLang] = useSiteLanguage();
  const t = useMemo(() => siteCopy[lang] || siteCopy[fallbackLanguage], [lang]);
  const copy = useMemo(() => supportCopy[lang] || supportCopy[fallbackLanguage], [lang]);

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
    <MarketingPageShell skipLinkTarget="#support-main">
      <MarketingTopNav variant="legal" lang={lang} setLang={setLang} t={t} />

      <section id="support-main" className="content-section legal-document-section" style={{ minHeight: '60vh' }}>
        <div className="section-header legal-document-header">
          <h1 className="gold-wordmark legal-document-title">
            {copy.title}
          </h1>
          <p className="legal-document-meta">
            {copy.intro}
          </p>
        </div>

        <article className="glass-card legal-document-card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
            {copy.body}
          </p>
          
          <a href="mailto:support@miravelys.com" className="primary-action" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
            <Mail size={18} />
            {copy.button}
          </a>
          
          <p style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)' }}>
            {copy.response}
          </p>
        </article>
      </section>

      <MarketingSiteFooter t={t} />
    </MarketingPageShell>
  );
}

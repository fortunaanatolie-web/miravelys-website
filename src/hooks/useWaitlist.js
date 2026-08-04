import { useCallback, useEffect, useState } from 'react';
import { resolveEarlyAccessCopy } from '../i18n/earlyAccessCopy';
import { SUPPORT_EMAIL } from '../config/siteLinks';
import { WAITLIST_ENDPOINT } from '../config/waitlist';

export const WAITLIST_KEY = 'miravelys.waitlist.confirmed.email.v2';

const mailtoNotices = {
  en: 'A message is ready in your email app. Send it to request early access.',
  ru: 'В почтовом приложении подготовлено письмо. Отправьте его, чтобы запросить ранний доступ.',
  ro: 'Un mesaj este pregătit în aplicația ta de e-mail. Trimite-l pentru a cere acces timpuriu.',
  fr: 'Un message est prêt dans votre application e-mail. Envoyez-le pour demander un accès anticipé.',
  hi: 'आपके ईमेल ऐप में एक संदेश तैयार है। शुरुआती पहुँच के लिए उसे भेजें।',
  zh: '你的邮件应用中已准备好一封邮件。发送它即可申请早期访问。',
  de: 'In deiner E-Mail-App ist eine Nachricht vorbereitet. Sende sie, um Early Access anzufragen.',
  ja: 'メールアプリにメッセージを用意しました。早期アクセスを希望する場合は送信してください。',
  es: 'Hay un mensaje preparado en tu app de correo. Envíalo para solicitar acceso anticipado.',
  pt: 'Há uma mensagem pronta na tua app de e-mail. Envia-a para pedir acesso antecipado.',
};

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function useWaitlist(lang) {
  const delivery = WAITLIST_ENDPOINT ? 'endpoint' : 'email';
  const copy = resolveEarlyAccessCopy(lang, delivery);
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistJoined, setWaitlistJoined] = useState(false);
  const [waitlistDraftReady, setWaitlistDraftReady] = useState(false);
  const [waitlistError, setWaitlistError] = useState('');
  const [earlyAccessOpen, setEarlyAccessOpen] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem(WAITLIST_KEY)) setWaitlistJoined(true);
  }, []);

  const openEarlyAccess = useCallback(() => {
    setEarlyAccessOpen(true);
  }, []);

  const closeEarlyAccess = useCallback(() => {
    setEarlyAccessOpen(false);
  }, []);

  const updateWaitlistEmail = useCallback(value => {
    setWaitlistEmail(value);
    setWaitlistDraftReady(false);
  }, []);

  const handleWaitlistSubmit = useCallback(async event => {
    event.preventDefault();
    const normalized = waitlistEmail.trim();
    if (!normalized) {
      setWaitlistError(copy.emailError);
      return;
    }
    if (!isValidEmail(normalized)) {
      setWaitlistError(copy.emailError);
      return;
    }
    setWaitlistError('');

    try {
      if (WAITLIST_ENDPOINT) {
        const response = await fetch(WAITLIST_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: normalized, source: 'miravelys-website', language: lang }),
        });
        if (!response.ok) throw new Error('waitlist_request_failed');
        window.localStorage.setItem(WAITLIST_KEY, normalized);
        setWaitlistJoined(true);
        return;
      }

      const subject = encodeURIComponent(copy.mailtoSubject ?? 'Miravelys early access request');
      const bodyTemplate = copy.mailtoBody ?? 'Please add {email} to Miravelys early access updates.';
      const body = encodeURIComponent(bodyTemplate.replace('{email}', normalized));
      setWaitlistDraftReady(true);
      window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;
    } catch (error) {
      setWaitlistError(copy.emailError);
    }
  }, [copy, lang, waitlistEmail]);

  return {
    waitlistEmail,
    setWaitlistEmail: updateWaitlistEmail,
    waitlistJoined,
    waitlistDraftReady,
    waitlistDraftNotice: copy.draftReady ?? mailtoNotices[lang] ?? mailtoNotices.en,
    waitlistError,
    setWaitlistError,
    handleWaitlistSubmit,
    earlyAccessOpen,
    openEarlyAccess,
    closeEarlyAccess,
    copy,
    delivery,
  };
}

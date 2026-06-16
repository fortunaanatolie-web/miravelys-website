import { useCallback, useEffect, useState } from 'react';
import { resolveExperience } from '../i18n/experienceCopy';
import { SUPPORT_EMAIL } from '../config/siteLinks';
import { WAITLIST_ENDPOINT } from '../config/waitlist';

export const WAITLIST_KEY = 'miravelys.waitlist.email';

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function useWaitlist(lang) {
  const experience = resolveExperience(lang);
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistJoined, setWaitlistJoined] = useState(false);
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

  const handleWaitlistSubmit = useCallback(async event => {
    event.preventDefault();
    const normalized = waitlistEmail.trim();
    if (!normalized) {
      setWaitlistError(experience.beta.placeholder);
      return;
    }
    if (!isValidEmail(normalized)) {
      setWaitlistError(experience.beta.emailError);
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
      } else {
        const subject = encodeURIComponent(experience.beta.mailtoSubject ?? 'Miravelys early access');
        const bodyTemplate = experience.beta.mailtoBody ?? 'Please add {email} to Miravelys early access updates.';
        const body = encodeURIComponent(bodyTemplate.replace('{email}', normalized));
        window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;
      }

      window.localStorage.setItem(WAITLIST_KEY, normalized);
      setWaitlistJoined(true);
    } catch (error) {
      setWaitlistError(experience.beta.emailError);
    }
  }, [experience.beta, lang, waitlistEmail]);

  return {
    waitlistEmail,
    setWaitlistEmail,
    waitlistJoined,
    waitlistError,
    setWaitlistError,
    handleWaitlistSubmit,
    earlyAccessOpen,
    openEarlyAccess,
    closeEarlyAccess,
  };
}

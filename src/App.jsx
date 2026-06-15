import { useCallback, useEffect, useMemo, useState } from 'react';
import { siteCopy } from './i18n/siteCopy';
import { resolveExperience } from './i18n/experienceCopy';
import { preloadMockupLanguage } from './config/mockupScreens';
import { useHeroReveal } from './hooks/useHeroReveal';
import { useSiteLanguage } from './hooks/useSiteLanguage';
import MarketingPageShell from './components/marketing/MarketingPageShell';
import MarketingTopNav from './components/marketing/MarketingTopNav';
import MarketingSiteFooter from './components/marketing/MarketingSiteFooter';
import MarketingStickyCta from './components/marketing/MarketingStickyCta';
import HeroSection from './components/marketing/sections/HeroSection';
import ProductRevealJourney from './components/marketing/sections/ProductRevealJourney';
import BetaSection from './components/marketing/sections/BetaSection';
import { handleInPageNav } from './lib/scrollToSection';
import { SUPPORT_EMAIL } from './config/siteLinks';
import { WAITLIST_ENDPOINT } from './config/waitlist';

const fallbackLanguage = 'en';
const WAITLIST_KEY = 'miravelys.waitlist.email';

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function App() {
  const [lang, setLang] = useSiteLanguage();
  const t = useMemo(() => siteCopy[lang] || siteCopy[fallbackLanguage], [lang]);
  const experience = useMemo(() => resolveExperience(lang), [lang]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistJoined, setWaitlistJoined] = useState(false);
  const [waitlistError, setWaitlistError] = useState('');
  const heroReveal = useHeroReveal();
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const onNavClick = useCallback((event, sectionId) => {
    handleInPageNav(event, sectionId, closeMenu);
  }, [closeMenu]);

  useEffect(() => {
    preloadMockupLanguage(lang);
  }, [lang]);

  useEffect(() => {
    if (window.localStorage.getItem(WAITLIST_KEY)) setWaitlistJoined(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = t.meta.locale;
    document.documentElement.dir = 'ltr';
    document.title = 'Miravelys';
    const description = t.hero.body;
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
  }, [t.meta.locale, t.hero.body]);

  async function handleWaitlistSubmit(event) {
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
  }

  return (
    <MarketingPageShell lang={lang} skipLinkTarget="#works">
      <MarketingTopNav
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onNavClick={onNavClick}
        lang={lang}
        setLang={setLang}
        t={t}
        experience={experience}
      />

      <HeroSection t={t} experience={experience} lang={lang} onNavClick={onNavClick} />

      <ProductRevealJourney lang={lang} t={t} heroReveal={heroReveal} />

      <BetaSection
        experience={experience}
        waitlistEmail={waitlistEmail}
        setWaitlistEmail={setWaitlistEmail}
        waitlistJoined={waitlistJoined}
        waitlistError={waitlistError}
        setWaitlistError={setWaitlistError}
        handleWaitlistSubmit={handleWaitlistSubmit}
        onNavClick={onNavClick}
      />

      <MarketingStickyCta experience={experience} onNavClick={onNavClick} />

      <MarketingSiteFooter t={t} onNavClick={onNavClick} />
    </MarketingPageShell>
  );
}

export default App;

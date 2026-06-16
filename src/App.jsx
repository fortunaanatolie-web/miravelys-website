import { useCallback, useEffect, useMemo, useState } from 'react';
import { siteCopy } from './i18n/siteCopy';
import { resolveExperience } from './i18n/experienceCopy';
import { preloadMiravelysScreenshots } from './lib/miravelysScreenshots';
import { useSiteLanguage } from './hooks/useSiteLanguage';
import { useWaitlist } from './hooks/useWaitlist';
import MarketingPageShell from './components/marketing/MarketingPageShell';
import MarketingTopNav from './components/marketing/MarketingTopNav';
import MarketingSiteFooter from './components/marketing/MarketingSiteFooter';
import MarketingStickyCta from './components/marketing/MarketingStickyCta';
import EarlyAccessModal from './components/marketing/EarlyAccessModal';
import HeroSection from './components/marketing/sections/HeroSection';
import StickyPhoneStory from './components/marketing/sections/StickyPhoneStory';
import StoryTeaserSection from './components/marketing/sections/StoryTeaserSection';
import DownloadSection from './components/marketing/sections/DownloadSection';
import { handleInPageNav } from './lib/scrollToSection';
import { setDocumentMeta } from './lib/documentMeta';

const fallbackLanguage = 'en';

function App() {
  const [lang, setLang] = useSiteLanguage();
  const t = useMemo(() => siteCopy[lang] || siteCopy[fallbackLanguage], [lang]);
  const experience = useMemo(() => resolveExperience(lang), [lang]);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const waitlist = useWaitlist(lang);

  const onNavClick = useCallback((event, sectionId) => {
    handleInPageNav(event, sectionId, closeMenu);
  }, [closeMenu]);

  useEffect(() => {
    preloadMiravelysScreenshots(lang);
  }, [lang]);

  useEffect(() => {
    document.documentElement.lang = t.meta.locale;
    document.documentElement.dir = 'ltr';
    setDocumentMeta({
      title: t.meta.title ?? 'Miravelys',
      description: t.meta.description ?? t.hero.body,
      ogTitle: t.meta.ogTitle ?? t.meta.title ?? 'Miravelys',
      ogDescription: t.meta.ogDescription ?? t.meta.description ?? t.hero.body,
    });
  }, [t.meta, t.hero.body]);

  return (
    <MarketingPageShell lang={lang} skipLinkTarget="#works">
      <MarketingTopNav
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onNavClick={onNavClick}
        onEarlyAccessClick={waitlist.openEarlyAccess}
        lang={lang}
        setLang={setLang}
        t={t}
        experience={experience}
      />

      <HeroSection
        t={t}
        experience={experience}
        onNavClick={onNavClick}
        onEarlyAccessClick={waitlist.openEarlyAccess}
      />

      <StickyPhoneStory lang={lang} t={t} />

      <StoryTeaserSection lang={lang} />

      <DownloadSection
        lang={lang}
        experience={experience}
        onNavClick={onNavClick}
        onEarlyAccessClick={waitlist.openEarlyAccess}
      />

      <MarketingStickyCta
        experience={experience}
        onNavClick={onNavClick}
        onEarlyAccessClick={waitlist.openEarlyAccess}
      />

      <MarketingSiteFooter t={t} />

      <EarlyAccessModal
        open={waitlist.earlyAccessOpen}
        onClose={waitlist.closeEarlyAccess}
        lang={lang}
        experience={experience}
        waitlistEmail={waitlist.waitlistEmail}
        setWaitlistEmail={waitlist.setWaitlistEmail}
        waitlistJoined={waitlist.waitlistJoined}
        waitlistError={waitlist.waitlistError}
        setWaitlistError={waitlist.setWaitlistError}
        handleWaitlistSubmit={waitlist.handleWaitlistSubmit}
      />
    </MarketingPageShell>
  );
}

export default App;

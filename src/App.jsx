import { useCallback, useEffect, useMemo, useState } from 'react';
import { siteCopy } from './i18n/siteCopy';
import { resolveExperience } from './i18n/experienceCopy';
import { resolveMarketingCopy } from './i18n/marketingCopy';
import { preloadMiravelysScreenshots } from './lib/miravelysScreenshots';
import { useSiteLanguage } from './hooks/useSiteLanguage';
import { useWaitlist } from './hooks/useWaitlist';
import MarketingPageShell from './components/marketing/MarketingPageShell';
import MarketingTopNav from './components/marketing/MarketingTopNav';
import MarketingSiteFooter from './components/marketing/MarketingSiteFooter';
import EarlyAccessModal from './components/marketing/EarlyAccessModal';
import HeroSection from './components/marketing/sections/HeroSection';
import ProblemBridgeSection from './components/marketing/sections/ProblemBridgeSection';
import StickyPhoneStory from './components/marketing/sections/StickyPhoneStory';
import ModesSection from './components/marketing/sections/ModesSection';
import TrustSection from './components/marketing/sections/TrustSection';
import OriginStorySection from './components/marketing/sections/OriginStorySection';
import DownloadSection from './components/marketing/sections/DownloadSection';
import BrandMeaningSection from './components/marketing/sections/BrandMeaningSection';
import MarketingStickyCta from './components/marketing/MarketingStickyCta';
import { handleInPageNav } from './lib/scrollToSection';
import { setDocumentMeta } from './lib/documentMeta';

const fallbackLanguage = 'en';

function App() {
  const [lang, setLang] = useSiteLanguage();
  const t = useMemo(() => siteCopy[lang] || siteCopy[fallbackLanguage], [lang]);
  const experience = useMemo(() => resolveExperience(lang), [lang]);
  const marketing = useMemo(() => resolveMarketingCopy(lang), [lang]);
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
    <MarketingPageShell lang={lang}
        t={t} skipLinkTarget="#works">
      <MarketingTopNav
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onNavClick={onNavClick}
        onEarlyAccessClick={waitlist.openEarlyAccess}
        lang={lang}
        t={t}
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

      <ProblemBridgeSection
        marketing={marketing}
        experience={experience}
        onNavClick={onNavClick}
      />

      <StickyPhoneStory lang={lang}
        t={t} t={t} />

      <ModesSection t={t} />

      <TrustSection
        t={t}
        lang={lang}
        t={t}
        experience={experience}
        onNavClick={onNavClick}
      />

      <OriginStorySection
        lang={lang}
        t={t}
        onNavClick={onNavClick}
        onEarlyAccessClick={waitlist.openEarlyAccess}
      />

      <DownloadSection
        lang={lang}
        t={t}
        experience={experience}
        onNavClick={onNavClick}
        onEarlyAccessClick={waitlist.openEarlyAccess}
      />

      <BrandMeaningSection lang={lang} />

      <MarketingSiteFooter t={t} />

      <MarketingStickyCta
        experience={experience}
        onNavClick={onNavClick}
        onEarlyAccessClick={waitlist.openEarlyAccess}
      />

      <EarlyAccessModal
        open={waitlist.earlyAccessOpen}
        onClose={waitlist.closeEarlyAccess}
        lang={lang}
        t={t}
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

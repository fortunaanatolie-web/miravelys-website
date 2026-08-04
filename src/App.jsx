import { useCallback, useEffect, useMemo, useState } from 'react';
import { resolvePublicSiteCopy } from './i18n/publicSiteCopy';
import { resolveLoopStoryCopy } from './i18n/loopStoryCopy';
import { useSiteLanguage } from './hooks/useSiteLanguage';
import { useWaitlist } from './hooks/useWaitlist';
import MarketingPageShell from './components/marketing/MarketingPageShell';
import MarketingTopNav from './components/marketing/MarketingTopNav';
import MarketingSiteFooter from './components/marketing/MarketingSiteFooter';
import EarlyAccessModal from './components/marketing/EarlyAccessModal';
import HeroSection from './components/marketing/sections/HeroSection';
import LoopMethodSection from './components/marketing/sections/LoopMethodSection';
import SupportSection from './components/marketing/sections/SupportSection';
import TrustSection from './components/marketing/sections/TrustSection';
import DownloadSection from './components/marketing/sections/DownloadSection';
import FounderTeaserSection from './components/marketing/sections/FounderTeaserSection';
import { handleInPageNav } from './lib/scrollToSection';
import { setDocumentMeta } from './lib/documentMeta';
import { resolveHomeMeta } from './lib/publicRouteMeta';

function App() {
  const [lang, setLang] = useSiteLanguage();
  const t = useMemo(() => resolvePublicSiteCopy(lang), [lang]);
  const loopStory = useMemo(() => resolveLoopStoryCopy(lang), [lang]);
  const homeMeta = useMemo(() => resolveHomeMeta(lang), [lang]);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const waitlist = useWaitlist(lang);

  const onNavClick = useCallback((event, sectionId) => {
    handleInPageNav(event, sectionId, closeMenu);
  }, [closeMenu]);

  useEffect(() => {
    document.documentElement.lang = t.meta.locale;
    document.documentElement.dir = 'ltr';
    setDocumentMeta(homeMeta);
  }, [homeMeta, t.meta.locale]);

  return (
    <MarketingPageShell lang={lang}
        t={t} skipLinkTarget="#works">
      <MarketingTopNav
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onNavClick={onNavClick}
        onEarlyAccessClick={waitlist.openEarlyAccess}
        lang={lang}
        setLang={setLang}
        t={t}
        earlyAccess={waitlist.copy}
      />

      <main id="main-content">
        <HeroSection
          lang={lang}
          copy={loopStory}
          earlyAccess={waitlist.copy}
          onNavClick={onNavClick}
          onEarlyAccessClick={waitlist.openEarlyAccess}
        />

        <LoopMethodSection lang={lang} copy={loopStory} />

        <SupportSection lang={lang} copy={loopStory} />

        <TrustSection
          lang={lang}
          copy={loopStory}
        />

        <FounderTeaserSection lang={lang} copy={loopStory} />

        <DownloadSection
          copy={loopStory}
          earlyAccess={waitlist.copy}
          onNavClick={onNavClick}
          onEarlyAccessClick={waitlist.openEarlyAccess}
        />
      </main>

      <MarketingSiteFooter t={t} lang={lang} />

      <EarlyAccessModal
        open={waitlist.earlyAccessOpen}
        onClose={waitlist.closeEarlyAccess}
        lang={lang}
        t={t}
        copy={waitlist.copy}
        waitlistEmail={waitlist.waitlistEmail}
        setWaitlistEmail={waitlist.setWaitlistEmail}
        waitlistJoined={waitlist.waitlistJoined}
        waitlistDraftReady={waitlist.waitlistDraftReady}
        waitlistDraftNotice={waitlist.waitlistDraftNotice}
        waitlistError={waitlist.waitlistError}
        setWaitlistError={waitlist.setWaitlistError}
        handleWaitlistSubmit={waitlist.handleWaitlistSubmit}
      />
    </MarketingPageShell>
  );
}

export default App;

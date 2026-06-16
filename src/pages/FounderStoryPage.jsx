import { useCallback, useEffect, useMemo, useState } from 'react';
import { siteCopy } from '../i18n/siteCopy';
import { resolveExperience } from '../i18n/experienceCopy';
import { resolveOriginCopy } from '../i18n/originCopy';
import { useSiteLanguage } from '../hooks/useSiteLanguage';
import { useWaitlist } from '../hooks/useWaitlist';
import MarketingPageShell from '../components/marketing/MarketingPageShell';
import MarketingTopNav from '../components/marketing/MarketingTopNav';
import MarketingSiteFooter from '../components/marketing/MarketingSiteFooter';
import EarlyAccessModal from '../components/marketing/EarlyAccessModal';
import OriginStorySection from '../components/marketing/sections/OriginStorySection';
import { handleInPageNav } from '../lib/scrollToSection';
import { setDocumentMeta } from '../lib/documentMeta';

const fallbackLanguage = 'en';

export default function FounderStoryPage() {
  const [lang, setLang] = useSiteLanguage();
  const t = useMemo(() => siteCopy[lang] || siteCopy[fallbackLanguage], [lang]);
  const experience = useMemo(() => resolveExperience(lang), [lang]);
  const origin = useMemo(() => resolveOriginCopy(lang), [lang]);
  const waitlist = useWaitlist(lang);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const onNavClick = useCallback((event, sectionId) => {
    const id = sectionId?.replace?.(/^#/, '') ?? sectionId;
    if (id === 'origin' || document.getElementById(id)) {
      handleInPageNav(event, id, closeMenu);
      return;
    }
    event?.preventDefault?.();
    window.location.href = `/#${id || 'works'}`;
  }, [closeMenu]);

  useEffect(() => {
    document.documentElement.lang = t.meta.locale;
    document.documentElement.dir = 'ltr';
    setDocumentMeta(origin.meta);
  }, [origin.meta, t.meta.locale]);

  return (
    <MarketingPageShell lang={lang} skipLinkTarget="#origin">
      <MarketingTopNav
        variant="legal"
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onNavClick={onNavClick}
        lang={lang}
        setLang={setLang}
        t={t}
        experience={experience}
      />

      <OriginStorySection
        lang={lang}
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

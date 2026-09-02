import { APP_IDENTITY_ASSETS } from '../config/appIdentityAssets';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { languages, resolvePublicSiteCopy } from '../i18n/publicSiteCopy';
import { resolveFounderStoryCopy } from '../i18n/loopStoryCopy';
import { useSiteLanguage } from '../hooks/useSiteLanguage';
import { useWaitlist } from '../hooks/useWaitlist';
import MarketingPageShell from '../components/marketing/MarketingPageShell';
import MarketingTopNav from '../components/marketing/MarketingTopNav';
import MarketingSiteFooter from '../components/marketing/MarketingSiteFooter';
import EarlyAccessModal from '../components/marketing/EarlyAccessModal';
import OriginStorySection from '../components/marketing/sections/OriginStorySection';
import { handleInPageNav } from '../lib/scrollToSection';
import { setDocumentMeta } from '../lib/documentMeta';
import { localizeRoute } from '../lib/localizeRoute';

export default function FounderStoryPage() {
  const [lang, setLang] = useSiteLanguage();
  const navigate = useNavigate();
  const t = useMemo(() => resolvePublicSiteCopy(lang), [lang]);
  const founderStory = useMemo(() => resolveFounderStoryCopy(lang), [lang]);
  const founderAlternates = useMemo(
    () => languages.filter(language => !resolveFounderStoryCopy(language.code).languageFallback),
    [],
  );
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
    navigate(`${localizeRoute('/', lang)}#${id || 'works'}`);
  }, [closeMenu, lang, navigate]);

  useEffect(() => {
    document.documentElement.lang = t.meta.locale;
    document.documentElement.dir = 'ltr';
    setDocumentMeta({
      favicon: APP_IDENTITY_ASSETS.miravelys.faviconIco,
      title: `${founderStory.eyebrow} — Miravelys`,
      description: founderStory.intro,
      ogTitle: founderStory.title,
      ogDescription: founderStory.intro,
      noIndex: Boolean(founderStory.languageFallback),
      alternateLanguages: founderAlternates,
    });
  }, [founderAlternates, founderStory, t.meta.locale]);

  return (
    <MarketingPageShell lang={lang}
        t={t} skipLinkTarget="#origin">
      <MarketingTopNav
        variant="legal"
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onNavClick={onNavClick}
        lang={lang}
        setLang={setLang}
        t={t}
        earlyAccess={waitlist.copy}
      />

      <main id="main-content">
        <OriginStorySection
          lang={lang}
          copy={founderStory}
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

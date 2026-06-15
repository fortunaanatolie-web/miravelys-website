import { useCallback, useEffect, useMemo, useState } from 'react';
import { siteCopy } from '../i18n/siteCopy';
import { resolveExperience } from '../i18n/experienceCopy';
import { preloadMockupLanguage } from '../config/mockupScreens';
import { useSiteLanguage } from '../hooks/useSiteLanguage';
import MarketingPageShell from '../components/marketing/MarketingPageShell';
import MarketingTopNav from '../components/marketing/MarketingTopNav';
import MarketingSiteFooter from '../components/marketing/MarketingSiteFooter';
import OriginStorySection from '../components/marketing/sections/OriginStorySection';
import { scrollToSection, handleInPageNav } from '../lib/scrollToSection';

const fallbackLanguage = 'en';

export default function FounderStoryPage() {
  const [lang, setLang] = useSiteLanguage();
  const t = useMemo(() => siteCopy[lang] || siteCopy[fallbackLanguage], [lang]);
  const experience = useMemo(() => resolveExperience(lang), [lang]);
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
    preloadMockupLanguage(lang);
  }, [lang]);

  useEffect(() => {
    document.documentElement.lang = t.meta.locale;
    document.title = 'How Miravelys Was Born';
    const description = t.footer.line;
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
  }, [t.meta.locale, t.footer.line]);

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

      <OriginStorySection lang={lang} experience={experience} onNavClick={onNavClick} />

      <MarketingSiteFooter t={t} onNavClick={null} />
    </MarketingPageShell>
  );
}

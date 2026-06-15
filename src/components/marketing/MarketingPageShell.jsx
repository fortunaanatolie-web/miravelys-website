import { useEffect } from 'react';
import { resolveHeaderCopy } from '../../i18n/headerCopy';
import { applyAppearance, useSiteAppearance } from '../../hooks/useSiteAppearance';
import ScrollProgress from './ScrollProgress';

export default function MarketingPageShell({ children, lang = 'en', skipLinkTarget = '#what' }) {
  const header = resolveHeaderCopy(lang);
  const appearance = useSiteAppearance();

  useEffect(() => {
    applyAppearance(appearance);
  }, [appearance]);

  return (
    <main className={`site-shell site-shell--keynote site-shell--${appearance}`}>
      <div className="cinematic-atmosphere" aria-hidden="true">
        <div className="cinematic-atmosphere__base" />
        <div className="cinematic-atmosphere__glow cinematic-atmosphere__glow--gold" />
        <div className="cinematic-atmosphere__glow cinematic-atmosphere__glow--lavender" />
        <div className="cinematic-atmosphere__glow cinematic-atmosphere__glow--rose" />
        <div className="cinematic-atmosphere__vignette" />
      </div>
      <ScrollProgress />
      <div className="ambient-orb ambient-orb--cyan" />
      <div className="ambient-orb ambient-orb--gold" />
      <div className="grain-layer" />
      <a href={skipLinkTarget} className="skip-link">
        {header.skipToContent}
      </a>
      {children}
    </main>
  );
}

import MarketingCta from '../primitives/MarketingCta';
import RevealOnScroll from '../primitives/RevealOnScroll';
import PhoneMockup from '../primitives/PhoneMockup';
import { Mail } from 'lucide-react';
import { resolveWebsiteScreenshot } from '../../../lib/miravelysScreenshots';

export default function HeroSection({ lang, copy, earlyAccess, onNavClick, onEarlyAccessClick }) {
  const screenshot = resolveWebsiteScreenshot({
    locale: lang,
    group: 'sticky-phone',
    code: 'overview',
    mockupId: 'today',
  });
  const screen = {
    id: 'hero-overview',
    ...screenshot,
    lang,
    alt: copy.hero.deviceCaption || screenshot.alt,
  };

  return (
    <section id="top" className="hero-section hero-section--loop">
      <div className="loop-hero__atmosphere" aria-hidden="true">
        <div className="loop-hero__sun" />
        <div className="loop-hero__horizon" />
      </div>

      <div className="loop-hero__inner">
        <RevealOnScroll className="loop-hero__copy" variant="blur-in">
          <p className="loop-hero__brand" lang="en">Miravelys</p>
          <p className="loop-kicker">{copy.hero.eyebrow}</p>
          <h1>{copy.hero.title}</h1>
          <p className="loop-hero__lead">{copy.hero.body}</p>
          <div className="loop-hero__actions">
            <MarketingCta
              role="primary"
              earlyAccess={earlyAccess}
              onNavClick={onNavClick}
              onEarlyAccessClick={onEarlyAccessClick}
            />
            <a href="#works" className="loop-text-link" onClick={event => onNavClick(event, 'works')}>
              {copy.hero.secondary}
            </a>
            <p className="loop-early-access-note">
              <Mail size={14} aria-hidden="true" />
              {earlyAccess.note}
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="loop-hero__product" variant="rise" delay={100}>
          <div className="loop-hero__product-halo" aria-hidden="true" />
          <PhoneMockup
            screens={[screen]}
            activeIndex={0}
            variant="mobile-card"
            assetMode="screen-only"
            className="loop-phone loop-hero__phone"
            ariaLabel={screen.alt}
            priority
          />
          <p>{copy.hero.deviceCaption}</p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

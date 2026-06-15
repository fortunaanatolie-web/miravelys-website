import { useHeroReveal } from '../../../hooks/useHeroReveal';
import MarketingCta from '../primitives/MarketingCta';
import RevealOnScroll from '../primitives/RevealOnScroll';

const heroTrustKeys = [0, 2, 4];

export default function HeroSection({ t, experience, onNavClick }) {
  const heroReveal = useHeroReveal();
  const trustChips = heroTrustKeys.map(index => t.privacy.bullets[index]).filter(Boolean);

  return (
    <section
      id="top"
      className="hero-section hero-section--keynote hero-section--story-intro"
      style={{ '--hero-reveal': heroReveal }}
    >
      <div className="hero-keynote__backdrop" aria-hidden="true">
        <div className="hero-keynote__beam hero-keynote__beam--gold" />
        <div className="hero-keynote__beam hero-keynote__beam--lavender" />
      </div>

      <RevealOnScroll className="hero-keynote__intro" variant="blur-in">
        <p className="hero-keynote__brand" lang="en">Miravelys</p>
        <p className="hero-keynote__eyebrow">{t.hero.eyebrow}</p>
        <h1 className="hero-keynote__headline">{t.hero.subtitle}</h1>
        <p className="hero-keynote__subline">{t.hero.body}</p>
        <div className="hero-keynote__actions">
          <MarketingCta role="primary" experience={experience} onNavClick={onNavClick} />
          <MarketingCta role="secondary" experience={experience} onNavClick={onNavClick} />
        </div>
        {trustChips.length ? (
          <ul className="hero-keynote__trust">
            {trustChips.map(chip => <li key={chip}>{chip}</li>)}
          </ul>
        ) : null}
      </RevealOnScroll>

      <div className="hero-keynote__scroll-hint" aria-hidden="true"><span /></div>
    </section>
  );
}

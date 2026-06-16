import MarketingCta from '../primitives/MarketingCta';
import RevealOnScroll from '../primitives/RevealOnScroll';

export default function HeroSection({ t, experience, onNavClick, onEarlyAccessClick }) {
  return (
    <section
      id="top"
      className="hero-section hero-section--keynote hero-section--story-intro"
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
          <MarketingCta
            role="primary"
            experience={experience}
            onNavClick={onNavClick}
            onEarlyAccessClick={onEarlyAccessClick}
          />
        </div>
      </RevealOnScroll>

      <div className="hero-keynote__scroll-hint" aria-hidden="true"><span /></div>
    </section>
  );
}

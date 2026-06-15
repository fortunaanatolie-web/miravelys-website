import { CheckCircle2, Globe2, Sparkles } from 'lucide-react';
import { languages } from '../../../i18n/siteCopy';
import ScreenMockupGallery from '../ScreenMockupGallery';
import MarketingCta from '../primitives/MarketingCta';
import RevealOnScroll from '../primitives/RevealOnScroll';

export default function MockupsSection({
  t,
  marketing,
  experience,
  lang,
  setLang,
  activeMockupId,
  handleMockupSelect,
  onNavClick,
}) {
  return (
    <section id="mockups" className="mockups-section content-section">
      <div className="mockup-showcase">
        <RevealOnScroll as="aside" className="mockup-copy-panel">
          <p className="eyebrow">
            <Globe2 size={16} />
            {t.mockups.eyebrow}
          </p>
          <h2>{t.mockups.title}</h2>
          <p className="section-intro">{t.mockups.intro}</p>
          <div className="mockup-bridge-card">
            <p className="eyebrow">
              <Sparkles size={16} aria-hidden="true" />
              {marketing.mockupsBridge.eyebrow}
            </p>
            <h3>{marketing.mockupsBridge.title}</h3>
            <p>{marketing.mockupsBridge.body}</p>
            <ul className="point-list">
              {marketing.mockupsBridge.points.map(item => (
                <li key={item}>
                  <CheckCircle2 size={16} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="mockup-gallery-hint">{t.mockups.hint ?? t.mockups.intro}</p>
          <div className="mockup-copy-panel__cta">
            <MarketingCta role="primary" experience={experience} onNavClick={onNavClick} />
          </div>
          <div className="language-pills" aria-label={t.languages.title}>
            {languages.map(item => (
              <button
                type="button"
                key={item.code}
                className={item.code === lang ? 'active' : ''}
                aria-pressed={item.code === lang}
                onClick={() => setLang(item.code)}
              >
                {item.short}
              </button>
            ))}
          </div>
        </RevealOnScroll>
        <RevealOnScroll className="mockup-stage" delay={100}>
          <ScreenMockupGallery lang={lang} activeId={activeMockupId} onSelect={handleMockupSelect} />
        </RevealOnScroll>
      </div>
    </section>
  );
}

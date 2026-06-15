import { Apple } from 'lucide-react';
import { finaleMockupId } from '../../../config/productScenes';
import { resolvePresentation } from '../../../i18n/presentationCopy';
import MarketingCta from '../primitives/MarketingCta';
import RevealingDeviceFrame from '../primitives/RevealingDeviceFrame';
import RevealOnScroll from '../primitives/RevealOnScroll';

export default function DownloadSection({ lang, experience, onNavClick }) {
  const presentation = resolvePresentation(lang);
  const finale = presentation.finale;

  return (
    <section id="download" className="download-section content-section download-section--finale">
      <div className="download-finale__layout">
        <RevealOnScroll className="download-card download-card--finale" variant="blur-in">
          <p className="eyebrow">{finale.eyebrow}</p>
          <h2>{finale.title}</h2>
          <p>{finale.body}</p>
          <div className="download-actions">
            <MarketingCta role="appStore" experience={experience} onNavClick={onNavClick} icon={<Apple size={14} aria-hidden="true" />}>
              {finale.primary}
            </MarketingCta>
            <MarketingCta role="primary" experience={experience} onNavClick={onNavClick}>
              {finale.secondary}
            </MarketingCta>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="download-finale__device" delay={100} variant="soft">
          <RevealingDeviceFrame
            lang={lang}
            steps={[{ mockupId: finaleMockupId }]}
            activeIndex={0}
            revealLevel={1}
            size="hero"
            mood="warm"
            priorityFirst
          />
        </RevealOnScroll>
      </div>
    </section>
  );
}

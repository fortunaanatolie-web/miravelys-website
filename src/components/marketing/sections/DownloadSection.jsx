import { Apple } from 'lucide-react';
import { resolvePresentation } from '../../../i18n/presentationCopy';
import MarketingCta from '../primitives/MarketingCta';
import RevealOnScroll from '../primitives/RevealOnScroll';

export default function DownloadSection({ lang, experience, onNavClick, onEarlyAccessClick }) {
  const presentation = resolvePresentation(lang);
  const finale = presentation.finale;

  return (
    <section id="download" className="download-section content-section download-section--finale">
      <RevealOnScroll className="download-card download-card--finale" variant="blur-in">
        <p className="eyebrow">{finale.eyebrow}</p>
        <h2>{finale.title}</h2>
        <p>{finale.body}</p>
        <div className="download-actions">
          <MarketingCta
            role="appStore"
            experience={experience}
            onNavClick={onNavClick}
            onEarlyAccessClick={onEarlyAccessClick}
            icon={<Apple size={14} aria-hidden="true" />}
          >
            {finale.primary}
          </MarketingCta>
        </div>
      </RevealOnScroll>
    </section>
  );
}

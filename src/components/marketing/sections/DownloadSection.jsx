import MarketingCta from '../primitives/MarketingCta';
import RevealOnScroll from '../primitives/RevealOnScroll';
import { Mail } from 'lucide-react';

export default function DownloadSection({ copy, earlyAccess, onNavClick, onEarlyAccessClick }) {
  return (
    <section id="download" className="loop-finale" aria-labelledby="loop-finale-title">
      <RevealOnScroll className="loop-finale__card" variant="blur-in">
        <p className="loop-kicker">{copy.finale.eyebrow}</p>
        <h2 id="loop-finale-title">{copy.finale.title}</h2>
        <p>{copy.finale.body}</p>
        <MarketingCta
          role="primary"
          earlyAccess={earlyAccess}
          onNavClick={onNavClick}
          onEarlyAccessClick={onEarlyAccessClick}
        />
        <p className="loop-early-access-note loop-early-access-note--finale">
          <Mail size={14} aria-hidden="true" />
          {earlyAccess.note}
        </p>
      </RevealOnScroll>
    </section>
  );
}

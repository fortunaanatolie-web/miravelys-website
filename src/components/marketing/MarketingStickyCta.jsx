import MarketingCta from './primitives/MarketingCta';
import { useStickyCtaVisibility } from '../../hooks/useStickyCtaVisibility';

export default function MarketingStickyCta({ experience, onNavClick, onEarlyAccessClick }) {
  const visible = useStickyCtaVisibility();

  return (
    <aside
      className={`sticky-cta sticky-cta--single ${visible ? 'sticky-cta--visible' : 'sticky-cta--hidden'}`}
      aria-label={experience?.sticky?.earlyAccess || 'Miravelys'}
      aria-hidden={!visible}
    >
      <MarketingCta
        role="primary"
        experience={experience}
        onNavClick={onNavClick}
        onEarlyAccessClick={onEarlyAccessClick}
        className="sticky-cta__pill"
      />
    </aside>
  );
}

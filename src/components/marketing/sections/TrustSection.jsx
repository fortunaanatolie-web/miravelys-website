import { Check, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { marketingRoutes } from '../../../config/marketingWiring';
import { resolveTrustScreenshot } from '../../../lib/miravelysScreenshots';
import PhoneMockup from '../primitives/PhoneMockup';
import RevealOnScroll from '../primitives/RevealOnScroll';
import { localizeRoute } from '../../../lib/localizeRoute';

export default function TrustSection({ lang, copy }) {
  const screenshot = resolveTrustScreenshot(lang);
  const privacyPath = localizeRoute(marketingRoutes.privacyPolicy, lang);
  const screen = {
    id: 'privacy-settings',
    ...screenshot,
    lang,
    alt: copy.trust.deviceLabel || screenshot.alt,
  };

  return (
    <section id="privacy" className="loop-trust" aria-labelledby="loop-trust-title">
      <div className="loop-trust__inner">
        <RevealOnScroll className="loop-trust__copy" variant="soft">
          <p className="loop-kicker">
            <ShieldCheck size={15} aria-hidden="true" />
            {copy.trust.eyebrow}
          </p>
          <h2 id="loop-trust-title">{copy.trust.title}</h2>
          <p className="loop-trust__lead">{copy.trust.body}</p>
          <ul className="loop-trust__facts">
            {copy.trust.facts.map(fact => (
              <li key={fact}>
                <Check size={16} aria-hidden="true" />
                {fact}
              </li>
            ))}
          </ul>
          <p className="loop-trust__safety">{copy.trust.safety}</p>
          <Link to={privacyPath} className="loop-text-link">
            {copy.trust.link}
          </Link>
        </RevealOnScroll>

        <RevealOnScroll className="loop-trust__device" variant="rise" delay={100}>
          <PhoneMockup
            screens={[screen]}
            activeIndex={0}
            variant="mobile-card"
            assetMode="screen-only"
            className="loop-phone loop-trust__phone"
            ariaLabel={screen.alt}
          />
        </RevealOnScroll>
      </div>
    </section>
  );
}

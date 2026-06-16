import { ChevronRight, LockKeyhole, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { marketingRoutes } from '../../../config/marketingWiring';
import { resolvePresentation } from '../../../i18n/presentationCopy';
import { resolveTrustScreenshot } from '../../../lib/miravelysScreenshots';
import PhoneMockup from '../primitives/PhoneMockup';
import RevealOnScroll from '../primitives/RevealOnScroll';

const trustIcons = [LockKeyhole, ShieldCheck, LockKeyhole, ShieldCheck, LockKeyhole, ShieldCheck];

export default function TrustSection({ t, lang, experience, onNavClick }) {
  const presentation = resolvePresentation(lang);
  const screenshot = resolveTrustScreenshot(lang);
  const mockupAlt = screenshot.alt || presentation.trust.title;

  return (
    <section id="privacy" className="trust-section content-section trust-section--presentation trust-section--split">
      <div className="trust-section__layout">
        <RevealOnScroll className="trust-section__copy" variant="soft">
          <div className="trust-icon">
            <LockKeyhole size={34} />
          </div>
          <p className="eyebrow">
            <ShieldCheck size={16} />
            {presentation.trust.eyebrow}
          </p>
          <h2 className="trust-section__title">{presentation.trust.title}</h2>
          <p className="trust-section__lead">{presentation.trust.body}</p>
          <p className="trust-section__safety">{presentation.trust.notTherapy}</p>
          <p className="trust-section__detail">{t.privacy.body}</p>
          <div className="trust-grid">
            {t.privacy.bullets.map((item, index) => {
              const Icon = trustIcons[index] || ShieldCheck;
              return (
                <span key={item}>
                  <Icon size={18} aria-hidden="true" />
                  {item}
                </span>
              );
            })}
          </div>
          <div className="trust-section__actions">
            <Link to={marketingRoutes.privacyPolicy} className="keynote-link">
              {experience.sticky.privacy}
              <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="trust-section__device" variant="rise" delay={90}>
          <PhoneMockup
            screens={[
              {
                id: 'welcome',
                ...screenshot,
                lang,
                alt: mockupAlt,
              },
            ]}
            size="chapter"
            mood="trust"
            atmosphere
            reflection
            floorShadow
            ariaLabel={mockupAlt}
          />
        </RevealOnScroll>
      </div>
    </section>
  );
}

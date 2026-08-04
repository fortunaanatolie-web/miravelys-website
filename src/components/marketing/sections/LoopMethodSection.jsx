import { ArrowDown } from 'lucide-react';
import { resolveWebsiteScreenshot } from '../../../lib/miravelysScreenshots';
import PhoneMockup from '../primitives/PhoneMockup';
import RevealOnScroll from '../primitives/RevealOnScroll';

function getScreen(lang, step) {
  const screenshot = resolveWebsiteScreenshot({
    locale: lang,
    group: 'sticky-phone',
    code: step.screenCode,
    mockupId: step.mockupId,
  });

  return {
    id: `loop-${step.screenCode}`,
    ...screenshot,
    lang,
    alt: step.title || screenshot.alt,
  };
}

export default function LoopMethodSection({ lang, copy }) {
  return (
    <section id="works" className="loop-method" aria-labelledby="loop-method-title">
      <div className="loop-method__field" aria-hidden="true" />

      <div className="loop-method__inner">
        <RevealOnScroll className="loop-section-heading loop-section-heading--method" variant="blur-in">
          <p className="loop-kicker">{copy.method.eyebrow}</p>
          <h2 id="loop-method-title">{copy.method.title}</h2>
          <p>{copy.method.lead}</p>
        </RevealOnScroll>

        <RevealOnScroll className="loop-scenario" variant="soft">
          <div className="loop-scenario__topline">
            <p className="loop-kicker">{copy.scenario.eyebrow}</p>
            <ArrowDown size={18} aria-hidden="true" />
          </div>
          <h3>{copy.scenario.title}</h3>
          <p className="loop-scenario__intro">{copy.scenario.intro}</p>
          <div className="loop-scenario__layers">
            {copy.scenario.labels.map((label, index) => (
              <article key={label} className={`loop-layer loop-layer--${index + 1}`}>
                <span>{label}</span>
                <p>{copy.scenario.values[index]}</p>
              </article>
            ))}
          </div>
          <p className="loop-scenario__note">{copy.scenario.note}</p>
        </RevealOnScroll>

        <div className="loop-method__steps">
          {copy.method.steps.map((step, index) => {
            const screen = getScreen(lang, step);
            return (
              <article
                key={step.screenCode}
                className={`loop-method-card ${index % 2 ? 'loop-method-card--reverse' : ''}`}
              >
                <RevealOnScroll className="loop-method-card__copy" variant="soft" delay={index % 2 ? 90 : 0}>
                  <p className="loop-method-card__number">{step.kicker}</p>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </RevealOnScroll>

                <RevealOnScroll className="loop-method-card__phone" variant="rise" delay={index % 2 ? 0 : 90}>
                  <PhoneMockup
                    screens={[screen]}
                    activeIndex={0}
                    variant="mobile-card"
                    assetMode="screen-only"
                    className="loop-phone loop-method-card__device"
                    ariaLabel={screen.alt}
                  />
                </RevealOnScroll>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

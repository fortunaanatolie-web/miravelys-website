import { resolveWebsiteScreenshot } from '../../../lib/miravelysScreenshots';
import PhoneMockup from '../primitives/PhoneMockup';
import RevealOnScroll from '../primitives/RevealOnScroll';

function getScreen(lang, card) {
  const screenshot = resolveWebsiteScreenshot({
    locale: lang,
    group: 'sticky-phone',
    code: card.screenCode,
    mockupId: card.mockupId,
  });

  return {
    id: `support-${card.screenCode}`,
    ...screenshot,
    lang,
    alt: card.title || screenshot.alt,
  };
}

export default function SupportSection({ lang, copy }) {
  return (
    <section className="loop-support" aria-labelledby="loop-support-title">
      <div className="loop-support__inner">
        <RevealOnScroll className="loop-section-heading loop-section-heading--support" variant="blur-in">
          <p className="loop-kicker">{copy.support.eyebrow}</p>
          <h2 id="loop-support-title">{copy.support.title}</h2>
          <p>{copy.support.lead}</p>
        </RevealOnScroll>

        <div className="loop-support__cards">
          {copy.support.cards.map((card, index) => {
            const screen = getScreen(lang, card);
            return (
              <RevealOnScroll key={card.screenCode} as="article" className="loop-support-card" variant="rise" delay={index * 90}>
                <div className="loop-support-card__copy">
                  <p className="loop-support-card__label">{card.label}</p>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
                <div className="loop-support-card__device">
                  <PhoneMockup
                    screens={[screen]}
                    activeIndex={0}
                    variant="mobile-card"
                    assetMode="screen-only"
                    className="loop-phone loop-support-card__phone"
                    ariaLabel={screen.alt}
                  />
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}

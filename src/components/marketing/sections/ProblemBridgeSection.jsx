import RevealOnScroll from '../primitives/RevealOnScroll';
import MarketingCta from '../primitives/MarketingCta';

/**
 * Emotional problem + promise — bridges hero to purpose flow.
 */
export default function ProblemBridgeSection({ marketing, experience, onNavClick }) {
  const paragraphs = marketing.editorial.paragraphs ?? [];

  return (
    <section id="what" className="problem-bridge content-section" aria-labelledby="problem-bridge-title">
      <RevealOnScroll variant="soft">
        <p className="eyebrow">{marketing.editorial.eyebrow}</p>
        <h2 id="problem-bridge-title" className="problem-bridge__title">
          {marketing.editorial.title}
        </h2>
        <p className="problem-bridge__lead">{marketing.editorial.lead}</p>
        {paragraphs.length ? (
          <div className="problem-bridge__body">
            {paragraphs.map(paragraph => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ) : null}
        <ul className="problem-bridge__highlights">
          {marketing.editorial.highlights.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {experience && onNavClick ? (
          <div className="problem-bridge__cta">
            <MarketingCta role="secondary" experience={experience} onNavClick={onNavClick} />
          </div>
        ) : null}
      </RevealOnScroll>
    </section>
  );
}

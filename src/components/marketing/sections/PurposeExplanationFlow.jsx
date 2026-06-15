import { purposeStepOrder } from '../../../config/purposeSteps';
import { resolvePurposeCopy } from '../../../i18n/purposeCopy';
import MarketingCta from '../primitives/MarketingCta';
import PhoneMockup from '../primitives/PhoneMockup';
import RevealOnScroll from '../primitives/RevealOnScroll';

function PurposeExplanationStep({ step, copy, lang, index, stepTotal }) {
  const reverse = index % 2 === 1;
  const screens = [
    {
      id: step.mockupId,
      asset: step.asset,
      lang,
      alt: copy.title,
    },
  ];

  return (
    <article
      className={`purpose-step ${reverse ? 'purpose-step--reverse' : ''} ${step.isFinale ? 'purpose-step--finale' : ''}`}
      data-purpose-step={step.key}
    >
      <div className="purpose-step__backdrop" aria-hidden="true" />
      <RevealOnScroll className="purpose-step__copy" variant="soft" delay={reverse ? 80 : 0}>
        <p className="purpose-step__index" aria-hidden="true">
          {String(index + 1).padStart(2, '0')} / {String(stepTotal).padStart(2, '0')}
        </p>
        {copy.eyebrow ? <p className="purpose-step__eyebrow">{copy.eyebrow}</p> : null}
        <h3 className="purpose-step__title">{copy.title}</h3>
        {copy.lead ? <p className="purpose-step__lead">{copy.lead}</p> : null}
        <p className="purpose-step__body">{copy.body}</p>
        {step.showChips && copy.chips?.length ? (
          <ul className="purpose-step__chips" aria-label={copy.title}>
            {copy.chips.map(chip => (
              <li key={chip}>{chip}</li>
            ))}
          </ul>
        ) : null}
        {copy.whisper ? <p className="purpose-step__whisper">{copy.whisper}</p> : null}
      </RevealOnScroll>
      <RevealOnScroll className="purpose-step__device" variant="rise" delay={reverse ? 0 : 80}>
        <PhoneMockup
          screens={screens}
          size={step.isFinale ? 'hero' : 'chapter'}
          mood={step.mood}
          priorityFirst={index === 0}
          atmosphere
          reflection={step.isFinale}
          floorShadow
          ariaLabel={copy.title}
        />
      </RevealOnScroll>
    </article>
  );
}

export default function PurposeExplanationFlow({ lang, experience, onNavClick }) {
  const purpose = resolvePurposeCopy(lang);

  return (
    <section id="explanation" className="purpose-explanation content-section" aria-labelledby="purpose-explanation-title">
      <div className="purpose-explanation__intro">
        <RevealOnScroll variant="blur-in">
          <p className="purpose-explanation__eyebrow">{purpose.intro.eyebrow}</p>
          <h2 id="purpose-explanation-title" className="purpose-explanation__title">
            {purpose.intro.title}
          </h2>
          <p className="purpose-explanation__lead">{purpose.intro.lead}</p>
        </RevealOnScroll>
      </div>
      <div className="purpose-explanation__steps">
        {purposeStepOrder.map((step, index) => {
          const copy = purpose.steps[step.key];
          if (!copy) return null;

          return (
            <PurposeExplanationStep
              key={step.key}
              step={step}
              copy={copy}
              lang={lang}
              index={index}
              stepTotal={purposeStepOrder.length}
            />
          );
        })}
      </div>
      {experience && onNavClick ? (
        <RevealOnScroll className="purpose-explanation__cta" variant="soft">
          <MarketingCta role="works" experience={experience} onNavClick={onNavClick} />
        </RevealOnScroll>
      ) : null}
    </section>
  );
}

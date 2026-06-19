import { useMemo } from 'react';
import { stepsToPhoneScreens } from '../../../lib/productStorySteps';
import { useNearestStep } from '../../../hooks/useNearestStep';
import PhoneMockup from '../primitives/PhoneMockup';
import ProductStoryStepContent from '../primitives/ProductStoryStepContent';

/**
 * Landscape phone sticky story — compact two-column layout when viewport height allows.
 * Phone lives in a reserved column; text scrolls beside it. No overlay, no dot bar on phone.
 */
export default function ProductStoryMobileLandscape({ steps, locale }) {
  const screens = useMemo(() => stepsToPhoneScreens(steps, locale), [steps, locale]);
  const { activeIndex, setStepRef } = useNearestStep(steps.length, 0.58);

  return (
    <section className="mobile-landscape-story" aria-label="Miravelys product story">
      <div className="mobile-landscape-story__phone">
        <PhoneMockup
          screens={screens}
          activeIndex={activeIndex}
          variant="landscape-stage"
          className="phone-mockup--landscape-stage"
          assetMode="screen-only"
          ariaLabel="Miravelys app screens"
        />
      </div>

      <div className="mobile-landscape-story__steps">
        {steps.map((step, index) => (
          <article
            key={step.id}
            ref={node => setStepRef(index, node)}
            data-step-index={index}
            className={`mobile-landscape-story__step${index === activeIndex ? ' is-active' : ''}`}
            aria-current={index === activeIndex ? 'step' : undefined}
          >
            <ProductStoryStepContent
              step={step}
              index={index}
              total={steps.length}
              variant="landscape-stage"
            />
          </article>
        ))}
      </div>
    </section>
  );
}

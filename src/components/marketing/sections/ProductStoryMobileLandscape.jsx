import { useMemo } from 'react';
import { stepsToPhoneScreens } from '../../../lib/productStorySteps';
import { useNearestStep } from '../../../hooks/useNearestStep';
import PhoneMockup from '../primitives/PhoneMockup';
import ProductStoryStepContent from '../primitives/ProductStoryStepContent';

/**
 * Landscape mobile sticky story — compact two-column layout.
 * Phone in left column; text scrolls beside it. Isolated from desktop/portrait CSS.
 */
export default function ProductStoryMobileLandscape({ steps, locale }) {
  const screens = useMemo(() => stepsToPhoneScreens(steps, locale), [steps, locale]);
  const { activeIndex, setStepRef } = useNearestStep(steps.length, 0.58);

  return (
    <section className="landscape-story" aria-label="Miravelys product story">
      <div className="landscape-story__phone-column">
        <PhoneMockup
          screens={screens}
          activeIndex={activeIndex}
          variant="landscape-stage"
          className="phone-mockup--landscape-stage iphone13-frame--landscape"
          assetMode="screen-only"
          ariaLabel="Miravelys app screens"
        />
      </div>

      <div className="landscape-story__text-column">
        {steps.map((step, index) => (
          <article
            key={step.id}
            ref={node => setStepRef(index, node)}
            data-step-index={index}
            className={`landscape-story-step${index === activeIndex ? ' is-active' : ''}`}
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

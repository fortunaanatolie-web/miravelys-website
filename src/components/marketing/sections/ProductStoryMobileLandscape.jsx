import { useMemo } from 'react';
import { stepsToPhoneScreens } from '../../../lib/productStorySteps';
import { useNearestStep } from '../../../hooks/useNearestStep';
import PhoneMockup from '../primitives/PhoneMockup';
import ProductStoryStepContent from '../primitives/ProductStoryStepContent';

/**
 * Landscape mobile sticky story — portrait pattern, side-by-side.
 *
 * Sticky phone stage on the left (like portrait's top stage).
 * Text steps scroll in a dedicated column on the right; they never sit under the phone.
 */
export default function ProductStoryMobileLandscape({ steps, locale }) {
  const screens = useMemo(() => stepsToPhoneScreens(steps, locale), [steps, locale]);
  const { activeIndex, setStepRef } = useNearestStep(steps.length, 0.58);

  return (
    <div className="landscape-story" aria-label="Miravelys product story">
      <div className="landscape-story__stage" aria-hidden="true">
        <PhoneMockup
          screens={screens}
          activeIndex={activeIndex}
          variant="landscape-stage"
          className="phone-mockup--landscape-stage iphone13-frame--landscape"
          assetMode="screen-only"
          ariaLabel="Miravelys app screens"
        />
      </div>

      <div className="landscape-story__steps">
        {steps.map((step, index) => (
          <article
            key={step.id}
            ref={node => setStepRef(index, node)}
            data-step-index={index}
            className={`landscape-story__step${index === activeIndex ? ' is-active' : ''}`}
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
    </div>
  );
}

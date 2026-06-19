import { useMemo } from 'react';
import { stepsToPhoneScreens } from '../../../lib/productStorySteps';
import { useNearestStep } from '../../../hooks/useNearestStep';
import PhoneMockup from '../primitives/PhoneMockup';
import ProductStoryStepContent from '../primitives/ProductStoryStepContent';

/**
 * Portrait mobile sticky product story.
 *
 * A sticky media stage at the top holds the phone mockup.
 * Text steps scroll below it. The active screenshot changes as the
 * nearest step reaches the viewport center.
 */
export default function ProductStoryMobilePortrait({ steps, locale }) {
  const screens = useMemo(() => stepsToPhoneScreens(steps, locale), [steps, locale]);
  const { activeIndex, setStepRef } = useNearestStep(steps.length, 0.58);

  return (
    <div className="mobile-portrait-story">
      <div className="mobile-portrait-story__stage" aria-hidden="true">
        <PhoneMockup
          screens={screens}
          activeIndex={activeIndex}
          variant="mobile-stage"
          assetMode="screen-only"
          className="phone-mockup--mobile-stage"
          ariaLabel="Miravelys app screens"
        />
      </div>

      <div className="mobile-portrait-story__steps">
        {steps.map((step, index) => (
          <article
            key={step.id}
            ref={node => setStepRef(index, node)}
            data-step-index={index}
            className={`mobile-portrait-story__step${index === activeIndex ? ' is-active' : ''}`}
            aria-current={index === activeIndex ? 'step' : undefined}
          >
            <ProductStoryStepContent
              step={step}
              index={index}
              total={steps.length}
              variant="mobile-stage"
            />
          </article>
        ))}
      </div>
    </div>
  );
}

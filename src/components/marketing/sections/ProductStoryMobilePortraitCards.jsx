import { useMemo } from 'react';
import { stepsToPhoneScreens } from '../../../lib/productStorySteps';
import PhoneMockup from '../primitives/PhoneMockup';
import ProductStoryStepContent from '../primitives/ProductStoryStepContent';

/**
 * Portrait mobile fallback: stacked cards for very small screens
 * where a sticky stage would be too cramped.
 */
export default function ProductStoryMobilePortraitCards({ steps, locale }) {
  const screens = useMemo(() => stepsToPhoneScreens(steps, locale), [steps, locale]);

  return (
    <div className="stacked-story-mobile">
      {steps.map((step, index) => {
        const screen = screens[index];
        return (
          <article key={step.id} className="stacked-story-card">
            <div className="stacked-story-card__media">
              <PhoneMockup
                screens={screen ? [screen] : []}
                activeIndex={0}
                variant="mobile-card"
                assetMode="screen-only"
                className="phone-mockup--mobile-card"
              />
            </div>
            <div className="stacked-story-card__text">
              <ProductStoryStepContent step={step} index={index} total={steps.length} variant="stacked" />
            </div>
          </article>
        );
      })}
    </div>
  );
}

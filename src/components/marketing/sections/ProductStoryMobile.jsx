import { useMemo } from 'react';
import { resolvePresentation } from '../../../i18n/presentationCopy';
import PhoneMockup from '../primitives/PhoneMockup';
import ProductStoryStepContent from '../primitives/ProductStoryStepContent';
import { stepsToPhoneScreens } from '../../../lib/productStorySteps';

/** Portrait phones & tablet portrait — stacked cards instead of sticky scrollytelling. */
export default function ProductStoryMobile({ steps, locale }) {
  const presentation = resolvePresentation(locale ?? 'en');
  const screens = useMemo(() => stepsToPhoneScreens(steps, locale), [steps, locale]);

  return (
    <div className="product-story-mobile" data-sticky-phone-mode="mobile">
      {steps.map((step, index) => (
        <article key={step.id} className="story-step-card">
          <div className="story-step-card__phone-container">
            <PhoneMockup
              screens={[screens[index]]}
              activeIndex={0}
              variant="mobile-card"
              ariaLabel={presentation?.hero?.deviceLabel || 'Miravelys app screen'}
            />
          </div>
          <ProductStoryStepContent step={step} index={index} total={steps.length} variant="mobile" />
        </article>
      ))}
    </div>
  );
}

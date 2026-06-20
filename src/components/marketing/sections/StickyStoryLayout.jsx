import { useCallback, useEffect, useMemo } from 'react';
import { preloadMockupLanguage } from '../../../config/mockupScreens';
import { preloadMiravelysScreenshots } from '../../../lib/miravelysScreenshots';
import { stepsToPhoneScreens } from '../../../lib/productStorySteps';
import { useActiveStep } from '../../../hooks/useActiveStep';
import JourneyProgress from '../primitives/JourneyProgress';
import PhoneMockup from '../primitives/PhoneMockup';
import ProductStoryStepContent from '../primitives/ProductStoryStepContent';

/**
 * Shared sticky scrollytelling layout (desktop + landscape).
 */
export default function StickyStoryLayout({
  steps,
  locale,
  variant,
  presentation,
  progressAria,
}) {
  const { activeIndex, setStepRef, focusStep } = useActiveStep(steps.length);

  useEffect(() => {
    if (!locale) return undefined;
    preloadMiravelysScreenshots(locale);
    preloadMockupLanguage(locale);
    return undefined;
  }, [locale]);

  const screens = useMemo(() => stepsToPhoneScreens(steps, locale), [steps, locale]);
  const handleProgressSelect = useCallback(index => focusStep(index), [focusStep]);
  return (
    <div className={`sticky-story sticky-story--${variant}`} data-sticky-phone-mode={variant}>
      <div className="sticky-story__phone-column">
        <div className="sticky-story__phone-inner">
          <PhoneMockup
            screens={screens}
            activeIndex={activeIndex}
            variant="scroll-story"
            assetMode="screen-only"
            className={`phone-mockup--scroll-story iphone13-frame--${variant === 'tablet' ? 'tablet' : 'desktop'}`}
            ariaLabel={presentation?.hero?.deviceLabel || 'Miravelys app screens'}
          />
          {variant !== 'landscape' && presentation?.scenes ? (
            <JourneyProgress
              scenes={presentation.scenes}
              activeIndex={activeIndex}
              progressAria={progressAria}
              onStepSelect={handleProgressSelect}
              compact
            />
          ) : null}
        </div>
      </div>

      <div className="sticky-story__text-column">
        {steps.map((step, index) => (
          <article
            key={step.id}
            id={variant === 'desktop' ? step.sectionId || undefined : undefined}
            ref={node => setStepRef(index, node)}
            data-step-index={index}
            className={`story-step${index === activeIndex ? ' is-active story-step--active' : ''}`}
            aria-current={index === activeIndex ? 'step' : undefined}
          >
            <ProductStoryStepContent step={step} index={index} total={steps.length} variant={variant} />
          </article>
        ))}
      </div>
    </div>
  );
}

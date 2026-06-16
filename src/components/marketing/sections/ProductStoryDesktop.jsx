import { useCallback, useMemo } from 'react';
import { useActiveStep } from '../../../hooks/useActiveStep';
import JourneyProgress from '../primitives/JourneyProgress';
import StoryStep from '../primitives/StoryStep';
import PhoneMockup from '../primitives/PhoneMockup';

/**
 * Desktop / tablet landscape sticky-phone scrollytelling.
 */
export default function ProductStoryDesktop({ steps, lang, presentation }) {
  const { activeIndex, setStepRef, focusStep } = useActiveStep(steps.length);
  const activeStep = steps[activeIndex] ?? steps[0];

  const screens = useMemo(
    () =>
      steps.map(step => ({
        id: step.id,
        ...step.screen,
        lang,
      })),
    [lang, steps]
  );

  const handleProgressSelect = useCallback(index => focusStep(index), [focusStep]);

  return (
    <div
      className="marketing-scroll-story__layout sticky-phone-story__layout desktop-story__layout"
      data-journey-mood={activeStep?.mood ?? 'default'}
    >
      <div
        className="marketing-scroll-story__phone-column sticky-phone-story__phone"
        aria-label={presentation.hero?.deviceLabel}
      >
        <div className="marketing-scroll-story__phone-inner">
          <PhoneMockup
            screens={screens}
            activeIndex={activeIndex}
            size="chapter"
            mood={activeStep?.mood}
            priorityFirst
            glow
            atmosphere
            reflection={false}
            floorShadow
            className="phone-mockup--scroll-story"
            ariaLabel={presentation.hero?.deviceLabel || 'Miravelys app screens'}
          />
          <JourneyProgress
            scenes={presentation.scenes}
            activeIndex={activeIndex}
            progressAria={presentation.journey?.progressAria}
            onStepSelect={handleProgressSelect}
            compact
          />
        </div>
      </div>

      <div className="marketing-scroll-story__text-column sticky-phone-story__steps">
        {steps.map((step, index) => (
          <StoryStep
            key={step.id}
            step={step}
            index={index}
            stepTotal={steps.length}
            active={activeIndex === index}
            setPanelRef={setStepRef}
          />
        ))}
      </div>
    </div>
  );
}

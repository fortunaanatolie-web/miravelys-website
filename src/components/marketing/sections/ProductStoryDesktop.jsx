import { useCallback, useMemo } from 'react';
import { useActiveStep } from '../../../hooks/useActiveStep';
import {
  useLandscapePhoneStory,
  useStoryScrollytellingEnabled,
} from '../../../hooks/useLandscapePhoneStory';
import JourneyProgress from '../primitives/JourneyProgress';
import StoryStep from '../primitives/StoryStep';
import PhoneMockup from '../primitives/PhoneMockup';

/**
 * Desktop / tablet landscape sticky-phone scrollytelling.
 */
export default function ProductStoryDesktop({ steps, lang, presentation }) {
  const { compact: landscapeCompact } = useLandscapePhoneStory();
  const scrollytellingEnabled = useStoryScrollytellingEnabled();
  const { activeIndex, setStepRef, focusStep } = useActiveStep(steps.length, {
    enabled: scrollytellingEnabled,
    preferCenterScroll: landscapeCompact,
    rootMargin: landscapeCompact ? '-8% 0px -8% 0px' : '-25% 0px -25% 0px',
    minRatio: landscapeCompact ? 0.05 : 0.18,
  });
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
      className={`marketing-scroll-story__layout sticky-phone-story__layout desktop-story__layout${landscapeCompact ? ' sticky-phone-story__layout--landscape' : ''}`}
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
            glow={!landscapeCompact}
            atmosphere={!landscapeCompact}
            reflection={!landscapeCompact}
            floorShadow={!landscapeCompact}
            className={`phone-mockup--scroll-story${landscapeCompact ? ' phone-mockup--landscape-compact' : ''}`}
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

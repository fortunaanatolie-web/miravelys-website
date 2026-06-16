import { useCallback, useEffect, useMemo } from 'react';
import { preloadMockupLanguage } from '../../../config/mockupScreens';
import { preloadMiravelysScreenshots } from '../../../lib/miravelysScreenshots';
import { useActiveStep } from '../../../hooks/useActiveStep';
import { useStickyPhoneScreens, useStickyPhoneStoryMode } from '../../../hooks/useStickyPhoneStory';
import JourneyProgress from '../primitives/JourneyProgress';
import StoryStep from '../primitives/StoryStep';
import PhoneMockup from '../primitives/PhoneMockup';

/**
 * Sticky-phone scrollytelling — desktop + compact landscape.
 * Portrait mobile uses ProductStoryMobile instead (CSS display toggle).
 */
export default function ProductStoryDesktop({ steps, lang, presentation }) {
  const mode = useStickyPhoneStoryMode();
  const { activeIndex, setStepRef, focusStep } = useActiveStep(steps.length);
  const activeStep = steps[activeIndex] ?? steps[0];

  useEffect(() => {
    if (!lang) return undefined;
    preloadMiravelysScreenshots(lang);
    preloadMockupLanguage(lang);
    return undefined;
  }, [lang]);

  const screens = useMemo(
    () =>
      steps.map(step => ({
        id: step.id,
        ...step.screen,
        lang,
      })),
    [lang, steps]
  );

  const displayScreens = useStickyPhoneScreens(screens, activeIndex, mode);
  const isLandscape = mode === 'landscape';

  const handleProgressSelect = useCallback(index => focusStep(index), [focusStep]);

  return (
    <div
      className={`marketing-scroll-story__layout sticky-phone-story__layout desktop-story__layout${isLandscape ? ' sticky-phone-story__layout--landscape' : ''}`}
      data-journey-mood={activeStep?.mood ?? 'default'}
      data-sticky-phone-mode={mode}
    >
      <div
        className="marketing-scroll-story__phone-column sticky-phone-story__phone"
        aria-label={presentation.hero?.deviceLabel}
      >
        <div className="marketing-scroll-story__phone-inner">
          <PhoneMockup
            key={isLandscape ? `landscape-${activeIndex}` : 'desktop-stack'}
            screens={displayScreens}
            activeIndex={isLandscape ? 0 : activeIndex}
            size={isLandscape ? 'landscape' : 'chapter'}
            mood={activeStep?.mood}
            priorityFirst
            singleScreen={isLandscape}
            glow={!isLandscape}
            atmosphere={!isLandscape}
            reflection={false}
            floorShadow={!isLandscape}
            className={`phone-mockup--scroll-story${isLandscape ? ' phone-mockup--landscape-compact' : ''}`}
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

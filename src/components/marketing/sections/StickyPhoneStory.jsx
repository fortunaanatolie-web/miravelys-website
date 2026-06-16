import { useCallback, useEffect, useMemo } from 'react';
import { buildMarketingSteps } from '../../../lib/buildMarketingSteps';
import { preloadMiravelysScreenshots } from '../../../lib/miravelysScreenshots';
import { resolvePresentation } from '../../../i18n/presentationCopy';
import { useActiveStep } from '../../../hooks/useActiveStep';
import JourneyProgress from '../primitives/JourneyProgress';
import RevealOnScroll from '../primitives/RevealOnScroll';
import StoryStep from '../primitives/StoryStep';
import PhoneMockup from '../primitives/PhoneMockup';

/**
 * Sticky phone scrollytelling — one stable phone, internal screens crossfade on scroll.
 */
export default function StickyPhoneStory({ lang, t, steps: stepsProp }) {
  const steps = useMemo(
    () => stepsProp ?? (lang ? buildMarketingSteps(lang) : []),
    [stepsProp, lang]
  );
  const presentation = resolvePresentation(lang ?? 'en');
  const { activeIndex, setStepRef, focusStep } = useActiveStep(steps.length);
  const activeStep = steps[activeIndex] ?? steps[0];
  const works = t?.works;

  useEffect(() => {
    if (lang) preloadMiravelysScreenshots(lang);
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

  const handleProgressSelect = useCallback(index => focusStep(index), [focusStep]);

  if (!steps.length) return null;

  return (
    <section
      id="works"
      className="marketing-scroll-story sticky-phone-story scroll-story reveal-journey"
      aria-label={presentation.journey?.progressAria || 'Miravelys product story'}
      data-journey-mood={activeStep?.mood ?? 'default'}
    >
      {works ? (
        <RevealOnScroll className="marketing-scroll-story__intro sticky-phone-story__intro reveal-journey__intro" variant="blur-in">
          <p className="eyebrow">{works.eyebrow}</p>
          <h2 className="reveal-journey__title">{works.title}</h2>
          <p className="reveal-journey__lead">{works.intro}</p>
        </RevealOnScroll>
      ) : null}

      <div className="marketing-scroll-story__layout sticky-phone-story__layout">
        <div className="marketing-scroll-story__phone-column sticky-phone-story__phone" aria-label={presentation.hero?.deviceLabel}>
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
    </section>
  );
}

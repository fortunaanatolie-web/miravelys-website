import { productSceneOrder } from '../../../config/productScenes';
import { resolvePresentation } from '../../../i18n/presentationCopy';
import { useRevealSteps } from '../../../hooks/useRevealSteps';
import JourneyProgress from '../primitives/JourneyProgress';
import RevealOnScroll from '../primitives/RevealOnScroll';
import RevealStepPanel from '../primitives/RevealStepPanel';
import RevealingDeviceFrame from '../primitives/RevealingDeviceFrame';

export default function ProductRevealJourney({ lang, t, heroReveal = 1 }) {
  const presentation = resolvePresentation(lang);
  const { activeIndex, setPanelRef } = useRevealSteps(productSceneOrder.length);
  const activeConfig = productSceneOrder[activeIndex] ?? productSceneOrder[0];
  const deviceReveal = 1;
  const works = t?.works;

  return (
    <section
      id="works"
      className="reveal-journey"
      aria-label={presentation.journey?.progressAria || presentation.hero?.deviceLabel || 'Miravelys'}
      data-journey-mood={activeConfig.mood ?? activeConfig.tone ?? 'default'}
    >
      {works ? (
        <RevealOnScroll className="reveal-journey__intro" variant="blur-in">
          <p className="eyebrow">{works.eyebrow}</p>
          <h2 className="reveal-journey__title">{works.title}</h2>
          <p className="reveal-journey__lead">{works.intro}</p>
        </RevealOnScroll>
      ) : null}

      <div className="reveal-journey__layout">
        <div className="reveal-journey__device-rail" aria-label={presentation.hero?.deviceLabel}>
          <div className="reveal-journey__device-sticky">
            <JourneyProgress
              scenes={presentation.scenes}
              activeIndex={activeIndex}
              progressAria={presentation.journey?.progressAria}
            />
            <RevealingDeviceFrame
              lang={lang}
              steps={productSceneOrder}
              activeIndex={activeIndex}
              revealLevel={deviceReveal}
              size="chapter"
              mood={activeConfig.mood ?? activeConfig.tone}
              float={false}
              scrollLinked={false}
            />
            {activeConfig.key === 'calmFirst' && presentation.scenes.calmFirst?.doors ? (
              <ul className="reveal-journey__orbit reveal-journey__orbit--desktop" aria-hidden="true">
                {presentation.scenes.calmFirst.doors.map((door, i) => (
                  <li key={door.label} style={{ '--orbit-i': i }}>
                    {door.label}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        <div className="reveal-journey__steps">
          {productSceneOrder.map((config, index) => {
            const scene = presentation.scenes[config.key];
            if (!scene) return null;

            return (
              <RevealStepPanel
                key={config.key}
                scene={scene}
                config={config}
                index={index}
                stepTotal={productSceneOrder.length}
                isActive={activeIndex === index}
                setPanelRef={setPanelRef}
                showDoors={config.key === 'calmFirst'}
                doorsAriaLabel={presentation.scenes.calmFirst?.doorsAriaLabel}
                lang={lang}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

import PhoneMockup from '../primitives/PhoneMockup';

/**
 * Mobile-native stacked product story — one screenshot + copy per card, no sticky scroll sync.
 */
export default function ProductStoryMobile({ steps, lang }) {
  const stepTotal = steps.length;

  return (
    <div className="mobile-product-story">
      {steps.map((step, index) => {
        const stepLabel = `${String(index + 1).padStart(2, '0')} / ${String(stepTotal).padStart(2, '0')}`;
        const showDoors = step.id === 'calmFirst' && step.doors?.length;
        const screen = { id: step.id, ...step.screen, lang };

        return (
          <article
            key={step.id}
            id={step.sectionId || undefined}
            className="mobile-product-card"
            data-step-index={index}
            data-journey-mood={step.mood ?? 'default'}
          >
            <div className="mobile-product-card__media">
              <PhoneMockup
                screens={[screen]}
                activeIndex={0}
                size="mobile-card"
                mood={step.mood}
                priorityFirst={index < 2}
                glow={false}
                atmosphere={false}
                reflection={false}
                floorShadow={false}
                className="phone-mockup--mobile-card"
                ariaLabel={step.screen?.alt || step.title}
              />
            </div>

            <div className="mobile-product-card__content">
              <p className="mobile-product-card__count" aria-hidden="true">
                {stepLabel}
              </p>
              <p className="mobile-product-card__eyebrow">{step.eyebrow}</p>
              <h2 className="mobile-product-card__title">{step.title}</h2>
              <p className="mobile-product-card__body">{step.body}</p>
              {step.shift ? <p className="mobile-product-card__whisper">{step.shift}</p> : null}
              {showDoors ? (
                <ul
                  className="mobile-product-card__doors"
                  aria-label={step.doorsAriaLabel || step.eyebrow}
                >
                  {step.doors.map(door => (
                    <li key={door.label}>{door.label}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </article>
        );
      })}
    </div>
  );
}

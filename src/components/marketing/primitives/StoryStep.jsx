/**
 * One explanation panel in the sticky-phone scroll story. Phone lives in the sticky column.
 */
export default function StoryStep({ step, index, stepTotal, active, setPanelRef }) {
  const stepLabel =
    stepTotal > 0 ? `${String(index + 1).padStart(2, '0')} / ${String(stepTotal).padStart(2, '0')}` : null;
  const showDoors = step.id === 'calmFirst' && step.doors?.length;

  return (
    <article
      id={step.sectionId || undefined}
      ref={node => setPanelRef?.(index, node)}
      data-step-index={index}
      className={`story-step reveal-step ${active ? 'is-active story-step--active reveal-step--active' : ''} reveal-step--mood-${step.mood ?? 'default'}`}
      aria-current={active ? 'step' : undefined}
    >
      <div className="story-step__content reveal-step__content">
        {stepLabel ? (
          <p className="story-step__index reveal-step__index" aria-hidden="true">
            {stepLabel}
          </p>
        ) : null}
        <p className="story-step__eyebrow reveal-step__eyebrow">{step.eyebrow}</p>
        <h2 className="story-step__headline reveal-step__headline">{step.title}</h2>
        <p className="story-step__body reveal-step__subline">{step.body}</p>
        {step.shift ? <p className="story-step__whisper reveal-step__whisper">{step.shift}</p> : null}

        {showDoors ? (
          <ul
            className="story-step__doors reveal-step__orbit-tags"
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
}

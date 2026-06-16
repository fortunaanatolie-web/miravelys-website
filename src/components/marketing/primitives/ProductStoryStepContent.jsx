/**
 * Shared copy block for product story steps (desktop, landscape, mobile).
 */
export default function ProductStoryStepContent({ step, index, total, variant = 'sticky' }) {
  const stepLabel =
    total > 0 ? `${String(index + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}` : null;
  const note = step.note ?? step.shift;
  const showDoors = step.id === 'calmFirst' && step.doors?.length;

  return (
    <div className={`story-step__content story-step__content--${variant}`}>
      {stepLabel ? (
        <p className="story-step__index" aria-hidden="true">
          {stepLabel}
        </p>
      ) : null}
      <p className="story-step__eyebrow">{step.eyebrow}</p>
      <h2 className="story-step__headline story-step__title">{step.title}</h2>
      <p className="story-step__body">{step.body}</p>
      {note ? <p className="story-step__whisper story-step__note">{note}</p> : null}
      {showDoors ? (
        <ul className="story-step__doors" aria-label={step.doorsAriaLabel || step.eyebrow}>
          {step.doors.map(door => (
            <li key={door.label}>{door.label}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

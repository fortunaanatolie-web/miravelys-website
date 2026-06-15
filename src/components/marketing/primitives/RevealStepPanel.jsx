import RevealingDeviceFrame from './RevealingDeviceFrame';

export default function RevealStepPanel({
  scene,
  config,
  index,
  stepTotal,
  isActive,
  setPanelRef,
  showDoors = false,
  doorsAriaLabel,
  lang,
}) {
  const mood = config.mood ?? config.tone ?? 'default';
  const stepLabel =
    stepTotal > 0 ? `${String(index + 1).padStart(2, '0')} / ${String(stepTotal).padStart(2, '0')}` : null;

  return (
    <article
      id={config.sectionId || undefined}
      ref={node => setPanelRef(index, node)}
      data-step-index={index}
      className={`reveal-step ${isActive ? 'reveal-step--active' : ''} reveal-step--mood-${mood}`}
      aria-current={isActive ? 'step' : undefined}
    >
      <div className="reveal-step__backdrop" aria-hidden="true" />

      <div className="reveal-step__mobile-device" aria-hidden="true">
        <RevealingDeviceFrame
          lang={lang}
          steps={[config]}
          activeIndex={0}
          revealLevel={isActive ? 1 : 0.65}
          size="chapter"
          mood={mood}
          float={false}
        />
      </div>

      <div className="reveal-step__content">
        {stepLabel ? <p className="reveal-step__index" aria-hidden="true">{stepLabel}</p> : null}
        <p className="reveal-step__eyebrow">{scene.eyebrow}</p>
        <h2 className="reveal-step__headline">{scene.title}</h2>
        <p className="reveal-step__subline">{scene.body}</p>
        {scene.shift ? <p className="reveal-step__whisper">{scene.shift}</p> : null}

        {showDoors && scene.doors ? (
          <ul className="reveal-step__orbit-tags" aria-label={doorsAriaLabel || scene.doorsAriaLabel || scene.eyebrow}>
            {scene.doors.map(door => (
              <li key={door.label}>{door.label}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}

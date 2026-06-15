import { productSceneOrder } from '../../../config/productScenes';
import { scrollToSection } from '../../../lib/scrollToSection';

export default function JourneyProgress({ scenes, activeIndex, progressAria }) {
  return (
    <nav className="journey-progress" aria-label={progressAria}>
      <ol className="journey-progress__list">
        {productSceneOrder.map((config, index) => {
          const scene = scenes[config.key];
          const label = scene?.eyebrow || config.key;
          const isActive = index === activeIndex;

          return (
            <li key={config.key}>
              <button
                type="button"
                className={`journey-progress__step ${isActive ? 'journey-progress__step--active' : ''}`}
                aria-current={isActive ? 'step' : undefined}
                aria-label={label}
                onClick={() => scrollToSection(config.sectionId)}
              >
                <span className="journey-progress__dot" aria-hidden="true" />
                <span className="journey-progress__label">{label}</span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

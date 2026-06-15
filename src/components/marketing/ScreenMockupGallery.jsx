import { useEffect, useRef } from 'react';
import { mockupScreens } from '../../config/mockupScreens';
import { resolveMockup } from '../../i18n/mockupResolver';
import PhoneMockup from './primitives/PhoneMockup';
import '../../styles/mockup-screens.css';

function screenLabel(mock, copyKey) {
  const block = mock[copyKey];
  if (!block) return copyKey;
  return block.screenLabel || block.title || copyKey;
}

export default function ScreenMockupGallery({ lang, activeId, onSelect }) {
  const mock = resolveMockup(lang);
  const cardRefs = useRef({});

  useEffect(() => {
    if (!activeId) return;
    cardRefs.current[activeId]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [activeId]);

  return (
    <div className="mockup-screen-grid" aria-live="polite">
      {mockupScreens.map((screen, index) => {
        const label = screenLabel(mock, screen.copyKey);
        const isActive = activeId === screen.id;

        return (
          <figure
            key={screen.id}
            id={`mockup-card-${screen.id}`}
            className={`mockup-screen-card ${isActive ? 'mockup-screen-card--active' : ''}`}
          >
            <button
              type="button"
              className="mockup-screen-select"
              aria-pressed={isActive}
              aria-label={label}
              onClick={() => onSelect?.(screen.id)}
              ref={node => {
                cardRefs.current[screen.id] = node;
              }}
            >
              <PhoneMockup
                as="div"
                screens={[
                  {
                    id: screen.id,
                    asset: screen.asset,
                    lang,
                    alt: label,
                  },
                ]}
                size="gallery"
                priorityFirst={index < 2}
                glow={isActive}
                atmosphere={isActive}
                reflection={false}
                floorShadow={isActive}
                className={isActive ? 'phone-mockup--gallery-active' : ''}
                ariaLabel={label}
              />
            </button>
            {isActive ? (
              <figcaption className="mockup-screen-caption mockup-screen-caption--minimal">
                <span className="mockup-screen-label">{label}</span>
              </figcaption>
            ) : null}
          </figure>
        );
      })}
    </div>
  );
}

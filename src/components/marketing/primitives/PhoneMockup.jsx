import { buildResponsiveImageProps } from '../../../lib/responsiveImage';
import { mockupScreenDisplayDimensions } from '../../../config/imageAssets';
import { useMockupScreenImage } from '../../../hooks/useMockupScreenImage';

export const PHONE_MOCKUP_SIZES = {
  hero: '(min-width: 981px) 440px, (min-width: 640px) 76vw, 92vw',
  chapter: '(min-width: 981px) 400px, (min-width: 640px) 72vw, 88vw',
  gallery: '(min-width: 981px) 220px, (min-width: 640px) 42vw, 78vw',
  compact: '(min-width: 981px) 280px, (min-width: 640px) 56vw, 84vw',
};

function MockupScreenImage({ screen, sizes, priorityFirst, index, isActive, isStack }) {
  const src = useMockupScreenImage(screen.lang, screen.asset, screen.src);
  const imageProps = buildResponsiveImageProps({
    src: src || undefined,
    width: mockupScreenDisplayDimensions.width,
    height: mockupScreenDisplayDimensions.height,
    sizes,
    alt: screen.alt ?? `Miravelys ${screen.id ?? 'app'} screen`,
    loading: priorityFirst && index === 0 ? 'eager' : 'lazy',
    fetchPriority: priorityFirst && index === 0 ? 'high' : undefined,
  });

  const frameClass = `phone-mockup__screen-frame ${isActive ? 'phone-mockup__screen-frame--active' : ''}`;

  if (!src) {
    return (
      <div
        className={frameClass}
        data-screen-index={index}
        aria-hidden={isStack ? !isActive : undefined}
      >
        <div className="phone-mockup__screen-crop">
          <div className="phone-mockup__screen phone-mockup__screen--loading" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={frameClass}
      data-screen-index={index}
      aria-hidden={isStack ? !isActive : undefined}
    >
      <div className="phone-mockup__screen-crop">
        <img {...imageProps} className="phone-mockup__screen" />
      </div>
    </div>
  );
}

/**
 * Premium phone mockup — screen-only PNG assets with immersive depth shadows.
 */
export default function PhoneMockup({
  screens,
  activeIndex = 0,
  size = 'chapter',
  mood = 'default',
  priorityFirst = false,
  className = '',
  clarity = 1,
  glow = true,
  atmosphere = true,
  reflection = true,
  floorShadow = true,
  dimInactive = false,
  figureRef,
  ariaLabel = 'Miravelys app',
  style,
  as: Tag = 'figure',
}) {
  const sizes = PHONE_MOCKUP_SIZES[size] ?? PHONE_MOCKUP_SIZES.chapter;
  const isStack = screens.length > 1;

  return (
    <Tag
      ref={figureRef}
      className={`phone-mockup phone-mockup--${size} phone-mockup--mood-${mood} ${className}`.trim()}
      style={{ '--phone-clarity': clarity, ...style }}
      role={Tag !== 'figure' ? 'img' : undefined}
      aria-label={ariaLabel}
    >
      {atmosphere ? <div className="phone-mockup__atmosphere" aria-hidden="true" /> : null}
      {glow ? (
        <>
          <div className="phone-mockup__spotlight" aria-hidden="true" />
          <div className="phone-mockup__glow" aria-hidden="true" />
        </>
      ) : null}

      <div className="phone-mockup__device">
        <div className={`phone-mockup__screen-stack${isStack ? ' phone-mockup__screen-stack--crossfade' : ''}`}>
          {screens.map((screen, index) => {
            const isActive = index === activeIndex;

            return (
              <MockupScreenImage
                key={screen.id ?? screen.asset ?? screen.src ?? index}
                screen={screen}
                sizes={sizes}
                priorityFirst={priorityFirst}
                index={index}
                isActive={isActive}
                isStack={isStack}
              />
            );
          })}
        </div>
        {dimInactive ? (
          <div
            className="phone-mockup__dim"
            aria-hidden="true"
            style={{ opacity: Math.max(0, 0.45 - clarity * 0.45) }}
          />
        ) : null}
      </div>

      {reflection ? <div className="phone-mockup__reflection" aria-hidden="true" /> : null}
      {floorShadow ? <div className="phone-mockup__floor-shadow" aria-hidden="true" /> : null}
    </Tag>
  );
}

import { buildResponsiveImageProps } from '../../../lib/responsiveImage';
import { mockupScreenDisplayDimensions } from '../../../config/imageAssets';
import { useMiravelysScreenshot } from '../../../hooks/useMiravelysScreenshot';
import ScreenshotPlaceholder from './ScreenshotPlaceholder';

export const PHONE_MOCKUP_SIZES = {
  hero: '(min-width: 981px) 440px, (min-width: 640px) 76vw, 92vw',
  chapter: '(min-width: 981px) 400px, (min-width: 640px) 72vw, 88vw',
  gallery: '(min-width: 981px) 220px, (min-width: 640px) 42vw, 78vw',
  compact: '(min-width: 981px) 280px, (min-width: 640px) 56vw, 84vw',
};

function MockupScreenImage({ screen, sizes, priorityFirst, index, isActive, isStack, activeIndex }) {
  const { src, status, missing, isDev, alt } = useMiravelysScreenshot(screen, screen.lang);
  const shouldPrioritize = priorityFirst && (index === activeIndex || index === 0);
  const imageProps = buildResponsiveImageProps({
    src: src || undefined,
    width: mockupScreenDisplayDimensions.width,
    height: mockupScreenDisplayDimensions.height,
    sizes,
    alt: alt || screen.alt || `Miravelys ${screen.id ?? 'app'} screen`,
    loading: shouldPrioritize ? 'eager' : 'lazy',
    fetchPriority: shouldPrioritize ? 'high' : undefined,
  });

  const frameClass = `phone-mockup__screen-frame ${isActive ? 'phone-mockup__screen-frame--active' : ''}`;

  if (status === 'loading' && !src) {
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

  if (!src && status === 'missing') {
    return (
      <div
        className={frameClass}
        data-screen-index={index}
        aria-hidden={isStack ? !isActive : undefined}
      >
        <div className="phone-mockup__screen-crop">
          {isDev ? (
            <ScreenshotPlaceholder missing={missing} className="screenshot-placeholder--visible" />
          ) : (
            <div className="phone-mockup__screen production-missing-screen" role="img" aria-label={alt} />
          )}
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
 * Premium phone mockup — internal screen assets inside CSS device frame.
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
                key={screen.id ?? `${screen.group}-${screen.code}` ?? index}
                screen={screen}
                sizes={sizes}
                priorityFirst={priorityFirst}
                index={index}
                isActive={isActive}
                isStack={isStack}
                activeIndex={activeIndex}
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

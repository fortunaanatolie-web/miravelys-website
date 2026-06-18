import { buildResponsiveImageProps } from '../../../lib/responsiveImage';
import { mockupScreenDisplayDimensions } from '../../../config/imageAssets';
import { useMiravelysScreenshot } from '../../../hooks/useMiravelysScreenshot';
import ScreenshotPlaceholder from './ScreenshotPlaceholder';

function PhoneScreenImage({ screen, isActive, eager }) {
  const { src, status, missing, isDev, alt } = useMiravelysScreenshot(screen, screen.lang ?? screen.locale);
  const className = `phone-screen-image phone-mockup__screen${isActive ? ' is-active phone-mockup__screen-frame--active' : ''}`;

  if (status === 'loading' && !src) {
    return (
      <div className={`phone-mockup__screen-frame ${isActive ? 'phone-mockup__screen-frame--active' : ''}`} aria-hidden={!isActive}>
        <div className="phone-mockup__screen-crop">
          <div className="phone-mockup__screen phone-mockup__screen--loading" />
        </div>
      </div>
    );
  }

  if (!src && status === 'missing') {
    return (
      <div className={`phone-mockup__screen-frame ${isActive ? 'phone-mockup__screen-frame--active' : ''}`} aria-hidden={!isActive}>
        <div className="phone-mockup__screen-crop">
          {isDev ? (
            <ScreenshotPlaceholder
              missing={missing || { group: 'sticky-phone', code: screen.code ?? '?', locale: screen.locale ?? '?', expected: screen.publicPath ?? '' }}
              className="screenshot-placeholder--visible"
            />
          ) : (
             <div className="phone-mockup__screen phone-mockup__screen--loading" />
          )}
        </div>
      </div>
    );
  }

  const imageProps = buildResponsiveImageProps({
    src,
    width: mockupScreenDisplayDimensions.width,
    height: mockupScreenDisplayDimensions.height,
    sizes: 'min(430px, 32vw)',
    alt: alt || screen.alt || 'Miravelys app screen',
    loading: eager ? 'eager' : 'lazy',
    fetchPriority: eager ? 'high' : undefined,
  });

  return (
    <div className={`phone-mockup__screen-frame ${isActive ? 'phone-mockup__screen-frame--active' : ''}`} aria-hidden={!isActive}>
      <div className="phone-mockup__screen-crop">
        <img {...imageProps} className={className} />
      </div>
    </div>
  );
}

/**
 * Sticky-phone mockup — one stable frame, internal screens crossfade by activeIndex.
 */
export default function PhoneMockup({
  screens = [],
  activeIndex = 0,
  variant = 'sticky',
  className = '',
  ariaLabel = 'Miravelys app',
}) {
  const safeIndex =
    Number.isFinite(activeIndex) && activeIndex >= 0 && activeIndex < screens.length
      ? activeIndex
      : 0;

  if (!screens.length) {
    return (
      <figure className={`phone-frame phone-mockup phone-mockup--missing ${className}`.trim()} aria-label={ariaLabel}>
        <div className="phone-frame phone-frame--missing">
          <div className="phone-screen phone-screen--missing">Missing screens</div>
        </div>
      </figure>
    );
  }

  const isStack = screens.length > 1;

  return (
    <figure
      className={`phone-frame phone-mockup phone-mockup--${variant} ${className}`.trim()}
      aria-label={ariaLabel}
    >
      <div className="phone-mockup__device phone-screen">
        <div className={`phone-mockup__screen-stack${isStack ? ' phone-mockup__screen-stack--crossfade phone-mockup__screen-stack--sticky' : ''}`}>
          {screens.map((screen, index) => (
            <PhoneScreenImage
              key={screen.id}
              screen={screen}
              isActive={index === safeIndex}
              eager={index === 0 || index === safeIndex}
            />
          ))}
        </div>
      </div>
    </figure>
  );
}

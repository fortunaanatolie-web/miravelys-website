import { useCallback, useState } from 'react';
import { buildResponsiveImageProps } from '../../../lib/responsiveImage';
import { mockupScreenDisplayDimensions } from '../../../config/imageAssets';
import { SCREENSHOT_ASSET_MODE } from '../../../lib/miravelysScreenshots';
import { useMiravelysScreenshot } from '../../../hooks/useMiravelysScreenshot';
import { reportPhoneScreenshotDebug } from '../../../lib/phoneScreenshotDebug';
import ScreenshotPlaceholder from './ScreenshotPlaceholder';

/** @typedef {'screen-only' | 'already-framed'} ScreenshotAssetMode */

/** iPhone 13 Pro logical viewport — 390×844 CSS px */
const IPHONE13_LAYOUT_CLASS = {
  'mobile-stage': 'iphone13-frame--mobile-stage',
  'landscape-stage': 'iphone13-frame--landscape',
  'mobile-card': 'iphone13-frame--mobile-card',
};

function resolveAssetMode(screen, componentMode) {
  return screen?.assetMode ?? componentMode ?? SCREENSHOT_ASSET_MODE;
}

function PhoneScreenImage({ screen, isActive, eager, assetMode = 'screen-only' }) {
  const mode = resolveAssetMode(screen, assetMode);
  const { src, status, missing, isDev, alt } = useMiravelysScreenshot(screen, screen.lang ?? screen.locale);
  const isFramed = mode === 'already-framed';
  const [ratioInvalid, setRatioInvalid] = useState(false);

  const handleLoad = useCallback(
    event => {
      const img = event.currentTarget;
      const valid = reportPhoneScreenshotDebug({
        screen,
        src: img.currentSrc || img.src,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
        assetMode: mode,
        renderMode: isFramed ? 'contain' : 'cover',
      });
      if (isDev && !valid && mode === 'screen-only') {
        setRatioInvalid(true);
      }
    },
    [screen, mode, isFramed, isDev],
  );

  if (status === 'loading' && !src) {
    return (
      <div
        className={`iphone13-screen-image iphone13-screen-image--loading${isActive ? ' is-active' : ''}`}
        aria-hidden={!isActive}
      />
    );
  }

  if ((!src && status === 'missing') || ratioInvalid) {
    return isDev ? (
      <ScreenshotPlaceholder
        missing={
          missing || {
            group: 'sticky-phone',
            code: screen.code ?? '?',
            locale: screen.locale ?? '?',
            expected: screen.publicPath ?? src ?? '',
            problem: ratioInvalid
              ? 'invalid iPhone 13 Pro screen ratio (expected 0.455–0.470)'
              : 'missing file / image failed to load',
          }
        }
        className={`screenshot-placeholder--phone screenshot-placeholder--visible${isActive ? ' is-active' : ''}`}
      />
    ) : (
      <div
        className={`iphone13-screen-image iphone13-screen-image--loading${isActive ? ' is-active' : ''}`}
        aria-hidden={!isActive}
      />
    );
  }

  const imageProps = buildResponsiveImageProps({
    src,
    width: mockupScreenDisplayDimensions.width,
    height: mockupScreenDisplayDimensions.height,
    sizes: 'min(430px, 72vw)',
    alt: alt || screen.alt || 'Miravelys app screen',
    loading: eager ? 'eager' : 'lazy',
  });

  return (
    <img
      {...imageProps}
      fetchpriority={eager ? 'high' : undefined}
      onLoad={handleLoad}
      className={[
        'iphone13-screen-image',
        isFramed ? 'iphone13-screen-image--framed' : 'iphone13-screen-image--screen-only',
        isActive ? 'is-active' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      aria-hidden={!isActive}
    />
  );
}

/**
 * Sticky-phone mockup — iPhone 13 Pro frame (390×844), screen-only screenshots inside.
 * @param {ScreenshotAssetMode} assetMode
 */
export default function PhoneMockup({
  screens = [],
  activeIndex = 0,
  variant = 'sticky',
  assetMode = SCREENSHOT_ASSET_MODE,
  className = '',
  ariaLabel = 'Miravelys app',
}) {
  const safeIndex =
    Number.isFinite(activeIndex) && activeIndex >= 0 && activeIndex < screens.length
      ? activeIndex
      : 0;
  const framed = assetMode === 'already-framed';
  const layoutClass = IPHONE13_LAYOUT_CLASS[variant] ?? '';

  if (!screens.length) {
    return (
      <figure
        className={`iphone13-frame phone-mockup phone-mockup--missing ${layoutClass} ${className}`.trim()}
        aria-label={ariaLabel}
      >
        <div className="iphone13-rim">
          <div className="iphone13-screen iphone13-screen--missing">Missing phone screens</div>
        </div>
      </figure>
    );
  }

  return (
    <figure
      className={[
        'iphone13-frame',
        'phone-mockup',
        `phone-mockup--${variant}`,
        layoutClass,
        framed ? 'phone-mockup--framed-asset iphone13-frame--framed-asset' : 'phone-mockup--screen-only',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-label={ariaLabel}
    >
      <div className="iphone13-rim">
        <div className="iphone13-screen">
          {screens.map((screen, index) => (
            <PhoneScreenImage
              key={screen.id}
              screen={screen}
              isActive={index === safeIndex}
              eager={index === 0 || index === safeIndex}
              assetMode={assetMode}
            />
          ))}
        </div>
      </div>
    </figure>
  );
}

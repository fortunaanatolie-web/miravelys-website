import PhoneMockup from './PhoneMockup';
import { useInViewProgress } from '../../../hooks/useInViewProgress';
import { resolveMockupGalleryScreenshot } from '../../../lib/miravelysScreenshots';

export default function DeviceFrame({
  lang,
  mockupId,
  screenshot,
  alt,
  label,
  priority = false,
  className = '',
  size = 'compact',
  showCaption = false,
  parallax = true,
}) {
  const { ref, progress } = useInViewProgress();
  const scale = parallax ? 0.94 + progress * 0.06 : 1;
  const opacity = parallax ? 0.88 + progress * 0.12 : 1;
  const screen =
    screenshot ??
    (mockupId ? resolveMockupGalleryScreenshot(mockupId, lang) : null);

  if (!screen) return null;

  return (
    <figure
      ref={parallax ? ref : undefined}
      className={`device-frame device-frame--${size} ${className}`.trim()}
      data-mockup-id={mockupId}
      style={parallax ? { '--device-scale': scale, '--device-opacity': opacity } : undefined}
    >
      <PhoneMockup
        as="div"
        screens={[{ ...screen, id: mockupId ?? screen.code, lang, alt: alt ?? screen.alt }]}
        size={size === 'default' ? 'compact' : size}
        priorityFirst={priority}
        atmosphere={false}
        reflection={false}
        ariaLabel={alt ?? screen.alt}
      />
      {showCaption && label ? <figcaption className="device-frame__caption">{label}</figcaption> : null}
    </figure>
  );
}

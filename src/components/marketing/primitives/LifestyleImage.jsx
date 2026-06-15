import { lifestyleImageSizes } from '../../../config/imageAssets';
import { resolveLifestyleMeta } from '../../../lib/responsiveImage';
import ResponsiveImage from './ResponsiveImage';

export default function LifestyleImage({
  src,
  label,
  imageKey,
  sizes,
  compact = false,
  hero = false,
}) {
  const meta = resolveLifestyleMeta(imageKey);
  const resolvedSizes = sizes ?? (hero ? lifestyleImageSizes.hero : lifestyleImageSizes.editorial);

  return (
    <figure
      className={`lifestyle-frame ${compact ? 'lifestyle-frame--compact' : ''} ${hero ? 'lifestyle-frame--hero' : ''}`}
    >
      <ResponsiveImage
        src={src}
        alt={label}
        width={meta.width}
        height={meta.height}
        sizes={resolvedSizes}
        loading={hero ? 'eager' : 'lazy'}
        fetchPriority={hero ? 'high' : undefined}
      />
      <figcaption>{label}</figcaption>
    </figure>
  );
}

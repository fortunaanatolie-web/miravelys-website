import { lifestyleImageSizes } from '../../../config/imageAssets';
import { resolveLifestyleMeta } from '../../../lib/responsiveImage';
import ResponsiveImage from './ResponsiveImage';

export default function PremiumGalleryCard({
  image,
  title,
  body,
  alt,
  imageKey,
  tone = 'cyan',
  large = false,
}) {
  const meta = resolveLifestyleMeta(imageKey);
  const sizes = large ? lifestyleImageSizes.galleryLarge : lifestyleImageSizes.gallerySmall;

  return (
    <article
      className={`gallery-card-premium ${large ? 'gallery-card-premium--large' : ''} gallery-card-premium--${tone}`}
    >
      <ResponsiveImage
        src={image}
        alt={alt}
        width={meta.width}
        height={meta.height}
        sizes={sizes}
        loading="lazy"
      />
      <div className="gallery-overlay">
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </article>
  );
}

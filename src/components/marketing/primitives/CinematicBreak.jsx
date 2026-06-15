import { lifestyleImageSizes } from '../../../config/imageAssets';
import { resolveLifestyleMeta } from '../../../lib/responsiveImage';
import ResponsiveImage from './ResponsiveImage';

export default function CinematicBreak({ image, alt, imageKey, quote, attribution }) {
  const meta = resolveLifestyleMeta(imageKey);

  return (
    <aside className="cinematic-break" aria-label={alt}>
      <ResponsiveImage
        src={image}
        alt=""
        width={meta.width}
        height={meta.height}
        sizes={lifestyleImageSizes.cinematic}
        loading="lazy"
        className="cinematic-break__photo"
      />
      <div className="cinematic-break__veil" />
      {quote && (
        <blockquote className="cinematic-break__quote">
          <p>{quote}</p>
          {attribution && <cite>{attribution}</cite>}
        </blockquote>
      )}
    </aside>
  );
}

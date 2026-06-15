import { Heart, Sparkles } from 'lucide-react';
import { lifestyleImageSizes } from '../../../config/imageAssets';
import { resolveLifestyleMeta } from '../../../lib/responsiveImage';
import PremiumGalleryCard from '../primitives/PremiumGalleryCard';
import ResponsiveImage from '../primitives/ResponsiveImage';
import RevealOnScroll from '../primitives/RevealOnScroll';
import SectionHeader from '../primitives/SectionHeader';

export default function GallerySection({ marketing, gardenPortrait, familyPortrait, cafePortrait }) {
  return (
    <section className="gallery-section content-section">
      <RevealOnScroll className="section-heading section-heading--split gallery-heading">
        <SectionHeader
          eyebrow={marketing.gallery.eyebrow}
          title={marketing.gallery.title}
          icon={<Sparkles size={16} />}
        />
        <p className="section-intro">{marketing.gallery.intro}</p>
      </RevealOnScroll>
      <div className="gallery-grid-premium">
        <RevealOnScroll className="gallery-grid-reveal gallery-grid-reveal--large" delay={0}>
          <PremiumGalleryCard
            image={gardenPortrait}
            imageKey="miravelys-lifestyle-garden-friends"
            alt={marketing.gallery.items[0].alt}
            title={marketing.gallery.items[0].title}
            body={marketing.gallery.items[0].body}
            tone="gold"
            large
          />
        </RevealOnScroll>
        <RevealOnScroll className="gallery-grid-reveal gallery-grid-reveal--copy" delay={80}>
          <article className="gallery-copy-card">
            <div className="gallery-copy-card__inner">
              <p className="eyebrow">
                <Heart size={16} />
                {marketing.gallery.items[1].title}
              </p>
              <p>{marketing.gallery.items[1].body}</p>
              <div className="gallery-mini-figure">
                <ResponsiveImage
                  src={familyPortrait}
                  alt={marketing.gallery.items[1].alt}
                  {...resolveLifestyleMeta('miravelys-lifestyle-family-home')}
                  sizes={lifestyleImageSizes.galleryMini}
                  loading="lazy"
                />
              </div>
            </div>
          </article>
        </RevealOnScroll>
        <RevealOnScroll className="gallery-grid-reveal gallery-grid-reveal--small" delay={140}>
          <PremiumGalleryCard
            image={cafePortrait}
            imageKey="miravelys-lifestyle-cafe-friends"
            alt={marketing.gallery.items[2].alt}
            title={marketing.gallery.items[2].title}
            body={marketing.gallery.items[2].body}
            tone="cyan"
          />
        </RevealOnScroll>
      </div>
    </section>
  );
}

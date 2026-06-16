import { ChevronRight } from 'lucide-react';
import { resolveMockupGalleryScreenshot } from '../../../lib/miravelysScreenshots';
import DeviceFrame from '../primitives/DeviceFrame';
import RevealOnScroll from '../primitives/RevealOnScroll';

function findScreenshot(mockupId, lang) {
  return resolveMockupGalleryScreenshot(mockupId, lang);
}

export default function ProductSceneSection({
  scene,
  mockupId,
  sectionId,
  tone = 'cyan',
  reverse = false,
  lang,
  onCtaClick,
  showDoors = false,
}) {
  const screenshot = findScreenshot(mockupId, lang);
  const layoutClass = [
    'product-scene',
    'product-scene--keynote',
    `product-scene--${tone}`,
    reverse ? 'product-scene--reverse' : '',
    showDoors ? 'product-scene--doorways' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section id={sectionId || undefined} className={layoutClass}>
      <div className="product-scene__backdrop" aria-hidden="true" />

      <div className="product-scene__stage">
        <RevealOnScroll className="product-scene__copy">
          <p className="product-scene__eyebrow">{scene.eyebrow}</p>
          <h2 className="product-scene__headline">{scene.title}</h2>
          <p className="product-scene__subline">{scene.body}</p>

          {scene.shift ? <p className="product-scene__whisper">{scene.shift}</p> : null}

          {showDoors && scene.doors ? (
            <ul className="product-scene__door-tags">
              {scene.doors.map(door => (
                <li key={door.label}>{door.label}</li>
              ))}
            </ul>
          ) : null}

          {scene.cta && onCtaClick ? (
            <a
              href="#mockups"
              className="keynote-link product-scene__link"
              onClick={event => onCtaClick(event, mockupId)}
            >
              {scene.cta}
              <ChevronRight size={14} aria-hidden="true" />
            </a>
          ) : null}
        </RevealOnScroll>

        <div className="product-scene__device-sticky">
          <RevealOnScroll delay={60}>
            <DeviceFrame
              lang={lang}
              mockupId={mockupId}
              screenshot={screenshot}
              alt={scene.title}
              size="chapter"
              parallax
            />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

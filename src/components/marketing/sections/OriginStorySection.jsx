import { useEffect, useState } from 'react';
import { originBlockOrder } from '../../../config/originBlocks';
import { resolveOriginBlockScreenshot } from '../../../lib/miravelysScreenshots';
import { resolveNameStoryCopy } from '../../../i18n/nameStoryCopy';
import MarketingCta from '../primitives/MarketingCta';
import PhoneMockup from '../primitives/PhoneMockup';
import RevealOnScroll from '../primitives/RevealOnScroll';

function OriginBlockContent({ block, config, blockLabel }) {
  const { variant } = config;

  return (
    <div className="origin-block__content">
      {blockLabel ? <p className="origin-block__chapter">{blockLabel}</p> : null}
      {block.paragraphs?.map(paragraph => (
        <p key={paragraph} className="origin-block__paragraph">
          {paragraph}
        </p>
      ))}
      {block.lines?.length ? (
        <ul className="origin-block__verse" aria-label={blockLabel}>
          {block.lines.map(line => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      ) : null}
      {variant === 'transforms' && block.transforms?.length ? (
        <ul className="origin-block__transforms">
          {block.transforms.map(line => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      ) : null}
      {variant === 'questions' && block.items?.length ? (
        <ul className="origin-block__questions">
          {block.items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {variant === 'insights' && block.insights?.length ? (
        <ul className="origin-block__insights">
          {block.insights.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {block.types?.length ? (
        <ul className="origin-block__sound-types">
          {block.types.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {variant === 'places' && block.items?.length ? (
        <ul className="origin-block__places">
          {block.items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {variant === 'audience' && block.audience?.length ? (
        <ul className="origin-block__audience">
          {block.audience.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}


function NameStorySection({ nameStory }) {
  if (!nameStory) return null;

  return (
    <RevealOnScroll className="origin-name-story" variant="soft" delay={80}>
      <div className="origin-name-story__halo" aria-hidden="true" />
      <div className="origin-name-story__header">
        <p className="origin-name-story__eyebrow">{nameStory.eyebrow}</p>
        <h3 className="origin-name-story__title">{nameStory.title}</h3>
        <div className="origin-name-story__intro">
          {nameStory.intro?.map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="origin-name-story__pieces" aria-label={nameStory.title}>
        {nameStory.pieces?.map(piece => (
          <article className="origin-name-piece" key={piece.name}>
            <span className="origin-name-piece__glyph">{piece.name}</span>
            <div className="origin-name-piece__copy">
              {piece.body.map(paragraph => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="origin-name-story__closing">
        {nameStory.closing?.map(paragraph => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <p className="origin-name-story__final">{nameStory.finalStatement}</p>
    </RevealOnScroll>
  );
}

function OriginStoryBlock({ config, block, blockLabel, lang, index }) {
  const reverse = index % 2 === 1;
  const screenshot = resolveOriginBlockScreenshot(config.key, lang);
  const hasDevice = config.showMockup !== false && screenshot;
  const blockClass = [
    'origin-block',
    reverse && hasDevice ? 'origin-block--reverse' : '',
    config.isFinale ? 'origin-block--finale' : '',
    hasDevice ? 'origin-block--split' : 'origin-block--prose',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <article className={blockClass} data-origin-block={config.key}>
      <div className="origin-block__backdrop" aria-hidden="true" />
      <RevealOnScroll className="origin-block__copy" variant="soft" delay={reverse ? 80 : 0}>
        <OriginBlockContent block={block} config={config} blockLabel={blockLabel} />
      </RevealOnScroll>
      {hasDevice ? (
        <RevealOnScroll className="origin-block__device" variant="rise" delay={reverse ? 0 : 80}>
          <PhoneMockup
            screens={[
              {
                id: config.mockupId,
                ...screenshot,
                lang,
                alt: screenshot.alt ?? blockLabel ?? config.key,
              },
            ]}
            size={config.isFinale ? 'hero' : 'chapter'}
            mood={config.mood}
            atmosphere
            reflection={config.isFinale}
            floorShadow
            ariaLabel={blockLabel ?? config.key}
          />
        </RevealOnScroll>
      ) : null}
    </article>
  );
}

export default function OriginStorySection({ lang, experience, onNavClick }) {
  const [origin, setOrigin] = useState(null);
  const nameStory = resolveNameStoryCopy(lang);

  useEffect(() => {
    let cancelled = false;
    import('../../../i18n/originCopy').then(module => {
      if (!cancelled) setOrigin(module.resolveOriginCopy(lang));
    });
    return () => {
      cancelled = true;
    };
  }, [lang]);

  if (!origin) {
    return (
      <section id="origin" className="origin-story origin-story--loading content-section" aria-busy="true">
        <div className="origin-story__intro">
          <div className="origin-story__skeleton" />
        </div>
      </section>
    );
  }

  return (
    <section id="origin" className="origin-story content-section" aria-labelledby="origin-story-title">
      <div className="origin-story__atmosphere" aria-hidden="true">
        <div className="origin-story__glow origin-story__glow--gold" />
        <div className="origin-story__glow origin-story__glow--rose" />
      </div>

      <div className="origin-story__intro">
        <RevealOnScroll variant="blur-in">
          <p className="origin-story__eyebrow">{origin.eyebrow}</p>
          <h2 id="origin-story-title" className="origin-story__title">
            {origin.title}
          </h2>
          <div className="origin-story__lead">
            {origin.intro.map(paragraph => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </RevealOnScroll>
      </div>

      <div className="origin-story__blocks">
        {originBlockOrder.map((config, index) => {
          const block = origin.blocks[config.key];
          if (!block) return null;
          const blockLabel = origin.blockLabels?.[config.key];

          return (
            <OriginStoryBlock
              key={config.key}
              config={config}
              block={block}
              blockLabel={blockLabel}
              lang={lang}
              index={index}
            />
          );
        })}
      </div>

      <NameStorySection nameStory={nameStory} />

      <RevealOnScroll className="origin-story__cta" variant="soft">
        <MarketingCta role="secondary" experience={experience} onNavClick={onNavClick}>
          {origin.cta}
        </MarketingCta>
      </RevealOnScroll>
    </section>
  );
}

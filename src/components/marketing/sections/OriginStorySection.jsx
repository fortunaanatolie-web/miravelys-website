import { useEffect, useState } from 'react';
import { originBlockOrder } from '../../../config/originBlocks';
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
      {block.closing?.length ? (
        <div className="origin-block__closing">
          {block.closing.map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ) : null}
    </div>
  );
}


function OriginStoryBlock({ config, block, blockLabel, index }) {
  const blockClass = [
    'origin-block',
    config.isFinale ? 'origin-block--finale' : '',
    'origin-block--prose',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <article className={blockClass} data-origin-block={config.key}>
      <div className="origin-block__backdrop" aria-hidden="true" />
      <RevealOnScroll className="origin-block__copy" variant="soft" delay={index % 2 ? 80 : 0}>
        <OriginBlockContent block={block} config={config} blockLabel={blockLabel} />
      </RevealOnScroll>
    </article>
  );
}

export default function OriginStorySection({ lang, onNavClick, onEarlyAccessClick }) {
  const [origin, setOrigin] = useState(null);

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
              index={index}
            />
          );
        })}
      </div>

      <RevealOnScroll className="origin-story__cta" variant="soft">
        <button type="button" className="keynote-cta keynote-cta--primary" onClick={onEarlyAccessClick}>
          {origin.ctaPrimary}
        </button>
        <a
          href="#works"
          className="keynote-link"
          onClick={event => onNavClick?.(event, 'works')}
        >
          {origin.ctaSecondary}
        </a>
      </RevealOnScroll>
    </section>
  );
}

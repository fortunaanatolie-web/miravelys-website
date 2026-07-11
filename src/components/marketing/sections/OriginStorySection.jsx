import React from 'react';
import RevealOnScroll from '../primitives/RevealOnScroll';

export default function OriginStorySection({ t, onNavClick, onEarlyAccessClick }) {
  if (!t || !t.explanation) return null;
  const origin = t.explanation;

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
            <p>{origin.intro}</p>
          </div>
        </RevealOnScroll>
      </div>

      <div className="origin-story__bento-grid">
        {origin.blocks.map((block, index) => {
          const isFeatured = index === 0;
          const blockClass = [
            'origin-block',
            isFeatured ? 'origin-block--featured' : '',
            'origin-block--prose',
          ].filter(Boolean).join(' ');

          return (
            <article key={block.title} className={blockClass} data-origin-block={index}>
              <div className="origin-block__backdrop" aria-hidden="true" />
              <RevealOnScroll className="origin-block__copy" variant="soft" delay={index * 80}>
                <div className="origin-block__content">
                  <h3 className="origin-block__chapter" style={{color: 'var(--mira-ivory)', fontSize: '1.2rem', marginBottom: '0.5rem', textTransform: 'none', letterSpacing: 'normal'}}>{block.title}</h3>
                  <p className="origin-block__paragraph">{block.body}</p>
                </div>
              </RevealOnScroll>
            </article>
          );
        })}
      </div>

      <RevealOnScroll className="origin-story__cta" variant="soft">
        <button type="button" className="keynote-cta keynote-cta--primary" onClick={onEarlyAccessClick}>
          {t.hero.primary || 'Begin your journey'}
        </button>
      </RevealOnScroll>
    </section>
  );
}

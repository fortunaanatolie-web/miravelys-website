import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { resolveOriginCopy } from '../../../i18n/originCopy';
import RevealOnScroll from '../primitives/RevealOnScroll';

export default function StoryTeaserSection({ lang }) {
  const origin = resolveOriginCopy(lang);
  const lead = origin?.intro?.[0] ?? '';

  return (
    <section id="story-link" className="story-teaser-section content-section" aria-labelledby="story-teaser-title">
      <RevealOnScroll className="story-teaser-card" variant="soft">
        <p className="eyebrow">{origin.eyebrow}</p>
        <h2 id="story-teaser-title">{origin.title}</h2>
        {lead ? <p>{lead}</p> : null}
        <Link to="/story" className="keynote-link story-teaser-card__link">
          {origin.cta}
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </RevealOnScroll>
    </section>
  );
}

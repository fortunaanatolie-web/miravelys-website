import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../primitives/RevealOnScroll';

export default function FounderTeaserSection({ lang, copy }) {
  const storyPath = lang && lang !== 'en' ? `/${lang}/story` : '/story';

  return (
    <section className="loop-founder-teaser" aria-labelledby="loop-founder-teaser-title">
      <RevealOnScroll className="loop-founder-teaser__card" variant="soft">
        <p className="loop-kicker">{copy.teaser.eyebrow}</p>
        <h2 id="loop-founder-teaser-title">{copy.teaser.title}</h2>
        <p>{copy.teaser.body}</p>
        <Link to={storyPath} className="loop-text-link">
          {copy.teaser.link}
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </RevealOnScroll>
    </section>
  );
}

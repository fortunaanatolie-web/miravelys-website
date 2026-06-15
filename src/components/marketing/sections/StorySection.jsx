import { CheckCircle2, Heart, Quote, Sparkles } from 'lucide-react';
import LifestyleImage from '../primitives/LifestyleImage';
import RevealOnScroll from '../primitives/RevealOnScroll';
import SectionHeader from '../primitives/SectionHeader';

export default function StorySection({ t, marketing, familyPortrait }) {
  return (
    <section id="what" className="story-section content-section story-section--editorial">
      <RevealOnScroll className="story-copy">
        <SectionHeader eyebrow={t.what.eyebrow} title={t.what.title} icon={<Heart size={16} />} />
        <p className="story-lead">{marketing.editorial.lead}</p>
        <div className="story-body">
          {t.what.paragraphs.map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="quiet-quote">
          <Quote size={20} />
          {t.what.callout}
        </div>
      </RevealOnScroll>
      <RevealOnScroll className="story-side" delay={100}>
        <LifestyleImage
          src={familyPortrait}
          label={marketing.gallery.items[1].alt}
          imageKey="miravelys-lifestyle-family-home"
        />
        <article className="editorial-note-card">
          <p className="eyebrow">
            <Sparkles size={16} />
            {marketing.editorial.eyebrow}
          </p>
          <h3>{marketing.editorial.title}</h3>
          {marketing.editorial.paragraphs.map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <ul className="highlight-list">
            {marketing.editorial.highlights.map(item => (
              <li key={item}>
                <CheckCircle2 size={16} />
                {item}
              </li>
            ))}
          </ul>
        </article>
      </RevealOnScroll>
    </section>
  );
}

import { ShieldCheck } from 'lucide-react';
import RevealOnScroll from '../primitives/RevealOnScroll';
import SectionHeader from '../primitives/SectionHeader';

export default function PositioningSection({ experience }) {
  return (
    <section id="positioning" className="positioning-section content-section">
      <RevealOnScroll className="section-heading section-heading--split">
        <SectionHeader
          eyebrow={experience.positioning.eyebrow}
          title={experience.positioning.title}
          icon={<ShieldCheck size={16} />}
        />
        <p className="section-intro">{experience.positioning.intro}</p>
      </RevealOnScroll>
      <div className="positioning-grid">
        {experience.positioning.items.map((item, index) => (
          <RevealOnScroll key={item.title} as="article" className="positioning-card" delay={index * 70}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}

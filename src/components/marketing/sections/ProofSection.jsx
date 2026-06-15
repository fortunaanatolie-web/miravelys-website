import { Quote } from 'lucide-react';
import RevealOnScroll from '../primitives/RevealOnScroll';
import SectionHeader from '../primitives/SectionHeader';

export default function ProofSection({ experience }) {
  return (
    <section id="proof" className="proof-section content-section">
      <RevealOnScroll className="proof-copy">
        <SectionHeader
          eyebrow={experience.proof.eyebrow}
          title={experience.proof.title}
          icon={<Quote size={16} />}
        />
        <p className="section-intro">{experience.proof.intro}</p>
      </RevealOnScroll>
      <div className="proof-grid">
        {experience.proof.items.map((item, index) => (
          <RevealOnScroll key={item.before} as="article" className="proof-card" delay={index * 70}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{item.before}</p>
            <strong>{item.after}</strong>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}

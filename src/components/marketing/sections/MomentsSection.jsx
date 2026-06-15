import { CheckCircle2 } from 'lucide-react';
import RevealOnScroll from '../primitives/RevealOnScroll';
import SectionHeader from '../primitives/SectionHeader';

export default function MomentsSection({ t }) {
  return (
    <section id="moments" className="moments-section content-section">
      <RevealOnScroll>
        <SectionHeader eyebrow={t.moments.eyebrow} title={t.moments.title} icon={<CheckCircle2 size={16} />} />
      </RevealOnScroll>
      <div className="moment-grid">
        {t.moments.items.map((item, index) => (
          <RevealOnScroll key={item.title} as="article" className="moment-card" delay={index * 60}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}

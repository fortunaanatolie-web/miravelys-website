import { SlidersHorizontal } from 'lucide-react';
import RevealOnScroll from '../primitives/RevealOnScroll';
import SectionHeader from '../primitives/SectionHeader';

export default function ModesSection({ t }) {
  return (
    <section id="depths" className="modes-section content-section">
      <RevealOnScroll className="modes-intro">
        <SectionHeader eyebrow={t.depths.eyebrow} title={t.depths.title} icon={<SlidersHorizontal size={16} />} />
        <p>{t.depths.intro}</p>
      </RevealOnScroll>
      <div className="mode-cards">
        {t.depths.items.map((item, index) => (
          <RevealOnScroll key={item.title} as="article" className="glass-card" delay={index * 80}>
            <div className="mode-card-top">
              <span className="mode-number">0{index + 1}</span>
              <span className="mode-tag">{item.tag}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}

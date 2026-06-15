import { Stars } from 'lucide-react';
import RevealOnScroll from '../primitives/RevealOnScroll';
import SectionHeader from '../primitives/SectionHeader';

export default function SignatureSection({ t }) {
  return (
    <section id="works" className="signature-section content-section">
      <RevealOnScroll className="section-heading section-heading--split">
        <SectionHeader eyebrow={t.works.eyebrow} title={t.works.title} icon={<Stars size={16} />} />
        <p className="section-intro">{t.works.intro}</p>
      </RevealOnScroll>
      <div className="signature-grid">
        {t.works.steps.map((card, index) => (
          <RevealOnScroll key={card.title} as="article" className="signature-card" delay={index * 70}>
            <span className="mode-number">0{index + 1}</span>
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}

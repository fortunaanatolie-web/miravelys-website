import { Brain, CheckCircle2, Sparkles } from 'lucide-react';
import RevealOnScroll from '../primitives/RevealOnScroll';
import SectionHeader from '../primitives/SectionHeader';

export default function ExplanationSection({ t }) {
  return (
    <section id="explanation" className="explanation-section content-section">
      <RevealOnScroll className="explanation-hero">
        <SectionHeader eyebrow={t.explanation.eyebrow} title={t.explanation.title} icon={<Brain size={16} />} />
        <p className="explanation-intro">{t.explanation.intro}</p>
      </RevealOnScroll>
      <div className="explanation-grid reveal--stagger-parent">
        {t.explanation.blocks.map((block, index) => (
          <RevealOnScroll key={block.title} as="article" className="explanation-card" delay={index * 60}>
            <span className="explanation-index">{String(index + 1).padStart(2, '0')}</span>
            <h3>{block.title}</h3>
            <p>{block.body}</p>
          </RevealOnScroll>
        ))}
      </div>
      <RevealOnScroll className="explanation-purpose">
        <div>
          <p className="eyebrow">
            <Sparkles size={16} />
            {t.explanation.purposeTitle}
          </p>
          <p>{t.explanation.purposeBody}</p>
        </div>
        <div className="explanation-capabilities">
          <h3>{t.explanation.featureTitle}</h3>
          <ul>
            {t.explanation.featureList.map(item => (
              <li key={item}>
                <CheckCircle2 size={16} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </RevealOnScroll>
    </section>
  );
}

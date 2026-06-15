import { HelpCircle } from 'lucide-react';
import RevealOnScroll from '../primitives/RevealOnScroll';
import SectionHeader from '../primitives/SectionHeader';

export default function FaqSection({ t }) {
  return (
    <section id="faq" className="faq-section content-section">
      <RevealOnScroll>
        <SectionHeader eyebrow={t.faq.eyebrow} title={t.faq.title} icon={<HelpCircle size={16} />} />
      </RevealOnScroll>
      <div className="faq-list">
        {t.faq.items.map(([question, answer], index) => (
          <RevealOnScroll key={question} delay={index * 40}>
            <details className="faq-item" open={index === 0}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}

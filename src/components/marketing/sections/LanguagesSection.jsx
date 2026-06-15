import { Languages } from 'lucide-react';
import { languages } from '../../../i18n/siteCopy';
import RevealOnScroll from '../primitives/RevealOnScroll';
import SectionHeader from '../primitives/SectionHeader';

export default function LanguagesSection({ t, lang, setLang }) {
  return (
    <section id="languages" className="languages-section content-section">
      <RevealOnScroll>
        <SectionHeader eyebrow={t.languages.eyebrow} title={t.languages.title} icon={<Languages size={16} />} />
        <p className="section-intro">{t.languages.body}</p>
        {t.languages.activeNote ? <p className="languages-section__note">{t.languages.activeNote}</p> : null}
      </RevealOnScroll>
      <RevealOnScroll className="language-showcase">
        {languages.map(item => (
          <button
            type="button"
            key={item.code}
            className={item.code === lang ? 'active' : ''}
            aria-pressed={item.code === lang}
            onClick={() => setLang(item.code)}
          >
            <span>{item.short}</span>
            <strong>{item.label}</strong>
          </button>
        ))}
      </RevealOnScroll>
    </section>
  );
}

import { ChevronDown, Languages } from 'lucide-react';
import { languages } from '../../i18n/siteCopy';

export default function MarketingLanguageSwitcher({
  lang,
  setLang,
  t,
  chooseLanguageLabel = 'Choose language',
  compact = false,
  showCurrent = !compact,
}) {
  return (
    <div className={`language-cluster ${compact ? 'language-cluster--compact' : ''}`}>
      <label className="language-select" aria-label={chooseLanguageLabel}>
        <Languages size={16} aria-hidden="true" />
        <select value={lang} onChange={event => setLang(event.target.value)}>
          {languages.map(item => (
            <option value={item.code} key={item.code}>
              {compact ? item.short : item.label}
            </option>
          ))}
        </select>
        <ChevronDown size={15} aria-hidden="true" />
      </label>
      {showCurrent ? <span className="language-current">{t.meta.languageName}</span> : null}
    </div>
  );
}

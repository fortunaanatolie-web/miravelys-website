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
  const activeLanguage = languages.find(item => item.code === lang) ?? languages[0];
  const visibleLabel = compact ? activeLanguage.short : activeLanguage.label;

  return (
    <div className={`language-cluster ${compact ? 'language-cluster--compact' : ''}`}>
      <label className="language-select">
        <span className="language-select__face" aria-hidden="true">
          <Languages size={14} aria-hidden="true" />
          <span className="language-select__value">{visibleLabel}</span>
          <ChevronDown size={13} aria-hidden="true" />
        </span>
        <select
          value={lang}
          onChange={event => setLang(event.target.value)}
          aria-label={chooseLanguageLabel}
        >
          {languages.map(item => (
            <option value={item.code} key={item.code}>
              {compact ? item.short : item.label}
            </option>
          ))}
        </select>
      </label>
      {showCurrent ? <span className="language-current">{t.meta.languageName}</span> : null}
    </div>
  );
}

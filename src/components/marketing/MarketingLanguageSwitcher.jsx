import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, Languages } from 'lucide-react';
import { languages, siteCopy } from '../../i18n/siteCopy';

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
  const navigate = useNavigate();
  const location = useLocation();

  const handleLanguageChange = (event) => {
    const newLang = event.target.value;
    setLang(newLang);
    
    // Update the URL to include the new language prefix
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const currentLang = pathSegments[0];
    
    if (currentLang && siteCopy[currentLang]) {
      // Replace existing language prefix
      pathSegments[0] = newLang;
      navigate('/' + pathSegments.join('/') + location.hash);
    } else {
      // Prepend new language prefix
      navigate('/' + newLang + location.pathname + location.hash);
    }
  };

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
          onChange={handleLanguageChange}
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

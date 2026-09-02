/**
 * Searchable, alphabetical language list. Names are primary — no flags.
 */
import { useMemo, useState } from 'react';

function letterOf(name) {
  const match = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').match(/[A-Za-z]/);
  return match ? match[0].toUpperCase() : '#';
}

export default function LanguageExplorer({
  languages,
  experimentalLanguages = [],
  searchLabel = 'Search languages',
  emptyLabel = 'No languages match that search.',
  experimentalLabel = 'Show experimental languages',
  experimentalNote,
  idPrefix = 'lang',
}) {
  const searchId = `${idPrefix}-search`;
  const toggleId = `${idPrefix}-experimental`;
  const [query, setQuery] = useState('');
  const [showExperimental, setShowExperimental] = useState(false);

  const haystack = useMemo(() => {
    const primary = languages.map(language => ({ ...language, experimental: false }));
    if (!showExperimental || experimentalLanguages.length === 0) return primary;
    return [
      ...primary,
      ...experimentalLanguages.map(language => ({ ...language, experimental: true })),
    ];
  }, [languages, experimentalLanguages, showExperimental]);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return haystack;
    return haystack.filter(language => (
      language.name.toLowerCase().includes(needle)
      || language.code.toLowerCase().includes(needle)
    ));
  }, [haystack, query]);

  const groups = useMemo(() => {
    const map = new Map();
    filtered.forEach(language => {
      const letter = letterOf(language.name);
      if (!map.has(letter)) map.set(letter, []);
      map.get(letter).push(language);
    });
    return [...map.entries()].sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  const letters = groups.map(([letter]) => letter);

  return (
    <div className="mira-mkt__lex">
      <div className="mira-mkt__lex-tools">
        <label className="mira-mkt__lex-search" htmlFor={searchId}>
          <span className="sr-only">{searchLabel}</span>
          <input
            id={searchId}
            type="search"
            value={query}
            onChange={event => setQuery(event.target.value)}
            placeholder={searchLabel}
            autoComplete="off"
            spellCheck="false"
          />
        </label>

        {experimentalLanguages.length > 0 && (
          <label className="mira-mkt__lex-toggle" htmlFor={toggleId}>
            <input
              id={toggleId}
              type="checkbox"
              checked={showExperimental}
              onChange={event => setShowExperimental(event.target.checked)}
            />
            <span>{experimentalLabel}</span>
          </label>
        )}
      </div>

      {experimentalNote && showExperimental && (
        <p className="mira-mkt__lex-note">{experimentalNote}</p>
      )}

      {letters.length > 1 && (
        <nav className="mira-mkt__lex-alpha" aria-label="Jump to letter">
          {letters.map(letter => (
            <a key={letter} href={`#${searchId}-${letter}`}>
              {letter}
            </a>
          ))}
        </nav>
      )}

      {groups.length === 0 ? (
        <p className="mira-mkt__lex-empty" role="status">{emptyLabel}</p>
      ) : (
        <div className="mira-mkt__lex-groups">
          {groups.map(([letter, items]) => (
            <section
              key={letter}
              className="mira-mkt__lex-group"
              aria-labelledby={`${searchId}-${letter}`}
            >
              <h3 className="mira-mkt__lex-letter" id={`${searchId}-${letter}`}>
                {letter}
              </h3>
              <ul className="mira-mkt__lex-list">
                {items.map(language => (
                  <li key={`${language.code}-${language.experimental ? 'x' : 'p'}`}>
                    <span className="mira-mkt__lex-name">{language.name}</span>
                    {language.experimental && (
                      <span className="mira-mkt__lex-badge">Experimental</span>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

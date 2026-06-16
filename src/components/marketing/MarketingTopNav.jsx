import { useEffect, useId, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { headerNavItems, mobileNavItems } from '../../config/marketingWiring';
import { resolveHeaderCopy } from '../../i18n/headerCopy';
import MarketingCta from './primitives/MarketingCta';
import MarketingLanguageSwitcher from './MarketingLanguageSwitcher';

export default function MarketingTopNav({
  variant = 'site',
  menuOpen,
  setMenuOpen,
  onNavClick,
  onEarlyAccessClick,
  lang,
  setLang,
  t,
  experience,
}) {
  const panelId = useId();
  const menuButtonRef = useRef(null);
  const headerCopy = resolveHeaderCopy(lang);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = event => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen, setMenuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (event, sectionId) => {
    onNavClick(event, sectionId);
    closeMenu();
  };

  if (variant === 'legal') {
    return (
      <header className="site-header site-header--legal">
        <nav className="top-nav top-nav--legal" aria-label={headerCopy.menuLabel}>
          <div className="top-nav__bar">
            <Link to="/" className="brand-mini" aria-label={headerCopy.homeLabel}>
              Miravelys
            </Link>
            <div className="top-nav__actions">
              <MarketingLanguageSwitcher
                lang={lang}
                setLang={setLang}
                t={t}
                chooseLanguageLabel={headerCopy.chooseLanguage}
                compact
              />
            </div>
          </div>
        </nav>
      </header>
    );
  }

  return (
    <header className={`site-header ${menuOpen ? 'site-header--menu-open' : ''}`}>
      <nav className="top-nav" aria-label={headerCopy.menuLabel}>
        <div className="top-nav__bar">
          <a
            className="brand-mini"
            href="#top"
            aria-label={headerCopy.homeLabel}
            onClick={event => handleNavClick(event, 'top')}
          >
            Miravelys
          </a>

          <div className="top-nav__links nav-links" aria-label={headerCopy.menuLabel}>
            {headerNavItems.map(item => (
              item.route ? (
                <Link key={item.route} to={item.route}>
                  {t.nav[item.key]}
                </Link>
              ) : (
                <a key={item.id} href={`#${item.id}`} onClick={event => onNavClick(event, item.id)}>
                  {t.nav[item.key]}
                </a>
              )
            ))}
          </div>

          <div className="top-nav__actions">
            <MarketingLanguageSwitcher
              lang={lang}
              setLang={setLang}
              t={t}
              chooseLanguageLabel={headerCopy.chooseLanguage}
              compact
            />
            <MarketingCta
              role="primary"
              experience={experience}
              onNavClick={onNavClick}
              onEarlyAccessClick={onEarlyAccessClick}
              className="top-nav__cta"
            />
            <button
              ref={menuButtonRef}
              type="button"
              className="mobile-menu-button"
              aria-label={menuOpen ? headerCopy.closeMenu : headerCopy.openMenu}
              aria-expanded={menuOpen}
              aria-controls={panelId}
              onClick={() => setMenuOpen(current => !current)}
            >
              {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </nav>

      {menuOpen ? (
        <button
          type="button"
          className="top-nav__backdrop"
          aria-label={headerCopy.closeMenu}
          onClick={closeMenu}
        />
      ) : null}

      <div
        id={panelId}
        className={`top-nav__panel ${menuOpen ? 'top-nav__panel--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={headerCopy.menuLabel}
        aria-hidden={!menuOpen}
        hidden={!menuOpen}
      >
        <div className="top-nav__panel-inner">
          <ul className="top-nav__panel-links">
            {mobileNavItems.map(item => (
              <li key={item.route ?? item.id}>
                {item.route ? (
                  <Link to={item.route} onClick={closeMenu}>
                    {t.nav[item.key]}
                  </Link>
                ) : (
                  <a href={`#${item.id}`} onClick={event => handleNavClick(event, item.id)}>
                    {t.nav[item.key]}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <div className="top-nav__panel-actions">
            <MarketingCta
              role="primary"
              experience={experience}
              onNavClick={handleNavClick}
              onEarlyAccessClick={onEarlyAccessClick}
              className="top-nav__panel-cta"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

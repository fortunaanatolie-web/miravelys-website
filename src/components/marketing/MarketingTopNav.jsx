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
  const panelRef = useRef(null);
  const closeButtonRef = useRef(null);
  const headerCopy = resolveHeaderCopy(lang);

  useEffect(() => {
    document.body.classList.toggle('site-menu-open', menuOpen);
    return () => document.body.classList.remove('site-menu-open');
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const onKeyDown = event => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }

      if (event.key !== 'Tab' || !panelRef.current) return;

      const focusables = [
        ...panelRef.current.querySelectorAll(
          'a[href], button:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        ),
      ].filter(node => node.getAttribute('aria-hidden') !== 'true');

      if (!focusables.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen, setMenuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  };

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
            {headerNavItems.map(item =>
              item.route ? (
                <Link key={item.route} to={item.route}>
                  {t.nav[item.key]}
                </Link>
              ) : (
                <a key={item.id} href={`#${item.id}`} onClick={event => onNavClick(event, item.id)}>
                  {t.nav[item.key]}
                </a>
              )
            )}
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
          className="top-nav__backdrop mobile-menu-backdrop"
          aria-label={headerCopy.closeMenu}
          onClick={closeMenu}
        />
      ) : null}

      <div
        id={panelId}
        ref={panelRef}
        className={`top-nav__panel mobile-menu-panel ${menuOpen ? 'top-nav__panel--open mobile-menu-panel--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={headerCopy.menuLabel}
        aria-hidden={!menuOpen}
        hidden={!menuOpen}
      >
        <div className="top-nav__panel-inner mobile-menu-panel__inner">
          <div className="mobile-menu-panel__top">
            <span className="mobile-menu-panel__brand">Miravelys</span>
            <button
              ref={closeButtonRef}
              type="button"
              className="mobile-menu-panel__close"
              aria-label={headerCopy.closeModal ?? headerCopy.closeMenu}
              onClick={closeMenu}
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>

          <ul className="top-nav__panel-links mobile-menu-panel__links">
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

          <div className="top-nav__panel-actions mobile-menu-panel__actions">
            <MarketingCta
              role="primary"
              experience={experience}
              onNavClick={handleNavClick}
              onEarlyAccessClick={() => {
                closeMenu();
                onEarlyAccessClick?.();
              }}
              className="top-nav__panel-cta mobile-menu-panel__cta"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

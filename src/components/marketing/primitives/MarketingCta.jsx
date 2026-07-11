import { APP_STORE_AVAILABLE, APP_STORE_URL } from '../../../config/appLinks';
import { marketingCtas } from '../../../config/marketingWiring';

/**
 * Single CTA surface — labels from experience.sticky, destinations from marketingWiring.
 */
export default function MarketingCta({
  role,
  experience,
  onNavClick,
  onEarlyAccessClick,
  className = '',
  icon = null,
  children,
}) {
  const config = marketingCtas[role];
  if (!config) return null;

  const label = children ?? experience?.sticky?.[config.labelKey];
  if (!label) return null;

  const variantClass =
    config.variant === 'link'
      ? 'keynote-link'
      : `keynote-cta keynote-cta--${config.variant ?? 'primary'}`;

  const classNames = `${variantClass} ${className}`.trim();

  if (config.modal && onEarlyAccessClick) {
    return (
      <button type="button" className={classNames} onClick={onEarlyAccessClick}>
        {icon}
        {label}
      </button>
    );
  }

  if (config.external && APP_STORE_AVAILABLE) {
    const badgeLang = document.documentElement.lang || 'en';
    const APPLE_BADGE_LOCALES = {
      en: 'en-us', ru: 'ru-ru', ro: 'en-us', fr: 'fr-fr', 
      hi: 'en-us', zh: 'zh-cn', de: 'de-de', ja: 'ja-jp', 
      es: 'es-mx', pt: 'pt-br'
    };
    const locale = APPLE_BADGE_LOCALES[badgeLang] || 'en-us';
    const badgeUrl = `https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/${locale}?size=250x83&releaseDate=1276560000&h=7e7b68fad19738b5649a1bfb78ff46e9`;

    return (
      <a
        href={APP_STORE_URL}
        className="app-store-badge-link"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'inline-block', height: '44px', transition: 'opacity 0.2s ease' }}
        onMouseOver={e => e.currentTarget.style.opacity = '0.8'}
        onMouseOut={e => e.currentTarget.style.opacity = '1'}
      >
        <img 
          src={badgeUrl} 
          alt="Download on the App Store" 
          style={{ height: '100%', width: 'auto' }} 
        />
      </a>
    );
  }

  if (config.external && !APP_STORE_AVAILABLE) {
    if (config.modalFallback && onEarlyAccessClick) {
      return (
        <button type="button" className={classNames} onClick={onEarlyAccessClick}>
          {icon}
          {label}
        </button>
      );
    }

    const fallbackAnchor = config.fallbackAnchor ?? 'download';
    return (
      <a
        href={`#${fallbackAnchor}`}
        className={classNames}
        onClick={event => onNavClick?.(event, fallbackAnchor)}
      >
        {icon}
        {label}
      </a>
    );
  }

  const anchor = config.anchor ?? config.fallbackAnchor ?? 'works';
  return (
    <a
      href={`#${anchor}`}
      className={classNames}
      onClick={event => onNavClick?.(event, anchor)}
    >
      {icon}
      {label}
    </a>
  );
}

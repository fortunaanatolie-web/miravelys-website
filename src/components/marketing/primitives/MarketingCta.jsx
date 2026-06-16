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
    return (
      <a
        href={APP_STORE_URL}
        className={classNames}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon}
        {label}
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

import { APP_STORE_AVAILABLE, APP_STORE_URL } from '../../../config/appLinks';
import { marketingCtas } from '../../../config/marketingWiring';

/**
 * Single CTA surface — labels from experience.sticky, destinations from marketingWiring.
 */
export default function MarketingCta({
  role,
  experience,
  onNavClick,
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

  if (config.external && APP_STORE_AVAILABLE) {
    return (
      <a
        href={APP_STORE_URL}
        className={`${variantClass} ${className}`.trim()}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon}
        {label}
      </a>
    );
  }

  if (config.external && !APP_STORE_AVAILABLE) {
    const fallbackAnchor = 'beta';
    return (
      <a
        href={`#${fallbackAnchor}`}
        className={`${variantClass} ${className}`.trim()}
        onClick={event => onNavClick?.(event, fallbackAnchor)}
      >
        {icon}
        {label}
      </a>
    );
  }

  return (
    <a
      href={`#${config.anchor}`}
      className={`${variantClass} ${className}`.trim()}
      onClick={event => onNavClick?.(event, config.anchor)}
    >
      {icon}
      {label}
    </a>
  );
}

import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { marketingRoutes } from '../../config/marketingWiring';
import { SUPPORT_EMAIL, SUPPORT_MAILTO } from '../../config/siteLinks';

const footerProductLinks = [
  { id: 'works', key: 'works' },
  { route: marketingRoutes.story, key: 'origin' },
  { id: 'beta', key: 'beta' },
  { id: 'download', key: 'download' },
];

export default function MarketingSiteFooter({ t, onNavClick }) {
  return (
    <footer className="site-footer">
      <strong>Miravelys</strong>
      <p>{t.footer.line}</p>
      <small>{t.footer.safety}</small>

      <ul className="site-footer-product" aria-label={t.footer.productNavAria ?? 'Product sections'}>
        {footerProductLinks.map(item => (
          <li key={item.route ?? item.id}>
            {item.route ? (
              <Link to={item.route}>{t.nav[item.key]}</Link>
            ) : onNavClick ? (
              <a href={`#${item.id}`} onClick={event => onNavClick(event, item.id)}>{t.nav[item.key]}</a>
            ) : (
              <Link to={`/#${item.id}`}>{t.nav[item.key]}</Link>
            )}
          </li>
        ))}
      </ul>

      <nav className="site-footer-nav" aria-label={t.footer.legalNavAria ?? 'Legal and support'}>
        <Link to={marketingRoutes.legalNotice}>{t.footer.legalNotice}</Link>
        <Link to={marketingRoutes.userAgreement}>{t.footer.userAgreement}</Link>
        <Link to={marketingRoutes.privacyPolicy}>{t.footer.privacyPolicy}</Link>
        <Link to={marketingRoutes.cookies}>{t.footer.cookies}</Link>
        <a href={SUPPORT_MAILTO}>
          <Mail size={15} aria-hidden="true" />
          {SUPPORT_EMAIL}
        </a>
      </nav>
    </footer>
  );
}

import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { marketingRoutes } from '../../config/marketingWiring';
import { SUPPORT_EMAIL, SUPPORT_MAILTO } from '../../config/siteLinks';

export default function MarketingSiteFooter({ t }) {
  return (
    <footer className="site-footer">
      <strong>Miravelys</strong>
      <p>{t.footer.line}</p>
      <small>{t.footer.safety}</small>

      <nav className="site-footer-nav" aria-label={t.footer.legalNavAria ?? 'Legal and support'}>
        <Link to={marketingRoutes.story}>{t.nav.origin}</Link>
        <Link to={marketingRoutes.legalNotice}>{t.footer.legalNotice}</Link>
        <Link to={marketingRoutes.userAgreement}>{t.footer.userAgreement}</Link>
        <Link to={marketingRoutes.privacyPolicy}>{t.footer.privacyPolicy}</Link>
        <Link to={marketingRoutes.cookies}>{t.footer.cookies}</Link>
        <Link to={marketingRoutes.support}>Support</Link>
        <a href={SUPPORT_MAILTO}>
          <Mail size={15} aria-hidden="true" />
          {SUPPORT_EMAIL}
        </a>
      </nav>
    </footer>
  );
}

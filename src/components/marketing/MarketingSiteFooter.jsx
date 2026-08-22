import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { marketingRoutes } from '../../config/marketingWiring';
import { SUPPORT_EMAIL, SUPPORT_MAILTO } from '../../config/siteLinks';
import { localizeRoute } from '../../lib/localizeRoute';

export default function MarketingSiteFooter({ t, lang = 'en' }) {
  return (
    <footer className="site-footer">
      <strong>Miravelys</strong>
      <p>{t.footer.line}</p>
      <small>{t.footer.safety}</small>

      <nav className="site-footer-nav" aria-label={t.footer.legalNavAria ?? 'Legal and support'}>
        <Link to={localizeRoute(marketingRoutes.story, lang)}>{t.nav.origin}</Link>
        <Link to={localizeRoute(marketingRoutes.legalNotice, lang)}>{t.footer.legalNotice}</Link>
        <Link to={localizeRoute(marketingRoutes.userAgreement, lang)}>{t.footer.userAgreement}</Link>
        <Link to={localizeRoute(marketingRoutes.privacyPolicy, lang)}>{t.footer.privacyPolicy}</Link>
        <Link to={localizeRoute(marketingRoutes.cookies, lang)}>{t.footer.cookies}</Link>
        <Link to={localizeRoute(marketingRoutes.support, lang)}>{t.nav.support ?? 'Support'}</Link>
        <Link to={localizeRoute(marketingRoutes.faq, lang)}>{t.nav.faq}</Link>
        <a href={SUPPORT_MAILTO}>
          <Mail size={15} aria-hidden="true" />
          {SUPPORT_EMAIL}
        </a>

        {/* Quiet family link — subordinate to all product-specific nav */}
        <span className="site-footer-nav__family" aria-label="More from the Miravelys family">
          More from Miravelys:&nbsp;
          <Link to={marketingRoutes.products}>Products</Link>
        </span>
      </nav>
    </footer>
  );
}


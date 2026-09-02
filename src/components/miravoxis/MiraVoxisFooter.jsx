/**
 * MiraVoxisFooter — product-scoped footer for /miravoxis/*.
 */
import { Link } from 'react-router-dom';
import { MIRAVOXIS_SUPPORT_EMAIL, MIRAVOXIS_SUPPORT_MAILTO } from '../../config/siteLinks';

export default function MiraVoxisFooter() {
  return (
    <footer className="mx-footer">
      <div className="mx-footer__inner">
        <p className="mx-footer__family">
          MiraVoxis is part of the{' '}
          <Link to="/products">Miravelys family</Link>
        </p>

        <ul className="mx-footer__links" role="list" aria-label="MiraVoxis legal and support">
          <li><Link to="/miravoxis">Overview</Link></li>
          <li><Link to="/miravoxis/support">Support</Link></li>
          <li><Link to="/miravoxis/privacy">Privacy</Link></li>
          <li><Link to="/mirascribe">MiraScribe</Link></li>
          <li>
            <a
              href={MIRAVOXIS_SUPPORT_MAILTO}
              className="mx-footer__email"
            >
              {MIRAVOXIS_SUPPORT_EMAIL}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

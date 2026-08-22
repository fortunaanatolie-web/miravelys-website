/**
 * MiraScribeFooter — product-scoped footer for all /mirascribe/* pages.
 * Legal and acknowledgements links live here, not in the primary nav.
 */
import { Link } from 'react-router-dom';

export default function MiraScribeFooter() {
  return (
    <footer className="ms-footer">
      <div className="ms-footer__inner">
        <p className="ms-footer__family">
          MiraScribe is part of the{' '}
          <Link to="/products">Miravelys family</Link>
        </p>

        <ul className="ms-footer__links" role="list" aria-label="MiraScribe legal and support">
          <li><Link to="/mirascribe/support">Support</Link></li>
          <li><Link to="/mirascribe/privacy">Privacy</Link></li>
          <li><Link to="/mirascribe/legal">Legal</Link></li>
          <li><Link to="/mirascribe/acknowledgements">Acknowledgements</Link></li>
          <li>
            <a href="mailto:support.mirascribe@miravelys.com">
              support.mirascribe@miravelys.com
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

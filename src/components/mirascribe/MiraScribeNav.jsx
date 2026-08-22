/**
 * MiraScribeNav — compact product navigation bar for all /mirascribe/* pages.
 * Deliberately separate from MarketingTopNav — no Miravelys branding hierarchy.
 * Hierarchy: MiraScribe (primary) · A Miravelys product (subordinate)
 */
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { href: '/mirascribe',                label: 'Overview' },
  { href: '/mirascribe/support',        label: 'Support' },
  { href: '/mirascribe/privacy',        label: 'Privacy' },
];

export default function MiraScribeNav() {
  const { pathname } = useLocation();

  return (
    <nav className="ms-nav" aria-label="MiraScribe navigation">
      <div className="ms-nav__inner">
        <Link to="/mirascribe" className="ms-nav__brand" aria-label="MiraScribe — overview">
          <span className="ms-nav__wordmark">MiraScribe</span>
          <span className="ms-nav__family" aria-hidden="true">A Miravelys product</span>
        </Link>

        <ul className="ms-nav__links" role="list">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                to={href}
                aria-current={pathname === href ? 'page' : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

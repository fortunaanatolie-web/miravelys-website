/**
 * MiraVoxisNav — product navigation for /miravoxis/*.
 * Hierarchy: MiraVoxis (primary) · A Miravelys product (subordinate).
 */
import { Link, useLocation } from 'react-router-dom';
import { APP_IDENTITY_ASSETS } from '../../config/appIdentityAssets';

const NAV_LINKS = [
  { href: '/miravoxis', label: 'Overview' },
  { href: '/miravoxis/support', label: 'Support' },
  { href: '/miravoxis/privacy', label: 'Privacy' },
];

const icon = APP_IDENTITY_ASSETS.miravoxis.icon48;

export default function MiraVoxisNav() {
  const { pathname } = useLocation();

  return (
    <nav className="mx-nav" aria-label="MiraVoxis navigation">
      <div className="mx-nav__inner">
        <Link to="/miravoxis" className="mx-nav__brand" aria-label="MiraVoxis — overview">
          <img
            src={icon}
            width={28}
            height={28}
            alt=""
            className="mx-nav__icon"
          />
          <span className="mx-nav__wordmark">MiraVoxis</span>
          <span className="mx-nav__family" aria-hidden="true">A Miravelys product</span>
        </Link>

        <ul className="mx-nav__links" role="list">
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

import { useEffect, useState } from 'react';
import { APP_IDENTITY_ASSETS } from '../../config/appIdentityAssets';
import { resolveMiraScribeStorePromoCopy } from '../../i18n/mirascribeStorePromoCopy';
import { getSiteLanguage, subscribeSiteLanguage } from '../../lib/siteLanguage';
import {
  resolveMiraScribeStoreTarget,
  resolveMiraScribeStoreUrl,
} from '../../lib/mirascribeStoreTarget';

function AppleLogo() {
  return (
    <svg
      className="ms-store-promo__apple"
      viewBox="0 0 384 512"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M279.55 258.94c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C44.9 131.1 4 158.2 4 213.3c0 16.4 3 33.3 9 50.4 8 22.9 36.9 79.1 67.1 78.2 15.8-.4 27-11.2 47.6-11.2 20 0 30.3 11.2 47.9 11.2 30.5-.4 56.7-51 64.3-73.9-40.9-19.3-38.8-57.4-40.4-59.1zm-23.2-164.8c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 72 26.1 2 49.9-11.4 69.5-34.4z"
      />
    </svg>
  );
}

export default function MiraScribeStorePromo() {
  const [language, setLanguage] = useState(getSiteLanguage);
  const [storeTarget] = useState(resolveMiraScribeStoreTarget);
  const copy = resolveMiraScribeStorePromoCopy(language, storeTarget);
  const storeUrl = resolveMiraScribeStoreUrl(storeTarget);

  useEffect(() => subscribeSiteLanguage(setLanguage), []);

  return (
    <section
      className={'ms-store-promo ms-store-promo--' + storeTarget}
      aria-label={copy.region}
      lang={language}
    >
      <div className="ms-store-promo__inner">
        <div className="ms-store-promo__message">
          <span className="ms-store-promo__icon-frame" aria-hidden="true">
            <img
              className="ms-store-promo__app-icon"
              src={APP_IDENTITY_ASSETS.mirascribe.icon192}
              alt=""
              width="56"
              height="56"
              decoding="async"
            />
          </span>
          <div className="ms-store-promo__copy">
            <span>MiraScribe</span>
            <strong>{copy.title}</strong>
          </div>
        </div>

        <a
          className="ms-store-promo__cta"
          href={storeUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={copy.cta}
        >
          <AppleLogo />
          <span className="ms-store-promo__badge-copy" aria-hidden="true">
            <span>{copy.badgeLead}</span>
            <strong>{copy.badgeStore}</strong>
          </span>
        </a>
      </div>
    </section>
  );
}

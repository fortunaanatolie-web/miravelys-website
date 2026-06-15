/**
 * App Store product URL for Miravelys.
 * Set VITE_APP_STORE_URL in .env when the listing is live, e.g.
 * https://apps.apple.com/app/id1234567890
 *
 * Until the public listing exists, App Store CTAs intentionally route to
 * early access instead of sending visitors to an irrelevant search page.
 */
const configuredUrl = (import.meta.env.VITE_APP_STORE_URL || '').trim();

export const APP_STORE_URL = configuredUrl;
export const APP_STORE_AVAILABLE = Boolean(configuredUrl);

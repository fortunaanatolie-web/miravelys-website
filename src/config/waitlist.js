/** Optional production waitlist endpoint.
 * Set VITE_WAITLIST_ENDPOINT to POST { email, source, language }.
 * Without it, the site opens a support email draft and stores the request
 * locally so the CTA is still honest and useful.
 */
export const WAITLIST_ENDPOINT = (import.meta.env.VITE_WAITLIST_ENDPOINT || '').trim();

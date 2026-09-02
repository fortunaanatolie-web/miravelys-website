import { identityIconLinkDescriptors } from '../config/appIdentity';

const IDENTITY_ATTR = 'data-app-identity';
const MANAGED_REL = new Set(['icon', 'shortcut icon', 'apple-touch-icon', 'manifest']);

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    if (value == null) element.removeAttribute(key);
    else element.setAttribute(key, value);
  });
}

function removeManagedIconLinks() {
  [...document.head.querySelectorAll('link')].forEach(link => {
    const rel = (link.getAttribute('rel') || '').toLowerCase();
    if (link.hasAttribute(IDENTITY_ATTR) || MANAGED_REL.has(rel)) {
      link.remove();
    }
  });
}

function insertIconLinks(identity) {
  const fragment = document.createDocumentFragment();
  identityIconLinkDescriptors(identity).forEach(descriptor => {
    const link = document.createElement('link');
    Object.entries(descriptor).forEach(([key, value]) => {
      if (value) link.setAttribute(key, value);
    });
    link.setAttribute(IDENTITY_ATTR, identity.id);
    fragment.appendChild(link);
  });
  document.head.appendChild(fragment);
}

export function applyAppIdentity(identity) {
  if (typeof document === 'undefined' || !identity?.assets) return;

  removeManagedIconLinks();
  insertIconLinks(identity);
  document.documentElement.dataset.appIdentity = identity.id;

  upsertMeta('meta[name="theme-color"]', {
    name: 'theme-color',
    content: identity.themeColor,
    [IDENTITY_ATTR]: identity.id,
  });

  const ogImage = identity.assets.ogImage.startsWith('http')
    ? identity.assets.ogImage
    : `https://miravelys.com${identity.assets.ogImage}`;

  upsertMeta('meta[property="og:site_name"]', {
    property: 'og:site_name',
    content: identity.siteName,
  });
  upsertMeta('meta[property="og:image"]', {
    property: 'og:image',
    content: ogImage,
  });
  upsertMeta('meta[property="og:image:alt"]', {
    property: 'og:image:alt',
    content: identity.ogImageAlt,
  });
  upsertMeta('meta[name="twitter:image"]', {
    name: 'twitter:image',
    content: ogImage,
  });
  upsertMeta('meta[name="twitter:image:alt"]', {
    name: 'twitter:image:alt',
    content: identity.ogImageAlt,
  });
}

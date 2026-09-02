import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { APP_IDENTITY_RECORDS, DEFAULT_APP_ID } from '../src/config/appIdentity.js';
import { APP_IDENTITY_ASSETS } from '../src/config/appIdentityAssets.js';
import { languages } from '../src/i18n/publicSiteCopy.js';

const bootPath = fileURLToPath(new URL('../public-site/identities/boot.js', import.meta.url));

const payload = {
  defaultId: DEFAULT_APP_ID,
  locales: languages.map(language => language.code),
  identities: Object.fromEntries(
    Object.values(APP_IDENTITY_RECORDS)
      .filter(record => APP_IDENTITY_ASSETS[record.id])
      .map(record => [
        record.id,
        {
          id: record.id,
          siteName: record.siteName,
          routePrefixes: record.routePrefixes,
          themeColor: record.themeColor,
          ogImageAlt: record.ogImageAlt,
          assets: APP_IDENTITY_ASSETS[record.id],
        },
      ]),
  ),
};

const boot = `/*! Miravelys app identity boot — generated, do not edit. */
(function () {
  var DATA = ${JSON.stringify(payload)};
  var ATTR = 'data-app-identity';

  function stripLocale(pathname) {
    var path = pathname === '/' ? '/' : pathname.replace(/\\/+$/, '') || '/';
    var parts = path.split('/').filter(Boolean);
    if (parts[0] && DATA.locales.indexOf(parts[0]) !== -1) {
      return parts.length > 1 ? '/' + parts.slice(1).join('/') : '/';
    }
    return path;
  }

  function resolve(pathname) {
    var routePath = stripLocale(pathname);
    var best = DATA.identities[DATA.defaultId];
    var bestLen = -1;
    for (var id in DATA.identities) {
      var prefixes = DATA.identities[id].routePrefixes || [];
      for (var i = 0; i < prefixes.length; i++) {
        var prefix = prefixes[i];
        if (routePath === prefix || routePath.indexOf(prefix + '/') === 0) {
          if (prefix.length > bestLen) {
            best = DATA.identities[id];
            bestLen = prefix.length;
          }
        }
      }
    }
    return best;
  }

  function addLink(rel, href, extra) {
    var link = document.createElement('link');
    link.rel = rel;
    link.href = href;
    link.setAttribute(ATTR, currentId);
    if (extra) {
      if (extra.type) link.type = extra.type;
      if (extra.sizes) link.sizes = extra.sizes;
    }
    document.head.appendChild(link);
  }

  var currentId = null;

  function apply(identity) {
    if (!identity || !identity.assets) return;
    currentId = identity.id;
    var links = document.head.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"], link[rel="manifest"], link[' + ATTR + ']');
    for (var i = 0; i < links.length; i++) links[i].parentNode.removeChild(links[i]);
    var assets = identity.assets;
    if (assets.faviconSvg) addLink('icon', assets.faviconSvg, { type: 'image/svg+xml' });
    addLink('icon', assets.icon16, { type: 'image/png', sizes: '16x16' });
    addLink('icon', assets.icon32, { type: 'image/png', sizes: '32x32' });
    addLink('icon', assets.icon48, { type: 'image/png', sizes: '48x48' });
    addLink('shortcut icon', assets.faviconIco);
    addLink('apple-touch-icon', assets.appleTouchIcon, { sizes: '180x180' });
    addLink('manifest', assets.manifest);
    document.documentElement.setAttribute('data-app-identity', identity.id);
    var theme = document.head.querySelector('meta[name="theme-color"]');
    if (!theme) {
      theme = document.createElement('meta');
      theme.setAttribute('name', 'theme-color');
      document.head.appendChild(theme);
    }
    theme.setAttribute('content', identity.themeColor);
  }

  window.__miravelysResolveAppIdentity = resolve;
  window.__miravelysApplyAppIdentity = apply;
  apply(resolve(location.pathname));
})();
`;

await writeFile(bootPath, boot);
console.log('wrote public-site/identities/boot.js');

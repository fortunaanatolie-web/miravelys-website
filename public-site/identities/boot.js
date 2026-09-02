/*! Miravelys app identity boot — generated, do not edit. */
(function () {
  var DATA = {"defaultId":"miravelys","locales":["en","ru","ro","fr","hi","zh","de","ja","es","pt"],"identities":{"miravelys":{"id":"miravelys","siteName":"Miravelys","routePrefixes":[],"themeColor":"#f7f3ed","ogImageAlt":"Miravelys — a private place to return to what is true","assets":{"faviconSvg":"/favicon.svg","faviconIco":"/identities/miravelys/favicon.7dc7e212.ico","icon16":"/identities/miravelys/icon-16.7dc7e212.png","icon32":"/identities/miravelys/icon-32.7dc7e212.png","icon48":"/identities/miravelys/icon-48.7dc7e212.png","appleTouchIcon":"/identities/miravelys/apple-touch.7dc7e212.png","icon192":"/identities/miravelys/icon-192.7dc7e212.png","icon512":"/identities/miravelys/icon-512.7dc7e212.png","ogImage":"/identities/miravelys/og.7dc7e212.jpg","manifest":"/identities/miravelys/manifest.webmanifest","hash":"7dc7e212"}},"mirascribe":{"id":"mirascribe","siteName":"MiraScribe","routePrefixes":["/mirascribe"],"themeColor":"#0d0f14","ogImageAlt":"MiraScribe — private transcription for Mac","assets":{"faviconSvg":null,"faviconIco":"/identities/mirascribe/favicon.c650d6bc.ico","icon16":"/identities/mirascribe/icon-16.c650d6bc.png","icon32":"/identities/mirascribe/icon-32.c650d6bc.png","icon48":"/identities/mirascribe/icon-48.c650d6bc.png","appleTouchIcon":"/identities/mirascribe/apple-touch.c650d6bc.png","icon192":"/identities/mirascribe/icon-192.c650d6bc.png","icon512":"/identities/mirascribe/icon-512.c650d6bc.png","ogImage":"/identities/mirascribe/og.c650d6bc.jpg","manifest":"/identities/mirascribe/manifest.webmanifest","hash":"c650d6bc"}},"miraveris":{"id":"miraveris","siteName":"MiraVeris","routePrefixes":["/miraveris"],"themeColor":"#1e3a5f","ogImageAlt":"MiraVeris — marketplace verification","assets":{"faviconSvg":null,"faviconIco":"/identities/miraveris/favicon.709ee7fe.ico","icon16":"/identities/miraveris/icon-16.709ee7fe.png","icon32":"/identities/miraveris/icon-32.709ee7fe.png","icon48":"/identities/miraveris/icon-48.709ee7fe.png","appleTouchIcon":"/identities/miraveris/apple-touch.709ee7fe.png","icon192":"/identities/miraveris/icon-192.709ee7fe.png","icon512":"/identities/miraveris/icon-512.709ee7fe.png","ogImage":"/identities/miraveris/og.709ee7fe.jpg","manifest":"/identities/miraveris/manifest.webmanifest","hash":"709ee7fe"}},"miravoxis":{"id":"miravoxis","siteName":"MiraVoxis","routePrefixes":["/miravoxis"],"themeColor":"#0847bb","ogImageAlt":"MiraVoxis — local voice studio for Mac","assets":{"faviconSvg":null,"faviconIco":"/identities/miravoxis/favicon.5dd1a702.ico","icon16":"/identities/miravoxis/icon-16.5dd1a702.png","icon32":"/identities/miravoxis/icon-32.5dd1a702.png","icon48":"/identities/miravoxis/icon-48.5dd1a702.png","appleTouchIcon":"/identities/miravoxis/apple-touch.5dd1a702.png","icon192":"/identities/miravoxis/icon-192.5dd1a702.png","icon512":"/identities/miravoxis/icon-512.5dd1a702.png","ogImage":"/identities/miravoxis/og.5dd1a702.jpg","manifest":"/identities/miravoxis/manifest.webmanifest","hash":"5dd1a702"}}}};
  var ATTR = 'data-app-identity';
  var SITE_URL = 'https://miravelys.com';
  var TAB_TITLES = {
    '/products': 'Products — Miravelys',
    '/mirascribe': 'MiraScribe — Private Offline Transcription for Mac',
    '/mirascribe/support': 'MiraScribe Support',
    '/mirascribe/privacy': 'MiraScribe Privacy',
    '/mirascribe/legal': 'MiraScribe Legal',
    '/mirascribe/acknowledgements': 'MiraScribe Acknowledgements',
    '/miravoxis': 'MiraVoxis — Local Voice Studio for Mac',
    '/miravoxis/support': 'MiraVoxis Support',
    '/miravoxis/privacy': 'MiraVoxis Privacy'
  };

  function normalizePath(pathname) {
    if (!pathname || pathname === '/') return '/';
    return pathname.replace(/\/+$/, '') || '/';
  }

  function stripLocale(pathname) {
    var path = normalizePath(pathname);
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

  var currentId = null;

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

  function upsertLink(rel, href) {
    var link = document.head.querySelector('link[rel="' + rel + '"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = rel;
      document.head.appendChild(link);
    }
    link.href = href;
  }

  function upsertMeta(selector, name, value) {
    var meta = document.head.querySelector(selector);
    if (!meta) {
      meta = document.createElement('meta');
      if (name.indexOf('og:') === 0) meta.setAttribute('property', name);
      else meta.setAttribute('name', name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', value);
  }

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
    theme.setAttribute(ATTR, identity.id);
  }

  function applyRouteHead(pathname) {
    var normalized = normalizePath(pathname);
    var canonical = SITE_URL + (normalized === '/' ? '/' : normalized);
    var title = TAB_TITLES[normalized];
    if (title) document.title = title;
    upsertLink('canonical', canonical);
    upsertMeta('meta[property="og:url"]', 'og:url', canonical);
    upsertMeta('meta[name="twitter:url"]', 'twitter:url', canonical);
  }

  function applyCurrentRouteIdentity() {
    apply(resolve(location.pathname));
    applyRouteHead(location.pathname);
  }

  /*
   * React Router updates history before lazy route effects run. Browser chrome
   * is updated in the same synchronous transaction as the URL, preventing a
   * stale icon/title/canonical from a previously visited product.
   */
  var nativePushState = history.pushState;
  var nativeReplaceState = history.replaceState;

  history.pushState = function () {
    var result = nativePushState.apply(history, arguments);
    applyCurrentRouteIdentity();
    return result;
  };

  history.replaceState = function () {
    var result = nativeReplaceState.apply(history, arguments);
    applyCurrentRouteIdentity();
    return result;
  };

  addEventListener('popstate', applyCurrentRouteIdentity);

  window.__miravelysResolveAppIdentity = resolve;
  window.__miravelysApplyAppIdentity = apply;
  window.__miravelysApplyCurrentRouteIdentity = applyCurrentRouteIdentity;
  applyCurrentRouteIdentity();
})();
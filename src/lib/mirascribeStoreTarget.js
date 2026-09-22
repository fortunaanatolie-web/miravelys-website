export const MIRASCRIBE_STORE_TARGET = Object.freeze({
  IPHONE: 'iphone',
  MAC: 'mac',
});

export function resolveMiraScribeStoreTarget(browserNavigator) {
  const currentNavigator = browserNavigator
    ?? (typeof window !== 'undefined' ? window.navigator : null);

  if (!currentNavigator) return MIRASCRIBE_STORE_TARGET.IPHONE;

  const userAgent = currentNavigator.userAgent || '';
  const platform = currentNavigator.platform || '';
  const maxTouchPoints = currentNavigator.maxTouchPoints || 0;

  const isIOS =
    /iPad|iPhone|iPod/.test(userAgent)
    || (platform === 'MacIntel' && maxTouchPoints > 1);
  const isMobile = isIOS || /Android|Mobile|Tablet|IEMobile|Opera Mini/.test(userAgent);
  const isMac = /Mac/.test(platform) || /Macintosh|Mac OS X/.test(userAgent);

  return isMac && !isMobile
    ? MIRASCRIBE_STORE_TARGET.MAC
    : MIRASCRIBE_STORE_TARGET.IPHONE;
}

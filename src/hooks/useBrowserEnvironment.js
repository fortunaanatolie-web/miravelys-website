import { useEffect } from 'react';

/**
 * Adds coarse browser/device environment flags to <html>.
 * This is not used for styling brand differences.
 * It is only used for mobile viewport/sticky safety where browser engines behave differently.
 */
export function useBrowserEnvironment() {
  useEffect(() => {
    const root = document.documentElement;
    const ua = navigator.userAgent || '';
    const platform = navigator.platform || '';
    const maxTouchPoints = navigator.maxTouchPoints || 0;

    const isIOS =
      /iPad|iPhone|iPod/.test(ua) ||
      (platform === 'MacIntel' && maxTouchPoints > 1);

    const isAndroid = /Android/.test(ua);

    const isFirefox = /Firefox|FxiOS/.test(ua);
    const isSamsung = /SamsungBrowser/.test(ua);
    const isEdge = /Edg|EdgiOS|EdgA/.test(ua);
    const isChrome = /Chrome|CriOS|Chromium/.test(ua) && !isEdge && !isSamsung;
    const isSafari =
      /Safari/.test(ua) &&
      !/Chrome|CriOS|Chromium|Edg|EdgiOS|EdgA|FxiOS|SamsungBrowser/.test(ua);

    const isMobile =
      isIOS ||
      isAndroid ||
      /Mobile|Tablet|IEMobile|Opera Mini/.test(ua);

    const isTouch = maxTouchPoints > 0;

    const engine = isIOS
      ? 'webkit-ios'
      : isAndroid && (isChrome || isSamsung || isEdge)
        ? 'chromium-android'
        : isFirefox
          ? 'gecko'
          : isSafari
            ? 'webkit'
            : isChrome || isEdge
              ? 'chromium'
              : 'unknown';

    root.dataset.ios = String(isIOS);
    root.dataset.android = String(isAndroid);
    root.dataset.mobile = String(isMobile);
    root.dataset.touch = String(isTouch);
    root.dataset.browserEngine = engine;

    root.classList.toggle('is-ios', isIOS);
    root.classList.toggle('is-android', isAndroid);
    root.classList.toggle('is-mobile-browser', isMobile);
    root.classList.toggle('is-touch-browser', isTouch);
    root.classList.toggle('is-webkit-ios', engine === 'webkit-ios');
    root.classList.toggle('is-chromium-android', engine === 'chromium-android');
    root.classList.toggle('is-gecko', engine === 'gecko');
    root.classList.toggle('is-webkit', engine === 'webkit');
    root.classList.toggle('is-chromium', engine === 'chromium');
  }, []);
}
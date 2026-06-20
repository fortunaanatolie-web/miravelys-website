import { useEffect } from 'react';

/**
 * Keeps CSS variables synced to the real visible viewport.
 * This is important because 100vh and window.innerHeight can disagree
 * with the visible browser viewport when mobile address bars change.
 */
export function useVisualViewportVars() {
  useEffect(() => {
    const root = document.documentElement;

    let frame = 0;

    const updateNow = () => {
      frame = 0;

      const visual = window.visualViewport;
      const height = visual?.height || window.innerHeight;
      const width = visual?.width || window.innerWidth;
      const offsetTop = visual?.offsetTop || 0;
      const offsetLeft = visual?.offsetLeft || 0;

      root.style.setProperty('--vvh', `${height}px`);
      root.style.setProperty('--vvw', `${width}px`);
      root.style.setProperty('--vv-offset-top', `${offsetTop}px`);
      root.style.setProperty('--vv-offset-left', `${offsetLeft}px`);

      root.style.setProperty('--window-inner-height', `${window.innerHeight}px`);
      root.style.setProperty('--window-inner-width', `${window.innerWidth}px`);

      const isLandscape = width > height;
      root.dataset.viewportOrientation = isLandscape ? 'landscape' : 'portrait';
    };

    const update = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateNow);
    };

    updateNow();

    window.visualViewport?.addEventListener('resize', update);
    window.visualViewport?.addEventListener('scroll', update);
    window.addEventListener('resize', update);
    window.addEventListener('orientationchange', update);
    window.addEventListener('pageshow', update);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);

      window.visualViewport?.removeEventListener('resize', update);
      window.visualViewport?.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      window.removeEventListener('orientationchange', update);
      window.removeEventListener('pageshow', update);
    };
  }, []);
}
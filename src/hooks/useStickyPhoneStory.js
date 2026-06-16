import { useEffect, useMemo, useState } from 'react';
import { useLandscapePhoneStory } from './useLandscapePhoneStory';

const DESKTOP_STORY_MQ = '(min-width: 64.0625rem)';

/**
 * Sticky-phone layout mode for the product story section.
 * - desktop: full sticky scrollytelling (1025px+)
 * - landscape: compact sticky two-column (landscape phone)
 * - mobile: stacked cards (portrait phone)
 */
export function useStickyPhoneStoryMode() {
  const { compact: landscapeCompact, fallbackStacked: shortLandscape } = useLandscapePhoneStory();
  const [desktopWide, setDesktopWide] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(DESKTOP_STORY_MQ).matches;
  });

  useEffect(() => {
    const desktop = window.matchMedia(DESKTOP_STORY_MQ);
    const update = () => setDesktopWide(desktop.matches);
    update();
    desktop.addEventListener('change', update);
    return () => desktop.removeEventListener('change', update);
  }, []);

  return useMemo(() => {
    if (desktopWide) return 'desktop';
    if (shortLandscape) return 'mobile';
    if (landscapeCompact) return 'landscape';
    return 'mobile';
  }, [desktopWide, landscapeCompact, shortLandscape]);
}

export function useStickyPhoneScreens(screens, activeIndex, mode) {
  return useMemo(() => {
    if (mode !== 'landscape') return screens;
    const activeScreen = screens[activeIndex] ?? screens[0];
    return activeScreen ? [activeScreen] : screens.slice(0, 1);
  }, [mode, activeIndex, screens]);
}

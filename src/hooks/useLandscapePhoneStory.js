import { useEffect, useState } from 'react';

/** Compact sticky scrollytelling on landscape phones with enough space. */
export const LANDSCAPE_PHONE_STORY_MQ =
  '(orientation: landscape) and (max-height: 520px) and (min-width: 640px) and (max-width: 64rem)';

/** Very short landscape — fall back to stacked mobile cards. */
export const SHORT_LANDSCAPE_STACKED_MQ =
  '(orientation: landscape) and (max-height: 340px) and (max-width: 64rem)';

function readLandscapeState() {
  if (typeof window === 'undefined') {
    return { compact: false, fallbackStacked: false };
  }

  const short = window.matchMedia(SHORT_LANDSCAPE_STACKED_MQ).matches;
  const compact =
    !short && window.matchMedia(LANDSCAPE_PHONE_STORY_MQ).matches;

  return { compact, fallbackStacked: short };
}

export function useLandscapePhoneStory() {
  const [state, setState] = useState(readLandscapeState);

  useEffect(() => {
    const landscape = window.matchMedia(LANDSCAPE_PHONE_STORY_MQ);
    const short = window.matchMedia(SHORT_LANDSCAPE_STACKED_MQ);

    const update = () => setState(readLandscapeState());

    update();
    landscape.addEventListener('change', update);
    short.addEventListener('change', update);

    return () => {
      landscape.removeEventListener('change', update);
      short.removeEventListener('change', update);
    };
  }, []);

  return state;
}

const DESKTOP_STORY_MQ = '(min-width: 64.0625rem)';

/** True when the sticky desktop scrollytelling layout is visible and should sync screens. */
export function useStoryScrollytellingEnabled() {
  const { compact } = useLandscapePhoneStory();
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

  return desktopWide || compact;
}

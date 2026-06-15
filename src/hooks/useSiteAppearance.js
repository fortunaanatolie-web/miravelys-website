import { useEffect, useState } from 'react';

const STORAGE_KEY = 'miravelys.appearance';
const DAY_START_HOUR = 6;
const DAY_END_HOUR = 19;

export function resolveAppearancePreference() {
  if (typeof window === 'undefined') return 'evening';

  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === 'day' || saved === 'evening') return saved;

  const hour = new Date().getHours();
  const timeSaysDay = hour >= DAY_START_HOUR && hour < DAY_END_HOUR;

  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (prefersLight && !prefersDark) return 'day';
  if (prefersDark && !prefersLight) return 'evening';

  return timeSaysDay ? 'day' : 'evening';
}

export function setAppearancePreference(mode) {
  if (mode === 'auto') {
    window.localStorage.removeItem(STORAGE_KEY);
  } else {
    window.localStorage.setItem(STORAGE_KEY, mode);
  }
  applyAppearance(resolveAppearancePreference());
}

export function applyAppearance(mode) {
  const appearance = mode === 'day' ? 'day' : 'evening';
  document.documentElement.dataset.appearance = appearance;
  document.documentElement.style.colorScheme = appearance === 'day' ? 'light' : 'dark';

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute('content', appearance === 'day' ? '#f7f3ed' : '#060b1d');
  }
}

export function useSiteAppearance() {
  const [appearance, setAppearance] = useState(resolveAppearancePreference);

  useEffect(() => {
    applyAppearance(appearance);

    const lightMq = window.matchMedia('(prefers-color-scheme: light)');
    const darkMq = window.matchMedia('(prefers-color-scheme: dark)');

    function sync() {
      if (window.localStorage.getItem(STORAGE_KEY)) return;
      setAppearance(resolveAppearancePreference());
    }

    const interval = window.setInterval(sync, 60_000);
    lightMq.addEventListener('change', sync);
    darkMq.addEventListener('change', sync);

    return () => {
      window.clearInterval(interval);
      lightMq.removeEventListener('change', sync);
      darkMq.removeEventListener('change', sync);
    };
  }, [appearance]);

  return appearance;
}

import { useEffect, useMemo, useState } from 'react';
import {
  CANONICAL_LOCALE,
  getEnglishScreenshotPath,
  getScreenshotPath,
  loadLegacyScreenshotUrl,
  resolveLegacyScreenshotUrl,
} from '../lib/miravelysScreenshots.js';

const isDev = import.meta.env.DEV;

/**
 * Resolves a Miravelys website screenshot with .webp primary + legacy PNG fallback.
 * Never swaps unrelated screens — only locale → English → legacy asset chain.
 */
export function useMiravelysScreenshot(screen, lang) {
  const descriptor = useMemo(() => {
    if (!screen) return null;
    const locale = screen.lang ?? lang;
    const group = screen.group;
    const code = screen.code;
    const legacyAsset = screen.legacyAsset ?? screen.asset ?? null;
    const publicPath =
      screen.publicPath ?? (group && code ? getScreenshotPath(locale, group, code) : '');

    return { locale, group, code, legacyAsset, publicPath, alt: screen.alt ?? '' };
  }, [screen, lang]);

  const [state, setState] = useState(() => ({
    src: '',
    status: 'loading',
    missing: null,
  }));

  useEffect(() => {
    if (!descriptor) {
      setState({ src: '', status: 'missing', missing: null });
      return undefined;
    }

    let cancelled = false;
    const { locale, group, code, legacyAsset, publicPath } = descriptor;

    async function resolve() {
      if (!publicPath && legacyAsset) {
        const legacy = await loadLegacyScreenshotUrl(locale, legacyAsset);
        if (cancelled) return;
        if (legacy) {
          setState({ src: legacy, status: 'legacy-fallback', missing: null });
          return;
        }
      }

      if (publicPath) {
        const img = new Image();
        img.onload = async () => {
          if (cancelled) return;
          setState({ src: publicPath, status: 'ready', missing: null });
        };
        img.onerror = async () => {
          if (cancelled) return;

          if (locale !== CANONICAL_LOCALE && group && code) {
            const enPath = getEnglishScreenshotPath(group, code);
            const enImg = new Image();
            enImg.onload = () => {
              if (!cancelled) setState({ src: enPath, status: 'en-fallback', missing: null });
            };
            enImg.onerror = () => tryLegacy();
            enImg.src = enPath;
            return;
          }

          tryLegacy();
        };
        img.src = publicPath;
        return;
      }

      tryLegacy();

      async function tryLegacy() {
        if (legacyAsset) {
          const cached = resolveLegacyScreenshotUrl(locale, legacyAsset);
          if (cached && !cancelled) {
            setState({ src: cached, status: 'legacy-fallback', missing: null });
            return;
          }
          const loaded = await loadLegacyScreenshotUrl(locale, legacyAsset);
          if (loaded && !cancelled) {
            setState({ src: loaded, status: 'legacy-fallback', missing: null });
            return;
          }
        }

        if (!cancelled) {
          setState({
            src: '',
            status: 'missing',
            missing: { group, code, locale, expected: publicPath },
          });
        }
      }
    }

    setState({ src: '', status: 'loading', missing: null });
    resolve();

    return () => {
      cancelled = true;
    };
  }, [descriptor]);

  return { ...state, isDev, alt: descriptor?.alt ?? '' };
}

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
 * Starts legacy PNG load in parallel with .webp probe so the first successful
 * image wins — no multi-second dark placeholder when .webp files are absent.
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

  const [state, setState] = useState(() => {
    if (!descriptor) return { src: '', status: 'loading', missing: null };
    const { locale, group, code, legacyAsset, publicPath } = descriptor;
    if (legacyAsset) {
      const cached = resolveLegacyScreenshotUrl(locale, legacyAsset);
      if (cached) {
        return { src: cached, status: 'legacy-fallback', missing: null };
      }
    }
    return { src: '', status: 'loading', missing: null };
  });

  useEffect(() => {
    if (!descriptor) {
      setState({ src: '', status: 'missing', missing: null });
      return undefined;
    }

    let cancelled = false;
    let resolved = false;
    const { locale, group, code, legacyAsset, publicPath } = descriptor;

    function resolveOnce(src, status) {
      if (cancelled || resolved) return;
      resolved = true;
      setState({ src, status, missing: null });
    }

    function markMissing() {
      if (cancelled || resolved) return;
      resolved = true;
      setState({
        src: '',
        status: 'missing',
        missing: { group, code, locale, expected: publicPath },
      });
    }

    async function resolve() {
      // Immediately check sync legacy cache for instant render
      if (legacyAsset) {
        const cached = resolveLegacyScreenshotUrl(locale, legacyAsset);
        if (cached) {
          resolveOnce(cached, 'legacy-fallback');
          return;
        }
      }

      // No publicPath and no cached legacy — try async legacy only
      if (!publicPath) {
        if (legacyAsset) {
          const loaded = await loadLegacyScreenshotUrl(locale, legacyAsset);
          if (loaded && !cancelled) { resolveOnce(loaded, 'legacy-fallback'); return; }
        }
        markMissing();
        return;
      }

      // Start legacy PNG load in parallel with .webp probe
      // so the first successful image wins instead of waiting for two 404s
      let legacyResult = null;
      let legacyDone = false;

      if (legacyAsset) {
        loadLegacyScreenshotUrl(locale, legacyAsset).then(url => {
          legacyResult = url;
          legacyDone = true;
          // If .webp hasn't resolved yet, use legacy immediately
          if (!resolved && url) {
            resolveOnce(url, 'legacy-fallback');
          }
        });
      }

      // Probe the .webp public path
      const img = new Image();
      img.onload = () => {
        resolveOnce(publicPath, 'ready');
      };
      img.onerror = () => {
        if (cancelled || resolved) return;

        // Try English .webp fallback
        if (locale !== CANONICAL_LOCALE && group && code) {
          const enPath = getEnglishScreenshotPath(group, code);
          const enImg = new Image();
          enImg.onload = () => {
            resolveOnce(enPath, 'en-fallback');
          };
          enImg.onerror = () => {
            // English .webp also failed — wait for legacy if still loading
            if (resolved) return;
            if (legacyDone) {
              if (legacyResult) {
                resolveOnce(legacyResult, 'legacy-fallback');
              } else {
                markMissing();
              }
            }
            // Otherwise legacy load still in flight — it will resolve or markMissing
          };
          enImg.src = enPath;
          return;
        }

        // Same locale or no English fallback — wait for legacy if still loading
        if (legacyDone) {
          if (legacyResult) {
            resolveOnce(legacyResult, 'legacy-fallback');
          } else {
            markMissing();
          }
        }
      };
      img.src = publicPath;
    }

    setState({ src: '', status: 'loading', missing: null });
    resolved = false;
    resolve();

    return () => {
      cancelled = true;
    };
  }, [descriptor]);

  return { ...state, isDev, alt: descriptor?.alt ?? '' };
}

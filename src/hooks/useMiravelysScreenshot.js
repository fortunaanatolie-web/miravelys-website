import { useEffect, useMemo, useRef, useState } from 'react';
import {
  CANONICAL_LOCALE,
  getEnglishScreenshotPath,
  getScreenshotPath,
  loadLegacyScreenshotUrl,
  resolveLegacyScreenshotUrl,
} from '../lib/miravelysScreenshots.js';

const isDev = import.meta.env.DEV;

function resolveInitialState(descriptor) {
  if (!descriptor) {
    return { src: '', status: 'missing', missing: null };
  }

  const { locale, legacyAsset } = descriptor;
  if (legacyAsset) {
    const cached = resolveLegacyScreenshotUrl(locale, legacyAsset);
    if (cached) {
      return { src: cached, status: 'legacy-fallback', missing: null };
    }
  }

  return { src: '', status: 'loading', missing: null };
}

/**
 * Resolves a Miravelys website screenshot with .webp primary + legacy PNG fallback.
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

  const descriptorKey = descriptor
    ? `${descriptor.locale}:${descriptor.group}:${descriptor.code}:${descriptor.legacyAsset ?? ''}`
    : '';

  const [state, setState] = useState(() => resolveInitialState(descriptor));
  const resolvedKeyRef = useRef('');

  useEffect(() => {
    if (!descriptor) {
      setState({ src: '', status: 'missing', missing: null });
      resolvedKeyRef.current = '';
      return undefined;
    }

    if (resolvedKeyRef.current === descriptorKey) {
      return undefined;
    }

    let cancelled = false;

    function finish(nextState) {
      if (cancelled) return;
      resolvedKeyRef.current = descriptorKey;
      setState(nextState);
    }

    async function resolve() {
      const { locale, group, code, legacyAsset, publicPath } = descriptor;

      const cached = legacyAsset ? resolveLegacyScreenshotUrl(locale, legacyAsset) : '';
      if (cached) {
        finish({ src: cached, status: 'legacy-fallback', missing: null });
        return;
      }

      if (!publicPath && !legacyAsset) {
        finish({ src: '', status: 'missing', missing: { group, code, locale, expected: '' } });
        return;
      }

      const legacyPromise = legacyAsset
        ? loadLegacyScreenshotUrl(locale, legacyAsset)
        : Promise.resolve('');

      const webpPromise = publicPath
        ? new Promise(resolveWebp => {
            const img = new Image();
            img.onload = () => resolveWebp(publicPath);
            img.onerror = () => resolveWebp('');
            img.src = publicPath;
          })
        : Promise.resolve('');

      const enWebpPromise =
        publicPath && locale !== CANONICAL_LOCALE && group && code
          ? new Promise(resolveWebp => {
              const enPath = getEnglishScreenshotPath(group, code);
              const img = new Image();
              img.onload = () => resolveWebp(enPath);
              img.onerror = () => resolveWebp('');
              img.src = enPath;
            })
          : Promise.resolve('');

      const [legacySrc, webpSrc, enWebpSrc] = await Promise.all([
        legacyPromise,
        webpPromise,
        enWebpPromise,
      ]);

      if (cancelled) return;

      const src = webpSrc || enWebpSrc || legacySrc || '';
      if (src) {
        if (isDev && !webpSrc && enWebpSrc) {
          console.warn(`[MiravelysScreenshots] Missing localized screenshot: ${publicPath}. Falling back to English (${enWebpSrc}).`);
        }
        finish({
          src,
          status: webpSrc ? 'ready' : enWebpSrc ? 'en-fallback' : 'legacy-fallback',
          missing: null,
        });
        return;
      }

      finish({
        src: '',
        status: 'missing',
        missing: { group, code, locale, expected: publicPath },
      });
    }

    setState(resolveInitialState(descriptor));
    resolve();

    return () => {
      cancelled = true;
    };
  }, [descriptor, descriptorKey]);

  return { ...state, isDev, alt: descriptor?.alt ?? '' };
}

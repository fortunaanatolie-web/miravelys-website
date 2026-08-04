import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  CANONICAL_LOCALE,
  getEnglishScreenshotPath,
  getResponsiveScreenshotSources,
  getScreenshotPath,
} from '../lib/miravelysScreenshots.js';

const isDev = import.meta.env.DEV;

function resolveInitialState(descriptor) {
  if (!descriptor) {
    return { src: '', status: 'missing', missing: null, source: 'missing', assetLocale: null };
  }

  if (descriptor.publicPath) {
    return {
      src: descriptor.publicPath,
      status: 'ready',
      missing: null,
      source: 'public',
      assetLocale: descriptor.locale,
    };
  }

  return { src: '', status: 'missing', missing: null, source: 'missing', assetLocale: null };
}

/**
 * Use the deployed optimized screenshot first. A missing localized capture falls back
 * to the canonical English capture; retired bundled PNGs never enter the live bundle.
 */
export function useMiravelysScreenshot(screen, lang) {
  const descriptor = useMemo(() => {
    if (!screen) return null;
    const locale = screen.lang ?? lang;
    const group = screen.group;
    const code = screen.code;
    const publicPath =
      screen.publicPath ?? (group && code ? getScreenshotPath(locale, group, code) : '');

    return { locale, group, code, publicPath, alt: screen.alt ?? '' };
  }, [screen, lang]);

  const descriptorKey = descriptor
    ? `${descriptor.locale}:${descriptor.group}:${descriptor.code}`
    : '';

  const [state, setState] = useState(() => resolveInitialState(descriptor));

  useEffect(() => {
    if (!descriptor) {
      setState({ src: '', status: 'missing', missing: null, source: 'missing', assetLocale: null });
      return undefined;
    }

    setState(resolveInitialState(descriptor));
  }, [descriptor, descriptorKey]);

  const handleError = useCallback(() => {
    if (!descriptor || state.source === 'missing') return;

    const { locale, group, code, publicPath } = descriptor;
    if (state.source === 'public' && locale !== CANONICAL_LOCALE && group && code) {
      const englishPath = getEnglishScreenshotPath(group, code);
      if (isDev) {
        console.warn(`[MiravelysScreenshots] Missing localized screenshot: ${publicPath}. Falling back to English (${englishPath}).`);
      }
      setState({ src: englishPath, status: 'en-fallback', missing: null, source: 'english', assetLocale: CANONICAL_LOCALE });
      return;
    }

    setState({
      src: '',
      status: 'missing',
      missing: { group, code, locale, expected: publicPath },
      source: 'missing',
      assetLocale: null,
    });
  }, [descriptor, state.source]);

  const responsiveSources = useMemo(
    () => (state.assetLocale && descriptor?.group && descriptor?.code
      ? getResponsiveScreenshotSources(state.assetLocale, descriptor.group, descriptor.code)
      : null),
    [descriptor?.code, descriptor?.group, state.assetLocale],
  );

  return { ...state, responsiveSources, handleError, isDev, alt: descriptor?.alt ?? '' };
}

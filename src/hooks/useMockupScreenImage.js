import { useEffect, useState } from 'react';
import { loadMockupScreenImage, resolveMockupScreenImage } from '../config/mockupScreens';

export function useMockupScreenImage(lang, asset, explicitSrc) {
  const resolvedExplicit = explicitSrc || undefined;
  const [resolved, setResolved] = useState(() => {
    if (resolvedExplicit) return resolvedExplicit;
    return lang && asset ? resolveMockupScreenImage(lang, asset) : '';
  });

  useEffect(() => {
    if (resolvedExplicit) {
      setResolved(resolvedExplicit);
      return undefined;
    }
    if (!lang || !asset) {
      setResolved('');
      return undefined;
    }

    const immediate = resolveMockupScreenImage(lang, asset);
    if (immediate) {
      setResolved(immediate);
      return undefined;
    }

    let cancelled = false;
    loadMockupScreenImage(lang, asset).then(url => {
      if (!cancelled) setResolved(url);
    });

    return () => {
      cancelled = true;
    };
  }, [resolvedExplicit, lang, asset]);

  return resolved;
}

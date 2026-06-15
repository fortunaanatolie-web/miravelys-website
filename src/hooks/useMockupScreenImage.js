import { useEffect, useState } from 'react';
import { loadMockupScreenImage, resolveMockupScreenImage } from '../config/mockupScreens';

export function useMockupScreenImage(lang, asset, src) {
  const cached = src || (lang && asset ? resolveMockupScreenImage(lang, asset) : '');
  const [resolved, setResolved] = useState(cached);

  useEffect(() => {
    if (src) {
      setResolved(src);
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
  }, [src, lang, asset]);

  return resolved;
}

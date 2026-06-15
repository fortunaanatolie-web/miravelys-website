import { useEffect, useRef, useState } from 'react';

/** Scroll progress 0–1 while element is in viewport — for subtle device scale/opacity. */
export function useInViewProgress() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setProgress(1);
      return undefined;
    }

    function onScroll() {
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight;
      const center = rect.top + rect.height * 0.5;
      const dist = Math.abs(center - vh * 0.5);
      const range = vh * 0.65;
      const p = 1 - Math.min(dist / range, 1);
      setProgress(Math.max(0, Math.min(1, p)));
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return { ref, progress };
}

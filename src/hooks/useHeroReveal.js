import { useEffect, useState } from 'react';

/** 0 → hidden/masked, 1 → fully revealed. Based on scroll through hero + first step. */
export function useHeroReveal() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setProgress(1);
      return undefined;
    }

    function onScroll() {
      const hero = document.getElementById('top');
      if (!hero) return;

      const rect = hero.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      const range = vh * 0.85;
      const p = Math.min(scrolled / range, 1);
      setProgress(p);
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return progress;
}

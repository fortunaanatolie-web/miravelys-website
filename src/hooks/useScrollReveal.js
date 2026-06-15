import { useEffect, useRef, useState } from 'react';

/**
 * Intersection Observer hook for Apple-style scroll reveals.
 * Respects prefers-reduced-motion.
 */
export function useScrollReveal(options = {}) {
  const {
    threshold = 0.12,
    rootMargin = '0px 0px -8% 0px',
    once = true,
    delay = 0,
  } = options;

  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              window.setTimeout(() => setIsVisible(true), delay);
            } else {
              setIsVisible(true);
            }
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once, delay]);

  return { ref, isVisible };
}

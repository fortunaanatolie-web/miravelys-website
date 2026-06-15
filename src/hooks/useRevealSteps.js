import { useEffect, useRef, useState } from 'react';

/**
 * Tracks which reveal step panel is most visible in the viewport.
 * Returns activeIndex for sticky device screen crossfade.
 */
export function useRevealSteps(stepCount) {
  const [activeIndex, setActiveIndex] = useState(0);
  const panelRefs = useRef([]);
  const ratiosRef = useRef({});

  useEffect(() => {
    const panels = panelRefs.current.filter(Boolean);
    if (!panels.length) return undefined;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return undefined;

    function pickBest() {
      let bestIndex = 0;
      let bestRatio = 0;
      Object.entries(ratiosRef.current).forEach(([index, ratio]) => {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestIndex = Number(index);
        }
      });
      if (bestRatio > 0.18) setActiveIndex(bestIndex);
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          ratiosRef.current[entry.target.dataset.stepIndex] = entry.intersectionRatio;
        });
        pickBest();
      },
      { threshold: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9], rootMargin: '-12% 0px -12% 0px' }
    );

    panels.forEach(panel => observer.observe(panel));
    return () => observer.disconnect();
  }, [stepCount]);

  function setPanelRef(index, node) {
    panelRefs.current[index] = node;
  }

  return { activeIndex, setPanelRef };
}

import { useCallback, useLayoutEffect, useRef, useState } from 'react';

/**
 * Tracks the active sticky-phone story step via IntersectionObserver.
 */
export function useActiveStep(stepCount) {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef([]);

  const setStepRef = useCallback((index, node) => {
    stepRefs.current[index] = node;
  }, []);

  const focusStep = useCallback(
    index => {
      if (index < 0 || index >= stepCount) return;
      setActiveIndex(index);
      stepRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    },
    [stepCount]
  );

  useLayoutEffect(() => {
    if (stepCount < 1) return undefined;

    const nodes = stepRefs.current.filter(Boolean);
    if (!nodes.length) return undefined;

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        const index = Number(visible.target.getAttribute('data-step-index'));
        if (!Number.isNaN(index)) {
          setActiveIndex(Math.max(0, Math.min(index, stepCount - 1)));
        }
      },
      {
        threshold: [0.35, 0.5, 0.65],
        rootMargin: '-24% 0px -24% 0px',
      }
    );

    nodes.forEach(node => observer.observe(node));

    return () => observer.disconnect();
  }, [stepCount]);

  const safeActiveIndex =
    Number.isFinite(activeIndex) && activeIndex >= 0 && activeIndex < stepCount
      ? activeIndex
      : 0;

  return { activeIndex: safeActiveIndex, setStepRef, focusStep, stepRefs };
}

/** @deprecated Use useActiveStep */
export { useActiveStep as useRevealSteps };

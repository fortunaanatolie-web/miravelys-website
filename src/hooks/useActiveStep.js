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

    const ratios = new Map();

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          ratios.set(entry.target, entry.intersectionRatio);
        });

        let maxRatio = 0;
        let maxNode = null;

        for (const [node, ratio] of ratios.entries()) {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            maxNode = node;
          }
        }

        if (maxNode && maxRatio > 0.05) {
          const index = Number(maxNode.getAttribute('data-step-index'));
          if (!Number.isNaN(index)) {
            setActiveIndex(Math.max(0, Math.min(index, stepCount - 1)));
          }
        }
      },
      {
        threshold: [0.1, 0.25, 0.5, 0.75, 0.9],
        rootMargin: '-15% 0px -15% 0px',
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

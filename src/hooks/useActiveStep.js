import { useCallback, useLayoutEffect, useRef, useState } from 'react';

const THRESHOLDS = [0, 0.35, 0.5, 0.65, 0.8, 1];
const ROOT_MARGIN = '-25% 0px -25% 0px';
const MIN_RATIO = 0.18;

/**
 * Tracks which story step is nearest the viewport center for sticky-phone scrollytelling.
 */
export function useActiveStep(stepCount) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const stepRefs = useRef([]);
  const ratiosRef = useRef({});

  const setStepRef = useCallback(
    (index, node) => {
      stepRefs.current[index] = node;
      if (!node || stepCount < 1) return;
      if (stepRefs.current.filter(Boolean).length >= stepCount) {
        setReady(current => current || true);
      }
    },
    [stepCount]
  );

  const focusStep = useCallback(
    index => {
      if (index >= 0 && index < stepCount) setActiveIndex(index);
    },
    [stepCount]
  );

  useLayoutEffect(() => {
    if (!ready || stepCount < 1) return undefined;

    const nodes = stepRefs.current.filter(Boolean);
    if (nodes.length < stepCount) return undefined;

    ratiosRef.current = {};

    function pickActive() {
      let bestIndex = 0;
      let bestRatio = 0;
      Object.entries(ratiosRef.current).forEach(([index, ratio]) => {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestIndex = Number(index);
        }
      });
      if (bestRatio >= MIN_RATIO) {
        setActiveIndex(bestIndex);
      }
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const index = entry.target.getAttribute('data-step-index');
          if (index != null) ratiosRef.current[index] = entry.intersectionRatio;
        });
        pickActive();
      },
      { threshold: THRESHOLDS, rootMargin: ROOT_MARGIN }
    );

    nodes.forEach(node => observer.observe(node));

    return () => observer.disconnect();
  }, [ready, stepCount]);

  return { activeIndex, setStepRef, focusStep };
}

/** @deprecated Use useActiveStep */
export { useActiveStep as useRevealSteps };

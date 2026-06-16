import { useCallback, useLayoutEffect, useRef, useState } from 'react';

const DEFAULT_ROOT_MARGIN = '-25% 0px -25% 0px';
const DEFAULT_MIN_RATIO = 0.18;

function pickActiveByCenter(nodes) {
  if (!nodes.length) return 0;

  const viewportCenter = window.innerHeight * 0.5;
  let bestIndex = 0;
  let bestDistance = Infinity;

  nodes.forEach((node, index) => {
    const rect = node.getBoundingClientRect();
    if (rect.height <= 0 || rect.bottom <= 0 || rect.top >= window.innerHeight) return;

    const center = rect.top + rect.height / 2;
    const distance = Math.abs(center - viewportCenter);
    if (distance < bestDistance) {
      bestDistance = distance;
      bestIndex = index;
    }
  });

  return bestIndex;
}

function nodesAreVisible(nodes) {
  return nodes.some(node => {
    const rect = node.getBoundingClientRect();
    return rect.height > 0 && rect.width > 0;
  });
}

/**
 * Tracks which story step is nearest the viewport center for sticky-phone scrollytelling.
 */
export function useActiveStep(stepCount, options = {}) {
  const {
    enabled = true,
    rootMargin = DEFAULT_ROOT_MARGIN,
    minRatio = DEFAULT_MIN_RATIO,
    preferCenterScroll = false,
  } = options;

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
      if (index < 0 || index >= stepCount) return;
      setActiveIndex(index);
      stepRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    },
    [stepCount]
  );

  useLayoutEffect(() => {
    if (!enabled || !ready || stepCount < 1) return undefined;

    const nodes = stepRefs.current.filter(Boolean);
    if (nodes.length < stepCount) return undefined;

    ratiosRef.current = {};
    let frame = 0;

    function pickActiveFromRatios() {
      let bestIndex = 0;
      let bestRatio = 0;
      Object.entries(ratiosRef.current).forEach(([index, ratio]) => {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestIndex = Number(index);
        }
      });
      if (bestRatio >= minRatio) {
        setActiveIndex(bestIndex);
        return true;
      }
      return false;
    }

    function syncActiveStep() {
      if (!nodesAreVisible(nodes)) return;

      if (preferCenterScroll) {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          setActiveIndex(pickActiveByCenter(nodes));
        });
        return;
      }

      if (!pickActiveFromRatios()) {
        setActiveIndex(pickActiveByCenter(nodes));
      }
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const index = entry.target.getAttribute('data-step-index');
          if (index != null) ratiosRef.current[index] = entry.intersectionRatio;
        });
        if (!preferCenterScroll) syncActiveStep();
      },
      { threshold: [0, 0.2, 0.35, 0.5, 0.65, 0.8, 1], rootMargin }
    );

    nodes.forEach(node => observer.observe(node));

    syncActiveStep();
    window.addEventListener('scroll', syncActiveStep, { passive: true });
    window.addEventListener('resize', syncActiveStep);
    window.addEventListener('orientationchange', syncActiveStep);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('scroll', syncActiveStep);
      window.removeEventListener('resize', syncActiveStep);
      window.removeEventListener('orientationchange', syncActiveStep);
    };
  }, [enabled, ready, stepCount, rootMargin, minRatio, preferCenterScroll]);

  return { activeIndex, setStepRef, focusStep };
}

/** @deprecated Use useActiveStep */
export { useActiveStep as useRevealSteps };

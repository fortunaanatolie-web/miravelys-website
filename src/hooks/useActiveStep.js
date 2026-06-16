import { useCallback, useLayoutEffect, useRef, useState } from 'react';

/**
 * Pick the step whose vertical center is closest to the viewport center.
 * Works reliably for desktop sticky scrollytelling and compact landscape layouts.
 */
function pickActiveByCenter(nodes) {
  if (!nodes.length) return 0;

  const viewportCenter = window.innerHeight * 0.5;
  let bestIndex = 0;
  let bestDistance = Infinity;

  nodes.forEach((node, index) => {
    const rect = node.getBoundingClientRect();
    if (rect.height <= 0) return;

    const center = rect.top + rect.height / 2;
    const distance = Math.abs(center - viewportCenter);
    if (distance < bestDistance) {
      bestDistance = distance;
      bestIndex = index;
    }
  });

  return bestIndex;
}

function layoutIsVisible(nodes) {
  return nodes.some(node => {
    const rect = node.getBoundingClientRect();
    return rect.height > 0 && rect.width > 0;
  });
}

/**
 * Tracks which story step is nearest the viewport center for sticky-phone scrollytelling.
 */
export function useActiveStep(stepCount) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const stepRefs = useRef([]);

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
    if (!ready || stepCount < 1) return undefined;

    const nodes = stepRefs.current.filter(Boolean);
    if (nodes.length < stepCount) return undefined;

    let frame = 0;

    const syncActiveStep = () => {
      if (!layoutIsVisible(nodes)) return;

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setActiveIndex(pickActiveByCenter(nodes));
      });
    };

    syncActiveStep();

    window.addEventListener('scroll', syncActiveStep, { passive: true });
    window.addEventListener('resize', syncActiveStep);
    window.addEventListener('orientationchange', syncActiveStep);

    const visibilityObserver =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(() => syncActiveStep())
        : null;

    nodes.forEach(node => visibilityObserver?.observe(node));

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', syncActiveStep);
      window.removeEventListener('resize', syncActiveStep);
      window.removeEventListener('orientationchange', syncActiveStep);
      visibilityObserver?.disconnect();
    };
  }, [ready, stepCount]);

  const safeActiveIndex =
    typeof activeIndex === 'number' && activeIndex >= 0 && activeIndex < stepCount
      ? activeIndex
      : 0;

  return { activeIndex: safeActiveIndex, setStepRef, focusStep };
}

/** @deprecated Use useActiveStep */
export { useActiveStep as useRevealSteps };

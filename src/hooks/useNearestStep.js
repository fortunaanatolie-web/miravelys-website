import { useEffect, useRef, useState } from 'react';

/**
 * Scroll-based nearest-step tracker for mobile sticky story modes.
 * More reliable than IntersectionObserver on short mobile viewports.
 *
 * @param {number} stepCount
 * @param {number} [viewportCenterRatio=0.58]
 */
export function useNearestStep(stepCount, viewportCenterRatio = 0.58) {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    if (stepCount < 1) return undefined;

    let frame = 0;

    const update = () => {
      frame = 0;
      const viewportCenter = window.innerHeight * viewportCenterRatio;
      let bestIndex = 0;
      let bestDistance = Number.POSITIVE_INFINITY;

      stepRefs.current.forEach((node, index) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const stepCenter = rect.top + rect.height / 2;
        const distance = Math.abs(stepCenter - viewportCenter);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = index;
        }
      });

      setActiveIndex(prev => {
        const next = Math.max(0, Math.min(bestIndex, stepCount - 1));
        return prev === next ? prev : next;
      });
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [stepCount, viewportCenterRatio]);

  const setStepRef = (index, node) => {
    stepRefs.current[index] = node;
  };

  const focusStep = index => {
    const node = stepRefs.current[index];
    if (node) {
      node.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return { activeIndex, setStepRef, focusStep, stepRefs };
}

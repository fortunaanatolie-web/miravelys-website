import { useEffect, useRef, useState } from 'react';

/**
 * Scroll-based nearest-step tracker for mobile sticky story modes.
 * Uses visualViewport when available so mobile browser bars do not break
 * active-step detection.
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
    let lastIndex = 0;

    const getViewportCenter = () => {
      const visual = window.visualViewport;

      if (visual && Number.isFinite(visual.height)) {
        return (visual.offsetTop || 0) + visual.height * viewportCenterRatio;
      }

      return window.innerHeight * viewportCenterRatio;
    };

    const updateNow = () => {
      frame = 0;

      const viewportCenter = getViewportCenter();

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

      const next = Math.max(0, Math.min(bestIndex, stepCount - 1));

      if (next !== lastIndex) {
        lastIndex = next;
        setActiveIndex(next);
      }
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateNow);
    };

    updateNow();

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    window.addEventListener('orientationchange', requestUpdate);
    window.addEventListener('pageshow', requestUpdate);

    window.visualViewport?.addEventListener('resize', requestUpdate);
    window.visualViewport?.addEventListener('scroll', requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);

      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      window.removeEventListener('orientationchange', requestUpdate);
      window.removeEventListener('pageshow', requestUpdate);

      window.visualViewport?.removeEventListener('resize', requestUpdate);
      window.visualViewport?.removeEventListener('scroll', requestUpdate);
    };
  }, [stepCount, viewportCenterRatio]);

  const setStepRef = (index, node) => {
    stepRefs.current[index] = node;
  };

  const focusStep = index => {
    const node = stepRefs.current[index];

    if (!node) return;

    try {
      node.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } catch {
      node.scrollIntoView();
    }
  };

  return { activeIndex, setStepRef, focusStep, stepRefs };
}
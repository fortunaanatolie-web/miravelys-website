import { useEffect, useState } from 'react';

/**
 * Show floating CTA only in the middle of the scroll journey —
 * hidden on hero, beta, and download finale.
 */
export function useStickyCtaVisibility() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function update() {
      const scrollY = window.scrollY;
      const viewport = window.innerHeight;

      if (scrollY < viewport * 0.62) {
        setVisible(false);
        return;
      }

      const hideNear = id => {
        const node = document.getElementById(id);
        if (!node) return false;
        const rect = node.getBoundingClientRect();
        return rect.top < viewport * 0.88;
      };

      if (hideNear('beta') || hideNear('download')) {
        setVisible(false);
        return;
      }

      setVisible(true);
    }

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return visible;
}

import { useEffect, useState } from 'react';

/**
 * Show floating CTA in the middle of the scroll journey —
 * hidden on hero, scroll story (#works), and download finale.
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

      const works = document.getElementById('works');
      if (works) {
        const rect = works.getBoundingClientRect();
        const inScrollStory = rect.top < viewport * 0.72 && rect.bottom > viewport * 0.28;
        if (inScrollStory) {
          setVisible(false);
          return;
        }
      }

      const hideNear = id => {
        const node = document.getElementById(id);
        if (!node) return false;
        const rect = node.getBoundingClientRect();
        return rect.top < viewport * 0.88;
      };

      if (hideNear('download')) {
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

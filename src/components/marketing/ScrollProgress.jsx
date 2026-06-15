import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    function syncMotion() {
      setReduceMotion(media.matches);
    }
    syncMotion();
    media.addEventListener('change', syncMotion);

    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      media.removeEventListener('change', syncMotion);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  if (reduceMotion) return null;

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress__bar" style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
}

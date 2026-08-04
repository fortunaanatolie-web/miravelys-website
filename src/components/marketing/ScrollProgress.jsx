import { useEffect, useRef, useState } from 'react';

export default function ScrollProgress() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const barRef = useRef(null);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    function syncMotion() {
      setReduceMotion(media.matches);
    }
    syncMotion();
    media.addEventListener('change', syncMotion);

    let animationFrame = null;

    function paint() {
      animationFrame = null;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      barRef.current?.style.setProperty('--scroll-progress', progress);
    }

    function onScroll() {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(paint);
    }

    paint();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      media.removeEventListener('change', syncMotion);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  if (reduceMotion) return null;

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div ref={barRef} className="scroll-progress__bar" />
    </div>
  );
}

/**
 * Numbered process sequence. Reveals on scroll; respects reduced motion.
 */
import { useEffect, useRef } from 'react';

export default function ProcessRail({ steps, labelledBy }) {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      root?.classList.add('is-inview');
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          root.classList.add('is-inview');
          observer.disconnect();
        }
      },
      { threshold: 0.22 },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <ol
      ref={ref}
      className="mira-mkt__rail"
      aria-labelledby={labelledBy}
    >
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="mira-mkt__rail-step"
          style={{ '--mira-step': index }}
        >
          <span className="mira-mkt__rail-index" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="mira-mkt__rail-title">{step.title}</h3>
          <p className="mira-mkt__rail-body">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}

import { useScrollReveal } from '../../../hooks/useScrollReveal';

export default function RevealOnScroll({
  children,
  className = '',
  as: Tag = 'div',
  delay = 0,
  stagger = false,
  variant = 'rise',
}) {
  const { ref, isVisible } = useScrollReveal({ delay });

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant} ${isVisible ? 'reveal--visible' : ''} ${stagger ? 'reveal--stagger' : ''} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}

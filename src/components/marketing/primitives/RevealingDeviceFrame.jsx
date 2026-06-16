import { useMemo } from 'react';
import { getLocalizedScreen } from '../../../lib/getLocalizedScreen';
import { useInViewProgress } from '../../../hooks/useInViewProgress';
import PhoneMockup from './PhoneMockup';

export default function RevealingDeviceFrame({
  lang,
  steps,
  activeIndex = 0,
  revealLevel = 1,
  size = 'chapter',
  priorityFirst = false,
  className = '',
  mood = 'default',
  float = true,
  scrollLinked = false,
}) {
  const { ref, progress } = useInViewProgress();
  const screens = useMemo(
    () =>
      steps.map(step => {
        const localized = getLocalizedScreen(step.key ?? step.id, lang);
        return {
          id: step.mockupId ?? step.id,
          ...localized,
          lang,
        };
      }),
    [lang, steps]
  );

  const motionClass = [
    float ? 'phone-mockup--animate' : '',
    scrollLinked ? 'phone-mockup--scroll-linked' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <PhoneMockup
      figureRef={ref}
      screens={screens}
      activeIndex={activeIndex}
      size={size}
      mood={mood}
      priorityFirst={priorityFirst}
      clarity={revealLevel}
      dimInactive
      className={`${motionClass} ${className}`.trim()}
      style={{ '--device-scroll': progress }}
      ariaLabel="Miravelys app screens"
    />
  );
}

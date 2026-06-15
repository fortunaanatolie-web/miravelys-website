import OceanBackground from '@/components/miravelys/OceanBackground';

/**
 * Midnight Harbor shell — delegates to the full ocean visual system
 * (gradient, waves, fog, stars, optional moon/horizon).
 */
export default function HarborBackground({ children, intensity = 'normal', showHorizon, showMoon }) {
  const hour = new Date().getHours();
  const minimal = intensity === 'minimal';

  return (
    <OceanBackground
      showHorizon={showHorizon ?? !minimal}
      showMoon={showMoon ?? (!minimal && hour >= 18)}
      intensity={minimal ? 'dim' : 'normal'}
    >
      {children}
    </OceanBackground>
  );
}

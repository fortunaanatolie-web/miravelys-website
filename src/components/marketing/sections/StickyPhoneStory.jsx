import { useEffect, useMemo } from 'react';
import { buildMarketingSteps } from '../../../lib/buildMarketingSteps';
import { preloadMiravelysScreenshots } from '../../../lib/miravelysScreenshots';
import { resolvePresentation } from '../../../i18n/presentationCopy';
import { useLandscapePhoneStory } from '../../../hooks/useLandscapePhoneStory';
import RevealOnScroll from '../primitives/RevealOnScroll';
import ProductStoryDesktop from './ProductStoryDesktop';
import ProductStoryMobile from './ProductStoryMobile';

/**
 * Product story — desktop sticky scrollytelling + mobile stacked cards.
 */
export default function StickyPhoneStory({ lang, t, steps: stepsProp }) {
  const steps = useMemo(
    () => stepsProp ?? (lang ? buildMarketingSteps(lang) : []),
    [stepsProp, lang]
  );
  const presentation = resolvePresentation(lang ?? 'en');
  const works = t?.works;
  const { compact: landscapeCompact, fallbackStacked: shortLandscape } = useLandscapePhoneStory();

  useEffect(() => {
    if (lang) preloadMiravelysScreenshots(lang);
  }, [lang]);

  if (!steps.length) return null;

  return (
    <section
      id="works"
      className={`product-story marketing-scroll-story sticky-phone-story scroll-story reveal-journey${landscapeCompact ? ' product-story--landscape-compact' : ''}${shortLandscape ? ' product-story--landscape-stacked' : ''}`}
      aria-label={presentation.journey?.progressAria || 'Miravelys product story'}
    >
      {works ? (
        <RevealOnScroll
          className="marketing-scroll-story__intro sticky-phone-story__intro reveal-journey__intro"
          variant="blur-in"
        >
          <p className="eyebrow">{works.eyebrow}</p>
          <h2 className="reveal-journey__title">{works.title}</h2>
          <p className="reveal-journey__lead">{works.intro}</p>
        </RevealOnScroll>
      ) : null}

      <div className="desktop-story">
        <ProductStoryDesktop steps={steps} lang={lang} presentation={presentation} />
      </div>

      <div className="mobile-story">
        <ProductStoryMobile steps={steps} lang={lang} presentation={presentation} />
      </div>
    </section>
  );
}

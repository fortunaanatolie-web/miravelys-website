import { useEffect, useMemo } from 'react';
import { buildProductStorySteps } from '../../../lib/productStorySteps';
import { preloadMiravelysScreenshots } from '../../../lib/miravelysScreenshots';
import { resolvePresentation } from '../../../i18n/presentationCopy';
import RevealOnScroll from '../primitives/RevealOnScroll';
import ProductStoryDesktop from './ProductStoryDesktop';
import ProductStoryLandscape from './ProductStoryLandscape';
import ProductStoryMobilePortrait from './ProductStoryMobilePortrait';
import ProductStoryTablet from './ProductStoryTablet';

/**
 * Product story — CSS selects desktop / portrait mobile / landscape layouts.
 */
export default function ProductStory({ lang, locale, t, steps: stepsProp }) {
  const activeLocale = locale ?? lang;
  const steps = useMemo(
    () => stepsProp ?? (activeLocale ? buildProductStorySteps(activeLocale) : []),
    [stepsProp, activeLocale]
  );
  const presentation = resolvePresentation(activeLocale ?? 'en');
  const works = t?.works;

  useEffect(() => {
    if (activeLocale) preloadMiravelysScreenshots(activeLocale);
  }, [activeLocale]);

  if (!steps.length) return null;

  return (
    <section
      id="works"
      className="product-story marketing-scroll-story sticky-phone-story scroll-story reveal-journey"
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

      <div className="product-story__desktop">
        <ProductStoryDesktop steps={steps} locale={activeLocale} />
      </div>

      <div className="product-story__tablet">
        <ProductStoryTablet steps={steps} locale={activeLocale} />
      </div>

      <div className="product-story__mobile-portrait">
        <ProductStoryMobilePortrait steps={steps} locale={activeLocale} />
      </div>

      <div className="product-story__landscape">
        <ProductStoryLandscape steps={steps} locale={activeLocale} />
      </div>
    </section>
  );
}

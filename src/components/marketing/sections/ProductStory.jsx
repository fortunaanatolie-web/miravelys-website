import { useEffect, useMemo } from 'react';
import { buildProductStorySteps } from '../../../lib/productStorySteps';
import { preloadMiravelysScreenshots } from '../../../lib/miravelysScreenshots';
import { resolvePresentation } from '../../../i18n/presentationCopy';
import { useBrowserEnvironment } from '../../../hooks/useBrowserEnvironment';
import { useVisualViewportVars } from '../../../hooks/useVisualViewportVars';
import RevealOnScroll from '../primitives/RevealOnScroll';
import ProductStoryDesktop from './ProductStoryDesktop';
import ProductStoryMobileLandscape from './ProductStoryMobileLandscape';
import ProductStoryMobilePortrait from './ProductStoryMobilePortrait';
import ProductStoryMobilePortraitCards from './ProductStoryMobilePortraitCards';
import ProductStoryTablet from './ProductStoryTablet';

/**
 * Product story — CSS selects desktop / tablet / portrait mobile / landscape layouts.
 */
export default function ProductStory({ lang, locale, t, steps: stepsProp }) {
  useBrowserEnvironment();
  useVisualViewportVars();

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
      className="product-story product-story--isolated"
      aria-label={presentation.journey?.progressAria || 'Miravelys product story'}
    >
      {works ? (
        <RevealOnScroll
          className="product-story__intro"
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

      <div className="product-story__portrait product-story__mobile-portrait">
        <ProductStoryMobilePortrait steps={steps} locale={activeLocale} />
      </div>

      <div className="product-story__mobile-portrait-cards">
        <ProductStoryMobilePortraitCards steps={steps} locale={activeLocale} />
      </div>

      <div className="product-story__landscape">
        <ProductStoryMobileLandscape steps={steps} locale={activeLocale} />
      </div>

      <div className="product-story__landscape-cards">
        <ProductStoryMobilePortraitCards steps={steps} locale={activeLocale} />
      </div>
    </section>
  );
}

import { getScreenshotPath } from '../../../lib/miravelysScreenshots';
import PhoneMockup from '../primitives/PhoneMockup';
import ProductStoryStepContent from '../primitives/ProductStoryStepContent';

function mobileScreenForStep(step, locale) {
  return {
    id: step.id,
    group: 'sticky-phone',
    code: step.screenshotCode,
    lang: locale,
    locale,
    publicPath: getScreenshotPath(locale, 'sticky-phone', step.screenshotCode),
    legacyAsset: step.screen?.legacyAsset ?? null,
    alt: step.alt,
  };
}

export default function ProductStoryMobile({ steps, locale }) {
  const stepTotal = steps.length;

  return (
    <div className="mobile-product-story">
      {steps.map((step, index) => (
        <article
          key={step.id}
          id={step.sectionId || undefined}
          className="mobile-product-card"
          data-step-index={index}
          data-journey-mood={step.mood ?? 'default'}
        >
          <div className="mobile-product-card__media">
            <PhoneMockup
              screens={[mobileScreenForStep(step, locale)]}
              activeIndex={0}
              variant="mobile-card"
              className="phone-mockup--mobile-card"
              ariaLabel={step.alt || step.title}
            />
          </div>

          <div className="mobile-product-card__content">
            <ProductStoryStepContent step={step} index={index} total={stepTotal} variant="mobile" />
          </div>
        </article>
      ))}
    </div>
  );
}

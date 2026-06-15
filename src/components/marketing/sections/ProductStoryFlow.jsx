import { productSceneOrder } from '../../../config/productScenes';
import { resolvePresentation } from '../../../i18n/presentationCopy';
import ProductSceneSection from './ProductSceneSection';

export default function ProductStoryFlow({ lang, onMockupNav }) {
  const presentation = resolvePresentation(lang);

  function handleCta(event, mockupId) {
    event.preventDefault();
    onMockupNav?.(event, mockupId);
  }

  return (
    <div className="product-story-flow">
      {productSceneOrder.map(config => {
        const scene = presentation.scenes[config.key];
        if (!scene) return null;

        return (
          <ProductSceneSection
            key={config.key}
            sceneKey={config.key}
            scene={scene}
            mockupId={config.mockupId}
            sectionId={config.sectionId}
            tone={config.tone}
            reverse={config.reverse}
            lang={lang}
            onCtaClick={handleCta}
            showDoors={config.key === 'doorways'}
          />
        );
      })}
    </div>
  );
}

import { resolvePresentation } from '../../../i18n/presentationCopy';
import StickyStoryLayout from './StickyStoryLayout';

export default function ProductStoryLandscape({ steps, locale }) {
  const presentation = resolvePresentation(locale ?? 'en');

  return (
    <StickyStoryLayout
      steps={steps}
      locale={locale}
      variant="landscape"
      presentation={presentation}
      progressAria={presentation.journey?.progressAria}
    />
  );
}

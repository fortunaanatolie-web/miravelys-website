import { resolvePresentation } from '../../../i18n/presentationCopy';
import StickyStoryLayout from './StickyStoryLayout';

export default function ProductStoryTablet({ steps, locale }) {
  const presentation = resolvePresentation(locale ?? 'en');

  return (
    <StickyStoryLayout
      steps={steps}
      locale={locale}
      variant="tablet"
      presentation={presentation}
      progressAria={presentation.journey?.progressAria}
    />
  );
}

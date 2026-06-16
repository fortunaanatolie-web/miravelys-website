import { resolvePresentation } from '../../../i18n/presentationCopy';
import StickyStoryLayout from './StickyStoryLayout';

/** Portrait phones & tablet portrait — same sticky scrollytelling as desktop. */
export default function ProductStoryMobile({ steps, locale }) {
  const presentation = resolvePresentation(locale ?? 'en');

  return (
    <StickyStoryLayout
      steps={steps}
      locale={locale}
      variant="mobile"
      presentation={presentation}
      progressAria={presentation.journey?.progressAria}
    />
  );
}

import React from 'react';
import RevealOnScroll from '../primitives/RevealOnScroll';
import { brandMeaningCopy } from '../../../i18n/brandMeaningCopy';

const fallbackLanguage = 'en';

export default function BrandMeaningSection({ lang }) {
  const copy = brandMeaningCopy[lang] || brandMeaningCopy[fallbackLanguage];

  return (
    <section className="content-section brand-meaning-section" aria-labelledby="brand-meaning-title">
      <RevealOnScroll variant="soft" className="brand-meaning__container">
        <p className="eyebrow brand-meaning__eyebrow" id="brand-meaning-title">
          {copy.title}
        </p>
        <p className="brand-meaning__body">
          {copy.body}
        </p>
      </RevealOnScroll>
    </section>
  );
}

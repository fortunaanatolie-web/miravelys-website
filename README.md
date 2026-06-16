# Miravelys Lifestyle Website

This website is the public multilingual presence for Miravelys: a calm, private, intelligent companion for self-inquiry and emotional clarity.

## Implemented

- Premium one-page lifestyle website with deep navy background, gold glowing Miravelys treatment, cyan/gold accents, glassmorphism cards, and premium foreground lifestyle imagery.
- Stable navigation anchors independent of language, so navigation works correctly in every locale.
- Smooth language switcher in the top navigation, mockup section, and language showcase.
- Language preference persistence through `localStorage`.
- Automatic `document.documentElement.lang` updates for accessibility and SEO.
- Full translated website copy for 10 languages:
  - English
  - Russian
  - Romanian
  - French
  - Hindi
  - Chinese Simplified
  - German
  - Japanese
  - Spanish
  - Portuguese
- Fully translated app mockups for 10 languages covering:
  - Home
  - Get Clear / Truth Line
  - Calm Now
  - Sleep Now
  - Weekly Mirror
- Detailed app explanation sections:
  - Hero
  - Product idea
  - Signature connected app flow
  - Inquiry modes
  - Emotional outcomes
  - Translated app mockups
  - Trust and privacy
  - Language availability
- Inquiry mode explanation for:
  - Calm Mirror
  - Direct Inquiry
  - Aggressive clarity
- Safety-forward positioning:
  - Local-first
  - Correctable
  - Not therapy
  - Never diagnosis
  - Evidence-backed patterns
  - User corrections override model outputs

## Key files

- `src/App.jsx` — page structure, language switching, responsive layout.
- `src/i18n/siteCopy.js` — full translated marketing and explanatory website copy.
- `src/i18n/mockupCopy.js` — translated copy shown inside app mockups.
- `src/index.css` — Miravelys visual system, responsive website styling, glassmorphism, gold glow, mockups.
- `src/assets/` — lifestyle imagery used across the website.

## Validation

The website build was validated with:

```bash
npm ci
npm run build
```

A copy completeness check confirmed all 10 languages include the required website sections and mockup text.
# Miravelys

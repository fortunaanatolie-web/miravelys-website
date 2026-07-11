/**
 * Intrinsic dimensions for marketing images — used for layout stability,
 * responsive srcSet/sizes, and crisp rendering on Retina / HiDPI displays.
 */

export const lifestyleImages = {
  'miravelys-lifestyle-hero-community': { width: 1448, height: 1086 },
  'miravelys-lifestyle-family-home': { width: 1448, height: 1086 },
  'miravelys-lifestyle-cafe-friends': { width: 1448, height: 1086 },
  'miravelys-lifestyle-garden-friends': { width: 1448, height: 1086 },
  'miravelys-lifestyle-hero': { width: 1600, height: 2100 },
  'miravelys-lifestyle-calm': { width: 1600, height: 2100 },
  'miravelys-lifestyle-mirror': { width: 1600, height: 2100 },
};

/** Screen-only mockup dimensions (2× v5 logical 390×844) */
export const mockupImageDimensions = { width: 780, height: 1688 };

export const mockupScreenDisplayDimensions = { width: 402, height: 874 };

/** Typical rendered widths for lifestyle photography */
export const lifestyleImageSizes = {
  hero: '(min-width: 981px) 45vw, 92vw',
  editorial: '(min-width: 981px) 38vw, 92vw',
  galleryLarge: '(min-width: 768px) 58vw, 92vw',
  gallerySmall: '(min-width: 768px) 32vw, 92vw',
  galleryMini: '(min-width: 768px) 18vw, 42vw',
  cinematic: '100vw',
};

/**
 * Dev-only iPhone 13 Pro sticky-phone screenshot diagnostics.
 * Logical viewport: 390×844 — ratio 0.462 (acceptable 0.455–0.470).
 */
export const IPHONE13_SCREEN_RATIO = 390 / 844;
export const IPHONE13_RATIO_MIN = 0.455;
export const IPHONE13_RATIO_MAX = 0.470;

/**
 * @returns {boolean} true when aspect ratio is acceptable for screen-only mode
 */
export function validatePhoneScreenshotRatio(naturalWidth, naturalHeight, assetMode = 'screen-only') {
  if (assetMode === 'already-framed') return true;
  if (!naturalWidth || !naturalHeight) return false;
  const ratio = naturalWidth / naturalHeight;
  return ratio >= IPHONE13_RATIO_MIN && ratio <= IPHONE13_RATIO_MAX;
}

export function reportPhoneScreenshotDebug({
  screen,
  src,
  naturalWidth,
  naturalHeight,
  assetMode = 'screen-only',
  renderMode = 'cover',
}) {
  const ratio = naturalWidth && naturalHeight ? naturalWidth / naturalHeight : null;
  const valid = validatePhoneScreenshotRatio(naturalWidth, naturalHeight, assetMode);

  if (import.meta.env.DEV) {
    const payload = {
      locale: screen?.locale ?? screen?.lang ?? '?',
      code: screen?.code ?? screen?.id ?? '?',
      path: src,
      naturalWidth,
      naturalHeight,
      aspectRatio: ratio != null ? Number(ratio.toFixed(4)) : null,
      expectedRatio: Number(IPHONE13_SCREEN_RATIO.toFixed(4)),
      acceptableRange: `${IPHONE13_RATIO_MIN}–${IPHONE13_RATIO_MAX}`,
      assetMode,
      renderMode,
      status: valid ? 'valid' : 'invalid',
    };

    console.debug('[iPhone 13 Pro sticky screenshot]', payload);

    if (!valid) {
      console.warn(
        `Invalid iPhone 13 Pro sticky screenshot:\n` +
          `  locale: ${payload.locale}\n` +
          `  code: ${payload.code}\n` +
          `  natural size: ${naturalWidth ?? '?'} × ${naturalHeight ?? '?'}\n` +
          `  ratio: ${payload.aspectRatio ?? 'unknown'}\n` +
          `  expected ratio: ${payload.expectedRatio}\n` +
          `  problem: wrong ratio / already framed / black padding / missing file`,
      );
    }
  }

  return valid;
}

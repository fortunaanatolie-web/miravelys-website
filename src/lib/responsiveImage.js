import { lifestyleImages } from '../config/imageAssets';

/**
 * Build responsive image attributes for crisp Retina rendering and stable layout.
 * Works with a single high-resolution source (Vite-hashed URL).
 */
export function buildResponsiveImageProps({
  src,
  width,
  height,
  sizes = '100vw',
  loading = 'lazy',
  fetchPriority,
  alt = '',
}) {
  const props = {
    src,
    alt,
    width,
    height,
    sizes,
    loading,
    decoding: 'async',
  };

  if (width && height) {
    props.srcSet = `${src} ${width}w`;
  }

  if (fetchPriority) {
    props.fetchPriority = fetchPriority;
  }

  return props;
}

export function resolveLifestyleMeta(assetKey) {
  return lifestyleImages[assetKey] ?? { width: 1448, height: 1086 };
}

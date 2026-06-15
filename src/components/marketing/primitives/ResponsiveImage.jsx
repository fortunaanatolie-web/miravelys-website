import { buildResponsiveImageProps } from '../../../lib/responsiveImage';

export default function ResponsiveImage({
  src,
  width,
  height,
  sizes = '100vw',
  alt = '',
  loading = 'lazy',
  fetchPriority,
  className,
}) {
  const imageProps = buildResponsiveImageProps({
    src,
    width,
    height,
    sizes,
    alt,
    loading,
    fetchPriority,
  });

  return <img {...imageProps} className={className} />;
}

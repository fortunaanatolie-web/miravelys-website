import { useEffect } from 'react';
import { softwareApplicationJsonLd } from '../../config/productCapabilities';

export default function ProductJsonLd({ productId }) {
  useEffect(() => {
    const id = `mira-jsonld-${productId}`;
    let element = document.getElementById(id);
    if (!element) {
      element = document.createElement('script');
      element.id = id;
      element.type = 'application/ld+json';
      document.head.appendChild(element);
    }
    element.textContent = JSON.stringify(softwareApplicationJsonLd(productId));
    return () => element.remove();
  }, [productId]);

  return null;
}

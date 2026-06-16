function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

export function setDocumentMeta({ title, description, ogTitle, ogDescription }) {
  if (title) document.title = title;

  if (description) {
    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: description,
    });
  }

  if (ogTitle || title) {
    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: ogTitle || title,
    });
  }

  if (ogDescription || description) {
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: ogDescription || description,
    });
  }
}

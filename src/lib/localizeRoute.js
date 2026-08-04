export function localizeRoute(route, lang = 'en') {
  if (!route || lang === 'en') return route;
  const normalizedRoute = route.startsWith('/') ? route : `/${route}`;
  return `/${lang}${normalizedRoute}`;
}

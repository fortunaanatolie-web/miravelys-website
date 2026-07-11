/**
 * Marketing page anchor IDs and CTA destinations.
 * Main page is now a focused scrollytelling product story.
 */
export const marketingAnchors = {
  top: 'top',
  works: 'works',
  download: 'download',
};

export const marketingCtas = {
  primary: { modal: true, labelKey: 'earlyAccess', variant: 'primary' },
  secondary: { anchor: 'works', labelKey: 'mockups', variant: 'link' },
  works: { anchor: 'works', labelKey: 'mockups', variant: 'link' },
  appStore: { external: true, labelKey: 'appStore', variant: 'primary', modalFallback: true },
};

export const marketingRoutes = {
  legalNotice: '/legal-notice',
  userAgreement: '/user-agreement',
  privacyPolicy: '/privacy-policy',
  cookies: '/cookies',
  home: '/',
  story: '/story',
  support: '/support',
};

export const headerNavItems = [
  { id: 'works', key: 'works' },
  { route: '/story', key: 'origin' },
];

export const mobileNavItems = [
  ...headerNavItems,
];

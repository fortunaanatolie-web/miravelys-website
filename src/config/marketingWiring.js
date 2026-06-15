/**
 * Marketing page anchor IDs and CTA destinations.
 * Main page is now a focused scrollytelling product story.
 */
export const marketingAnchors = {
  top: 'top',
  works: 'works',
  beta: 'beta',
};

export const marketingCtas = {
  primary: { anchor: 'beta', labelKey: 'earlyAccess', variant: 'primary' },
  secondary: { anchor: 'works', labelKey: 'mockups', variant: 'link' },
  works: { anchor: 'works', labelKey: 'mockups', variant: 'link' },
  appStore: { external: true, labelKey: 'appStore', variant: 'primary' },
};

export const headerCtaRole = 'primary';

export const marketingRoutes = {
  legalNotice: '/legal-notice',
  userAgreement: '/user-agreement',
  privacyPolicy: '/privacy-policy',
  cookies: '/cookies',
  home: '/',
  story: '/story',
};

export const headerNavItems = [
  { id: 'works', key: 'works' },
  { route: '/story', key: 'origin' },
];

export const mobileNavItems = [
  ...headerNavItems,
];

export const headerCtaAnchor = marketingCtas.primary.anchor;

/**
 * Canonical v5 → marketing asset mapping with reference-grade capture state.
 * Each profile matches MOCKUP-GUIDE.md hero composition for that screen.
 */
export const LOGICAL_WIDTH = 390;
export const LOGICAL_HEIGHT = 844;
export const DISPLAY_RADIUS_PX = 40; /* v5 --radius-phone */

/** @typedef {{ screen: string, scrollTop?: number, settleMs?: number, note: string }} MockupScreenProfile */

/** @type {Array<{ id: string, copyKey: string } & MockupScreenProfile>} */
export const MOCKUP_SCREEN_PROFILES = [
  {
    id: 'screen-welcome',
    copyKey: 'welcome',
    screen: 'welcome',
    scrollTop: 0,
    note: 'Harbor welcome hero + Miravelys deck + Begin / Skip — private entry.',
  },
  {
    id: 'screen-today',
    copyKey: 'home',
    screen: 'home',
    scrollTop: 0,
    note: 'Reference home top: dawn hero, float card, need carousel, dock + FAB.',
  },
  {
    id: 'screen-clear',
    copyKey: 'clear',
    screen: 'get-clear-1',
    scrollTop: 0,
    note: 'Get Clear step 1 — Name it, threshold art, starters, stage dots.',
  },
  {
    id: 'screen-truth',
    copyKey: 'truth',
    screen: 'get-clear-4',
    scrollTop: 0,
    note: 'Truth Line candidate + “Use it” selected + settle body CTA.',
  },
  {
    id: 'screen-calm',
    copyKey: 'calm',
    screen: 'calm-hub',
    scrollTop: 56,
    note: 'Hub hero + trust pill + continue panel + first doorway cards.',
  },
  {
    id: 'screen-rest',
    copyKey: 'sleep',
    screen: 'sleep',
    scrollTop: 0,
    note: 'Sleep harbor night hero, Good night, Tonight’s plan list.',
  },
  {
    id: 'screen-mirror',
    copyKey: 'mirror',
    screen: 'weekly-mirror',
    scrollTop: 0,
    note: 'Weekly Mirror water hero + pattern insight + Feels right chip.',
  },
];

export const MOCKUP_ASSET_IDS = MOCKUP_SCREEN_PROFILES.map(p => p.id);

export function profileByAssetId(assetId) {
  return MOCKUP_SCREEN_PROFILES.find(p => p.id === assetId);
}

export function profileByV5Screen(screenId) {
  return MOCKUP_SCREEN_PROFILES.find(p => p.screen === screenId);
}

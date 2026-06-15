/**
 * Main scrollytelling product presentation scenes.
 * One fixed phone, one screen change per explanation.
 */
export const productSceneOrder = [
  { key: 'overview', mockupId: 'today', sectionId: 'reveal-overview', tone: 'gold', mood: 'warm' },
  { key: 'writeInside', mockupId: 'clear', sectionId: 'reveal-write', tone: 'gold', mood: 'dawn' },
  { key: 'separateLayers', mockupId: 'truth', sectionId: 'reveal-layers', tone: 'cyan', mood: 'depth' },
  { key: 'patternsOverTime', mockupId: 'mirror', sectionId: 'reveal-patterns', tone: 'gold', mood: 'reflect' },
  { key: 'calmFirst', mockupId: 'calm', sectionId: 'reveal-calm', tone: 'cyan', mood: 'calm' },
  { key: 'soundsAndSleep', mockupId: 'rest', sectionId: 'reveal-sounds', tone: 'cyan', mood: 'night' },
  { key: 'privacyControl', mockupId: 'welcome', sectionId: 'reveal-private', tone: 'cyan', mood: 'trust' },
];

/** Hero and finale keep the same product overview surface. */
export const heroMockupId = 'today';
export const finaleMockupId = 'today';

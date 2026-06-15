/**
 * Single source of truth: which mockup proves which marketing section.
 * Every pairing must match the copy beside it — no random screenshots.
 */
import { heroMockupId, finaleMockupId } from './productScenes';

export const sectionStoryMapping = {
  hero: {
    sectionId: 'top',
    mockupId: heroMockupId,
    reason: 'Home / Today overview — desirable product entry, clear app identity.',
  },
  whyItExists: {
    sectionId: 'what',
    mockupId: null,
    reason: 'Emotional bridge — text only, no device needed.',
  },
  purpose: {
    sectionId: 'explanation',
    steps: {
      whatFor: { mockupId: 'welcome', reason: 'Private welcome — what Miravelys is for.' },
      writeIt: { mockupId: 'clear', reason: 'Get Clear input — write emotion, belief, thought.' },
      separateLayers: { mockupId: 'truth', reason: 'Truth Line — fact, feeling, body, story, belief, unknown.' },
      patterns: { mockupId: 'mirror', reason: 'Weekly Mirror — gentle pattern reflection over time.' },
      notWho: { mockupId: 'welcome', reason: 'Humility and user control — app does not decide identity.' },
      calmBody: { mockupId: 'today', reason: 'Four Gentle Doorways — breathe, meditate, sleep, align.' },
      finale: { mockupId: 'today', reason: 'Full product overview — strongest composition.' },
    },
  },
  productReveal: {
    sectionId: 'works',
    scenes: {
      clearMoment: { mockupId: 'clear', reason: 'Write it when it appears.' },
      factStory: { mockupId: 'truth', reason: 'Separate the layers.' },
      weekGentle: { mockupId: 'mirror', reason: 'Patterns become clearer.' },
      humbleNature: { mockupId: 'truth', reason: 'Correction and humility — app does not decide who you are.' },
      doorways: { mockupId: 'today', reason: 'Calm the body first — four gentle doorways.' },
      softNight: { mockupId: 'rest', reason: 'Sleep, meditation, and calming sounds.' },
      privateIntel: { mockupId: 'welcome', reason: 'Private intelligence and user control.' },
    },
  },
  languages: {
    sectionId: 'languages',
    mockupId: null,
    reason: 'Multilingual support — copy and UI labels, not a single screen.',
  },
  trust: {
    sectionId: 'privacy',
    mockupId: 'welcome',
    reason: 'Privacy promise — local-first, correctable, humble.',
  },
  finale: {
    sectionId: 'download',
    mockupId: finaleMockupId,
    reason: 'Strongest full-phone product composition for final CTA.',
  },
};

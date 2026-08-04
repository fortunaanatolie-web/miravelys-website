import { resolveLoopStoryCopy } from '../i18n/loopStoryCopy.js';

export function resolveHomeMeta(lang) {
  const story = resolveLoopStoryCopy(lang);
  const title = lang === 'en'
    ? 'Miravelys — Step out of the loop'
    : `Miravelys — ${story.hero.title}`;

  return {
    title,
    description: story.hero.body,
    ogTitle: story.hero.title,
    ogDescription: story.hero.body,
  };
}

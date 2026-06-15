import { CheckCircle2, Sparkles } from 'lucide-react';
import { mockupScreens } from '../../../config/mockupScreens';
import { resolveScreenStoryCopy } from '../../../i18n/screenStoryCopy';
import PhoneMockup from '../primitives/PhoneMockup';
import RevealOnScroll from '../primitives/RevealOnScroll';

const storyMoodById = {
  welcome: 'dawn',
  today: 'warm',
  clear: 'depth',
  truth: 'trust',
  calm: 'calm',
  rest: 'night',
  mirror: 'reflect',
};

function ScreenStoryCard({ screen, copy, lang, index, actionLabel, onScreenAction }) {
  const reverse = index % 2 === 1;
  const mood = storyMoodById[screen.id] || 'warm';

  return (
    <article
      className={`screen-story-card ${reverse ? 'screen-story-card--reverse' : ''} screen-story-card--${mood}`}
      data-screen-story={screen.id}
    >
      <div className="screen-story-card__aura" aria-hidden="true" />

      <RevealOnScroll className="screen-story-card__copy" variant="soft" delay={reverse ? 90 : 0}>
        <span className="screen-story-card__number">{String(index + 1).padStart(2, '0')}</span>
        <h3>{copy.title}</h3>
        <p>{copy.body}</p>
        <div className="screen-story-card__shift" aria-label={copy.title}>
          <span>
            <CheckCircle2 size={15} aria-hidden="true" />
            {copy.before}
          </span>
          <span>
            <Sparkles size={15} aria-hidden="true" />
            {copy.after}
          </span>
        </div>
        {onScreenAction ? (
          <button
            type="button"
            className="screen-story-card__link keynote-link"
            onClick={() => onScreenAction(screen.id)}
          >
            {actionLabel}
          </button>
        ) : null}
      </RevealOnScroll>

      <RevealOnScroll className="screen-story-card__phone" variant="rise" delay={reverse ? 0 : 90}>
        <PhoneMockup
          screens={[
            {
              id: screen.id,
              asset: screen.asset,
              lang,
              alt: copy.title,
            },
          ]}
          size="chapter"
          mood={mood}
          atmosphere
          reflection={index === mockupScreens.length - 1}
          floorShadow
          priorityFirst={index < 2}
          ariaLabel={copy.title}
        />
      </RevealOnScroll>
    </article>
  );
}

export default function ScreenStorySection({ lang, onScreenAction }) {
  const copy = resolveScreenStoryCopy(lang);

  return (
    <section id="screens" className="screen-story-section content-section" aria-labelledby="screen-story-title">
      <RevealOnScroll className="screen-story-section__intro" variant="blur-in">
        <p className="eyebrow">
          <Sparkles size={16} aria-hidden="true" />
          {copy.eyebrow}
        </p>
        <h2 id="screen-story-title">{copy.title}</h2>
        <p>{copy.intro}</p>
      </RevealOnScroll>

      <div className="screen-story-section__stack">
        {mockupScreens.map((screen, index) => {
          const itemCopy = copy.items[screen.id];
          if (!itemCopy) return null;

          return (
            <ScreenStoryCard
              key={screen.id}
              screen={screen}
              copy={itemCopy}
              lang={lang}
              index={index}
              actionLabel={copy.actionLabel}
              onScreenAction={onScreenAction}
            />
          );
        })}
      </div>
    </section>
  );
}

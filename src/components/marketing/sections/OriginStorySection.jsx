import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { resolveWebsiteScreenshot } from '../../../lib/miravelysScreenshots';
import MarketingCta from '../primitives/MarketingCta';
import PhoneMockup from '../primitives/PhoneMockup';
import RevealOnScroll from '../primitives/RevealOnScroll';

export default function OriginStorySection({ lang, copy, earlyAccess, onNavClick, onEarlyAccessClick }) {
  const homePath = lang && lang !== 'en' ? `/${lang}` : '/';
  const screenshot = resolveWebsiteScreenshot({
    locale: lang,
    group: 'sticky-phone',
    code: 'write',
    mockupId: 'clear',
  });
  const screen = {
    id: 'founder-write',
    ...screenshot,
    lang,
    alt: copy.screenCaption || screenshot.alt,
  };

  return (
    <section id="origin" className="founder-essay" aria-labelledby="founder-essay-title">
      <div className="founder-essay__atmosphere" aria-hidden="true" />
      <div className="founder-essay__inner">
        <RevealOnScroll className="founder-essay__heading" variant="blur-in">
          <Link to={homePath} className="loop-back-link">
            <ArrowLeft size={15} aria-hidden="true" />
            Miravelys
          </Link>
          <p className="loop-kicker">{copy.eyebrow}</p>
          <h1 id="founder-essay-title">{copy.title}</h1>
          <p>{copy.intro}</p>
          {copy.languageFallback ? (
            <p className="founder-essay__translation-note" lang={lang}>
              {copy.languageFallback}
            </p>
          ) : null}
        </RevealOnScroll>

        <div className="founder-essay__opening">
          <RevealOnScroll className="founder-essay__quote" variant="soft">
            <span aria-hidden="true">“</span>
            <blockquote>{copy.quote}</blockquote>
          </RevealOnScroll>
          <RevealOnScroll className="founder-essay__device" variant="rise" delay={100}>
            <PhoneMockup
              screens={[screen]}
              activeIndex={0}
              variant="mobile-card"
              assetMode="screen-only"
              className="loop-phone founder-essay__phone"
              ariaLabel={screen.alt}
            />
            <p>{copy.screenCaption}</p>
          </RevealOnScroll>
        </div>

        <div className="founder-essay__chapters">
          {copy.chapters.map((chapter, index) => (
            <RevealOnScroll key={chapter.label} as="article" className="founder-chapter" variant="soft" delay={index * 70}>
              <p className="founder-chapter__label">{chapter.label}</p>
              <h2>{chapter.title}</h2>
              {chapter.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className="founder-essay__cta" variant="soft">
          <MarketingCta
            role="primary"
            earlyAccess={earlyAccess}
            onNavClick={onNavClick}
            onEarlyAccessClick={onEarlyAccessClick}
          />
        </RevealOnScroll>
      </div>
    </section>
  );
}

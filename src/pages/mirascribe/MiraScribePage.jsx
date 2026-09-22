import { useEffect } from 'react';
import { ArrowRight, AudioLines, Search, ShieldCheck } from 'lucide-react';
import MiraScribeShell from '../../components/mirascribe/MiraScribeShell';
import { setDocumentMeta } from '../../lib/documentMeta';
import { APP_IDENTITY_ASSETS } from '../../config/appIdentityAssets';
import { productCapabilities } from '../../config/productCapabilities';
import { resolveMiraScribeStoreTarget, resolveMiraScribeStoreUrl } from '../../lib/mirascribeStoreTarget';

const scribe = productCapabilities.mirascribe;

const PROOF = [
  ['On-device', 'Core speech transcription runs locally on supported Mac and iPhone devices.'],
  [`${scribe.transcriptionLanguageCount} languages`, 'A broad production language set for spoken work.'],
  ['Search + timestamps', 'Find the words, then return to the moment behind them.'],
  ['Export-ready', scribe.exportFormats.join(' · ')],
];

function Waveform({ compact = false }) {
  const bars = compact
    ? [22, 44, 30, 66, 38, 76, 46, 58, 34, 72, 42, 60]
    : [18, 34, 26, 48, 32, 70, 42, 82, 50, 64, 34, 74, 44, 58, 28, 68, 38, 52, 24, 46, 30, 60];
  return (
    <span className={`msv-wave ${compact ? 'is-compact' : ''}`} aria-hidden="true">
      {bars.map((height, index) => (
        <i key={index} style={{ '--bar-height': `${height}%`, '--bar-delay': `${index * -0.045}s` }} />
      ))}
    </span>
  );
}

export default function MiraScribePage() {
  const storeUrl = resolveMiraScribeStoreUrl(resolveMiraScribeStoreTarget());

  useEffect(() => {
    document.documentElement.lang = 'en';
    setDocumentMeta({
      title: 'MiraScribe — Speak it. Search it. Write with it.',
      description: `Private local transcription on Mac and iPhone, with live dictation on Mac. Turn speech into searchable, editable text in ${scribe.transcriptionLanguageCount} production languages.`,
      ogTitle: 'MiraScribe — Speak it. Search it. Write with it.',
      ogDescription: 'For writers, students, interviews, video, research, and every idea that arrives faster out loud.',
      alternateLanguages: [],
      favicon: APP_IDENTITY_ASSETS.mirascribe.faviconIco,
    });
  }, []);

  return (
    <MiraScribeShell skipTo="#ms-overview-main">
      <main id="ms-overview-main" className="ms-page-v2" aria-label="MiraScribe overview">
        <section className="msv-hero" aria-labelledby="msv-hero-title">
          <div className="msv-hero__media" aria-hidden="true">
            <img src="/images/mirascribe/editorial/hero-voice.webp" alt="" decoding="async" />
          </div>
          <div className="msv-hero__shade" aria-hidden="true" />
          <div className="msv-hero__content">
            <div className="msv-product-mark">
              <img src={APP_IDENTITY_ASSETS.mirascribe.icon192} alt="" width="46" height="46" />
              <span>MiraScribe</span>
            </div>
            <p className="msv-kicker">Private transcription for Mac + iPhone</p>
            <h1 id="msv-hero-title">Speak it.<br />Search it.<br /><em>Write with it.</em></h1>
            <p className="msv-hero__lead">Turn speech into usable text — for writing, study, interviews, research, and every idea that arrives better out loud.</p>
            <div className="msv-hero__actions">
              <a className="ms-btn ms-btn--primary" href={storeUrl} target="_blank" rel="noopener noreferrer">View in App Store <ArrowRight size={17} /></a>
              <a className="msv-text-link" href="#msv-stories">Explore what you can do <span>↓</span></a>
            </div>
            <div className="msv-trust-row" aria-label="Product highlights">
              <span>On-device</span><i /> <span>{scribe.transcriptionLanguageCount} languages</span><i /> <span>Searchable text</span><i /> <span>Export-ready</span>
            </div>
          </div>
          <div className="msv-hero__spoken" aria-hidden="true">
            <Waveform compact />
            <p>She knew the letter had been opened.</p>
            <p>Not because of the seal.</p>
            <p>Because the room was suddenly too quiet.</p>
          </div>
        </section>

        <section className="msv-thesis" aria-labelledby="msv-thesis-title">
          <div className="msv-thesis__intro">
            <p className="msv-kicker">A different way to work with words</p>
            <h2 id="msv-thesis-title">Some thoughts arrive better through your voice.</h2>
          </div>
          <div className="msv-thesis__copy">
            <p>Typing asks you to compose and operate a keyboard at the same time. Speaking can feel faster, freer, and closer to the thought itself.</p>
            <p>MiraScribe gives spoken ideas a second life as text you can shape, search, study, quote, subtitle, or simply keep.</p>
            <strong>Think aloud.<br />Edit with your eyes.</strong>
          </div>
        </section>

        <section id="msv-stories" className="msv-story msv-story--writer" aria-labelledby="msv-writer-title">
          <figure className="msv-story__photo is-portrait">
            <img src="/images/mirascribe/editorial/writer-window.webp" alt="A writer making notes beside a window." loading="lazy" decoding="async" />
          </figure>
          <div className="msv-story__copy">
            <p className="msv-kicker">For writers</p>
            <h2 id="msv-writer-title">Walk around the room.<br />Tell the story.<br />Edit later.</h2>
            <p>A first draft does not have to begin at a keyboard. Dictate a scene. Try a line of dialogue. Talk through a character. Capture a chapter while the rhythm is still there.</p>
            <p>MiraScribe lets the first version arrive in your voice — before editing turns it into something else.</p>
            <blockquote>“Say it before you start judging it.”</blockquote>
          </div>
          <aside className="msv-manuscript" aria-label="Example manuscript text">
            <span>ROUGH DRAFT · 41</span>
            <p>The room should feel too quiet before she opens the letter.</p>
            <p><em>Not empty. Waiting.</em></p>
            <p>She reads the first line twice before noticing that the rain has stopped.</p>
          </aside>
        </section>

        <section className="msv-voice-bridge" aria-label="Voice to words">
          <p>A thought.</p><Waveform /><p>A voice.</p><span>→</span><strong>Words you can work with.</strong>
        </section>

        <section className="msv-story msv-story--student" aria-labelledby="msv-student-title">
          <div className="msv-story__copy">
            <p className="msv-kicker">For students</p>
            <h2 id="msv-student-title">An hour-long lecture.<br />Three minutes you actually need.</h2>
            <p>Recorded material becomes far more useful when you can work with the words inside it. Find the definition, explanation, name, date, or argument without replaying everything from the beginning.</p>
            <small>Where recording is permitted.</small>
          </div>
          <figure className="msv-story__photo is-landscape">
            <img src="/images/mirascribe/editorial/student-headphones.webp" alt="A student wearing headphones and writing in a notebook." loading="lazy" decoding="async" />
          </figure>
        </section>

        <section className="msv-story msv-story--interview" aria-labelledby="msv-interview-title">
          <figure className="msv-story__photo is-landscape">
            <img src="/images/mirascribe/editorial/interview-podcast.webp" alt="Two people recording a spoken conversation with microphones." loading="lazy" decoding="async" />
          </figure>
          <div className="msv-story__copy">
            <p className="msv-kicker">For interviews & research</p>
            <h2 id="msv-interview-title">Find the quote.<br />Return to the source.</h2>
            <p>Interviews, field notes, research conversations, and recorded observations become easier to use when the spoken words are searchable and connected to time.</p>
            <div className="msv-pull-quote"><blockquote>“That was the moment everything changed.”</blockquote><span>42:17</span></div>
          </div>
        </section>

        <section className="msv-creator" aria-labelledby="msv-creator-title">
          <img src="/images/mirascribe/editorial/creator-microphone.webp" alt="" loading="lazy" decoding="async" />
          <div className="msv-creator__overlay" aria-hidden="true" />
          <div className="msv-creator__copy">
            <p className="msv-kicker">For video, podcasts & spoken media</p>
            <h2 id="msv-creator-title">Stop scrubbing.<br />Start finding.</h2>
            <p>Dialogue, interviews, narration, podcasts, and recorded ideas are easier to work with when the words themselves are searchable.</p>
            <div className="msv-format-line">{scribe.exportFormats.map(format => <span key={format}>.{format}</span>)}</div>
          </div>
        </section>

        <section className="msv-everyday" aria-labelledby="msv-everyday-title">
          <div className="msv-everyday__media">
            <img src="/images/mirascribe/editorial/everyday-phone.webp" alt="A person holding a phone during a quiet moment on the move." loading="lazy" decoding="async" />
          </div>
          <div className="msv-everyday__copy">
            <p className="msv-kicker">For ideas that do not wait</p>
            <h2 id="msv-everyday-title">Capture the thought<br />before it disappears.</h2>
            <p>A sentence while walking. A note before sleep. An outline that suddenly makes sense. Not every idea arrives when your hands are on a keyboard.</p>
            <strong>Your voice can be the first draft of almost anything.</strong>
          </div>
        </section>

        <section className="msv-proof" aria-labelledby="msv-proof-title">
          <header>
            <p className="msv-kicker">Built for real spoken work</p>
            <h2 id="msv-proof-title">Beautiful ideas still need practical tools.</h2>
          </header>
          <div className="msv-proof__grid">
            {PROOF.map(([title, body], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                {index === 0 ? <ShieldCheck size={22} /> : index === 2 ? <Search size={22} /> : <AudioLines size={22} />}
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="msv-privacy" aria-labelledby="msv-privacy-title">
          <div className="msv-privacy__ring" aria-hidden="true"><span /><span /><span /><i /></div>
          <div className="msv-privacy__copy">
            <p className="msv-kicker">Private by architecture</p>
            <h2 id="msv-privacy-title">Your unfinished work<br />can stay yours.</h2>
            <p>Drafts are private. Interviews can be sensitive. Research can be confidential. Personal notes can be personal.</p>
            <p>MiraScribe’s core speech transcription runs locally on supported Mac and iPhone devices with bundled on-device components.</p>
            <div className="msv-privacy__words"><span>Local.</span><span>Private.</span><span>Yours.</span></div>
          </div>
        </section>

        <section className="msv-closing" aria-label="Closing thought">
          <p>The keyboard is not the only place writing begins.</p>
          <span>Sometimes it begins with a voice.</span>
        </section>

        <section className="msv-cta" aria-labelledby="msv-cta-title">
          <div className="msv-product-mark is-center">
            <img src={APP_IDENTITY_ASSETS.mirascribe.icon192} alt="" width="54" height="54" />
            <span>MiraScribe for Mac + iPhone</span>
          </div>
          <h2 id="msv-cta-title">You already have the thought.<br />Give it a page.</h2>
          <p>For writers, students, researchers, creators, and anyone who thinks better out loud.</p>
          <a className="ms-btn ms-btn--primary" href={storeUrl} target="_blank" rel="noopener noreferrer">Download MiraScribe <ArrowRight size={18} /></a>
        </section>
      </main>
    </MiraScribeShell>
  );
}

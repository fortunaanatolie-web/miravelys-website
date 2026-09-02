import { useEffect } from 'react';
import MiraScribeShell from '../../components/mirascribe/MiraScribeShell';
import MiraScribeSearchDemo from '../../components/mira-family/MiraScribeSearchDemo';
import { setDocumentMeta } from '../../lib/documentMeta';
import { APP_IDENTITY_ASSETS } from '../../config/appIdentityAssets';

const APP_STORE_URL = 'https://apps.apple.com/md/app/mirascribe/id6803891486?mt=12';

const WORKFLOW = [
  ['01', 'Add it', 'Choose a supported audio or video file from your Mac.'],
  ['02', 'Transcribe it', 'Choose Fast or Best Quality. Select the spoken language or let MiraScribe detect it.'],
  ['03', 'Work with the words', 'Read, search, correct, listen against the source, and return to timestamps.'],
  ['04', 'Take it somewhere else', 'Export TXT, Markdown, SRT, VTT, or timestamped JSON.'],
];

export default function MiraScribePage() {
  useEffect(() => {
    document.documentElement.lang = 'en';
    setDocumentMeta({
      title: 'MiraScribe — Private Offline Transcription for Mac',
      description: 'Turn audio and video into searchable, editable text locally on your Mac. MiraScribe works offline and exports TXT, Markdown, SRT, VTT and timestamped JSON.',
      ogTitle: 'MiraScribe — Private Offline Transcription for Mac',
      ogDescription: 'Turn audio and video into searchable, editable text locally on your Mac. MiraScribe works offline and exports TXT, Markdown, SRT, VTT and timestamped JSON.',
      alternateLanguages: [],
      favicon: APP_IDENTITY_ASSETS.mirascribe.faviconIco,
    });
  }, []);

  return (
    <MiraScribeShell skipTo="#ms-overview-main">
      <main id="ms-overview-main" className="ms-page ms-page--wide mira-mkt ms-editorial" aria-label="MiraScribe overview">
        <section className="ms-editorial-hero" aria-label="Product introduction">
          <div className="ms-editorial-hero__copy">
            <p className="mira-mkt__eyebrow">A Miravelys product · for Mac</p>
            <h1 className="mira-mkt__hero-title">Stop replaying recordings. Start reading them.</h1>
            <p className="ms-editorial-hero__lead">MiraScribe turns audio and video into clear, editable text — privately on your Mac.</p>
            <p className="mira-mkt__lead">Drop in a lecture, an interview, a video, or a late-night voice memo. Search the transcript, correct the words, return to the timestamp, and listen to the source when context matters.</p>
            <div className="mira-mkt__hero-actions">
              <a href={APP_STORE_URL} className="ms-btn ms-btn--primary" target="_blank" rel="noopener noreferrer">Download for Mac</a>
              <span className="ms-editorial-hero__note">Mac App Store · local transcription</span>
            </div>
          </div>
          <figure className="ms-editorial-hero__image">
            <img src="/images/mirascribe/mirascribe-hero-hd.webp?v=2" alt="Video editor using MiraScribe on a MacBook with the MiraScribe interface visible within the computer display." loading="eager" fetchPriority="high" decoding="async" />
            <figcaption>Real product UI, kept inside the physical Mac display.</figcaption>
          </figure>
        </section>

        <section className="ms-editorial-statement" aria-labelledby="ms-needle-heading">
          <p className="mira-mkt__eyebrow">The useful part of transcription</p>
          <h2 className="mira-mkt__heading" id="ms-needle-heading">Find the needle. Skip the haystack.</h2>
          <p className="mira-mkt__lead">An hour-long lecture might contain three minutes you really need. An interview might hold one sentence worth coming back to. Don’t replay the whole thing.</p>
        </section>

        <MiraScribeSearchDemo />

        <section className="ms-editorial-audiences" aria-labelledby="ms-audience-heading">
          <div className="ms-editorial-audiences__intro">
            <p className="mira-mkt__eyebrow">Built for spoken information</p>
            <h2 className="mira-mkt__heading" id="ms-audience-heading">Read first. Return to the recording when it matters.</h2>
          </div>

          <article className="ms-editorial-story">
            <figure>
              <img src="/images/mirascribe/student-composite.png" alt="Student studying beside a MacBook after recording a lecture." loading="lazy" decoding="async" />
            </figure>
            <div>
              <p className="mira-mkt__usecase-kicker">Study</p>
              <h3>A lecture shouldn’t disappear when the class ends.</h3>
              <p>Where recording is permitted, turn a lecture or lesson into text you can search while studying. Find the name, formula, date, definition, or explanation you need, then go back to that part.</p>
            </div>
          </article>

          <article className="ms-editorial-story ms-editorial-story--reverse">
            <figure>
              <img src="/images/mirascribe/filmmaker-composite.png" alt="Video editor working with recorded footage in a home editing studio." loading="lazy" decoding="async" />
            </figure>
            <div>
              <p className="mira-mkt__usecase-kicker">Post-production</p>
              <h3>Stop scrubbing timelines. Search the dialogue.</h3>
              <p>Transcribe interviews, dialogue, documentary footage, or other recorded material. Search for the line you remember, use its timestamp to return to the source, and export SRT or VTT when subtitles are needed.</p>
            </div>
          </article>

          <article className="ms-editorial-text-story">
            <p className="mira-mkt__usecase-kicker">Journalism & research</p>
            <h3>An interview becomes something you can work with.</h3>
            <p>Search a subject or quote in timestamped text, then return to the original recording when exact wording and context matter. The recording does not need to be sent to a cloud transcription service.</p>
            <div className="ms-editorial-proof" aria-label="Interview workflow">
              <span>Interview</span><i>→</i><span>Search</span><i>→</i><span>Timestamp</span><i>→</i><span>Source</span>
            </div>
          </article>
        </section>

        <section className="ms-editorial-workflow" aria-labelledby="ms-how-heading">
          <div>
            <p className="mira-mkt__eyebrow">Simple by design</p>
            <h2 className="mira-mkt__heading" id="ms-how-heading">From recording to usable text.</h2>
            <p className="mira-mkt__lead">Bring the recording in, transcribe it locally, work with the words, then export only what you need.</p>
          </div>
          <ol>
            {WORKFLOW.map(([index, title, body]) => (
              <li key={index}><span>{index}</span><div><h3>{title}</h3><p>{body}</p></div></li>
            ))}
          </ol>
        </section>

        <section className="ms-editorial-privacy" aria-labelledby="ms-privacy-heading">
          <p className="mira-mkt__eyebrow">On-device by design</p>
          <h2 className="mira-mkt__heading" id="ms-privacy-heading">What happens on your Mac stays on your Mac.</h2>
          <p className="mira-mkt__lead">An unpublished interview. A classroom discussion. Research material. A work conversation. A draft idea you haven’t shared yet.</p>
          <p className="mira-mkt__lead">MiraScribe performs transcription locally on your Mac using bundled speech-recognition models. Your recording does not need to be uploaded to a transcription service.</p>
          <div className="ms-editorial-privacy__facts" aria-label="Privacy and offline benefits">
            <span><strong>Local</strong>Transcription runs on your Mac.</span>
            <span><strong>Offline</strong>The core workflow does not require an internet connection.</span>
            <span><strong>Under your control</strong>You choose the files and where exported text goes.</span>
          </div>
        </section>

        <section className="ms-editorial-dictation" aria-labelledby="ms-dictation-heading">
          <div>
            <p className="mira-mkt__eyebrow">Live Dictation</p>
            <h2 className="mira-mkt__heading" id="ms-dictation-heading">Speak instead of type.</h2>
            <p className="mira-mkt__lead">MiraScribe also includes local Live Dictation from the Mac menu bar for notes, drafts, messages, and moments when speaking is faster than typing.</p>
          </div>
          <div className="ms-editorial-shortcut" aria-label="MiraScribe dictation shortcut"><kbd>⌥</kbd><kbd>⌘</kbd><kbd>Space</kbd><span>Press. Speak. Keep working.</span></div>
        </section>

        <section className="ms-editorial-cta" aria-labelledby="ms-cta-heading">
          <p className="mira-mkt__eyebrow">MiraScribe for Mac</p>
          <h2 id="ms-cta-heading">You already have the recording. Now make it useful.</h2>
          <p>Built for Apple silicon. Requires macOS 14 or later.</p>
          <a href={APP_STORE_URL} className="ms-btn ms-btn--primary" target="_blank" rel="noopener noreferrer">Download MiraScribe for Mac</a>
        </section>
      </main>
    </MiraScribeShell>
  );
}

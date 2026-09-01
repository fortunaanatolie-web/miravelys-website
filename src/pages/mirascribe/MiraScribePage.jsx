import { useEffect } from 'react';
import MiraScribeShell from '../../components/mirascribe/MiraScribeShell';
import { setDocumentMeta } from '../../lib/documentMeta';

const APP_STORE_URL = 'https://apps.apple.com/md/app/mirascribe/id6803891486?mt=12';

export default function MiraScribePage() {
  useEffect(() => {
    document.documentElement.lang = 'en';
    setDocumentMeta({
      title: 'MiraScribe — Private Offline Transcription for Mac',
      description: 'Turn audio and video into searchable, editable text locally on your Mac. MiraScribe works offline and exports TXT, Markdown, SRT, VTT and timestamped JSON.',
      ogTitle: 'MiraScribe — Private Offline Transcription for Mac',
      ogDescription: 'Turn audio and video into searchable, editable text locally on your Mac. MiraScribe works offline and exports TXT, Markdown, SRT, VTT and timestamped JSON.',
      alternateLanguages: [],
    });
  }, []);

  return (
    <MiraScribeShell skipTo="#ms-overview-main">
      <main id="ms-overview-main" className="ms-page ms-page--wide mira-mkt" aria-label="MiraScribe overview">
        <section className="mira-mkt__hero mira-mkt__hero--human" aria-label="Product introduction">
          <p className="mira-mkt__eyebrow">A Miravelys product</p>
          <h1 className="mira-mkt__hero-title">Stop replaying recordings. Start reading them.</h1>
          <p className="mira-mkt__lead">MiraScribe turns audio and video into clear, editable text — privately on your Mac.</p>
          <p className="mira-mkt__lead" style={{ maxWidth: '42rem' }}>Drop in a lecture, an interview, a video, or a late-night voice memo. MiraScribe transcribes it locally and gives you searchable text with timestamps back to the original recording.</p>
          <p className="mira-mkt__lead" style={{ maxWidth: '42rem' }}>No cloud transcription. No upload queue. No subscription. Just your recording and the words inside it.</p>
          <div className="mira-mkt__hero-actions flex flex-col items-start gap-4">
            <a href={APP_STORE_URL} className="ms-btn ms-btn--primary" target="_blank" rel="noopener noreferrer">Download MiraScribe for Mac</a>
            <span className="text-sm text-muted-foreground">Available on the Mac App Store.</span>
          </div>
          <figure className="mira-mkt__hero-human" aria-label="Research and interview work on a Mac">
            <img src="/images/mirascribe/journalist.jpg" alt="Professional reviewing recorded material and notes at a desk." loading="eager" fetchPriority="high" decoding="async" />
            <figcaption>
              <strong>Turn the recording into something you can work with.</strong>
              <span>Read first. Search for what matters. Return to the original recording when context matters.</span>
            </figcaption>
          </figure>
        </section>

        <section aria-labelledby="ms-needle-heading" className="mt-24 text-center max-w-4xl mx-auto">
          <h2 className="mira-mkt__heading mx-auto" id="ms-needle-heading">Find the needle. Skip the haystack.</h2>
          <p className="mira-mkt__lead mx-auto">An hour-long lecture might contain three minutes you really need.</p>
          <p className="mira-mkt__lead mx-auto">An interview might hold one sentence worth coming back to.</p>
          <p className="mira-mkt__lead mx-auto">A raw video might contain exactly the take an editor remembers — without any clue where it appears in the timeline.</p>
          <p className="mira-mkt__lead mx-auto font-medium mt-8">Don't replay the whole thing.</p>
          <p className="mira-mkt__lead mx-auto">Search the transcript, find the passage, return to its timestamp, and listen to the original when you need the context.</p>
        </section>

        <div className="w-full h-px bg-border my-24 max-w-6xl mx-auto"></div>

        <section aria-labelledby="ms-audience-heading" className="max-w-6xl mx-auto">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-16 text-center" id="ms-audience-heading">Built for people who work with spoken information</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
            <figure className="mira-mkt__human-art mira-mkt__human-art--student order-2 md:order-1 rounded-2xl overflow-hidden shadow-lg border border-glass-border">
              <img src="/images/mirascribe/student-composite.png" alt="Student studying while MiraScribe is open on the MacBook in front of her." loading="lazy" decoding="async" />
            </figure>
            <div className="order-1 md:order-2">
              <p className="mira-mkt__usecase-kicker">Study</p>
              <h3 className="text-3xl font-serif font-semibold mb-6">Students</h3>
              <p className="mira-mkt__lead !mb-4">A lecture shouldn't disappear as soon as the class ends.</p>
              <p className="mira-mkt__lead !mb-4">Where recording is permitted, turn a recorded lecture or lesson into text you can search while studying.</p>
              <p className="mira-mkt__lead !mb-4">Find a name, formula, date, definition, or the explanation you didn't quite understand the first time.</p>
              <p className="mira-mkt__lead">Instead of listening to an entire class again, go back to the part that matters.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
            <div>
              <p className="mira-mkt__usecase-kicker">Post-production</p>
              <h3 className="text-3xl font-serif font-semibold mb-2">Video editors, filmmakers, and directors</h3>
              <h4 className="text-xl font-medium mb-6 text-muted-foreground">Stop scrubbing timelines. Start reading the footage.</h4>
              <p className="mira-mkt__lead !mb-4">Sometimes reading the footage is faster than watching it again.</p>
              <p className="mira-mkt__lead !mb-4">Transcribe interviews, dialogue, documentary footage, or other recorded material.</p>
              <p className="mira-mkt__lead !mb-4">Search for the line you remember, use its timestamp to return to the source, and export SRT or VTT when you need subtitles.</p>
              <p className="mira-mkt__lead">MiraScribe doesn't replace your editing software. It helps you find the words inside the footage.</p>
            </div>
            <figure className="mira-mkt__human-art mira-mkt__human-art--filmmaker rounded-2xl overflow-hidden shadow-lg border border-glass-border">
              <img src="/images/mirascribe/filmmaker-composite.png" alt="Video editor working with recorded footage in a home editing studio." loading="lazy" decoding="async" />
            </figure>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-32 mira-mkt__journalist-story">
            <div className="mira-mkt__journalist-proof order-2 md:order-1" aria-hidden="true">
              <span className="mira-mkt__proof-label">INTERVIEW</span>
              <span className="mira-mkt__proof-arrow">→</span>
              <span className="mira-mkt__proof-label">SEARCH</span>
              <span className="mira-mkt__proof-arrow">→</span>
              <span className="mira-mkt__proof-label">TIMESTAMP</span>
              <span className="mira-mkt__proof-arrow">→</span>
              <span className="mira-mkt__proof-label">VERIFY</span>
            </div>
            <div className="order-1 md:order-2">
              <p className="mira-mkt__usecase-kicker">Interview work</p>
              <h3 className="text-3xl font-serif font-semibold mb-6">Journalists and interviewers</h3>
              <p className="mira-mkt__lead !mb-4">An interview should become something you can work with, not another hour waiting to be replayed.</p>
              <p className="mira-mkt__lead !mb-4">Turn recorded interviews into searchable, timestamped text.</p>
              <p className="mira-mkt__lead !mb-4">Find a subject or quote, then return to the original recording when wording and context matter.</p>
              <p className="mira-mkt__lead">And the recording doesn't need to be sent to a cloud transcription service.</p>
            </div>
          </div>

          <div className="mira-mkt__essays mt-16 pt-16 border-t border-border">
            <article className="mira-mkt__essay"><span>01</span><h3>Researchers</h3><p>Dozens of recorded interviews can quickly become dozens of hours of material you have to navigate. MiraScribe turns those recordings into a local library of searchable transcripts. Read first. Search the text. Return to the original recording when context matters.</p></article>
            <article className="mira-mkt__essay"><span>02</span><h3>Teachers and lecturers</h3><p>Your spoken lessons already contain material worth keeping. Turn recorded classes, lectures, presentations, and explanations into editable text that can be reviewed, reused, archived, or turned into subtitles.</p></article>
            <article className="mira-mkt__essay"><span>03</span><h3>Writers and people who think out loud</h3><p>Some ideas arrive faster when spoken. Record the rough thought first or use MiraScribe's local dictation. Then work with the words on screen when you're ready to shape them.</p></article>
          </div>
        </section>

        <section aria-labelledby="ms-how-heading" className="mt-32 max-w-6xl mx-auto mira-mkt__workflow-shell">
          <div className="mira-mkt__workflow-heading">
            <p className="mira-mkt__eyebrow">Simple by design</p>
            <h2 className="mira-mkt__heading" id="ms-how-heading">From recording to usable text</h2>
            <p className="mira-mkt__lead">The workflow stays straightforward: bring the recording in, transcribe it locally, work with the words, then export only what you need.</p>
          </div>
          <div className="mira-mkt__workflow-grid">
            <article><span>1</span><h3>Add it</h3><p>Choose a supported audio or video file from your Mac.</p></article>
            <article><span>2</span><h3>Transcribe it</h3><p>Choose Fast or Best Quality. Select the spoken language or let MiraScribe detect it.</p></article>
            <article><span>3</span><h3>Work with the words</h3><p>Read, search, correct, listen against the source, and return to timestamps.</p></article>
            <article><span>4</span><h3>Take it somewhere else</h3><p>Export TXT, Markdown, SRT, VTT, or timestamped JSON.</p></article>
          </div>
          <div className="mira-mkt__format-row" aria-label="Export formats">
            <span>TXT</span><span>MARKDOWN</span><span>SRT</span><span>VTT</span><span>JSON</span>
          </div>
        </section>

        <section aria-labelledby="ms-privacy-heading" className="mt-32 max-w-6xl mx-auto mira-mkt__privacy-band">
          <div>
            <p className="mira-mkt__eyebrow">On-device by design</p>
            <h2 className="mira-mkt__heading" id="ms-privacy-heading">What happens on your Mac stays on your Mac.</h2>
            <p className="mira-mkt__lead">An unpublished interview. A classroom discussion. Research material. A work conversation. A draft idea you haven't shared yet.</p>
            <p className="mira-mkt__lead">MiraScribe performs transcription locally on your Mac using bundled speech-recognition models. Your recording does not need to be uploaded to a transcription service.</p>
          </div>
          <div className="mira-mkt__privacy-proof" aria-label="Privacy and offline benefits">
            <article><strong>Local</strong><span>Transcription runs on your Mac.</span></article>
            <article><strong>Offline</strong><span>The core workflow does not require an internet connection.</span></article>
            <article><strong>Under your control</strong><span>You choose the files and where exported text goes.</span></article>
          </div>
        </section>

        <section aria-labelledby="ms-dictation-heading" className="mt-32 max-w-6xl mx-auto mira-mkt__dictation-band">
          <div>
            <p className="mira-mkt__eyebrow">Live Dictation</p>
            <h2 className="mira-mkt__heading" id="ms-dictation-heading">Speak instead of type.</h2>
            <p className="mira-mkt__lead !mb-4">Some ideas arrive faster when spoken.</p>
            <p className="mira-mkt__lead !mb-4">MiraScribe also includes local Live Dictation from the Mac menu bar.</p>
            <p className="mira-mkt__lead">Useful for notes, drafts, messages, and those moments when speaking is simply faster than typing.</p>
          </div>
          <div className="mira-mkt__dictation-visual" aria-label="MiraScribe dictation shortcut">
            <span className="mira-mkt__dictation-pulse" aria-hidden="true"></span>
            <div className="mira-mkt__shortcut"><kbd>⌥</kbd><kbd>⌘</kbd><kbd>Space</kbd></div>
            <p>Press. Speak. Keep working.</p>
          </div>
        </section>

        <section className="mira-mkt__cta-band mt-32" aria-labelledby="ms-req-heading">
          <div className="text-left">
            <p className="mira-mkt__eyebrow">MiraScribe for Mac</p>
            <h2 className="text-4xl font-serif font-semibold mb-2" id="ms-req-heading">You already have the recording.</h2>
            <h3 className="text-2xl font-serif font-medium text-muted-foreground mb-4">Now make it useful.</h3>
            <p className="text-muted-foreground max-w-lg mb-6">Turn lectures, interviews, videos, research sessions, voice notes, and other recordings into text you can actually work with.</p>
            <p className="text-sm text-muted-foreground">Built for Apple silicon. Requires macOS 14 or later.</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <a href={APP_STORE_URL} className="ms-btn ms-btn--primary" target="_blank" rel="noopener noreferrer">Download MiraScribe for Mac</a>
            <span className="text-xs text-muted-foreground">Available on the Mac App Store.</span>
          </div>
        </section>
      </main>
    </MiraScribeShell>
  );
}

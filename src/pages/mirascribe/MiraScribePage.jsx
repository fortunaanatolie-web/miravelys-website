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
        {/* HERO SECTION */}
        <section className="mira-mkt__hero" aria-label="Product introduction">
          <p className="mira-mkt__eyebrow">A Miravelys product</p>
          <h1 className="mira-mkt__hero-title">
            Stop replaying recordings. Start reading them.
          </h1>
          <p className="mira-mkt__lead">
            MiraScribe turns audio and video into clear, editable text — privately on your Mac.
          </p>
          <p className="mira-mkt__lead" style={{ maxWidth: '42rem' }}>
            Drop in a lecture, an interview, a video, or a late-night voice memo. MiraScribe transcribes it locally and gives you searchable text with timestamps back to the original recording.
          </p>
          <p className="mira-mkt__lead" style={{ maxWidth: '42rem' }}>
            No cloud transcription. No upload queue. No subscription. Just your recording and the words inside it.
          </p>

          <div className="mira-mkt__hero-actions flex flex-col items-start gap-4">
            <a href={APP_STORE_URL} className="ms-btn ms-btn--primary" target="_blank" rel="noopener noreferrer">
              Download MiraScribe for Mac
            </a>
            <span className="text-sm text-muted-foreground">Available on the Mac App Store.</span>
          </div>

          <figure className="mt-16 w-full rounded-2xl overflow-hidden shadow-2xl border border-glass-border">
            <img
              src="/images/mirascribe/01-transcript-complete.png"
              alt="MiraScribe main interface showing a timestamped transcript"
              className="w-full h-auto block"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </figure>
        </section>

        {/* FIND THE NEEDLE */}
        <section aria-labelledby="ms-needle-heading" className="mt-24 text-center max-w-4xl mx-auto">
          <h2 className="mira-mkt__heading mx-auto" id="ms-needle-heading">Find the needle. Skip the haystack.</h2>
          <p className="mira-mkt__lead mx-auto">An hour-long lecture might contain three minutes you really need.</p>
          <p className="mira-mkt__lead mx-auto">An interview might hold one sentence worth coming back to.</p>
          <p className="mira-mkt__lead mx-auto">A raw video might contain exactly the take an editor remembers — without any clue where it appears in the timeline.</p>
          <p className="mira-mkt__lead mx-auto font-medium mt-8">Don't replay the whole thing.</p>
          <p className="mira-mkt__lead mx-auto">Search the transcript, find the passage, return to its timestamp, and listen to the original when you need the context.</p>
        </section>

        <div className="w-full h-px bg-border my-24 max-w-6xl mx-auto"></div>

        {/* AUDIENCE INTRO */}
        <section aria-labelledby="ms-audience-heading" className="max-w-6xl mx-auto">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-16 text-center" id="ms-audience-heading">
            Built for people who work with spoken information
          </h2>

          {/* STUDENT */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
            <div className="mira-mkt__screen-composite mira-mkt__screen-composite--student order-2 md:order-1 rounded-2xl overflow-hidden shadow-lg border border-glass-border">
              <img
                src="/images/mirascribe/student-composite.png"
                alt="Student working with MiraScribe on a MacBook while reviewing lecture notes."
                className="mira-mkt__screen-composite-base w-full h-auto object-cover block"
                loading="lazy"
                decoding="async"
              />
              <img
                src="/images/mirascribe/01-transcript-complete.png"
                alt=""
                aria-hidden="true"
                className="mira-mkt__screen-overlay mira-mkt__screen-overlay--student"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-serif font-semibold mb-6">Students</h3>
              <p className="mira-mkt__lead !mb-4">A lecture shouldn't disappear as soon as the class ends.</p>
              <p className="mira-mkt__lead !mb-4">Where recording is permitted, turn a recorded lecture or lesson into text you can search while studying.</p>
              <p className="mira-mkt__lead !mb-4">Find a name, formula, date, definition, or the explanation you didn't quite understand the first time.</p>
              <p className="mira-mkt__lead">Instead of listening to an entire class again, go back to the part that matters.</p>
            </div>
          </div>

          {/* FILMMAKER */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
            <div>
              <h3 className="text-3xl font-serif font-semibold mb-2">Video editors, filmmakers, and directors</h3>
              <h4 className="text-xl font-medium mb-6 text-muted-foreground">Stop scrubbing timelines. Start reading the footage.</h4>
              <p className="mira-mkt__lead !mb-4">Sometimes reading the footage is faster than watching it again.</p>
              <p className="mira-mkt__lead !mb-4">Transcribe interviews, dialogue, documentary footage, or other recorded material.</p>
              <p className="mira-mkt__lead !mb-4">Search for the line you remember, use its timestamp to return to the source, and export SRT or VTT when you need subtitles.</p>
              <p className="mira-mkt__lead">MiraScribe doesn't replace your editing software. It helps you find the words inside the footage.</p>
            </div>
            <div className="mira-mkt__screen-composite mira-mkt__screen-composite--filmmaker rounded-2xl overflow-hidden shadow-lg border border-glass-border">
              <img
                src="/images/mirascribe/filmmaker-composite.png"
                alt="Video editor using MiraScribe on a laptop and external display while working with recorded footage."
                className="mira-mkt__screen-composite-base w-full h-auto object-cover block"
                loading="lazy"
                decoding="async"
              />
              <img
                src="/images/mirascribe/01-transcript-complete.png"
                alt=""
                aria-hidden="true"
                className="mira-mkt__screen-overlay mira-mkt__screen-overlay--filmmaker-monitor"
                loading="lazy"
                decoding="async"
              />
              <img
                src="/images/mirascribe/02-library.png"
                alt=""
                aria-hidden="true"
                className="mira-mkt__screen-overlay mira-mkt__screen-overlay--filmmaker-laptop"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* JOURNALIST */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-glass-border">
                <img
                  src="/images/mirascribe/journalist.jpg"
                  alt="Journalist reviewing interview notes"
                  className="w-full h-full object-cover block"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-glass-border">
                <img
                  src="/images/mirascribe/02-library.png"
                  alt="Timestamped interview transcripts in MiraScribe's library."
                  className="w-full h-full object-cover object-left-top block"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-serif font-semibold mb-6">Journalists and interviewers</h3>
              <p className="mira-mkt__lead !mb-4">An interview should become something you can work with, not another hour waiting to be replayed.</p>
              <p className="mira-mkt__lead !mb-4">Turn recorded interviews into searchable, timestamped text.</p>
              <p className="mira-mkt__lead !mb-4">Find a subject or quote, then return to the original recording when wording and context matter.</p>
              <p className="mira-mkt__lead">And the recording doesn't need to be sent to a cloud transcription service.</p>
            </div>
          </div>

          {/* RESEARCHERS / TEACHERS / WRITERS */}
          <div className="mira-mkt__essays mt-16 pt-16 border-t border-border">
            <article className="mira-mkt__essay">
              <h3>Researchers</h3>
              <p>Dozens of recorded interviews can quickly become dozens of hours of material you have to navigate. MiraScribe turns those recordings into a local library of searchable transcripts. Read first. Search the text. Return to the original recording when context matters. Useful for interviews, field recordings, qualitative research, user research, and recorded study sessions.</p>
            </article>
            <article className="mira-mkt__essay">
              <h3>Teachers and lecturers</h3>
              <p>Your spoken lessons already contain material worth keeping. Turn recorded classes, lectures, presentations, and explanations into editable text that can be reviewed, reused, archived, or turned into subtitles. The original recording stays under your control.</p>
            </article>
            <article className="mira-mkt__essay">
              <h3>Writers and people who think out loud</h3>
              <p>Some ideas arrive faster when spoken. Record the rough thought first or use MiraScribe's local dictation. Then work with the words on screen when you're ready to shape them.</p>
            </article>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section aria-labelledby="ms-how-heading" className="mt-32 max-w-6xl mx-auto">
          <h2 className="mira-mkt__heading text-center mb-16" id="ms-how-heading">From recording to usable text</h2>

          <div className="grid md:grid-cols-2 gap-16 mb-24 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">1. Add it</h3>
              <p className="mira-mkt__lead !mb-12">Choose a supported audio or video file from your Mac.</p>

              <h3 className="text-2xl font-semibold mb-4">2. Transcribe it</h3>
              <p className="mira-mkt__lead">Choose Fast or Best Quality. Select the spoken language or let MiraScribe detect it. The transcription happens locally on your Mac.</p>
            </div>
            <figure className="rounded-2xl overflow-hidden shadow-xl border border-glass-border">
              <img
                src="/images/mirascribe/03-settings-transcription.png"
                alt="Transcription settings in MiraScribe"
                className="w-full h-auto block"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <figure className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-xl border border-glass-border">
              <img
                src="/images/mirascribe/01-transcript-complete.png"
                alt="Working with words in MiraScribe"
                className="w-full h-auto block"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-semibold mb-4">3. Work with the words</h3>
              <ul className="mira-mkt__lead list-disc list-inside !mb-12 space-y-2">
                <li>Read the transcript.</li>
                <li>Search it.</li>
                <li>Make corrections.</li>
                <li>Play the original recording while you review it.</li>
                <li>Use timestamps to get back to the part you need.</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4">4. Take it somewhere else</h3>
              <p className="mira-mkt__lead !mb-4">Export as:</p>
              <ul className="mira-mkt__lead font-medium space-y-2 list-none">
                <li>TXT</li>
                <li>Markdown</li>
                <li>SRT</li>
                <li>VTT</li>
                <li>Timestamped JSON</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PRIVACY */}
        <section aria-labelledby="ms-privacy-heading" className="mt-32 max-w-4xl mx-auto text-center">
          <h2 className="mira-mkt__heading mx-auto" id="ms-privacy-heading">What happens on your Mac stays on your Mac.</h2>
          <p className="mira-mkt__lead mx-auto">Some recordings are ordinary. Some aren't.</p>
          <p className="mira-mkt__lead mx-auto">An unpublished interview. A classroom discussion. Research material. A work conversation. A draft idea you haven't shared yet.</p>
          <p className="mira-mkt__lead mx-auto">MiraScribe performs transcription locally on your Mac using bundled speech-recognition models.</p>
          <p className="mira-mkt__lead mx-auto !mb-16">Your recording does not need to be uploaded to a transcription service. Transcription works offline.</p>

          <figure className="max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-glass-border">
            <img
              src="/images/mirascribe/05-settings-privacy.png"
              alt="Privacy settings in MiraScribe"
              className="w-full h-auto block"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </section>

        {/* LIVE DICTATION */}
        <section aria-labelledby="ms-dictation-heading" className="mt-32 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="mira-mkt__heading !text-left" id="ms-dictation-heading">Speak instead of type.</h2>
              <p className="mira-mkt__lead !text-left !mb-4">Some ideas arrive faster when spoken.</p>
              <p className="mira-mkt__lead !text-left !mb-4">MiraScribe also includes local Live Dictation from the Mac menu bar.</p>
              <p className="mira-mkt__lead !text-left !mb-4">Use the <kbd className="font-mono bg-muted px-2 py-1 rounded text-sm text-foreground">⌥⌘ Space</kbd> keyboard shortcut, speak, and turn your voice into text on your Mac.</p>
              <p className="mira-mkt__lead !text-left">Useful for notes, drafts, messages, and those moments when speaking is simply faster than typing.</p>
            </div>
            <figure className="rounded-2xl overflow-hidden shadow-xl border border-glass-border">
              <img
                src="/images/mirascribe/03-settings-general.png"
                alt="General settings showing dictation shortcut"
                className="w-full h-auto block"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="mira-mkt__cta-band mt-32" aria-labelledby="ms-req-heading">
          <div className="text-left">
            <h2 className="text-4xl font-serif font-semibold mb-2" id="ms-req-heading">You already have the recording.</h2>
            <h3 className="text-2xl font-serif font-medium text-muted-foreground mb-4">Now make it useful.</h3>
            <p className="text-muted-foreground max-w-lg mb-6">
              Turn lectures, interviews, videos, research sessions, voice notes, and other recordings into text you can actually work with.
            </p>
            <p className="text-sm text-muted-foreground">
              Built for Apple silicon. Requires macOS 14 or later.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <a href={APP_STORE_URL} className="ms-btn ms-btn--primary" target="_blank" rel="noopener noreferrer">
              Download MiraScribe for Mac
            </a>
            <span className="text-xs text-muted-foreground">Available on the Mac App Store.</span>
          </div>
        </section>
      </main>
    </MiraScribeShell>
  );
}

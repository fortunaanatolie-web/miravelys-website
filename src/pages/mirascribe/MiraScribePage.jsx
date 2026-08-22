/**
 * MiraScribePage — /mirascribe
 * MiraScribe product landing page. Marketing URL for App Store Connect.
 *
 * Copy is derived exclusively from verified shipping-build facts.
 * No TTS, no Voice Studio, no cloud claims, no diarization marketing.
 * Audit source: AppStoreSubmission/PRODUCT_TRUTH_AUDIT.md (21 Aug 2026)
 */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Globe, Clock, Edit3, Download, Mic, ShieldCheck } from 'lucide-react';
import MiraScribeShell from '../../components/mirascribe/MiraScribeShell';
import { setDocumentMeta } from '../../lib/documentMeta';

const APPSTORE_URL = 'https://apps.apple.com/app/id6787681485';

/* Waveform bar heights — varied for visual interest */
const WAVE_BARS = [
  { h: 0.28, dur: 1.6, delay: 0.0  },
  { h: 0.55, dur: 1.3, delay: 0.15 },
  { h: 0.80, dur: 1.5, delay: 0.05 },
  { h: 1.00, dur: 1.2, delay: 0.20 },
  { h: 0.72, dur: 1.7, delay: 0.10 },
  { h: 0.45, dur: 1.4, delay: 0.25 },
  { h: 0.90, dur: 1.3, delay: 0.08 },
  { h: 0.60, dur: 1.6, delay: 0.18 },
  { h: 0.38, dur: 1.5, delay: 0.30 },
  { h: 0.75, dur: 1.2, delay: 0.12 },
  { h: 1.00, dur: 1.4, delay: 0.02 },
  { h: 0.55, dur: 1.6, delay: 0.22 },
  { h: 0.30, dur: 1.3, delay: 0.35 },
];

const FEATURES = [
  {
    icon: <FileText size={17} aria-hidden="true" />,
    title: 'Local transcription',
    body: 'Drop in an audio or video file. MiraScribe converts the speech to text on your Mac using a bundled model — no internet connection required after install.',
  },
  {
    icon: <Globe size={17} aria-hidden="true" />,
    title: 'Multilingual',
    body: 'Leave the language on Auto or choose from a wide set. MiraScribe detects the spoken language and uses it for the full recording.',
  },
  {
    icon: <Clock size={17} aria-hidden="true" />,
    title: 'Timestamps',
    body: 'Every segment and word carries a timestamp. Export to SRT or VTT for subtitles, or use the timeline to navigate the transcript.',
  },
  {
    icon: <Edit3 size={17} aria-hidden="true" />,
    title: 'Edit and clean',
    body: 'Review the raw transcript, make corrections, and use the clean-up tool to remove common filler words (English).',
  },
  {
    icon: <Download size={17} aria-hidden="true" />,
    title: 'Export formats',
    body: 'Save transcripts as plain text, Markdown, SRT, VTT, or JSON. You choose where each file goes.',
  },
  {
    icon: <Mic size={17} aria-hidden="true" />,
    title: 'Live dictation',
    body: 'Use ⌥⌘ Space or the menu-bar icon to start live dictation. Completed text is copied to the clipboard or pasted directly if Accessibility access is granted.',
  },
];

export default function MiraScribePage() {
  useEffect(() => {
    document.title = 'MiraScribe — Private transcription for Mac';
    document.documentElement.lang = 'en';
    setDocumentMeta({
      title: 'MiraScribe — Private transcription for Mac',
      description: 'Turn recordings into clear, editable text — locally on your Mac. MiraScribe uses a bundled speech model so your audio never leaves your machine.',
      ogTitle: 'MiraScribe — Private transcription for Mac',
      ogDescription: 'Turn recordings into clear, editable text — locally on your Mac.',
      alternateLanguages: [],
    });
  }, []);

  return (
    <MiraScribeShell>
      <main className="ms-page ms-page--wide" aria-label="MiraScribe overview">

        {/* ── Hero ── */}
        <section className="ms-hero" aria-label="Product introduction">
          <p className="ms-hero__eyebrow" aria-hidden="true">
            <span className="ms-hero__dot" />
            A Miravelys product
          </p>

          {/* Waveform visual */}
          <div
            className="ms-waveform"
            aria-hidden="true"
            role="presentation"
          >
            {WAVE_BARS.map((bar, i) => (
              <span
                key={i}
                className="ms-waveform__bar"
                style={{
                  height: `${bar.h * 100}%`,
                  '--ms-wv-dur': `${bar.dur}s`,
                  '--ms-wv-delay': `${bar.delay}s`,
                }}
              />
            ))}
          </div>

          <h1 className="ms-hero__heading">
            Turn recordings into clear text — privately on your Mac.
          </h1>
          <p className="ms-hero__sub">
            MiraScribe converts speech to readable, editable transcripts.
            The transcription runs on your Mac using a bundled model —
            your recordings are not sent to a remote service.
          </p>

          <div className="ms-hero__actions">
            <a
              href={APPSTORE_URL}
              className="ms-btn ms-btn--primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download on the Mac App Store
            </a>
            <Link to="/mirascribe/support" className="ms-btn ms-btn--secondary">
              Support
            </Link>
          </div>
        </section>

        {/* ── Privacy badge ── */}
        <div className="ms-privacy-badge" role="note" aria-label="Privacy statement">
          <ShieldCheck size={20} className="ms-privacy-badge__icon" aria-hidden="true" />
          <div>
            <p className="ms-privacy-badge__title">Your recordings stay on your Mac</p>
            <p className="ms-privacy-badge__body">
              Audio and transcripts are processed locally. The audited shipping build does not
              include analytics, advertising, or cloud-transcription SDKs.
              MiraScribe does not upload your recordings to a remote transcription service.{' '}
              <Link to="/mirascribe/privacy">Privacy policy</Link>
            </p>
          </div>
        </div>

        {/* ── Features ── */}
        <section aria-labelledby="features-heading">
          <h2 className="ms-section-title" id="features-heading">What MiraScribe does</h2>

          <div className="ms-features" role="list">
            {FEATURES.map(f => (
              <article className="ms-feature" key={f.title} role="listitem">
                <div className="ms-feature__icon" aria-hidden="true">{f.icon}</div>
                <h3 className="ms-feature__title">{f.title}</h3>
                <p className="ms-feature__body">{f.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── Screenshot slot — ready for real screenshots ── */}
        <section aria-label="App screenshot">
          <div className="ms-screenshot-slot" aria-hidden="true">
            <div className="ms-screenshot-slot__placeholder">
              <Mic size={28} aria-hidden="true" />
              <span>App screenshot coming soon</span>
            </div>
          </div>
        </section>

        {/* ── Requirements ── */}
        <section aria-labelledby="requirements-heading">
          <h2 className="ms-section-title" id="requirements-heading">System requirements</h2>
          <ul className="ms-legal" style={{ paddingLeft: 0 }}>
            <li>Mac with Apple silicon</li>
            <li>macOS 14.0 Sonoma or later</li>
            <li>Adequate free storage — the bundled speech model is approximately 600 MB</li>
          </ul>
        </section>

        {/* ── App Store CTA ── */}
        <section style={{ paddingTop: 'clamp(32px, 5vw, 56px)' }}>
          <a
            href={APPSTORE_URL}
            className="ms-btn ms-btn--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download MiraScribe — Mac App Store
          </a>
        </section>
      </main>
    </MiraScribeShell>
  );
}

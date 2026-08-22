/**
 * MiraScribeSupportPage — /mirascribe/support
 * App Store Connect Support URL.
 *
 * Content verified against: AppStoreSubmission/Web/mirascribe-support.html
 * Support email: support.mirascribe@miravelys.com (confirmed)
 * Legal operator: [LEGAL_OPERATOR_REQUIRED] — do not publish before deciding
 */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Mic, HelpCircle, Volume2, Download, Settings } from 'lucide-react';
import MiraScribeShell from '../../components/mirascribe/MiraScribeShell';
import { setDocumentMeta } from '../../lib/documentMeta';

const SUPPORT_EMAIL = 'support.mirascribe@miravelys.com';
const SUPPORT_MAILTO = `mailto:${SUPPORT_EMAIL}`;

const TOPICS = [
  {
    icon: <HelpCircle size={16} aria-hidden="true" />,
    label: 'Getting started',
    body: 'Drop an audio or video file into the transcription workspace, or choose a file. Leave the language on Auto or select the spoken language. Start transcription, review the result, then export.',
  },
  {
    icon: <Volume2 size={16} aria-hidden="true" />,
    label: 'Importing a recording',
    body: 'MiraScribe accepts WAV, M4A, MP3, MP4, MOV, CAF, AIFF, and other formats readable by macOS. Drag the file into the workspace or use the Open button. DRM-protected files cannot be processed.',
  },
  {
    icon: <Mic size={16} aria-hidden="true" />,
    label: 'Microphone and permissions',
    body: 'Microphone access is only required for live dictation. Enable MiraScribe in System Settings → Privacy & Security → Microphone. Accessibility access is optional — without it, dictation results are copied to the clipboard.',
  },
  {
    icon: <Settings size={16} aria-hidden="true" />,
    label: 'Fast vs Best Quality mode',
    body: 'Both modes use the same bundled speech model. Best Quality applies more thorough decode settings and is more accurate on difficult recordings. Fast completes sooner.',
  },
  {
    icon: <Download size={16} aria-hidden="true" />,
    label: 'Exports',
    body: 'Save transcripts as plain text (.txt), Markdown (.md), subtitle files (.srt, .vtt), or structured data (.json). Use the Export button to choose the format and destination.',
  },
  {
    icon: <Settings size={16} aria-hidden="true" />,
    label: 'Troubleshooting',
    body: null, // rendered separately below
  },
];

export default function MiraScribeSupportPage() {
  useEffect(() => {
    document.documentElement.lang = 'en';
    setDocumentMeta({
      title: 'MiraScribe Support',
      description: 'Get help with MiraScribe for Mac. Contact support or find answers to common questions about transcription, permissions, exports, and more.',
      ogTitle: 'MiraScribe Support',
      ogDescription: 'Help and contact information for MiraScribe.',
      alternateLanguages: [],
    });
  }, []);

  return (
    <MiraScribeShell skipTo="#ms-support-main">
      <main id="ms-support-main" className="ms-page ms-page--narrow" aria-label="MiraScribe support">

        {/* ── Header ── */}
        <header style={{ marginBottom: 'clamp(32px, 5vw, 48px)' }}>
          <span className="ms-eyebrow">Support</span>
          <h1 className="ms-legal" style={{ fontWeight: 700, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', margin: '0 0 12px' }}>
            MiraScribe Support
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--ms-text-secondary)', lineHeight: 1.6, margin: 0 }}>
            Need help with MiraScribe? We're here to help.
          </p>
        </header>

        {/* ── Contact card ── */}
        <div className="ms-contact-card" role="region" aria-label="Contact support">
          <Mail size={20} className="ms-contact-card__icon" aria-hidden="true" />
          <div className="ms-contact-card__body">
            <p className="ms-contact-card__title">Email support</p>
            <a href={SUPPORT_MAILTO} className="ms-contact-card__email">
              {SUPPORT_EMAIL}
            </a>
            <p className="ms-contact-card__note">We usually reply within 1–2 business days.</p>
          </div>
        </div>

        {/* ── Topics ── */}
        <section aria-labelledby="topics-heading">
          <h2 className="ms-section-title" id="topics-heading">Common topics</h2>
          <div className="ms-support-grid" role="list">
            {TOPICS.filter(t => t.body).map(topic => (
              <article className="ms-support-item" key={topic.label} role="listitem">
                <p className="ms-support-item__label">
                  {topic.icon}
                  {topic.label}
                </p>
                <p>{topic.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── Troubleshooting ── */}
        <section aria-labelledby="trouble-heading">
          <h2 className="ms-section-title" id="trouble-heading">Troubleshooting</h2>
          <dl className="ms-legal" style={{ margin: 0 }}>
            <dt><strong>Microphone unavailable</strong></dt>
            <dd>Enable MiraScribe in System Settings → Privacy &amp; Security → Microphone.</dd>

            <dt style={{ marginTop: '1em' }}><strong>Dictation does not paste into the target app</strong></dt>
            <dd>Enable MiraScribe in System Settings → Privacy &amp; Security → Accessibility. Without this, completed dictation is still copied to the clipboard.</dd>

            <dt style={{ marginTop: '1em' }}><strong>Model cannot load / app cannot transcribe</strong></dt>
            <dd>The speech model is bundled with the app and is not downloaded separately. If the model is missing, reinstall the complete build from the Mac App Store.</dd>

            <dt style={{ marginTop: '1em' }}><strong>File import fails</strong></dt>
            <dd>Confirm the file is an audio or video format readable by macOS, that it has an audio track, and that it is not DRM-protected. MiraScribe will show a specific error if the file format is unsupported or the audio cannot be decoded.</dd>

            <dt style={{ marginTop: '1em' }}><strong>Transcription accuracy</strong></dt>
            <dd>MiraScribe uses a Whisper-based speech model. Accuracy depends on audio quality, speaking clarity, and language. Switch to Best Quality mode for more thorough processing on difficult recordings.</dd>

            <dt style={{ marginTop: '1em' }}><strong>First launch is slow</strong></dt>
            <dd>On first launch macOS compiles the Core ML model for your hardware. This takes extra time once and is normal.</dd>
          </dl>
        </section>

        {/* ── Privacy link ── */}
        <section style={{ marginTop: 'clamp(40px, 6vw, 64px)', paddingTop: '24px', borderTop: '1px solid var(--ms-border)' }}>
          <h2 className="ms-section-title">Privacy</h2>
          <p className="ms-legal" style={{ margin: 0 }}>
            Transcription runs on your Mac using a bundled speech model.
            Your audio and transcripts are not uploaded to a remote service.
            Read the full <Link to="/mirascribe/privacy">MiraScribe Privacy Policy</Link>.
          </p>
        </section>

        {/* ── Developer info ── */}
        <section style={{ marginTop: 'clamp(40px, 6vw, 64px)', paddingTop: '24px', borderTop: '1px solid var(--ms-border)' }}>
          <h2 className="ms-section-title">Developer</h2>
          <div className="ms-legal">
            <p>
              MiraScribe is developed and distributed by{' '}
              <strong>[LEGAL_OPERATOR_REQUIRED]</strong>.
            </p>
            <p className="ms-placeholder-notice">
              Legal operator name and address to be added before App Store submission. Contact{' '}
              <a href={SUPPORT_MAILTO}>{SUPPORT_EMAIL}</a> in the meantime.
            </p>
            <p>
              Support contact:{' '}
              <a href={SUPPORT_MAILTO}>{SUPPORT_EMAIL}</a>
            </p>
          </div>
        </section>

      </main>
    </MiraScribeShell>
  );
}

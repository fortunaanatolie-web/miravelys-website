import { APP_IDENTITY_ASSETS } from '../../config/appIdentityAssets';
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
    body: 'Choose Record Audio, Import File, or—on iPhone—Import from Photos. Start transcription, review the timestamped text, then save or export it.',
  },
  {
    icon: <Volume2 size={16} aria-hidden="true" />,
    label: 'Importing a recording',
    body: 'MiraScribe accepts common audio and video formats supported by the device. DRM-protected media cannot be processed. On iPhone, Photos video import uses the system Photos picker.',
  },
  {
    icon: <Mic size={16} aria-hidden="true" />,
    label: 'Microphone and permissions',
    body: 'Microphone access is requested only for user-initiated recording. On Mac, optional Accessibility permission may be used for automatic paste; it is not required on iPhone.',
  },
  {
    icon: <Settings size={16} aria-hidden="true" />,
    label: 'On-device transcription',
    body: 'Transcription is designed to run locally on supported Apple devices. Internet access is not required for the transcription engine after installation.',
  },
  {
    icon: <Download size={16} aria-hidden="true" />,
    label: 'Exports',
    body: 'Export transcripts as TXT, Markdown, SRT, VTT, or JSON. You choose the destination using the system share or export controls.',
  },
];

export default function MiraScribeSupportPage() {
  useEffect(() => {
    document.documentElement.lang = 'en';
    setDocumentMeta({
      favicon: APP_IDENTITY_ASSETS.mirascribe.faviconIco,
      title: 'MiraScribe Support',
      description: 'Get help with MiraScribe for Mac and iPhone. Contact support or find answers about transcription, permissions, imports, and exports.',
      ogTitle: 'MiraScribe Support',
      ogDescription: 'Help and contact information for MiraScribe.',
      alternateLanguages: [],
    });
  }, []);

  return (
    <MiraScribeShell skipTo="#ms-support-main">
      <main id="ms-support-main" className="ms-page ms-page--narrow" aria-label="MiraScribe support">
        <header style={{ marginBottom: 'clamp(32px, 5vw, 48px)' }}>
          <span className="ms-eyebrow">Support</span>
          <h1 className="ms-legal" style={{ fontWeight: 700, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', margin: '0 0 12px' }}>
            MiraScribe Support
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--ms-text-secondary)', lineHeight: 1.6, margin: 0 }}>
            Help for MiraScribe on Mac and iPhone.
          </p>
        </header>

        <div className="ms-contact-card" role="region" aria-label="Contact support">
          <Mail size={20} className="ms-contact-card__icon" aria-hidden="true" />
          <div className="ms-contact-card__body">
            <p className="ms-contact-card__title">Email support</p>
            <a href={SUPPORT_MAILTO} className="ms-contact-card__email">{SUPPORT_EMAIL}</a>
            <p className="ms-contact-card__note">We usually reply within 1–2 business days.</p>
          </div>
        </div>

        <section aria-labelledby="topics-heading">
          <h2 className="ms-section-title" id="topics-heading">Common topics</h2>
          <div className="ms-support-grid" role="list">
            {TOPICS.map(topic => (
              <article className="ms-support-item" key={topic.label} role="listitem">
                <p className="ms-support-item__label">{topic.icon}{topic.label}</p>
                <p>{topic.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="trouble-heading">
          <h2 className="ms-section-title" id="trouble-heading">Troubleshooting</h2>
          <dl className="ms-legal" style={{ margin: 0 }}>
            <dt><strong>Microphone unavailable</strong></dt>
            <dd>Open the device privacy settings and allow Microphone access for MiraScribe, then return to the app and try Record Audio again.</dd>

            <dt style={{ marginTop: '1em' }}><strong>Transcription cannot start</strong></dt>
            <dd>Confirm the device is supported and has sufficient free storage. If iPhone is in a serious thermal state, MiraScribe will wait until the phone cools before starting new local transcription.</dd>

            <dt style={{ marginTop: '1em' }}><strong>File import fails</strong></dt>
            <dd>Confirm the selected file contains a readable audio track and is not DRM-protected. For iPhone Photos import, allow the system picker to finish preparing an iCloud-only item before returning to MiraScribe.</dd>

            <dt style={{ marginTop: '1em' }}><strong>Transcript quality</strong></dt>
            <dd>Recognition quality depends on recording clarity, background noise, distance from the microphone, and the spoken language. Review important text before relying on it.</dd>

            <dt style={{ marginTop: '1em' }}><strong>First transcription takes longer</strong></dt>
            <dd>The operating system may perform one-time local preparation for on-device processing. No separate transcription-resource download is required.</dd>
          </dl>
        </section>

        <section style={{ marginTop: 'clamp(40px, 6vw, 64px)', paddingTop: '24px', borderTop: '1px solid var(--ms-border)' }}>
          <h2 className="ms-section-title">Privacy</h2>
          <p className="ms-legal" style={{ margin: 0 }}>
            Transcription is designed to run locally on your device. Your audio and transcripts are
            not uploaded to a developer-operated transcription service. Read the full{' '}
            <Link to="/mirascribe/privacy">MiraScribe Privacy Policy</Link>.
          </p>
        </section>

        <section style={{ marginTop: 'clamp(40px, 6vw, 64px)', paddingTop: '24px', borderTop: '1px solid var(--ms-border)' }}>
          <h2 className="ms-section-title">Developer</h2>
          <div className="ms-legal">
            <p>MiraScribe is developed and distributed by <strong>Anatolie Furtuna</strong> as a sole proprietor.</p>
            <p>
              Business address: Alexandru cel Bun 36, ap 47, 3100 Balti, Moldova.<br />
              Governing jurisdiction: Republic of Moldova.
            </p>
            <p>Support contact: <a href={SUPPORT_MAILTO}>{SUPPORT_EMAIL}</a></p>
          </div>
        </section>
      </main>
    </MiraScribeShell>
  );
}

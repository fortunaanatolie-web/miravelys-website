/**
 * MiraVoxisSupportPage — /miravoxis/support
 * Intended App Store Connect Support URL.
 *
 * Support email must remain exactly support.miraVoxis@miravelys.com
 */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  AudioLines,
  Download,
  HelpCircle,
  Mail,
  Mic,
  Settings,
  Speech,
} from 'lucide-react';
import MiraVoxisShell from '../../components/miravoxis/MiraVoxisShell';
import { MIRAVOXIS_SUPPORT_EMAIL, MIRAVOXIS_SUPPORT_MAILTO } from '../../config/siteLinks';
import { setDocumentMeta } from '../../lib/documentMeta';

const TOPICS = [
  {
    icon: <HelpCircle size={16} aria-hidden="true" />,
    label: 'Getting started',
    body: 'From Home, choose Transcribe to open audio or video, or Voice Studio to turn a script into speech. Transcription can run from bundled or already-installed Whisper models. Voice generation needs the local VoxCPM2 engine — use Prepare Voice if it is not installed yet.',
  },
  {
    icon: <Download size={16} aria-hidden="true" />,
    label: 'Model installation',
    body: 'Open Models to see Whisper Best, Whisper Fast, VoxCPM2, and optional engines. Prepare, Download, Verify, and Repair act on the selected runtime. A missing voice engine may be fetched from Hugging Face. A damaged complete package should be reinstalled rather than patched by hand.',
  },
  {
    icon: <Speech size={16} aria-hidden="true" />,
    label: 'Speech generation',
    body: 'Paste or type a script, choose a narrator or dialogue cast, then Preview or Generate. Automatic routing uses VoxCPM2. Chatterbox is optional and much slower; Automatic never selects it. Export masters as WAV, FLAC, or AAC/M4A.',
  },
  {
    icon: <AudioLines size={16} aria-hidden="true" />,
    label: 'Transcription and dictation',
    body: 'Import WAV, CAF, AIFF, M4A, AAC, MP3, FLAC, MP4, MOV, or M4V. Fast uses Whisper large-v3-turbo; Best Quality uses large-v3. Live dictation uses the Fast runtime. Optional speaker labels add “Speaker 1” / “Speaker 2”; they do not name people.',
  },
  {
    icon: <Mic size={16} aria-hidden="true" />,
    label: 'Microphone and cloning',
    body: 'Microphone access is used for live dictation, in-workspace recording, and optional actor reference clips. File transcription does not require the microphone. Custom voices need a local reference and consent; samples stay in the Voice Library on this Mac.',
  },
  {
    icon: <Settings size={16} aria-hidden="true" />,
    label: 'Apple Silicon and runtime',
    body: 'Transcription and Voice Studio are built for Apple Silicon on macOS 15 or later. Studio quality uses more memory. If generation fails, note the selected engine (usually VoxCPM2), whether the model shows as Ready, and any error text in the app.',
  },
];

export default function MiraVoxisSupportPage() {
  useEffect(() => {
    document.documentElement.lang = 'en';
    setDocumentMeta({
      title: 'MiraVoxis Support',
      description: `Contact MiraVoxis Support at ${MIRAVOXIS_SUPPORT_EMAIL}. Help with transcription, Voice Studio, models, permissions, and local runtime issues.`,
      ogTitle: 'MiraVoxis Support',
      ogDescription: `Contact MiraVoxis Support at ${MIRAVOXIS_SUPPORT_EMAIL}.`,
      ogImageAlt: 'MiraVoxis — local transcription and voice generation for Mac',
      alternateLanguages: [],
    });
  }, []);

  return (
    <MiraVoxisShell skipTo="#mx-support-main">
      <main id="mx-support-main" className="mx-page mx-page--narrow" aria-label="MiraVoxis support">

        <header style={{ marginBottom: 'clamp(28px, 5vw, 44px)' }}>
          <span className="mx-eyebrow">Support</span>
          <h1 style={{ fontWeight: 700, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', margin: '0 0 12px', letterSpacing: '-0.03em', color: 'var(--mx-text)' }}>
            MiraVoxis Support
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--mx-text-secondary)', lineHeight: 1.6, margin: 0 }}>
            Help with model installation, speech generation, transcription, voice selection,
            cloning, microphone access, import and export, and local runtime issues.
          </p>
        </header>

        <section className="mx-contact" aria-labelledby="mx-contact-heading">
          <Mail size={20} className="mx-contact__icon" aria-hidden="true" />
          <div>
            <h2 className="mx-contact__title" id="mx-contact-heading">
              Contact MiraVoxis Support
            </h2>
            <p className="mx-contact__intro">
              For technical support, questions, feedback, or feature requests, contact MiraVoxis Support.
            </p>
            <a
              href={MIRAVOXIS_SUPPORT_MAILTO}
              className="mx-contact__email"
              aria-label={`Email MiraVoxis support at ${MIRAVOXIS_SUPPORT_EMAIL}`}
            >
              {MIRAVOXIS_SUPPORT_EMAIL}
            </a>
            <p className="mx-contact__note">
              We usually reply within 1–2 business days. Please do not attach private recordings,
              transcripts, or cloning samples unless we specifically ask for a non-sensitive example.
            </p>
          </div>
        </section>

        <section aria-labelledby="mx-topics-heading">
          <h2 className="mx-section-title" id="mx-topics-heading">Common topics</h2>
          <div className="mx-support-grid" role="list">
            {TOPICS.map(topic => (
              <article className="mx-support-item" key={topic.label} role="listitem">
                <p className="mx-support-item__label">
                  {topic.icon}
                  {topic.label}
                </p>
                <p>{topic.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="mx-diag-heading">
          <h2 className="mx-section-title" id="mx-diag-heading">Useful diagnostic information</h2>
          <p className="mx-section-lead">
            For technical issues, include what you can of the following. Skip anything that
            would reveal private speech or unpublished scripts.
          </p>
          <ul className="mx-list">
            <li>MiraVoxis version (from MiraVoxis → About MiraVoxis)</li>
            <li>macOS version</li>
            <li>Mac model / Apple Silicon generation, and roughly how much unified memory you have</li>
            <li>Selected engine (VoxCPM2, or Chatterbox if you chose it)</li>
            <li>Selected model or Models-workspace status (Ready, downloading, missing)</li>
            <li>The exact error shown in the app</li>
            <li>Steps to reproduce, and whether the Mac was online or offline</li>
          </ul>
        </section>

        <section aria-labelledby="mx-trouble-heading">
          <h2 className="mx-section-title" id="mx-trouble-heading">Troubleshooting</h2>
          <dl className="mx-legal" style={{ margin: 0 }}>
            <dt><strong>Voice generation asks to prepare or download a model</strong></dt>
            <dd>
              VoxCPM2 is not embedded in the app bundle. Use Prepare Voice or the Models
              workspace. That step may need internet access to Hugging Face. After the files
              are installed, generation runs on this Mac.
            </dd>

            <dt><strong>Transcription model cannot load</strong></dt>
            <dd>
              A complete installation includes Whisper Best and Fast. If those files are
              missing or damaged, reinstall MiraVoxis. Some developer builds may download
              Whisper from Hugging Face on first use.
            </dd>

            <dt><strong>Microphone unavailable</strong></dt>
            <dd>
              Enable MiraVoxis in System Settings → Privacy &amp; Security → Microphone.
              File transcription does not need this permission.
            </dd>

            <dt><strong>Dictation does not paste into the target app</strong></dt>
            <dd>
              Enable MiraVoxis in System Settings → Privacy &amp; Security → Accessibility.
              Without that, completed dictation is still copied to the clipboard.
            </dd>

            <dt><strong>Custom actor will not speak</strong></dt>
            <dd>
              Cloning needs a saved local reference clip and a ready VoxCPM2 (or explicitly
              chosen Chatterbox) engine. MiraVoxis does not substitute a built-in narrator
              for a custom actor that has no reference.
            </dd>

            <dt><strong>Studio quality is slow or unavailable</strong></dt>
            <dd>
              Studio and Dialogue use more memory. Try Preview or Natural on smaller-memory
              Macs, quit other heavy apps, and confirm you are on Apple Silicon with macOS 15
              or later.
            </dd>
          </dl>
        </section>

        <hr className="mx-rule" />

        <section aria-labelledby="mx-privacy-heading" style={{ paddingTop: '24px' }}>
          <h2 className="mx-section-title" id="mx-privacy-heading">Privacy</h2>
          <p className="mx-legal" style={{ margin: 0 }}>
            Inference runs on this Mac after models are installed. Model download can use
            Hugging Face. Read the full{' '}
            <Link to="/miravoxis/privacy">MiraVoxis Privacy Policy</Link>.
            Overview:{' '}
            <Link to="/miravoxis">MiraVoxis</Link>.
          </p>
        </section>

        <section aria-labelledby="mx-dev-heading" style={{ marginTop: 'clamp(32px, 5vw, 48px)' }}>
          <h2 className="mx-section-title" id="mx-dev-heading">Developer</h2>
          <div className="mx-legal">
            <p>
              MiraVoxis is developed and distributed by <strong>Anatolie Furtuna</strong> as a
              sole proprietor.
            </p>
            <p>
              Business address: Alexandru cel Bun 36, ap 47, 3100 Balti, Moldova.<br />
              Governing jurisdiction: Republic of Moldova.
            </p>
            <p>
              Support contact:{' '}
              <a href={MIRAVOXIS_SUPPORT_MAILTO}>{MIRAVOXIS_SUPPORT_EMAIL}</a>
            </p>
          </div>
        </section>
      </main>
    </MiraVoxisShell>
  );
}

import { APP_IDENTITY_ASSETS } from '../../config/appIdentityAssets';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MiraScribeShell from '../../components/mirascribe/MiraScribeShell';
import { setDocumentMeta } from '../../lib/documentMeta';

const SUPPORT_EMAIL = 'support.mirascribe@miravelys.com';

export default function MiraScribePrivacyPage() {
  useEffect(() => {
    document.documentElement.lang = 'en';
    setDocumentMeta({
      favicon: APP_IDENTITY_ASSETS.mirascribe.faviconIco,
      title: 'Privacy Policy — MiraScribe',
      description: 'MiraScribe privacy policy for local transcription on Mac and iPhone. Audio and transcripts are not uploaded to a developer-operated transcription service.',
      ogTitle: 'MiraScribe Privacy Policy',
      ogDescription: 'MiraScribe processes transcription locally on supported Apple devices.',
      alternateLanguages: [],
    });
  }, []);

  return (
    <MiraScribeShell skipTo="#ms-privacy-main">
      <main id="ms-privacy-main" className="ms-page ms-page--narrow" aria-label="MiraScribe privacy policy">
        <article className="ms-legal">
          <header style={{ marginBottom: '40px' }}>
            <span className="ms-eyebrow">Privacy Policy</span>
            <h1>MiraScribe Privacy Policy</h1>
            <p className="ms-legal__meta">Effective date: 19 September 2026</p>
            <p>
              This Privacy Policy applies to MiraScribe for supported Mac and iPhone devices.
              MiraScribe is a speech-to-text application in the <Link to="/products">Miravelys family</Link>.
            </p>
            <p>
              MiraScribe is developed and distributed by Anatolie Furtuna as a sole proprietor at
              Alexandru cel Bun 36, ap 47, 3100 Balti, Moldova.
            </p>
          </header>

          <h2>1. Local processing</h2>
          <p>
            MiraScribe is designed to process transcription locally on your device. Audio and video
            selected for transcription are not uploaded to a developer-operated transcription server.
            The app does not require an account to transcribe, review, save, or export text.
          </p>

          <h2>2. Audio and video you provide</h2>
          <p>
            Files are accessed only after you choose them through system file-selection controls.
            On iPhone, you may also select a video through Apple's system Photos picker. If a selected
            Photos item exists only in iCloud, Apple's Photos service may download that item before
            handing MiraScribe a local file. That system transfer is governed by Apple's services;
            MiraScribe still performs transcription locally after receiving the file.
          </p>
          <p>
            MiraScribe may create temporary local working copies or prepared audio needed to process
            supported media. These files remain on the device and are removed when they are no longer
            needed unless a saved transcript intentionally retains a local source reference.
          </p>

          <h2>3. Microphone</h2>
          <p>
            MiraScribe requests microphone access only when you choose a recording or live-capture
            feature that needs it. Microphone audio is processed locally. You can revoke microphone
            permission in your device's privacy settings.
          </p>
          <p>
            On Mac, optional Accessibility permission may be used for automatic paste in compatible
            dictation workflows. This permission is not required for iPhone transcription.
          </p>

          <h2>4. Transcripts, Library, and settings</h2>
          <p>
            Transcripts, timestamps, edits, Library records, and app preferences are stored locally
            in the app's container on your device. MiraScribe does not provide a developer-operated
            transcript sync service and does not upload your Library to the developer.
          </p>
          <p>
            You can delete saved transcripts from the Library and remove exported files from the
            destination you selected. Because this content is stored locally, the developer cannot
            remotely retrieve or delete your transcript Library on your behalf.
          </p>

          <h2>5. Local transcription components</h2>
          <p>
            The transcription components needed by the shipping app are included with the app and
            operate locally. MiraScribe does not require a separate transcription-resource download
            after installation. The operating system may create local compilation or cache files to
            optimize on-device processing.
          </p>

          <h2>6. Network communication</h2>
          <p>
            MiraScribe does not use a developer-operated network service for transcription, analytics,
            advertising, or account sync. Network activity can occur when you intentionally open a
            website or support link, when Apple's App Store or operating-system services operate, or
            when Apple's Photos service retrieves a user-selected iCloud asset.
          </p>

          <h2>7. Analytics, advertising, and tracking</h2>
          <p>
            The shipping app does not include developer-operated analytics, advertising, or tracking
            SDKs. MiraScribe does not track you across apps or websites.
          </p>

          <h2>8. Exports and sharing</h2>
          <p>
            When you export or share a transcript, you choose the destination. Any third-party app or
            service you select is governed by its own privacy practices. MiraScribe does not silently
            transmit your exported content to the developer.
          </p>

          <h2>9. Data sale and third-party access</h2>
          <p>
            MiraScribe does not sell personal data from the app. The developer does not receive your
            recordings or transcript Library through the normal app workflow.
          </p>

          <h2>10. Support correspondence</h2>
          <p>
            If you email support, we receive the information you choose to send, such as your email
            address and message. It is used to respond to your request and is not app telemetry.
          </p>

          <h2>11. Website</h2>
          <p>
            Miravelys.com is hosted using third-party web infrastructure. Standard server access logs,
            such as IP address, browser information, and requested path, may be processed by the hosting
            provider as part of normal website delivery. The MiraScribe app does not use those website
            logs as in-app analytics.
          </p>

          <h2>12. Changes to this policy</h2>
          <p>
            If MiraScribe's data practices materially change, this policy and the App Store privacy
            disclosures will be updated before the changed behavior is distributed.
          </p>

          <h2>13. Contact</h2>
          <p>
            Questions about this Privacy Policy:{' '}
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid var(--ms-border)', margin: '2em 0' }} />
          <p style={{ fontSize: '0.8125rem', color: 'var(--ms-text-muted)', margin: 0 }}>
            <Link to="/mirascribe/support">Support</Link>
            {' · '}
            <Link to="/mirascribe/legal">Legal</Link>
            {' · '}
            <Link to="/mirascribe/acknowledgements">Acknowledgements</Link>
            {' · '}
            <Link to="/mirascribe">MiraScribe overview</Link>
          </p>
        </article>
      </main>
    </MiraScribeShell>
  );
}

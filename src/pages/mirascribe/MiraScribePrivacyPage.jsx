import { APP_IDENTITY_ASSETS } from '../../config/appIdentityAssets';
/**
 * MiraScribePrivacyPage — /mirascribe/privacy
 * App Store Connect Privacy Policy URL.
 *
 * This policy is derived exclusively from the verified shipping-build audit:
 *   AppStoreSubmission/APP_PRIVACY_ANSWERS.md     (21 Aug 2026)
 *   AppStoreSubmission/PRODUCT_TRUTH_AUDIT.md     (21 Aug 2026)
 *   AppStoreSubmission/Legal/privacy-policy.md
 *   MIRASCRIBE_TRANSCRIPTION_ENGINE_AUDIT.md      (19 Aug 2026)
 *
 * DO NOT copy this page for Miravelys. Different product, different data flows.
 * DO NOT strengthen claims beyond what code supports.
 * Effective date: 21 August 2026
 */
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
      description: 'MiraScribe privacy policy. Transcription runs locally on your Mac. Audio and transcripts are not uploaded to a remote service.',
      ogTitle: 'MiraScribe Privacy Policy',
      ogDescription: 'Transcription runs locally on your Mac. Your recordings are not sent to a remote service.',
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
            <p className="ms-legal__meta">Effective date: 21 August 2026</p>
            <p>
              This Privacy Policy applies specifically to MiraScribe, a Mac application for
              speech-to-text transcription and live dictation. MiraScribe is a product in the{' '}
              <Link to="/products">Miravelys family</Link>.
            </p>
            <p>
              It does not cover the Miravelys mindfulness application, the Miravelys.com website
              (which has its own <Link to="/privacy">privacy policy</Link>), or any other product.
            </p>
            <p>
              MiraScribe is developed and distributed by Anatolie Furtuna as a sole proprietor at
              Alexandru cel Bun 36, ap 47, 3100 Balti, Moldova.
            </p>
          </header>

          {/* ── 1. Scope ── */}
          <h2>1. Scope</h2>
          <p>
            This policy covers how MiraScribe handles information during the use of the application
            on your Mac. It covers audio and video files you bring to MiraScribe, microphone
            recordings from live dictation, transcript data stored in the app, and settings stored
            locally. It also describes what information, if any, leaves your Mac.
          </p>

          {/* ── 2. Audio and video files ── */}
          <h2>2. Audio and video files you provide</h2>
          <p>
            When you import an audio or video file for transcription, MiraScribe reads the file
            from the location you chose using macOS file-access controls. The file remains in its
            original location. MiraScribe does not copy the file to a remote server.
          </p>
          <p>
            For formats that require conversion before transcription (for example, certain video
            containers), MiraScribe creates a temporary audio file on your Mac, uses it for
            transcription, and then removes it. Temporary files older than 24 hours are swept on
            the next session.
          </p>
          <p>
            MiraScribe does not upload audio or video content to a remote transcription service.
            Transcription is performed on your Mac using a bundled speech model.
          </p>

          {/* ── 3. Microphone ── */}
          <h2>3. Microphone and live dictation</h2>
          <p>
            MiraScribe requests access to the microphone only when you start live dictation.
            Microphone access is not used at any other time. A temporary recording is made while
            you dictate; it is processed locally and removed after the text is produced.
          </p>
          <p>
            If you grant Accessibility access, MiraScribe can paste completed dictation text
            directly into the frontmost app. Without this permission, the completed text is
            copied to the clipboard instead. Accessibility access is optional.
          </p>
          <p>
            You can withdraw microphone or Accessibility permissions at any time in
            System Settings → Privacy &amp; Security.
          </p>

          {/* ── 4. Transcripts ── */}
          <h2>4. Transcripts and library data</h2>
          <p>
            Transcripts, timestamps, edits, and library records are stored locally on your Mac
            inside the app's sandbox container (Application Support). This data does not sync
            to a developer server. MiraScribe does not have access to your transcripts through
            iCloud, CloudKit, or any other sync mechanism in the audited shipping build.
          </p>
          <p>
            To delete transcripts, remove them from the MiraScribe library. To remove all app
            data, delete MiraScribe from your Mac; macOS will offer to remove the associated
            container data.
          </p>
          <p>
            Because transcripts are stored only on your Mac, the developer cannot remotely
            retrieve or delete them on your behalf.
          </p>

          {/* ── 5. Speech model ── */}
          <h2>5. Speech model</h2>
          <p>
            MiraScribe ships with a bundled speech model (a Whisper-based Core ML model,
            approximately 600 MB). The model is included in the App Store download. MiraScribe
            does not download models after installation. When you transcribe a recording,
            macOS may create local Core ML compilation cache files — these remain on your Mac.
          </p>
          <p>
            The model provider (OpenAI / Argmax OSS) does not receive information about your
            recordings. Inference runs locally.
          </p>

          {/* ── 6. Settings ── */}
          <h2>6. Settings and preferences</h2>
          <p>
            Language selection, quality mode, and other preferences are stored locally using
            macOS UserDefaults. This data is not shared with the developer.
          </p>

          {/* ── 7. Network ── */}
          <h2>7. Network communication</h2>
          <p>
            In the audited shipping build, MiraScribe does not make outbound network connections
            for transcription, analytics, crash reporting, or advertising. The only network
            activity associated with MiraScribe is standard Apple App Store and operating-system
            services (such as App Store receipt validation and software updates), which are
            governed by Apple's own privacy policies.
          </p>

          {/* ── 8. Analytics and tracking ── */}
          <h2>8. Analytics, crash reporting, and tracking</h2>
          <p>
            The audited shipping build does not include analytics SDKs, crash-reporting SDKs,
            or advertising SDKs that report usage data to the developer. MiraScribe does not
            track you across other applications or websites.
          </p>

          {/* ── 9. Exports and sharing ── */}
          <h2>9. Exports and sharing</h2>
          <p>
            When you export a transcript, you choose the destination. Any third-party app or
            service you share a transcript with is governed by its own privacy practices.
            MiraScribe does not transmit export data on your behalf.
          </p>

          {/* ── 10. Data sale ── */}
          <h2>10. Data sale and third-party access</h2>
          <p>
            MiraScribe does not sell your personal data. Because transcription, library data,
            and settings are all local, the developer does not hold personal data to sell or
            share with third parties.
          </p>

          {/* ── 11. Website ── */}
          <h2>11. Miravelys.com website</h2>
          <p>
            If you visit miravelys.com or this page, the website is hosted on Vercel's
            infrastructure. Vercel may process standard server-side access log data (IP address,
            browser type, requested path, and similar information) as part of normal hosting
            operations. This is governed by{' '}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
              Vercel's privacy policy
            </a>. The website does not use advertising pixels, tracking cookies, or analytics SDKs.
          </p>

          {/* ── 12. Children ── */}
          <h2>12. Children</h2>
          <p>
            MiraScribe is a professional productivity application. It is not directed toward
            children under 13. If you are under 13, please do not use MiraScribe.
          </p>

          {/* ── 13. Support correspondence ── */}
          <h2>13. Support correspondence</h2>
          <p>
            If you contact us for support, we receive only the information you choose to include
            in your message (such as your email address and a description of the issue). This
            information is used solely to respond to your request. We retain support emails for
            a reasonable period and do not share them with third parties except as required by law.
          </p>

          {/* ── 14. Changes ── */}
          <h2>14. Changes to this policy</h2>
          <p>
            If MiraScribe's data practices change in a material way, we will update this policy
            and revise the effective date. We encourage you to review this page periodically.
          </p>

          {/* ── 15. Contact ── */}
          <h2>15. Contact</h2>
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

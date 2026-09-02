/**
 * MiraVoxisPrivacyPage — /miravoxis/privacy
 *
 * Derived from current MiraVoxis source (August 2026): PrivacyInfo.xcprivacy,
 * entitlements, Info.plist, AppIdentity, TranscriptionViewModel / WhisperKit,
 * SpeechEngineRouter / VoxCPM2 / PythonTTSBridge, VoiceLibraryStore,
 * LibraryStore (Core Spotlight), mira_tts_worker.py Hugging Face downloads.
 *
 * Effective / last updated: 27 August 2026
 */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MiraVoxisShell from '../../components/miravoxis/MiraVoxisShell';
import { MIRAVOXIS_SUPPORT_EMAIL, MIRAVOXIS_SUPPORT_MAILTO } from '../../config/siteLinks';
import { setDocumentMeta } from '../../lib/documentMeta';

const EFFECTIVE = '27 August 2026';

export default function MiraVoxisPrivacyPage() {
  useEffect(() => {
    document.documentElement.lang = 'en';
    setDocumentMeta({
      title: 'MiraVoxis Privacy',
      description:
        'MiraVoxis privacy policy. Transcription and voice generation run on your Mac after models are installed. Model download may contact Hugging Face.',
      ogTitle: 'MiraVoxis Privacy',
      ogDescription:
        'Local inference on your Mac after models are installed. Hugging Face may be used to obtain model files, not to process your speech.',
      ogImageAlt: 'MiraVoxis — local transcription and voice generation for Mac',
      alternateLanguages: [],
    });
  }, []);

  return (
    <MiraVoxisShell skipTo="#mx-privacy-main">
      <main id="mx-privacy-main" className="mx-page mx-page--narrow" aria-label="MiraVoxis privacy policy">
        <article className="mx-legal">

          <header style={{ marginBottom: '36px' }}>
            <span className="mx-eyebrow">Privacy Policy</span>
            <h1>MiraVoxis Privacy Policy</h1>
            <p className="mx-legal__meta">
              Effective date: {EFFECTIVE}
              <br />
              Last updated: {EFFECTIVE}
            </p>
            <p>
              This Privacy Policy applies specifically to <strong>MiraVoxis</strong>, a macOS
              application for speech-to-text transcription, live dictation, and local voice
              generation. MiraVoxis is a product in the{' '}
              <Link to="/products">Miravelys family</Link>.
            </p>
            <p>
              It does not cover the Miravelys mindfulness application,{' '}
              <Link to="/mirascribe">MiraScribe</Link>, or the Miravelys.com website (which
              has its own <Link to="/privacy">privacy policy</Link>).
            </p>
            <p>
              MiraVoxis is developed and distributed by Anatolie Furtuna as a sole proprietor
              at Alexandru cel Bun 36, ap 47, 3100 Balti, Moldova.
            </p>
            <p>
              MiraVoxis Privacy / Support Contact:{' '}
              <a href={MIRAVOXIS_SUPPORT_MAILTO}>{MIRAVOXIS_SUPPORT_EMAIL}</a>
            </p>
          </header>

          <h2>1. Scope</h2>
          <p>
            This policy describes how MiraVoxis handles information on your Mac: text you type
            or paste, documents and media you open, microphone recordings, generated speech,
            transcripts, voice-cloning references, model files, settings, caches, and any
            network activity the application initiates.
          </p>
          <p>
            Statements below reflect the current application implementation (including
            PrivacyInfo.xcprivacy, sandbox entitlements, and the transcription and Voice Studio
            runtimes). They are not generic marketing claims.
          </p>

          <h2>2. The short version</h2>
          <p>
            <strong>Inference is local.</strong> When you transcribe audio or generate speech
            with an installed model, MiraVoxis runs that work on this Mac. The current
            application source does not send your audio, scripts, or transcripts to a remote
            speech-to-text or text-to-speech API.
          </p>
          <p>
            <strong>Model download can use the internet.</strong> Voice generation depends on
            VoxCPM2 files in Application Support. Those files are not embedded in the app
            bundle. If they are missing, Prepare Voice can download them from Hugging Face.
            Some builds may also obtain Whisper or SpeakerKit models from Hugging Face when
            they are not already present. Hugging Face is a model repository in this product;
            it does not perform your transcription or speech generation.
          </p>
          <p>
            Do not read this policy as “MiraVoxis never communicates with the internet” or
            “your content never leaves your device in every possible configuration.” Model
            installation is a network path. Inference after installation is the local path.
          </p>

          <h2>3. What is not collected by MiraVoxis as a service</h2>
          <p>
            MiraVoxis does not operate a developer cloud account for your projects. There is
            no MiraVoxis sign-in, no CloudKit sync of transcripts or voice projects, and no
            Keychain-stored Hugging Face or provider API keys in the current source.
          </p>
          <p>
            The application’s privacy manifest declares that MiraVoxis does not engage in
            tracking and does not collect the data types Apple lists for privacy nutrition
            labels. The current source does not include analytics, advertising, or
            third-party crash-reporting SDKs (for example Sentry or Firebase).
          </p>

          <h2>4. Local processing versus network activity</h2>
          <h3>Local mode (installed models)</h3>
          <p>
            After the relevant model files exist on this Mac, transcription (WhisperKit /
            Core ML), optional speaker labels (SpeakerKit), live dictation, Voice Studio
            generation (local VoxCPM2 worker), and custom-actor cloning from a local
            reference run on-device. Typed text, pasted text, imported media, microphone
            captures used for those features, generated audio, and transcripts are not
            uploaded to a remote inference service for that work.
          </p>
          <h3>Model download and repair</h3>
          <p>
            When MiraVoxis needs to obtain or probe a missing engine, it may contact
            Hugging Face (<code>huggingface.co</code>) to download model weights and to
            read repository metadata (file lists and sizes). Repositories used for this
            purpose include <code>argmaxinc/whisperkit-coreml</code>,{' '}
            <code>argmaxinc/speakerkit-coreml</code>,{' '}
            <code>mlx-community/VoxCPM2-4bit</code>, and — if you explicitly install the
            optional Chatterbox engine — <code>ResembleAI/chatterbox</code>.
          </p>
          <p>
            Those requests send ordinary network metadata to Hugging Face (such as IP
            address, the repository being fetched, and standard HTTP headers). They are
            not a channel for uploading your recordings or manuscripts for generation.
            Hugging Face’s own practices are described in its privacy policy. MiraVoxis
            does not currently set a Hugging Face API token in-app; if your Mac environment
            already defines <code>HF_TOKEN</code>, the download helper could inherit it.
          </p>
          <h3>Apple and operating-system services</h3>
          <p>
            macOS and, if you obtain MiraVoxis through Apple, the App Store may perform
            their own network activity (updates, receipt validation, Spotlight indexing
            on-device). Those services are governed by Apple’s policies.
          </p>

          <h2>5. Text you type, paste, or import</h2>
          <p>
            Scripts in Voice Studio, pronunciation overrides, and other text you enter are
            stored locally with the voice project or in UserDefaults / Application Support
            as applicable. They are sent to a local speech worker on this Mac for generation,
            not to a hosted writing or TTS API.
          </p>
          <p>
            If you drop a text file into Voice Studio, MiraVoxis reads the file you chose
            using macOS file-access controls.
          </p>

          <h2>6. Imported audio and video</h2>
          <p>
            When you open audio or video for transcription, MiraVoxis reads the file from
            the location you selected. Supported containers include WAV, CAF, AIFF, M4A,
            AAC, MP3, FLAC, MP4, MOV, and M4V. For video, the app extracts an audio track
            locally. Temporary conversion files are written on this Mac and used for
            transcription; they are not uploaded to a remote media service.
          </p>
          <p>
            The original media file stays where you left it unless you explicitly export or
            save something else.
          </p>

          <h2>7. Microphone recordings</h2>
          <p>
            MiraVoxis requests the microphone for live dictation, optional in-workspace
            recording in Transcribe, and optional reference recordings for custom actor
            voices. File transcription does not require the microphone.
          </p>
          <p>
            Dictation writes a temporary WAV in the system temporary directory, transcribes
            it locally with the Fast Whisper runtime, then provides text via the clipboard
            or, if you grant Accessibility access, by pasting into the frontmost app.
            Accessibility is optional.
          </p>
          <p>
            You can withdraw Microphone or Accessibility access in System Settings →
            Privacy &amp; Security.
          </p>

          <h2>8. Generated speech, transcripts, and projects</h2>
          <p>
            Generated previews and masters are stored under Application Support
            (<code>MiraVoxis/VoicePreviews</code> and{' '}
            <code>MiraVoxis/VoiceProjects</code>). Transcript library records live in a
            local Core Data store (<code>LibraryStore.sqlite</code>). Voice project JSON
            and segment audio stay on this Mac. There is no developer-operated sync of
            this library.
          </p>
          <p>
            MiraVoxis also indexes transcript title and full text into <strong>on-device
            Core Spotlight</strong> so you can search your library on this Mac. That index
            is not a network analytics product. Deleting a transcript removes its Spotlight
            item.
          </p>

          <h2>9. Voice samples and cloning</h2>
          <p>
            Custom actors are stored in <code>MiraVoxis/VoiceLibrary</code>. Reference audio
            is copied to <code>VoiceLibrary/References</code>. Consent is required before
            an actor is saved. Cloning uses that local reference with the local engine.
            MiraVoxis does not upload clone samples to a hosted voice marketplace.
          </p>
          <p>
            Exported <code>.miravoice</code> packs are metadata JSON. They do not embed the
            reference recording.
          </p>

          <h2>10. Model files, cache, logs, and settings</h2>
          <p>
            Neural payloads and Hugging Face caches may live in Application Support
            (<code>Models/VoxCPM2</code>, <code>Models/hf-cache</code>, and related folders)
            and, for some Whisper/SpeakerKit caches, under a Documents-level Hugging Face
            directory created by the model toolkit. macOS may also keep Core ML compilation
            caches.
          </p>
          <p>
            Preferences (quality, engine selection, language, diarization, favorites, and
            similar) use local UserDefaults under <code>MiraVoxis.*</code> keys. Historical
            TranscribeMac / Mirascribe keys may be copied on first launch for migration.
          </p>
          <p>
            A local TTS worker log may record timing, character counts, and similar
            diagnostics — not the full manuscript. A more detailed generation trace file
            exists only in debug builds.
          </p>
          <p>
            MiraVoxis may check available disk space and file timestamps as declared in
            PrivacyInfo.xcprivacy (required reasons for those system APIs).
          </p>

          <h2>11. Third-party services actually used</h2>
          <p>
            The following are relevant to the current implementation. Unused brand names
            (for example OpenAI Chat, Anthropic, ElevenLabs, Deepgram, Sentry, Firebase)
            are <strong>not</strong> integrated as application services in this source.
          </p>
          <ul>
            <li>
              <strong>Hugging Face</strong> — optional/required for obtaining model weights
              and Hub metadata when files are missing. User audio and scripts are not sent
              there for inference. Use is triggered by install/prepare/download paths, not
              by every generation once the model is local.
            </li>
            <li>
              <strong>OpenAI Whisper (model family) / Argmax WhisperKit and SpeakerKit</strong>
              {' '}— local Core ML runtimes and model weights. Inference is on-device.
              Upstream model cards and licenses apply to the weights themselves; those
              providers do not receive your recordings through MiraVoxis inference.
            </li>
            <li>
              <strong>VoxCPM2 (mlx-community)</strong> — local voice engine after install.
              Optional <strong>Chatterbox (ResembleAI)</strong> is the same pattern if you
              choose that engine.
            </li>
            <li>
              <strong>Apple</strong> — sandbox, microphone permission, Accessibility paste,
              Core Spotlight, and App Store or OS update channels as applicable.
            </li>
          </ul>
          <p>
            This website is hosted on Vercel. Visiting these pages may produce ordinary
            server logs (IP address, path, user agent) under{' '}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
              Vercel’s privacy policy
            </a>
            . The site does not add advertising pixels or analytics SDKs for MiraVoxis pages.
          </p>

          <h2>12. Data retention and deletion</h2>
          <p>
            MiraVoxis can delete individual transcripts, voice projects, and Voice Library
            actors from inside the app (including the actor’s reference file). There is
            currently no single in-app “erase all data” control, and the Models workspace
            does not expose a full uninstall of Whisper or VoxCPM2.
          </p>
          <p>
            To remove remaining models, caches, generated audio, and the library database,
            delete the corresponding files in Finder under Application Support
            (<code>MiraVoxis</code>, and any leftover <code>Mirascribe</code> or
            <code>TranscribeMac</code> folders from older names) and, if present, Hugging
            Face cache folders created for model downloads. Uninstalling the app and
            choosing to remove its data in macOS also deletes the sandbox container.
          </p>
          <p>
            Because this data lives on your Mac, the developer cannot remotely retrieve or
            wipe your transcripts, voices, or models.
          </p>
          <p>
            Exports you save to Downloads or another folder you choose remain until you
            delete them. Sharing those files with another app is governed by that app’s
            practices.
          </p>

          <h2>13. Children</h2>
          <p>
            MiraVoxis is a professional productivity application. It is not directed toward
            children under 13. If you are under 13, please do not use MiraVoxis.
          </p>

          <h2>14. Support correspondence</h2>
          <p>
            If you email{' '}
            <a href={MIRAVOXIS_SUPPORT_MAILTO}>{MIRAVOXIS_SUPPORT_EMAIL}</a>
            , we receive the address and content you send. We use that information to
            respond. Please avoid sending sensitive audio or transcripts unless we ask for
            a sanitized example. We retain support mail for a reasonable period and do not
            sell it.
          </p>

          <h2>15. Changes</h2>
          <p>
            If MiraVoxis data practices change in a material way, this policy will be
            updated and the “Last updated” date revised. Review this page when you install
            a new version that changes models, networking, or storage.
          </p>

          <h2>16. Contact</h2>
          <p>
            MiraVoxis Privacy / Support Contact:{' '}
            <a href={MIRAVOXIS_SUPPORT_MAILTO}>{MIRAVOXIS_SUPPORT_EMAIL}</a>
          </p>
          <p>
            Overview:{' '}
            <Link to="/miravoxis">MiraVoxis</Link>
            {' · '}
            Support:{' '}
            <Link to="/miravoxis/support">MiraVoxis Support</Link>
          </p>

          <p className="mx-crosslinks">
            <Link to="/miravoxis">MiraVoxis</Link>
            {' · '}
            <Link to="/miravoxis/support">Support</Link>
            {' · '}
            <Link to="/products">Miravelys products</Link>
            {' · '}
            <Link to="/privacy">Miravelys.com privacy</Link>
          </p>
        </article>
      </main>
    </MiraVoxisShell>
  );
}

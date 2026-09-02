/**
 * MiraVoxis product marketing — /miravoxis
 *
 * Copy and counts come from productCapabilities.js (shipping-app truth).
 * Speech generation is English + Russian only. Do not advertise a Mac App Store listing.
 * Semantic analysis is review-only; it does not secretly act the line.
 */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MiraVoxisShell from '../../components/miravoxis/MiraVoxisShell';
import EcosystemBridge from '../../components/mira-family/EcosystemBridge';
import LanguageExplorer from '../../components/mira-family/LanguageExplorer';
import ProcessRail from '../../components/mira-family/ProcessRail';
import ProductJsonLd from '../../components/mira-family/ProductJsonLd';
import { APP_IDENTITY_ASSETS } from '../../config/appIdentityAssets';
import {
  productCapabilities,
  productPageMeta,
} from '../../config/productCapabilities';
import { MIRAVOXIS_SUPPORT_EMAIL, MIRAVOXIS_SUPPORT_MAILTO } from '../../config/siteLinks';
import { setDocumentMeta } from '../../lib/documentMeta';

const voxis = productCapabilities.miravoxis;
const meta = productPageMeta.miravoxis;
const icon = APP_IDENTITY_ASSETS.miravoxis.icon192;
const generationNames = voxis.speechGenerationLanguages.map(language => language.name).join(' and ');

const PIPE = [
  { kicker: '01', title: 'Text' },
  { kicker: '02', title: 'Meaning' },
  { kicker: '03', title: 'Performance' },
  { kicker: '04', title: 'Pronunciation' },
  { kicker: '05', title: 'Pacing' },
  { kicker: '06', title: 'Voice' },
  { kicker: '07', title: 'Speech' },
];

const STEPS = [
  {
    title: 'Write or paste',
    body: 'A script, a narration, or dialogue with named speakers.',
  },
  {
    title: 'Read the sentence',
    body: 'MiraVoxis analyzes intent and temperament so you can see what the line is doing.',
  },
  {
    title: 'Direct the performance',
    body: 'Set Expression, Pace, and Delivery. Voice Sample is identity; Preview Performance is those settings on the current text.',
  },
  {
    title: 'Lock pronunciation',
    body: 'Review automatic pronunciation, then keep the spoken form you want.',
  },
  {
    title: 'Generate on this Mac',
    body: 'After the voice engine is installed, inference stays local. Export WAV or AAC, with SRT or VTT if you need captions.',
  },
];

export default function MiraVoxisPage() {
  useEffect(() => {
    document.documentElement.lang = 'en';
    setDocumentMeta({
      favicon: APP_IDENTITY_ASSETS.miravoxis.faviconIco,
      title: meta.title,
      description: meta.description,
      ogTitle: meta.title,
      ogDescription: meta.ogDescription,
      ogImageAlt: 'MiraVoxis — local transcription and voice generation for Mac',
      alternateLanguages: [],
      favicon: APP_IDENTITY_ASSETS.miravoxis.faviconIco,
    });
  }, []);

  return (
    <MiraVoxisShell skipTo="#mx-overview-main">
      <ProductJsonLd productId="miravoxis" />
      <main id="mx-overview-main" className="mx-page mx-page--wide mira-mkt" aria-label="MiraVoxis overview">

        <section className="mira-mkt__hero" aria-label="Product introduction">
          <p className="mira-mkt__eyebrow">A Miravelys product</p>
          <img
            src={icon}
            width={72}
            height={72}
            alt="MiraVoxis app icon"
            style={{ width: 72, height: 72, borderRadius: 18, marginBottom: 28, display: 'block' }}
          />
          <h1 className="mira-mkt__hero-title">
            Give written words a voice you can direct.
          </h1>
          <p className="mira-mkt__lead">
            MiraVoxis is a local voice studio. It reads the sentence before it
            generates speech — then it speaks from the words you wrote and the
            performance you set.
          </p>
          <p className="mira-mkt__lead">
            Generate speech in {generationNames}.
          </p>

          <div className="mira-mkt__hero-actions">
            <Link to="/miravoxis/support" className="mx-btn mx-btn--primary">
              Support
            </Link>
            <Link to="/miravoxis/privacy" className="mx-btn mx-btn--secondary">
              Privacy
            </Link>
          </div>

          <div className="mira-mkt__hero-stat">
            <p className="mira-mkt__stat-number">{voxis.speechGenerationLanguageCount}</p>
            <div>
              <p className="mira-mkt__stat-label">Speech-generation languages</p>
              <p className="mira-mkt__stat-note">
                Production voice generation is {generationNames} — the languages
                the primary engine, VoxCPM2, currently offers in the product.
                This is not the transcription count, and it is not a localization count.
              </p>
            </div>
          </div>

          <figure className="mira-mkt__stage">
            <div className="mira-mkt__marks" aria-hidden="true">
              <p>
                <strong>Written</strong>
                The house was quiet, and then it wasn’t.
              </p>
              <p>
                <strong>Review</strong>
                Narrative turn · pause after the comma · you set pace and expression
              </p>
              <p>
                <strong>Spoken</strong>
                A generated reading on this Mac, from that sentence.
              </p>
            </div>
            <figcaption className="mira-mkt__stage-caption">
              Conceptual sequence of how a line moves through Voice Studio — not a screenshot of the Mac app.
            </figcaption>
          </figure>
        </section>

        <section aria-labelledby="mx-perform-heading">
          <h2 className="mira-mkt__heading mira-mkt__heading--wide" id="mx-perform-heading">
            Reading words is not the same as performing them.
          </h2>
          <p className="mira-mkt__lead">
            Natural speech depends on context, emphasis, pauses, rhythm, pronunciation,
            and who is speaking. MiraVoxis gives you those controls. It also analyzes the
            text so you can review what a line is doing. It does not secretly rewrite the
            acting from a sentiment score — the engine hears the authored text unless you
            direct it.
          </p>
          <ol className="mira-mkt__pipe" aria-label="From text to speech">
            {PIPE.map(step => (
              <li key={step.title}>
                <span>{step.kicker}</span>
                <strong>{step.title}</strong>
              </li>
            ))}
          </ol>
          <ProcessRail steps={STEPS} labelledBy="mx-perform-heading" />
        </section>

        <section id="languages" aria-labelledby="mx-lang-heading">
          <h2 className="mira-mkt__heading" id="mx-lang-heading">Speech generation, named precisely</h2>
          <p className="mira-mkt__lead">
            Speech generation in {voxis.speechGenerationLanguageCount} languages.
            Not “supported languages” in the vague sense — {generationNames}, for voice.
          </p>
          <div className="mira-mkt__lang-pair">
            {voxis.speechGenerationLanguages.map(language => (
              <article className="mira-mkt__lang-card" key={language.code}>
                <strong>{language.name}</strong>
                <span>Production voice generation · {language.code}</span>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="mx-voice-heading">
          <h2 className="mira-mkt__heading" id="mx-voice-heading">What the studio actually gives you</h2>
          <div className="mira-mkt__essays">
            <article className="mira-mkt__essay">
              <h3>Understand the text before speaking it</h3>
              <p>
                MiraVoxis runs a semantic pass over the script — intent, temperament,
                the shape of the line. That analysis is there for review. Performance
                still follows your Expression, Pace, and Delivery, plus the punctuation
                you wrote.
              </p>
            </article>
            <article className="mira-mkt__essay">
              <h3>Preview before committing</h3>
              <p>
                Voice Sample plays identity only. Preview Performance plays Expression,
                Pace, and Delivery on the current script or selection. They are different
                buttons because they answer different questions.
              </p>
            </article>
            <article className="mira-mkt__essay">
              <h3>Pronunciation that you control</h3>
              <p>
                Automatic pronunciation can flag items worth reviewing before a Studio
                generate. You can lock a spoken form in the dictionary so a name stays
                the way you say it.
              </p>
            </article>
            <article className="mira-mkt__essay">
              <h3>Multiple voices, one scene</h3>
              <p>
                Single narrator, or dialogue. Name the speakers in the script; assign
                each one a voice in the cast. Dialogue uses Studio quality so turns can
                keep a distinct performance.
              </p>
            </article>
            <article className="mira-mkt__essay">
              <h3>Regenerate only what changed</h3>
              <p>
                Correct one sentence without recreating the entire performance. MiraVoxis
                can regenerate a segment while keeping the same person and the same voice.
              </p>
            </article>
            <article className="mira-mkt__essay">
              <h3>Your voice, from a local reference</h3>
              <p>
                Record or import a reference clip on this Mac, confirm consent, and save
                an actor. Cloning runs with the installed engine. Reference audio is not
                uploaded to a hosted cloning service. This is not instant, perfect cloning —
                it is a local actor built from audio you provided.
              </p>
            </article>
          </div>

          <div className="mira-mkt__sample" aria-label="Dialogue example">
            <p>
              <span className="mira-mkt__role">NARRATOR:</span> The room waited.
              {'\n'}
              <span className="mira-mkt__role">ALEX:</span> Say it again, slower.
              {'\n'}
              <span className="mira-mkt__role">MAYA:</span> I already did.
              {'\n'}
              <span className="mira-mkt__role">NARRATOR:</span> And then neither of them spoke.
            </p>
          </div>
          <p className="mira-mkt__stage-caption">
            Dialogue in MiraVoxis uses a speaker-name prefix — the pattern the app actually parses.
          </p>

          <dl className="mira-mkt__pair">
            <div>
              <dt>Written</dt>
              <dd>MiraVoxis</dd>
            </div>
            <div>
              <dt>Pronunciation you lock</dt>
              <dd>Mee-ra-VOX-is</dd>
            </div>
          </dl>
        </section>

        <section aria-labelledby="mx-asr-heading">
          <h2 className="mira-mkt__heading mira-mkt__heading--wide" id="mx-asr-heading">
            Transcription is a different number.
          </h2>
          <p className="mira-mkt__lead">
            MiraVoxis can also ingest speech: files, video soundtracks, and live dictation,
            with timestamps, using Whisper on this Mac. That coverage is not speech generation.
          </p>
          <div className="mira-mkt__hero-stat">
            <p className="mira-mkt__stat-number">{voxis.asrLanguageCount}</p>
            <div>
              <p className="mira-mkt__stat-label">Transcription languages in MiraVoxis</p>
              <p className="mira-mkt__stat-note">
                {voxis.asrLanguageCount} production-ready languages for speech-to-text
                inside MiraVoxis. Optional speaker labels can mark Speaker 1 / Speaker 2.
                They do not identify people by name, and they are off by default.
              </p>
            </div>
          </div>
          <LanguageExplorer
            languages={voxis.asrLanguages}
            experimentalLanguages={voxis.asrExperimentalLanguages}
            searchLabel="Search MiraVoxis transcription languages"
            experimentalLabel={`Include ${voxis.asrExperimentalLanguageCount} experimental languages`}
            experimentalNote="These experimental languages are classified inside MiraVoxis. They are not speech-generation languages."
            idPrefix="mx-asr"
          />
        </section>

        <section aria-labelledby="mx-privacy-heading">
          <h2 className="mira-mkt__heading mira-mkt__heading--wide" id="mx-privacy-heading">
            Local inference, with an honest network story.
          </h2>
          <p className="mira-mkt__lead">
            Audio, scripts, and transcripts are processed on this Mac during transcription
            and Voice Studio generation. MiraVoxis does not send that content to OpenAI,
            ElevenLabs, or a cloud speech API. Installing or repairing a voice model may
            contact Hugging Face to fetch model files.
          </p>
          <div className="mira-mkt__matrix">
            <article>
              <span className="mira-mkt__kicker">Local after install</span>
              <h3>Voice generation</h3>
              <p>On-device inference with VoxCPM2 once the engine is on this Mac.</p>
            </article>
            <article>
              <span className="mira-mkt__kicker">May download</span>
              <h3>Model storage</h3>
              <p>Voice weights install into Application Support. Prepare Voice can fetch them from Hugging Face.</p>
            </article>
            <article>
              <span className="mira-mkt__kicker">Often bundled</span>
              <h3>Transcription</h3>
              <p>A complete package can include Whisper on disk so transcription does not need a first-use download.</p>
            </article>
            <article>
              <span className="mira-mkt__kicker">Local</span>
              <h3>Projects and actors</h3>
              <p>Transcripts, voice projects, and reference clips stay in MiraVoxis Application Support.</p>
            </article>
          </div>
          <p className="mira-mkt__lead" style={{ marginTop: '1.5rem' }}>
            <Link to="/miravoxis/privacy">Read the privacy policy</Link>
          </p>
        </section>

        <EcosystemBridge from="voxis" />

        <section aria-labelledby="mx-flow-heading">
          <h2 className="mira-mkt__heading" id="mx-flow-heading">Workflows the current apps can close</h2>
          <div className="mira-mkt__flows">
            <article className="mira-mkt__flow">
              <h3>Interviews</h3>
              <p>
                Recording → MiraScribe → editable transcript → corrected script → MiraVoxis
                narration in {generationNames}.
              </p>
            </article>
            <article className="mira-mkt__flow">
              <h3>Podcasts and video</h3>
              <p>
                Conversation → searchable transcript → edited script → replacement narration
                in Voice Studio. Captions can leave as SRT or VTT with the master audio.
              </p>
            </article>
            <article className="mira-mkt__flow">
              <h3>Authors</h3>
              <p>
                Manuscript → narrator or character voices → Preview Performance → long-form
                generate. Dialogue assigns each named speaker a voice. This path is
                {` ${generationNames}`}.
              </p>
            </article>
            <article className="mira-mkt__flow">
              <h3>Multilingual work, without pretending</h3>
              <p>
                You can transcribe many more languages than you can generate.
                Automatic translation is not a MiraVoxis feature. End-to-end voice → text →
                generated voice is {generationNames}.
              </p>
            </article>
          </div>
        </section>

        <section aria-labelledby="mx-tech-heading">
          <h2 className="mira-mkt__heading" id="mx-tech-heading">Under the hood</h2>
          <p className="mira-mkt__lead">
            Production voice generation uses VoxCPM2. Automatic routing does not select
            Chatterbox. CosyVoice3 is not shipping. Quality tiers in the studio are
            Preview, Natural, and Studio — product names, not a claim of “studio quality”
            as marketing atmosphere.
          </p>
          <details>
            <summary>Engines, installed versus experimental</summary>
            <ul>
              <li>
                <strong>VoxCPM2</strong> — production, primary, {generationNames}.
              </li>
              <li>
                <strong>Chatterbox</strong> — experimental; never chosen by Automatic.
              </li>
              <li>
                <strong>CosyVoice3</strong> — unavailable.
              </li>
              <li>
                <strong>WhisperKit</strong> — transcription, Fast (turbo) and Best (large-v3).
              </li>
            </ul>
            <p>
              Hugging Face is a model repository. It does not run your transcription or
              generate your speech.
            </p>
          </details>
        </section>

        <section className="mira-mkt__cta-band" aria-labelledby="mx-plat-heading">
          <div>
            <h2 className="mira-mkt__heading" id="mx-plat-heading">Apple Silicon. macOS 15.</h2>
            <p>
              {voxis.platform.hardware}. {voxis.platform.os}.
              {' '}{voxis.platform.memoryNote}
              {' '}There is no Mac App Store listing for MiraVoxis yet.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              <a href={MIRAVOXIS_SUPPORT_MAILTO}>{MIRAVOXIS_SUPPORT_EMAIL}</a>
            </p>
          </div>
          <Link to="/miravoxis/support" className="mx-btn mx-btn--primary">
            MiraVoxis Support
          </Link>
        </section>
      </main>
    </MiraVoxisShell>
  );
}

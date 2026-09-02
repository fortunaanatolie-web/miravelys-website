/**
 * MiraVoxis product marketing — /miravoxis
 * Product claims come from productCapabilities.js and remain deliberately precise.
 */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MiraVoxisShell from '../../components/miravoxis/MiraVoxisShell';
import MiraVoxisPerformanceDemo from '../../components/mira-family/MiraVoxisPerformanceDemo';
import LanguageExplorer from '../../components/mira-family/LanguageExplorer';
import ProductJsonLd from '../../components/mira-family/ProductJsonLd';
import { APP_IDENTITY_ASSETS } from '../../config/appIdentityAssets';
import { productCapabilities, productPageMeta } from '../../config/productCapabilities';
import { setDocumentMeta } from '../../lib/documentMeta';

const voxis = productCapabilities.miravoxis;
const meta = productPageMeta.miravoxis;
const generationNames = voxis.speechGenerationLanguages.map(language => language.name).join(' and ');

const STUDIO_STEPS = [
  ['01', 'Text', 'Write or paste a script, narration, or dialogue with named speakers.'],
  ['02', 'Review', 'MiraVoxis analyzes the sentence so you can inspect intent and temperament before generating.'],
  ['03', 'Performance', 'Set Expression, Pace, and Delivery. Preview Performance applies those settings to the current text.'],
  ['04', 'Pronunciation', 'Review pronunciation and lock the spoken form you want for a name or difficult word.'],
  ['05', 'Voice', 'Choose a narrator or cast. Voice Sample previews identity; it is intentionally separate from performance preview.'],
  ['06', 'Speech', 'After the local engine is installed, generate on this Mac and export the result.'],
];


export default function MiraVoxisPage() {
  useEffect(() => {
    document.documentElement.lang = 'en';
    setDocumentMeta({
      title: meta.title,
      description: meta.description,
      ogTitle: meta.title,
      ogDescription: meta.ogDescription,
      ogImageAlt: 'MiraVoxis — local voice studio for Mac',
      alternateLanguages: [],
      favicon: APP_IDENTITY_ASSETS.miravoxis.faviconIco,
    });
  }, []);

  return (
    <MiraVoxisShell skipTo="#mx-overview-main">
      <ProductJsonLd productId="miravoxis" />
      <main id="mx-overview-main" className="mx-page mx-page--wide mira-mkt mx-studio-page" aria-label="MiraVoxis overview">
        <section className="mira-mkt__hero mx-studio-hero" aria-label="Product introduction">
          <div className="mx-studio-hero__copy">
            <p className="mira-mkt__eyebrow">A Miravelys product · local voice studio</p>
            <h1 className="mira-mkt__hero-title">Give written words a voice you can direct.</h1>
            <p className="mira-mkt__lead">MiraVoxis reads the sentence before it generates speech — then it speaks from the words you wrote and the performance you set.</p>
            <p className="mira-mkt__lead">Production speech generation currently supports {generationNames}. After the voice engine is installed, inference runs locally on this Mac.</p>
            <div className="mira-mkt__hero-actions">
              <Link to="/miravoxis/support" className="mx-btn mx-btn--primary">Support</Link>
              <Link to="/miravoxis/privacy" className="mx-btn mx-btn--secondary">Privacy</Link>
            </div>
          </div>

          <figure className="mx-studio-hero__stage" aria-label="The MiraVoxis Voice Studio on macOS">
            <img
              src="/images/miravoxis/miravoxis-voice-inspector.webp"
              width="2040"
              height="790"
              alt="The MiraVoxis Voice Studio on macOS: the Automatic Voice narrator, English running on the VoxCPM2 model with the offline model ready, and the Voice Inspector showing Natural or Studio quality with Expression at 15 percent and Pace at 1.00×."
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </figure>
        </section>

        <MiraVoxisPerformanceDemo />

        <section className="mx-studio-process" aria-labelledby="mx-process-heading">
          <div className="mx-studio-process__intro">
            <p className="mira-mkt__eyebrow">Direction before generation</p>
            <h2 className="mira-mkt__heading" id="mx-process-heading">A voice studio, not a one-button reader.</h2>
            <p className="mira-mkt__lead">Natural speech depends on context, emphasis, pauses, rhythm, pronunciation, and who is speaking. The semantic pass is there for review; it does not secretly rewrite the acting from a sentiment score.</p>
          </div>
          <ol className="mx-studio-process__steps">
            {STUDIO_STEPS.map(([index, title, body]) => (
              <li key={index}><span>{index}</span><div><h3>{title}</h3><p>{body}</p></div></li>
            ))}
          </ol>
        </section>

        <section className="mx-studio-capabilities" aria-labelledby="mx-capabilities-heading">
          <p className="mira-mkt__eyebrow">What the studio actually gives you</p>
          <h2 className="mira-mkt__heading" id="mx-capabilities-heading">Control where control matters.</h2>
          <div className="mira-mkt__essays">
            <article className="mira-mkt__essay">
              <h3>Preview before committing</h3>
              <p>Voice Sample answers “who is this voice?” Preview Performance answers “how do these settings read this script?” They are different controls because they answer different questions.</p>
            </article>
            <article className="mira-mkt__essay">
              <h3>Pronunciation you can lock</h3>
              <p>Automatic pronunciation can flag items worth reviewing before a Studio generate. Keep a spoken form in the dictionary so a name stays the way you say it.</p>
            </article>
            <article className="mira-mkt__essay">
              <h3>Multiple voices, one scene</h3>
              <p>Use a single narrator or dialogue. Name speakers in the script and assign each one a voice in the cast. Dialogue uses Studio quality so turns can keep a distinct performance.</p>
            </article>
            <article className="mira-mkt__essay">
              <h3>Regenerate only what changed</h3>
              <p>Correct one sentence without recreating the entire performance. MiraVoxis can regenerate a segment while keeping the same person and voice.</p>
            </article>
            <article className="mira-mkt__essay">
              <h3>Your voice, from a local reference</h3>
              <p>Record or import a reference clip on this Mac, confirm consent, and save an actor. Cloning runs with the installed engine; the reference is not uploaded to a hosted cloning service.</p>
            </article>
            <article className="mira-mkt__essay">
              <h3>Export the performance</h3>
              <p>Voice projects can leave as WAV or AAC/M4A, with SRT or VTT when captions are needed. Preview, Natural, and Studio remain distinct quality paths.</p>
            </article>
          </div>

          <div className="mx-studio-dialogue" aria-label="Dialogue format example">
            <p><span>NARRATOR:</span> The room waited.</p>
            <p><span>ALEX:</span> Say it again, slower.</p>
            <p><span>MAYA:</span> I already did.</p>
            <p><span>NARRATOR:</span> And then neither of them spoke.</p>
          </div>
          <p className="mira-mkt__stage-caption">Dialogue uses a speaker-name prefix — the pattern the app actually parses.</p>
        </section>

        <section id="languages" className="mx-studio-languages" aria-labelledby="mx-language-heading">
          <div>
            <p className="mira-mkt__eyebrow">Two different language stories</p>
            <h2 className="mira-mkt__heading" id="mx-language-heading">Voice generation and transcription are not the same number.</h2>
            <p className="mira-mkt__lead">MiraVoxis generates production speech in {generationNames}. It can also ingest speech with Whisper in {voxis.asrLanguageCount} production transcription languages. The larger transcription count is not a voice-generation claim.</p>
          </div>
          <div className="mx-studio-generation" aria-label="Production speech-generation languages">
            {voxis.speechGenerationLanguages.map(language => (
              <span key={language.code}><strong>{language.name}</strong><small>{language.code} · production speech generation</small></span>
            ))}
          </div>
          <details className="mx-studio-language-details">
            <summary>
              <span>Browse transcription coverage</span>
              <small>{voxis.asrLanguageCount} production languages · optional experimental coverage</small>
            </summary>
            <div className="mx-studio-language-details__body">
              <LanguageExplorer
                languages={voxis.asrLanguages}
                experimentalLanguages={voxis.asrExperimentalLanguages}
                searchLabel="Search MiraVoxis transcription languages"
                experimentalLabel={`Include ${voxis.asrExperimentalLanguageCount} experimental languages`}
                experimentalNote="These experimental languages are classified inside MiraVoxis. They are not speech-generation languages."
                idPrefix="mx-asr"
              />
            </div>
          </details>
        </section>

        <section className="mx-studio-privacy" aria-labelledby="mx-privacy-heading">
          <p className="mira-mkt__eyebrow">Local inference, honest network story</p>
          <h2 className="mira-mkt__heading" id="mx-privacy-heading">The work stays here after the engines are here.</h2>
          <p className="mira-mkt__lead">Audio, scripts, and transcripts are processed on this Mac during transcription and Voice Studio generation. MiraVoxis does not send that content to OpenAI, ElevenLabs, or a cloud speech API.</p>
          <p className="mira-mkt__lead">Installing or repairing a voice model may contact Hugging Face to fetch model files. That download path is intentionally stated rather than hidden behind a vague “fully offline” claim.</p>
          <div className="mx-studio-privacy__facts">
            <span><strong>Generation</strong>Local with VoxCPM2 after installation.</span>
            <span><strong>Projects</strong>Transcripts, voice projects, and reference clips stay in Application Support on this Mac.</span>
            <span><strong>Models</strong>Prepare Voice can fetch required model weights from Hugging Face.</span>
          </div>
          <p><Link to="/miravoxis/privacy">Read the privacy policy</Link></p>
        </section>

        <section className="mx-studio-bridge" aria-labelledby="mx-bridge-heading">
          <p className="mira-mkt__eyebrow">Within the Miravelys family</p>
          <h2 className="mira-mkt__heading" id="mx-bridge-heading">Speech can become text. Text can become speech.</h2>
          <p className="mira-mkt__lead">MiraScribe turns recordings into searchable text locally on the Mac. MiraVoxis takes written language in the other direction: toward a directed performance.</p>
          <Link to="/mirascribe" className="mx-studio-bridge__link">Meet MiraScribe <span aria-hidden="true">→</span></Link>
        </section>

        <section className="mx-studio-cta" aria-labelledby="mx-cta-heading">
          <p className="mira-mkt__eyebrow">MiraVoxis for Apple silicon</p>
          <h2 className="mira-mkt__heading" id="mx-cta-heading">Write the line. Direct the reading. Keep the work local.</h2>
          <p className="mira-mkt__lead">MiraVoxis currently requires macOS 15 or later. There is no Mac App Store download link advertised here until one is actually available.</p>
          <Link to="/miravoxis/support" className="mx-btn mx-btn--primary">MiraVoxis Support</Link>
        </section>
      </main>
    </MiraVoxisShell>
  );
}

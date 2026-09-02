/**
 * Shared MiraScribe ↔ MiraVoxis loop. Counts come from productCapabilities.
 */
import { Link } from 'react-router-dom';
import { productCapabilities } from '../../config/productCapabilities';

const eco = productCapabilities.ecosystem;
const scribe = productCapabilities.mirascribe;

export default function EcosystemBridge({ from = 'scribe' }) {
  const towardVoxis = from === 'scribe';
  const names = eco.endToEndLanguages.map(language => language.name).join(' and ');

  return (
    <section className="mira-mkt__eco" aria-labelledby="mira-eco-heading">
      <p className="mira-mkt__eyebrow">Mira family</p>
      <h2 className="mira-mkt__heading" id="mira-eco-heading">
        From a human voice to written language.
        <span className="mira-mkt__heading-break"> From written language to a new voice.</span>
      </h2>
      <p className="mira-mkt__lead">
        MiraScribe captures what was said. MiraVoxis decides how words should be spoken.
        Together they close a loop — voice, text, understanding, voice — without sending
        that work through a remote speech API.
      </p>

      <ol className="mira-mkt__loop" aria-label="Voice to text to voice">
        <li>
          <span className="mira-mkt__loop-kicker">Original speech</span>
          <strong>Recording</strong>
          <p>A conversation, interview, lecture, or idea spoken aloud.</p>
        </li>
        <li>
          <span className="mira-mkt__loop-kicker">MiraScribe</span>
          <strong>Transcribe</strong>
          <p>Detect the language, structure the speech, keep the timing.</p>
        </li>
        <li>
          <span className="mira-mkt__loop-kicker">Language</span>
          <strong>Text</strong>
          <p>Something you can read, search, correct, and reuse.</p>
        </li>
        <li>
          <span className="mira-mkt__loop-kicker">MiraVoxis</span>
          <strong>Perform</strong>
          <p>Analyze the sentence, set pronunciation and delivery, generate speech.</p>
        </li>
        <li>
          <span className="mira-mkt__loop-kicker">Generated speech</span>
          <strong>Voice</strong>
          <p>A new reading of the words — on this Mac.</p>
        </li>
      </ol>

      <div className="mira-mkt__eco-stat" role="group" aria-label="End-to-end language coverage">
        <p className="mira-mkt__stat-number" aria-hidden="true">{eco.endToEndLanguageCount}</p>
        <div>
          <p className="mira-mkt__stat-label">
            {eco.endToEndLanguageCount} languages from transcription all the way to generated speech
          </p>
          <p className="mira-mkt__stat-note">
            MiraScribe transcribes speech in {scribe.transcriptionLanguageCount} production languages.
            MiraVoxis currently generates speech in {names}.
            The complete recording-to-generated-voice path is available in {names} —
            not in all {scribe.transcriptionLanguageCount} transcription languages.
          </p>
        </div>
      </div>

      <p className="mira-mkt__cross">
        {towardVoxis ? (
          <>
            Need to turn those words back into a voice?{' '}
            <Link to="/miravoxis">Discover MiraVoxis</Link>
          </>
        ) : (
          <>
            Starting with recorded speech?{' '}
            <Link to="/mirascribe">Discover MiraScribe</Link>
          </>
        )}
      </p>
    </section>
  );
}

import { useMemo, useState } from 'react';

const TOKENS = ['I', "didn't", 'say', 'she', 'stole', 'the', 'money.'];
const LABELS = {
  0: 'I — the speaker is the contrast',
  1: "DIDN'T — denial carries the emphasis",
  2: 'SAY — the spoken act is the contrast',
  3: 'SHE — the person is the contrast',
  4: 'STOLE — the action is the contrast',
  5: 'THE — a deliberately unusual emphasis',
  6: 'MONEY — the object is the contrast',
};

const BASE_WAVE = [24, 42, 32, 58, 38, 68, 46, 76, 40, 62, 30, 54, 72, 38, 64, 44, 78, 34, 58, 48, 70, 36, 60, 28, 52, 74, 42, 64];

export default function MiraVoxisPerformanceDemo() {
  const [focusIndex, setFocusIndex] = useState(1);
  const waveform = useMemo(
    () => BASE_WAVE.map((height, index) => Math.min(94, height + (index % TOKENS.length === focusIndex ? 18 : 0))),
    [focusIndex],
  );

  return (
    <section className="mx-performance" aria-labelledby="mx-performance-title">
      <div className="mx-performance__copy">
        <p className="mira-mkt__eyebrow">Performance emphasis</p>
        <h2 id="mx-performance-title" className="mira-mkt__heading">The same words can carry a different intention.</h2>
        <p className="mira-mkt__lead">
          Select the word you want to carry the contrast. The visual response explains direction only; this website does not generate speech.
        </p>
      </div>

      <div className="mx-performance__studio">
        <div className="mx-performance__sentence" role="group" aria-label="Choose a word to emphasize">
          {TOKENS.map((token, index) => (
            <button
              key={`${token}-${index}`}
              type="button"
              className={focusIndex === index ? 'is-active' : ''}
              aria-pressed={focusIndex === index}
              onClick={() => setFocusIndex(index)}
            >
              {token}
            </button>
          ))}
        </div>

        <div className="mx-performance__meter" aria-hidden="true">
          {waveform.map((height, index) => (
            <span key={`${height}-${index}`} style={{ '--bar-height': `${height}%` }} />
          ))}
        </div>

        <div className="mx-performance__readout" aria-live="polite">
          <span>Direction</span>
          <strong>{LABELS[focusIndex]}</strong>
        </div>
      </div>
    </section>
  );
}

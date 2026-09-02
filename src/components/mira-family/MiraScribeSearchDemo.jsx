import { useMemo, useState } from 'react';

const MOMENTS = [
  {
    query: 'privacy',
    timestamp: '18:42',
    context: 'The important part is that the source recording never has to leave this Mac.',
    before: 'We were deciding how the interview archive should work for the research team.',
    after: 'That makes the transcript searchable without turning the recording into a cloud upload.',
  },
  {
    query: 'deadline',
    timestamp: '32:18',
    context: 'The deadline moved to Friday, but the review still happens on Thursday afternoon.',
    before: 'There was one scheduling change near the end of the meeting.',
    after: 'I marked the exact sentence so nobody has to replay the full call later.',
  },
  {
    query: 'original wording',
    timestamp: '47:06',
    context: 'When wording matters, jump back to the timestamp and listen to the source itself.',
    before: 'A transcript is useful because it lets you find the passage first.',
    after: 'The recording remains the source of truth; the text is the way back to it.',
  },
];

const WAVEFORM = [18, 34, 26, 52, 38, 66, 30, 48, 74, 44, 56, 28, 64, 36, 52, 82, 46, 62, 34, 58, 72, 40, 30, 68, 48, 76, 36, 54, 44, 64, 28, 50];

export default function MiraScribeSearchDemo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sourceActive, setSourceActive] = useState(false);
  const active = MOMENTS[activeIndex];
  const playhead = useMemo(() => 22 + activeIndex * 29, [activeIndex]);

  function selectMoment(index) {
    setActiveIndex(index);
    setSourceActive(false);
  }

  return (
    <section className="ms-search-demo" aria-labelledby="ms-search-demo-title">
      <div className="ms-search-demo__intro">
        <p className="mira-mkt__eyebrow">Audio → words → source</p>
        <h2 id="ms-search-demo-title" className="mira-mkt__heading">Search the sentence. Keep the recording.</h2>
        <p className="mira-mkt__lead">
          This interaction explains the workflow with illustrative text. It does not upload a recording or run transcription in the browser.
        </p>
      </div>

      <div className="ms-search-demo__instrument">
        <div className="ms-search-demo__wave" aria-hidden="true">
          {WAVEFORM.map((height, index) => (
            <span key={`${height}-${index}`} style={{ '--bar-height': `${height}%` }} />
          ))}
          <i style={{ '--playhead': `${playhead}%` }} />
        </div>

        <div className="ms-search-demo__search" role="group" aria-label="Example transcript searches">
          {MOMENTS.map((moment, index) => (
            <button
              key={moment.query}
              type="button"
              className={index === activeIndex ? 'is-active' : ''}
              aria-pressed={index === activeIndex}
              onClick={() => selectMoment(index)}
            >
              {moment.query}
            </button>
          ))}
        </div>

        <div className="ms-search-demo__transcript" aria-live="polite">
          <p>{active.before}</p>
          <p className="is-match"><mark>{active.context}</mark></p>
          <p>{active.after}</p>
        </div>

        <div className="ms-search-demo__source">
          <div>
            <span className="ms-search-demo__time">{active.timestamp}</span>
            <span className="ms-search-demo__source-label">matching moment in the source recording</span>
          </div>
          <button
            type="button"
            className="ms-demo-button"
            aria-pressed={sourceActive}
            onClick={() => setSourceActive(value => !value)}
          >
            {sourceActive ? 'Source moment selected' : 'Jump to source'}
          </button>
        </div>
      </div>
    </section>
  );
}

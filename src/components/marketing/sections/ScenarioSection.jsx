import { Heart } from 'lucide-react';
import RevealOnScroll from '../primitives/RevealOnScroll';
import SectionHeader from '../primitives/SectionHeader';

export default function ScenarioSection({
  experience,
  activeScenario,
  setActiveScenario,
  scenarioPanelRef,
  scenarioCount,
  handleScenarioKeyDown,
}) {
  return (
    <section className="scenario-section content-section">
      <RevealOnScroll className="section-heading section-heading--split">
        <SectionHeader
          eyebrow={experience.scenarios.eyebrow}
          title={experience.scenarios.title}
          icon={<Heart size={16} />}
        />
        <p className="section-intro">{experience.scenarios.intro}</p>
      </RevealOnScroll>
      <RevealOnScroll className="scenario-showcase" delay={80}>
        <div className="scenario-tabs" role="tablist" aria-label="Miravelys everyday scenarios">
          {experience.scenarios.items.map((item, index) => (
            <button
              type="button"
              role="tab"
              id={`scenario-tab-${index}`}
              aria-controls="scenario-panel"
              aria-selected={activeScenario === index}
              tabIndex={activeScenario === index ? 0 : -1}
              className={activeScenario === index ? 'active' : ''}
              key={item.title}
              onClick={() => setActiveScenario(index)}
              onKeyDown={event => handleScenarioKeyDown(event, index)}
            >
              <span>{item.tag}</span>
              <strong>{item.title}</strong>
            </button>
          ))}
        </div>
        <article
          className="scenario-detail"
          id="scenario-panel"
          role="tabpanel"
          aria-labelledby={`scenario-tab-${activeScenario}`}
          tabIndex={-1}
          ref={scenarioPanelRef}
        >
          <span className="scenario-tag">{experience.scenarios.items[activeScenario].tag}</span>
          <h3>{experience.scenarios.items[activeScenario].title}</h3>
          <p>{experience.scenarios.items[activeScenario].body}</p>
        </article>
      </RevealOnScroll>
    </section>
  );
}

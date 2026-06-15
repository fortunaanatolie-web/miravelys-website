import { Mail } from 'lucide-react';
import MarketingCta from '../primitives/MarketingCta';
import RevealOnScroll from '../primitives/RevealOnScroll';

export default function BetaSection({
  experience,
  waitlistEmail,
  setWaitlistEmail,
  waitlistJoined,
  waitlistError,
  setWaitlistError,
  handleWaitlistSubmit,
  onNavClick,
}) {
  return (
    <section id="beta" className="beta-section content-section">
      <RevealOnScroll className="beta-card">
        <div>
          <p className="eyebrow">
            <Mail size={16} aria-hidden="true" />
            {experience.beta.eyebrow}
          </p>
          <h2>{experience.beta.title}</h2>
          <p>{experience.beta.body}</p>
        </div>
        <form className="beta-form" onSubmit={handleWaitlistSubmit}>
          <label>
            <span className="sr-only">{experience.beta.placeholder}</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              required
              value={waitlistEmail}
              onChange={event => {
                setWaitlistEmail(event.target.value);
                if (waitlistError) setWaitlistError('');
              }}
              placeholder={experience.beta.placeholder}
              aria-label={experience.beta.placeholder}
              aria-invalid={waitlistError ? 'true' : undefined}
              disabled={waitlistJoined}
            />
          </label>
          <button type="submit" className="primary-action" disabled={waitlistJoined}>
            {experience.beta.button}
          </button>
          {waitlistError ? (
            <p className="beta-form-error" role="alert">
              {waitlistError}
            </p>
          ) : null}
          {waitlistJoined ? <small className="beta-success">{experience.beta.success}</small> : null}
          <small>{experience.beta.privacy}</small>
        </form>
        <div className="beta-card__secondary">
          <MarketingCta role="appStore" experience={experience} onNavClick={onNavClick} className="keynote-link" />
        </div>
      </RevealOnScroll>
    </section>
  );
}

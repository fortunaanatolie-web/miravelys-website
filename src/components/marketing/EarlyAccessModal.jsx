import { useEffect, useId, useRef } from 'react';
import { X } from 'lucide-react';
import { resolveHeaderCopy } from '../../i18n/headerCopy';

function getFocusableElements(container) {
  if (!container) return [];
  return [...container.querySelectorAll(
    'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )].filter(node => !node.hasAttribute('disabled') && node.getAttribute('aria-hidden') !== 'true');
}

export default function EarlyAccessModal({
  open,
  onClose,
  lang,
  experience,
  waitlistEmail,
  setWaitlistEmail,
  waitlistJoined,
  waitlistError,
  setWaitlistError,
  handleWaitlistSubmit,
  returnFocusRef,
}) {
  const titleId = useId();
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const headerCopy = resolveHeaderCopy(lang);
  const closeLabel = headerCopy.closeModal ?? headerCopy.closeMenu;

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const onKeyDown = event => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) return;

      const focusables = getFocusableElements(dialogRef.current);
      if (!focusables.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      returnFocusRef?.current?.focus?.();
    };
  }, [open, onClose, returnFocusRef]);

  if (!open) return null;

  return (
    <div className="early-access-modal-layer">
      <button
        type="button"
        className="early-access-modal__backdrop"
        aria-label={closeLabel}
        onClick={onClose}
      />

      <div
        ref={dialogRef}
        className="early-access-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="early-access-modal__close"
          aria-label={closeLabel}
          onClick={onClose}
        >
          <X size={18} aria-hidden="true" />
        </button>

        <div className="early-access-modal__content">
          <h2 id={titleId}>{experience.beta.button}</h2>
          <p className="early-access-modal__intro">{experience.beta.body}</p>

          <form className="early-access-modal__form beta-form" onSubmit={handleWaitlistSubmit}>
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
        </div>
      </div>
    </div>
  );
}

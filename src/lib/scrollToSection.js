/**
 * Smooth-scroll to an in-page section and move focus for keyboard users.
 */
let pendingFocusTimer = null;

function prefersReducedMotion() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
}

export function scrollToSection(sectionId, { onDone } = {}) {
  const id = sectionId.replace(/^#/, '');
  const el = document.getElementById(id);
  if (!el) return false;

  const reducedMotion = prefersReducedMotion();
  el.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });

  if (!el.hasAttribute('tabindex')) {
    el.setAttribute('tabindex', '-1');
  }

  if (pendingFocusTimer) {
    window.clearTimeout(pendingFocusTimer);
  }

  pendingFocusTimer = window.setTimeout(() => {
    el.focus({ preventScroll: true });
    onDone?.();
    pendingFocusTimer = null;
  }, reducedMotion ? 0 : 420);

  return true;
}

export function handleInPageNav(event, sectionId, onNavigate) {
  const id = sectionId.replace(/^#/, '');
  const el = document.getElementById(id);
  if (!el) return;

  event.preventDefault();
  scrollToSection(id, { onDone: onNavigate });
}

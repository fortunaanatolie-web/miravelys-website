/**
 * Smooth-scroll to an in-page section and move focus for keyboard users.
 */
export function scrollToSection(sectionId, { onDone } = {}) {
  const id = sectionId.replace(/^#/, '');
  const el = document.getElementById(id);
  if (!el) return false;

  el.scrollIntoView({ behavior: 'smooth', block: 'start' });

  if (!el.hasAttribute('tabindex')) {
    el.setAttribute('tabindex', '-1');
  }
  window.setTimeout(() => {
    el.focus({ preventScroll: true });
    onDone?.();
  }, 400);

  return true;
}

export function handleInPageNav(event, sectionId, onNavigate) {
  const id = sectionId.replace(/^#/, '');
  const el = document.getElementById(id);
  if (!el) return;

  event.preventDefault();
  scrollToSection(id, { onDone: onNavigate });
}

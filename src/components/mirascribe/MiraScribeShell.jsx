/**
 * MiraScribeShell — outer wrapper for all /mirascribe/* pages.
 *
 * Deliberately omits the Miravelys cinematic atmosphere (gold/lavender/rose glows,
 * grain layer, ambient orbs). MiraScribe has its own visual identity: clean,
 * neutral dark, blue/indigo spectrum.
 */
import { useEffect } from 'react';
import MiraScribeNav from './MiraScribeNav';
import MiraScribeFooter from './MiraScribeFooter';

export default function MiraScribeShell({ children, skipTo = '#ms-main', title }) {
  useEffect(() => {
    // Ensure html element carries no Miravelys appearance class that would
    // bleed the cinematic background onto MiraScribe pages.
    document.documentElement.removeAttribute('data-appearance');
  }, []);

  return (
    <div className="ms-shell">
      <a href={skipTo} className="ms-skip-link sr-only sr-only-focusable">
        Skip to main content
      </a>
      <MiraScribeNav />
      <div id="ms-main">
        {children}
      </div>
      <MiraScribeFooter />
    </div>
  );
}

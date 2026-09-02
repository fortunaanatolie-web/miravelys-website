/**
 * MiraVoxisShell — outer wrapper for all /miravoxis/* pages.
 *
 * Omits Miravelys cinematic atmosphere. Uses MiraVoxis ink/sapphire/copper
 * tokens from site-miravoxis.css.
 */
import { useEffect } from 'react';
import MiraVoxisNav from './MiraVoxisNav';
import MiraVoxisFooter from './MiraVoxisFooter';

export default function MiraVoxisShell({ children, skipTo = '#mx-main' }) {
  useEffect(() => {
    document.documentElement.removeAttribute('data-appearance');
  }, []);

  return (
    <div className="mx-shell">
      <a href={skipTo} className="skip-link mx-skip-link">
        Skip to main content
      </a>
      <MiraVoxisNav />
      <div id="mx-main">
        {children}
      </div>
      <MiraVoxisFooter />
    </div>
  );
}

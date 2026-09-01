import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/site-base.css';
import './styles/site-tokens.css';
import './styles/site-atmosphere.css';
import './styles/site-responsive.css';
import './styles/site-interactions.css';
import './styles/site-layout-fluid.css';
import './styles/site-cinematic.css';
import './styles/site-cross-browser.css';
import './styles/site-header.css';
import './styles/site-motion.css';
import './styles/site-breakpoints.css';
import './styles/site-phone-mockup.css';
import './styles/site-mobile-shell.css';
import './styles/site-screenshot-placeholder.css';
import './styles/site-early-access-modal.css';
import './styles/site-marketing.css';
import './styles/site-beauty.css';
import './styles/site-appearance.css';
import './styles/site-typography.css';
import './styles/site-loop-journey.css';
import './styles/site-mirascribe.css';
import './styles/site-mirascribe-marketing.css';
import SiteRouter from './SiteRouter';

document.documentElement.classList.add('js');

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SiteRouter />
  </React.StrictMode>
);

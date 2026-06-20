import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './styles/site-tokens.css';
import './styles/site-atmosphere.css';
import './styles/site-responsive.css';
import './styles/site-interactions.css';
import './styles/site-layout-fluid.css';
import './styles/site-cinematic.css';
import './styles/site-cross-browser.css';
import './styles/site-presentation.css';
import './styles/site-header.css';
import './styles/site-purpose.css';
import './styles/site-screen-story.css';
import './styles/site-reveal.css';
import './styles/site-motion.css';
import './styles/site-breakpoints.css';
import './styles/site-phone-mockup.css';
import './styles/site-sticky-phone-story.css';
import './styles/browser-environment.css';
import './styles/product-story/productStoryBreakpoints.css';
import './styles/product-story/ProductStoryDesktop.css';
import './styles/product-story/ProductStoryPortrait.css';
import './styles/product-story/ProductStoryLandscape.css';
import './styles/site-product-story.css';
import './styles/site-main-copy.css';
import './styles/site-mobile-shell.css';
import './styles/site-screenshot-placeholder.css';
import './styles/site-early-access-modal.css';
import './styles/site-marketing.css';
import './styles/site-beauty.css';
import './styles/site-appearance.css';
import './styles/site-origin.css';
import './styles/site-typography.css';
import SiteRouter from './SiteRouter';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SiteRouter />
  </React.StrictMode>
);

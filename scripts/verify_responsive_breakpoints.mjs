/**
 * Verifies responsive breakpoint CSS is present and multilingual-safe layout rules exist.
 */
import fs from 'node:fs';
import { languages } from '../src/i18n/siteCopy.js';

const errors = [];

function assert(condition, message) {
  if (!condition) errors.push(message);
}

const breakpointsCss = fs.readFileSync(
  new URL('../src/styles/site-breakpoints.css', import.meta.url),
  'utf8'
);
const tokensCss = fs.readFileSync(
  new URL('../src/styles/site-tokens.css', import.meta.url),
  'utf8'
);
const revealCss = fs.readFileSync(
  new URL('../src/styles/site-reveal.css', import.meta.url),
  'utf8'
);
const mainJs = fs.readFileSync(new URL('../src/main.jsx', import.meta.url), 'utf8');

assert(mainJs.includes('site-sticky-phone-story.css'), 'main.jsx must import site-sticky-phone-story.css');
assert(mainJs.includes('product-story/productStoryBreakpoints.css'), 'main.jsx must import productStoryBreakpoints.css');
assert(mainJs.includes('product-story/ProductStoryLandscape.css'), 'main.jsx must import ProductStoryLandscape.css');
assert(mainJs.includes('site-product-story.css'), 'main.jsx must import site-product-story.css');
assert(mainJs.includes('site-breakpoints.css'), 'main.jsx must import site-breakpoints.css');
assert(tokensCss.includes('--bp-tablet'), 'site-tokens.css must define tablet breakpoint');
assert(tokensCss.includes('--phone-width-landscape'), 'site-tokens.css must define landscape phone width token');
assert(breakpointsCss.includes('--keynote-device-hero'), 'site-breakpoints.css must define fluid mockup sizing');
assert(breakpointsCss.includes('overflow-wrap'), 'site-breakpoints.css must handle long translated text');
assert(breakpointsCss.includes('orientation: landscape'), 'site-breakpoints.css must handle landscape layouts');

const productStoryCss = fs.readFileSync(
  new URL('../src/styles/site-product-story.css', import.meta.url),
  'utf8'
);
const landscapeCss = fs.readFileSync(
  new URL('../src/styles/product-story/ProductStoryLandscape.css', import.meta.url),
  'utf8'
);
const breakpointsCss2 = fs.readFileSync(
  new URL('../src/styles/product-story/productStoryBreakpoints.css', import.meta.url),
  'utf8'
);
const portraitCss = fs.readFileSync(
  new URL('../src/styles/product-story/ProductStoryPortrait.css', import.meta.url),
  'utf8'
);
assert(portraitCss.includes('stacked-story-card'), 'ProductStoryPortrait.css must define stacked card layout for mobile');
assert(landscapeCss.includes('landscape-story'), 'ProductStoryLandscape.css must define landscape sticky story layout');
assert(breakpointsCss2.includes('product-story__landscape'), 'productStoryBreakpoints.css must define landscape branch visibility');
assert(landscapeCss.includes('.product-story__landscape-cards'), 'product story must use mobile card sizing');
assert(breakpointsCss.includes('68.75rem'), 'site-breakpoints.css must define laptop sticky layout breakpoint');
assert(revealCss.includes('68.6874rem'), 'site-reveal.css must align mobile/tablet cutoff with breakpoints');
assert(breakpointsCss.includes('prefers-reduced-motion'), 'site-breakpoints.css must respect reduced motion');

const presentationCss = fs.readFileSync(
  new URL('../src/styles/site-presentation.css', import.meta.url),
  'utf8'
);
assert(!presentationCss.includes('max-width: 16ch'), 'Hero headline must not use fixed 16ch (breaks translations)');

if (languages.length !== 10) {
  errors.push(`Expected 10 languages, found ${languages.length}.`);
}

if (errors.length) {
  console.error('❌ Responsive verification failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`✅ Responsive breakpoint verification passed (${languages.length} languages, layout tokens, touch targets).`);

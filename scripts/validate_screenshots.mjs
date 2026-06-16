/**
 * Validates Miravelys website screenshot folder structure and manifest wiring.
 * Does not require .webp files to exist yet — reports missing uploads as warnings.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { languages } from '../src/i18n/siteCopy.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const screenshotRoot = path.join(root, 'public/miravelys-screenshots');

const supportedLocales = languages.map(language => language.code);

const screenshotGroups = {
  'sticky-phone': ['overview', 'write', 'layers', 'patterns', 'body', 'sounds', 'privacy'],
  hero: ['main'],
  'story-page': ['writing', 'grounding', 'reflection'],
  grounding: ['breathe', 'meditate', 'sleep', 'align', 'player'],
  privacy: ['privacy', 'settings', 'correction', 'local-first'],
  'final-cta': ['main'],
  secondary: ['contact', 'support', 'privacy-summary', 'early-access'],
};

const websiteScreenshotReferences = [
  { group: 'sticky-phone', code: 'overview' },
  { group: 'sticky-phone', code: 'write' },
  { group: 'sticky-phone', code: 'layers' },
  { group: 'sticky-phone', code: 'patterns' },
  { group: 'sticky-phone', code: 'body' },
  { group: 'sticky-phone', code: 'sounds' },
  { group: 'sticky-phone', code: 'privacy' },
  { group: 'story-page', code: 'writing' },
  { group: 'story-page', code: 'reflection' },
  { group: 'story-page', code: 'grounding' },
  { group: 'grounding', code: 'player' },
  { group: 'hero', code: 'main' },
  { group: 'final-cta', code: 'main' },
  { group: 'privacy', code: 'privacy' },
];

function getScreenshotPath(locale, group, code) {
  return `/miravelys-screenshots/${group}/${locale}/${code}.webp`;
}

const errors = [];
const warnings = [];

function assert(condition, message) {
  if (!condition) errors.push(message);
}

function warn(message) {
  warnings.push(message);
}

for (const [group, codes] of Object.entries(screenshotGroups)) {
  for (const locale of supportedLocales) {
    const localeDir = path.join(screenshotRoot, group, locale);
    assert(fs.existsSync(localeDir), `Missing locale folder: ${group}/${locale}`);

    for (const code of codes) {
      const filePath = path.join(localeDir, `${code}.webp`);
      if (!fs.existsSync(filePath)) {
        warn(`Missing upload: ${group}/${locale}/${code}.webp`);
      }
    }
  }
}

for (const ref of websiteScreenshotReferences) {
  const expected = getScreenshotPath('en', ref.group, ref.code);
  assert(
    expected.startsWith('/miravelys-screenshots/'),
    `Invalid path for ${ref.group}/${ref.code}: ${expected}`,
  );
}

const requiredFiles = [
  'src/components/marketing/primitives/PhoneMockup.jsx',
  'src/hooks/useMiravelysScreenshot.js',
  'src/lib/miravelysScreenshots.js',
  'public/miravelys-screenshots/README.md',
];

for (const rel of requiredFiles) {
  assert(fs.existsSync(path.join(root, rel)), `Missing required file: ${rel}`);
}

const manifestSource = fs.readFileSync(path.join(root, 'src/lib/miravelysScreenshots.js'), 'utf8');
assert(manifestSource.includes('resolveWebsiteScreenshot'), 'Manifest must export resolveWebsiteScreenshot');
assert(manifestSource.includes('preloadMiravelysScreenshots'), 'Manifest must export preloadMiravelysScreenshots');

const forbiddenInComponents = [
  '../assets/mockups',
  "asset: 'screen-welcome'",
  "asset: 'screen-today'",
  "asset: 'screen-clear'",
];

const componentRoots = ['src/components', 'src/pages'];

for (const dir of componentRoots) {
  walk(path.join(root, dir));
}

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    if (!/\.(jsx|js)$/.test(entry.name)) continue;
    const content = fs.readFileSync(full, 'utf8');
    for (const needle of forbiddenInComponents) {
      if (content.includes(needle)) {
        errors.push(`Hardcoded mockup path "${needle}" in ${path.relative(root, full)}`);
      }
    }
  }
}

if (errors.length) {
  console.error('validate:screenshots FAILED\n');
  errors.forEach(item => console.error(`  ✗ ${item}`));
  process.exit(1);
}

console.log('validate:screenshots OK');
console.log(`  locales: ${supportedLocales.length}`);
console.log(`  groups: ${Object.keys(screenshotGroups).length}`);
console.log(`  wired references: ${websiteScreenshotReferences.length}`);

if (warnings.length) {
  console.log(`\n  ${warnings.length} missing .webp upload(s) (expected until manual upload):`);
  warnings.slice(0, 12).forEach(item => console.log(`  ⚠ ${item}`));
  if (warnings.length > 12) {
    console.log(`  … and ${warnings.length - 12} more`);
  }
}

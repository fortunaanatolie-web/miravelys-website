/**
 * Validates sticky-phone screenshot assets: existence, locale folders, aspect ratio.
 * Also checks legacy PNG fallbacks used until .webp uploads exist.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { languages } from '../src/i18n/siteCopy.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const publicRoot = path.join(root, 'public/miravelys-screenshots/sticky-phone');
const legacyRoot = path.join(root, 'src/assets/mockups');

const PHONE_RATIO = 390 / 844;
const RATIO_MIN = 0.455;
const RATIO_MAX = 0.470;
const MIN_EDGE = 320;
const ASSET_MODE = 'screen-only';

const locales = languages.map(language => language.code);
const codes = ['overview', 'write', 'layers', 'patterns', 'body', 'sounds', 'privacy'];
const stickyPhoneLegacyAssets = {
  overview: 'screen-today',
  write: 'screen-clear',
  layers: 'screen-truth',
  patterns: 'screen-mirror',
  body: 'screen-calm',
  sounds: 'screen-rest',
  privacy: 'screen-welcome',
};

function getScreenshotPath(locale, code) {
  return `/miravelys-screenshots/sticky-phone/${locale}/${code}.webp`;
}

const errors = [];
const warnings = [];
const reports = [];

function assert(condition, message) {
  if (!condition) errors.push(message);
}

function warn(message) {
  warnings.push(message);
}

function readPngDimensions(filePath) {
  const buffer = fs.readFileSync(filePath);
  if (buffer.length < 24 || buffer.toString('ascii', 1, 4) !== 'PNG') return null;
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

function readWebpDimensions(filePath) {
  const buffer = fs.readFileSync(filePath);
  if (buffer.length < 30 || buffer.toString('ascii', 0, 4) !== 'RIFF') return null;
  if (buffer.toString('ascii', 8, 12) !== 'WEBP') return null;

  const chunk = buffer.toString('ascii', 12, 16);
  if (chunk === 'VP8X' && buffer.length >= 30) {
    const width = 1 + buffer.readUIntLE(24, 3);
    const height = 1 + buffer.readUIntLE(27, 3);
    return { width, height };
  }

  if (chunk === 'VP8 ' && buffer.length >= 30) {
    const width = buffer.readUInt16LE(26) & 0x3fff;
    const height = buffer.readUInt16LE(28) & 0x3fff;
    return { width, height };
  }

  return null;
}

function readImageDimensions(filePath) {
  if (filePath.endsWith('.png')) return readPngDimensions(filePath);
  if (filePath.endsWith('.webp')) return readWebpDimensions(filePath);
  return null;
}

function validateAsset({ width, height, locale, code, file, source }) {
  const ratio = width && height ? width / height : null;
  const report = {
    locale,
    code,
    file,
    source,
    assetMode: ASSET_MODE,
    naturalSize: width && height ? `${width}x${height}` : 'unknown',
    ratio: ratio != null ? ratio.toFixed(3) : 'unknown',
    expectedRatio: PHONE_RATIO.toFixed(3),
    status: 'valid',
    problem: null,
  };

  if (!width || !height) {
    report.status = 'invalid';
    report.problem = 'could not read image dimensions';
    errors.push(`${file}: ${report.problem}`);
    reports.push(report);
    return;
  }

  if (width < MIN_EDGE || height < MIN_EDGE) {
    report.status = 'warning';
    report.problem = 'suspiciously small — may be a thumbnail';
    warn(`${file}: ${report.problem} (${width}x${height})`);
  }

  if (ratio != null && ratio > 1.05) {
    report.status = 'invalid';
    report.problem = 'landscape/full-page screenshot, not phone-screen asset';
    errors.push(`Invalid sticky-phone screenshot: locale=${locale} code=${code} file=${file} — ${report.problem}`);
    reports.push(report);
    return;
  }

  if (ratio != null && ratio < 0.35) {
    report.status = 'invalid';
    report.problem = 'extremely tall asset — likely full-page capture or double-framed phone';
    errors.push(`Invalid sticky-phone screenshot: locale=${locale} code=${code} file=${file} — ${report.problem}`);
    reports.push(report);
    return;
  }

  const delta = ratio != null ? Math.abs(ratio - PHONE_RATIO) : Infinity;
  if (ratio != null && (ratio < RATIO_MIN || ratio > RATIO_MAX)) {
    report.status = 'invalid';
    report.problem = `wrong ratio (acceptable ${RATIO_MIN}–${RATIO_MAX})`;
    errors.push(
      `Invalid iPhone 13 Pro sticky screenshot:\n` +
        `  locale: ${locale}\n` +
        `  code: ${code}\n` +
        `  file: ${file}\n` +
        `  natural size: ${report.naturalSize}\n` +
        `  ratio: ${report.ratio}\n` +
        `  expected ratio: ${report.expectedRatio}\n` +
        `  problem: ${report.problem}`,
    );
    reports.push(report);
    return;
  }

  if (delta > 0.004) {
    report.status = 'warning';
    report.problem = `aspect ratio ${report.ratio} differs from expected ${report.expectedRatio}`;
    warn(`Invalid sticky-phone screenshot:\n  locale: ${locale}\n  code: ${code}\n  file: ${file}\n  natural size: ${report.naturalSize}\n  ratio: ${report.ratio}\n  expected ratio: ${report.expectedRatio}\n  problem: ${report.problem}`);
  }

  reports.push(report);
}

for (const locale of locales) {
  const localeDir = path.join(publicRoot, locale);
  assert(fs.existsSync(localeDir), `Missing locale folder: sticky-phone/${locale}`);

  for (const code of codes) {
    const expected = getScreenshotPath(locale, code);
    const webpPath = path.join(publicRoot, locale, `${code}.webp`);
    const legacyName = stickyPhoneLegacyAssets[code];
    const legacyPath = path.join(legacyRoot, locale, `${legacyName}.png`);
    const enLegacyPath = path.join(legacyRoot, 'en', `${legacyName}.png`);

    if (fs.existsSync(webpPath)) {
      const dims = readImageDimensions(webpPath);
      validateAsset({
        ...dims,
        locale,
        code,
        file: expected,
        source: 'webp',
      });
    } else {
      warn(`Missing upload: ${expected}`);

      const fallbackPath = fs.existsSync(legacyPath) ? legacyPath : enLegacyPath;
      if (fs.existsSync(fallbackPath)) {
        const dims = readImageDimensions(fallbackPath);
        validateAsset({
          ...dims,
          locale,
          code,
          file: path.relative(root, fallbackPath),
          source: 'legacy-png',
        });
      } else {
        errors.push(`No webp or legacy PNG for sticky-phone/${locale}/${code}`);
      }
    }
  }
}

const requiredComponents = [
  'src/components/marketing/primitives/PhoneMockup.jsx',
  'src/components/marketing/sections/ProductStoryMobilePortrait.jsx',
  'src/components/marketing/sections/ProductStoryMobileLandscape.jsx',
  'src/lib/productStorySteps.js',
];

for (const rel of requiredComponents) {
  assert(fs.existsSync(path.join(root, rel)), `Missing required file: ${rel}`);
}

if (errors.length) {
  console.error('validate:sticky-phone-screenshots FAILED\n');
  errors.forEach(item => console.error(`  ✗ ${item}`));
  process.exit(1);
}

console.log('validate:sticky-phone-screenshots OK');
console.log(`  asset mode: ${ASSET_MODE}`);
console.log(`  locales: ${locales.length}`);
console.log(`  codes: ${codes.length}`);
console.log(`  expected ratio: ${PHONE_RATIO.toFixed(4)} (390/844, acceptable ${RATIO_MIN}–${RATIO_MAX})`);

const validCount = reports.filter(item => item.status === 'valid').length;
console.log(`  validated assets: ${validCount}/${reports.length}`);

if (warnings.length) {
  console.log(`\n  ${warnings.length} warning(s):`);
  warnings.slice(0, 16).forEach(item => console.log(`  ⚠ ${item}`));
  if (warnings.length > 16) console.log(`  … and ${warnings.length - 16} more`);
}

const sample = reports.find(item => item.locale === 'en' && item.code === 'overview');
if (sample) {
  console.log('\n  sample report:');
  console.log(`  locale: ${sample.locale}`);
  console.log(`  code: ${sample.code}`);
  console.log(`  file: ${sample.file}`);
  console.log(`  natural size: ${sample.naturalSize}`);
  console.log(`  ratio: ${sample.ratio}`);
  console.log(`  expected ratio: ${sample.expectedRatio}`);
  console.log(`  status: ${sample.status}`);
}

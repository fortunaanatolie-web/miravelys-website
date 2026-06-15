/**
 * Verifies marketing mockup PNG assets: dimensions, completeness, canonical pipeline.
 */
import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { languages } from '../src/i18n/siteCopy.js';
import { MOCKUP_ASSET_IDS, MOCKUP_SCREEN_PROFILES } from './lib/mockup_screen_profiles.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsRoot = path.resolve(__dirname, '../src/assets/mockups');
const TARGET = { width: 780, height: 1688 };

const MOCKUP_ASSETS = MOCKUP_ASSET_IDS;

const errors = [];

function assert(condition, message) {
  if (!condition) errors.push(message);
}

function readPngSize(filePath) {
  const buffer = fs.readFileSync(filePath);
  if (buffer.length < 24 || buffer.toString('ascii', 1, 4) !== 'PNG') {
    throw new Error(`Not a PNG: ${filePath}`);
  }
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

function fileDigest(filePath) {
  const buffer = fs.readFileSync(filePath);
  return createHash('sha256').update(buffer).digest('hex');
}

const enHashes = {};

for (const asset of MOCKUP_ASSETS) {
  const enPath = path.join(assetsRoot, 'en', `${asset}.png`);
  assert(fs.existsSync(enPath), `Missing canonical en asset: en/${asset}.png`);
  if (!fs.existsSync(enPath)) continue;

  const enSize = readPngSize(enPath);
  assert(
    enSize.width === TARGET.width && enSize.height === TARGET.height,
    `en/${asset}.png must be ${TARGET.width}×${TARGET.height}, got ${enSize.width}×${enSize.height}`,
  );
  enHashes[asset] = fileDigest(enPath);
}

for (const language of languages) {
  const code = language.code;
  if (code === 'en') continue;

  for (const asset of MOCKUP_ASSETS) {
    const filePath = path.join(assetsRoot, code, `${asset}.png`);
    assert(fs.existsSync(filePath), `Missing localized asset: ${code}/${asset}.png`);
    if (!fs.existsSync(filePath)) continue;

    const size = readPngSize(filePath);
    assert(
      size.width === TARGET.width && size.height === TARGET.height,
      `${code}/${asset}.png must be ${TARGET.width}×${TARGET.height}, got ${size.width}×${size.height}`,
    );

    const digest = fileDigest(filePath);
    assert(
      digest === enHashes[asset],
      `${code}/${asset}.png must match canonical en capture (run npm run build:mockups)`,
    );
  }
}

const capture = fs.readFileSync(
  new URL('../scripts/capture_mockup_screenshots.mjs', import.meta.url),
  'utf8',
);
const build = fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8');

assert(capture.includes('mockup_screen_profiles.mjs'), 'capture must use shared v5 screen profiles');
for (const profile of MOCKUP_SCREEN_PROFILES) {
  assert(profile.screen && profile.id, `profile must define id + v5 screen for ${profile.copyKey}`);
}
assert(capture.includes('trim_screen_png.py'), 'capture must reshape/trim outputs');
assert(build.includes('distribute:mockups'), 'build:mockups must distribute canonical EN to all langs');

if (errors.length) {
  console.error('❌ Mockup asset verification failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  `✅ Mockup assets verified (${languages.length} languages × ${MOCKUP_ASSETS.length} canonical v5 screens @ ${TARGET.width}×${TARGET.height}).`,
);

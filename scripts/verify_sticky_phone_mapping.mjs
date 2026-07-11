/**
 * Verifies sticky-phone screenshot codes align with product story steps and legacy mockups.
 * Compares EN captures against legacy src/assets/mockups for visual parity.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { languages } from '../src/i18n/siteCopy.js';
import { productSceneOrder } from '../src/config/productScenes.js';
import { MOCKUP_SCREEN_PROFILES } from './lib/mockup_screen_profiles.mjs';

const stickyPhoneSceneToCode = {
  overview: 'overview',
  writeInside: 'write',
  separateLayers: 'layers',
  patternsOverTime: 'patterns',
  calmFirst: 'body',
  soundsAndSleep: 'sounds',
  privacyControl: 'privacy',
};

const stickyPhoneLegacyAssets = {
  overview: 'screen-today',
  write: 'screen-clear',
  layers: 'screen-truth',
  patterns: 'screen-mirror',
  body: 'screen-calm',
  sounds: 'screen-rest',
  privacy: 'screen-welcome',
};

const mockupIdToStickyCode = {
  today: 'overview',
  clear: 'write',
  truth: 'layers',
  mirror: 'patterns',
  calm: 'body',
  rest: 'sounds',
  welcome: 'privacy',
};

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const publicRoot = path.join(root, 'public/miravelys-screenshots/sticky-phone');
const legacyRoot = path.join(root, 'src/assets/mockups');

const errors = [];
const warnings = [];

function assert(condition, message) {
  if (!condition) errors.push(message);
}

function warn(message) {
  warnings.push(message);
}

/** Canonical story step → screenshot code → legacy asset → v5 screen */
const CAPTURE_PROFILES = {
  overview: { v5: 'home', legacy: 'screen-today' },
  write: { v5: 'get-clear-1', legacy: 'screen-clear' },
  layers: { v5: 'get-clear-4', legacy: 'screen-truth' },
  patterns: { v5: 'weekly-mirror', legacy: 'screen-mirror' },
  body: { v5: 'calm-hub', legacy: 'screen-calm' },
  sounds: { v5: 'sleep', legacy: 'screen-rest' },
  privacy: { v5: 'welcome', legacy: 'screen-welcome' },
};

// —— Structural mapping ——
for (const scene of productSceneOrder) {
  const code = stickyPhoneSceneToCode[scene.key];
  assert(code, `Missing stickyPhoneSceneToCode for ${scene.key}`);
  assert(
    mockupIdToStickyCode[scene.mockupId] === code,
    `${scene.key}: mockupId "${scene.mockupId}" must map to code "${code}"`,
  );
  const legacy = stickyPhoneLegacyAssets[code];
  assert(legacy, `Missing legacy asset for code ${code}`);
  const profile = MOCKUP_SCREEN_PROFILES.find(item => item.id === legacy);
  assert(profile, `Legacy asset ${legacy} must exist in mockup_screen_profiles`);
  const capture = CAPTURE_PROFILES[code];
  assert(capture, `Missing capture profile for ${code}`);
  assert(
    profile.screen === capture.v5,
    `${code}: v5 screen must be ${capture.v5} (legacy ${legacy} uses ${profile.screen})`,
  );
  assert(capture.legacy === legacy, `${code}: legacy asset mismatch`);
}

// —— Locale file inventory ——
const codes = Object.keys(CAPTURE_PROFILES);
for (const { code: locale } of languages) {
  for (const code of codes) {
    const png = path.join(publicRoot, locale, `${code}.png`);
    assert(fs.existsSync(png), `Missing sticky-phone PNG: ${locale}/${code}.png`);
    const legacy = path.join(legacyRoot, locale, `${CAPTURE_PROFILES[code].legacy}.png`);
    if (!fs.existsSync(legacy)) {
      warn(`Missing legacy reference mockup: ${locale}/${CAPTURE_PROFILES[code].legacy}.png`);
    }
  }
}

// —— EN visual parity vs legacy (downscaled MSE) ——
const compareScript = `
from PIL import Image
import json, sys
mapping = json.loads(sys.argv[1])
legacy_root = sys.argv[2]
new_root = sys.argv[3]
size = (96, 208)
def gray(path):
    return list(Image.open(path).convert('L').resize(size, Image.Resampling.BILINEAR).getdata())
def mse(a,b):
    return sum((x-y)**2 for x,y in zip(a,b))/len(a)
out = []
for code, meta in mapping.items():
    new = f"{new_root}/en/{code}.png"
    leg = f"{legacy_root}/en/{meta['legacy']}.png"
    exp = mse(gray(new), gray(leg))
    scores = [(mse(gray(new), gray(f"{legacy_root}/en/{m['legacy']}.png")), name) for name,m in mapping.items()]
    scores.sort()
    best = scores[0]
    out.append({'code': code, 'expected': meta['legacy'], 'mse': exp, 'best': best[1], 'bestMse': best[0]})
print(json.dumps(out))
`;

const compare = spawnSync('python3', ['-c', compareScript, JSON.stringify(CAPTURE_PROFILES), legacyRoot, publicRoot], {
  encoding: 'utf8',
});

if (compare.status !== 0) {
  errors.push(`Visual compare failed: ${compare.stderr || compare.stdout}`);
} else {
  const results = JSON.parse(compare.stdout.trim());
  for (const row of results) {
    const expectedLegacy = CAPTURE_PROFILES[row.code].legacy;
    if (row.best !== expectedLegacy && row.bestMse + 80 < row.mse) {
      errors.push(
        `EN/${row.code}.png does not match legacy ${expectedLegacy} (mse=${row.mse.toFixed(0)}); closest legacy is ${row.best} (mse=${row.bestMse.toFixed(0)})`,
      );
    } else if (row.mse > 400) {
      warn(
        `EN/${row.code}.png differs from legacy ${expectedLegacy} (mse=${row.mse.toFixed(0)}) — may be v5 refresh drift`,
      );
    }
  }
}

if (errors.length) {
  console.error('verify:sticky-phone-mapping FAILED\n');
  errors.forEach(item => console.error(`  ✗ ${item}`));
  process.exit(1);
}

console.log('verify:sticky-phone-mapping OK');
console.log(`  story steps: ${productSceneOrder.length}`);
console.log(`  locales: ${languages.length}`);
console.log(`  codes: ${codes.join(', ')}`);
if (warnings.length) {
  console.log(`  warnings: ${warnings.length}`);
  warnings.slice(0, 8).forEach(item => console.log(`  ⚠ ${item}`));
}

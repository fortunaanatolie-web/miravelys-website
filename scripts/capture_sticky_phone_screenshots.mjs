/**
 * Capture localized sticky-phone PNGs from the Miravelys v5 HTML mockup (app repo).
 * Screen-only, 1170×2532 (@3×), mapped to website story codes.
 *
 * Source: ../Miravelys /Miravelys/web/mockups/miravelys-redesign-v5
 * Output: public/miravelys-screenshots/sticky-phone/{locale}/{code}.png
 *
 * Run: npm run capture:sticky-phone-screens
 */
import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.resolve(__dirname, '..');
const appMockupHtml = path.resolve(
  webRoot,
  '../Miravelys /Miravelys/web/mockups/miravelys-redesign-v5/index.html',
);
const l10nRoot = path.resolve(webRoot, '../Miravelys /Miravelys/Core/Localization/Tables');
const outRoot = path.join(webRoot, 'public/miravelys-screenshots/sticky-phone');
const trimScript = path.join(__dirname, 'lib/trim_screen_png.py');

const LOCALES = ['en', 'ru', 'ro', 'fr', 'hi', 'zh', 'de', 'ja', 'es', 'pt'];
const LOGICAL_WIDTH = 390;
const LOGICAL_HEIGHT = 844;
const DISPLAY_RADIUS_PX = 40;
const SCALE = 3;

/** Website sticky-phone code → v5 data-screen id (must match legacy mockup_screen_profiles / stickyPhoneLegacyAssets) */
const STICKY_PHONE_PROFILES = [
  { code: 'overview', screen: 'home', scrollTop: 0, note: 'Home / daily guidance entry (legacy: screen-today)' },
  { code: 'write', screen: 'get-clear-1', scrollTop: 0, note: 'Get Clear capture (legacy: screen-clear)' },
  { code: 'layers', screen: 'get-clear-4', scrollTop: 0, note: 'Truth Line — separate facts from stories (legacy: screen-truth)' },
  { code: 'patterns', screen: 'weekly-mirror', scrollTop: 0, note: 'Weekly Mirror (legacy: screen-mirror)' },
  { code: 'body', screen: 'calm-hub', scrollTop: 56, note: 'Calm four-door hub (legacy: screen-calm)' },
  { code: 'sounds', screen: 'sleep', scrollTop: 0, note: 'Sleep / grounding sounds (legacy: screen-rest)' },
  { code: 'privacy', screen: 'welcome', scrollTop: 0, note: 'Private welcome entry (legacy: screen-welcome)' },
];

const CAPTURE_CSS = `
  .mockup-nav { display: none !important; }
  body.mockup-mode { padding: 0 !important; margin: 0 !important; background: #000 !important; }
  .phone {
    width: ${LOGICAL_WIDTH}px !important;
    height: ${LOGICAL_HEIGHT}px !important;
    margin: 0 !important;
    padding: 0 !important;
    border-radius: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
    filter: none !important;
    overflow: visible !important;
  }
  .phone__inner {
    width: ${LOGICAL_WIDTH}px !important;
    height: ${LOGICAL_HEIGHT}px !important;
    border-radius: ${DISPLAY_RADIUS_PX}px !important;
    overflow: hidden !important;
    background: var(--harbor-deep, #060a0e) !important;
  }
  .phone__screen.is-active { animation: none !important; opacity: 1 !important; transform: none !important; }
  .phone__screen { animation: none !important; transition: none !important; }
  .mira-art--live .scene, .ref-bg .scene { animation: none !important; transform: scale(1.04) !important; }
  .mira-art--portal::before, .breath-env__warm, .breath-env__sky, .breath-env__rays, .breath-env__fog, .breath-env__floor, .skeleton { animation: none !important; }
  * { scroll-behavior: auto !important; }
`;

function reshapePng(file) {
  const result = spawnSync(
    'python3',
    [trimScript, file],
    {
      encoding: 'utf8',
      env: { ...process.env, MIRAVELYS_TRIM_WIDTH: '1170', MIRAVELYS_TRIM_HEIGHT: '2532' },
    },
  );
  if (result.status !== 0) throw new Error(result.stderr || result.stdout || `Trim failed for ${file}`);
  return result.stdout.trim();
}

/** Parse L10n+XX.swift into key → value for sticky-phone visible strings. */
async function loadLocaleStrings(locale) {
  const suffix = locale.toUpperCase();
  const file = path.join(l10nRoot, `L10n+${suffix}.swift`);
  let source;
  try {
    source = await readFile(file, 'utf8');
  } catch {
    return new Map();
  }
  const table = new Map();
  const re = /table\[\.(?<key>[a-zA-Z0-9_]+)\]\s*=\s*"(?<value>(?:\\.|[^"\\])*)"/g;
  for (const match of source.matchAll(re)) {
    const value = match.groups.value.replace(/\\"/g, '"').replace(/\\n/g, '\n');
    table.set(match.groups.key, value);
  }
  return table;
}

/** Build EN→locale replacement pairs from L10n tables (longest strings first). */
async function buildLocaleReplacements(locale) {
  if (locale === 'en') return [];
  const en = await loadLocaleStrings('en');
  const l10n = await loadLocaleStrings(locale);
  if (l10n.size === 0) return [];

  const pairs = [];
  for (const [key, enValue] of en.entries()) {
    const localized = l10n.get(key);
    if (!localized || localized === enValue) continue;
    if (enValue.length < 3) continue;
    if (/^[\d\s%.,:;!?+\-–—()]+$/.test(enValue)) continue;
    pairs.push({ from: enValue, to: localized });
  }
  pairs.sort((a, b) => b.from.length - a.from.length);
  return pairs;
}

async function showScreen(page, screenId) {
  await page.evaluate(id => {
    document.querySelectorAll('.phone__screen').forEach(section => {
      const active = section.dataset.screen === id;
      section.classList.toggle('is-active', active);
      section.style.display = active ? 'flex' : 'none';
      section.style.opacity = active ? '1' : '0';
      section.style.visibility = active ? 'visible' : 'hidden';
      section.style.pointerEvents = active ? 'auto' : 'none';
      section.style.animation = 'none';
      section.style.transform = 'none';
    });
    document.querySelectorAll('.sheet').forEach(sheet => sheet.classList.remove('is-open'));
    const phone = document.querySelector('.phone');
    if (phone) phone.classList.remove('is-sheet-open');
  }, screenId);
}

async function applyScreenProfile(page, profile) {
  await page.evaluate(
    ({ screenId, scrollTop }) => {
      const section = document.querySelector(`.phone__screen[data-screen="${screenId}"]`);
      if (!section) return;
      const scroll = section.querySelector('.scroll');
      if (scroll) scroll.scrollTop = scrollTop ?? 0;
      section.querySelectorAll('.mira-art--live .scene').forEach(scene => {
        scene.style.animation = 'none';
        scene.style.transform = 'scale(1.04)';
      });
    },
    { screenId: profile.screen, scrollTop: profile.scrollTop ?? 0 },
  );
}

async function applyLocaleReplacements(page, pairs) {
  if (!pairs.length) return;
  await page.evaluate(repls => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const node of nodes) {
      let text = node.nodeValue;
      let changed = false;
      for (const { from, to } of repls) {
        if (text.includes(from)) {
          text = text.split(from).join(to);
          changed = true;
        }
      }
      if (changed) node.nodeValue = text;
    }
    document.querySelectorAll('[aria-label]').forEach(el => {
      let label = el.getAttribute('aria-label') || '';
      for (const { from, to } of repls) {
        if (label.includes(from)) label = label.split(from).join(to);
      }
      el.setAttribute('aria-label', label);
    });
  }, pairs);
}

async function waitForScreenPaint(page, screenId) {
  await page.waitForSelector(`.phone__screen[data-screen="${screenId}"].is-active`, {
    state: 'visible',
    timeout: 15000,
  });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(180);
}

async function main() {
  await mkdir(outRoot, { recursive: true });

  const onlyCodes = (process.env.MIRAVELYS_CAPTURE_CODES || '')
    .split(',')
    .map(code => code.trim())
    .filter(Boolean);
  const profiles =
    onlyCodes.length > 0
      ? STICKY_PHONE_PROFILES.filter(profile => onlyCodes.includes(profile.code))
      : STICKY_PHONE_PROFILES;

  if (!profiles.length) {
    throw new Error(
      `No capture profiles matched MIRAVELYS_CAPTURE_CODES=${process.env.MIRAVELYS_CAPTURE_CODES ?? ''}`,
    );
  }

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: LOGICAL_WIDTH + 40, height: LOGICAL_HEIGHT + 80 },
    deviceScaleFactor: SCALE,
  });

  await page.goto(`file://${appMockupHtml}`, { waitUntil: 'load' });
  await page.addStyleTag({ content: CAPTURE_CSS });
  await page.locator('.phone__inner').waitFor({ state: 'visible' });

  const screenLocator = page.locator('.phone__inner');
  let captured = 0;

  for (const locale of LOCALES) {
    const localeDir = path.join(outRoot, locale);
    await mkdir(localeDir, { recursive: true });
    const replacements = await buildLocaleReplacements(locale);
    await page.reload({ waitUntil: 'load' });
    await page.addStyleTag({ content: CAPTURE_CSS });
    await applyLocaleReplacements(page, replacements);

    for (const profile of profiles) {
      await showScreen(page, profile.screen);
      await waitForScreenPaint(page, profile.screen);
      await applyScreenProfile(page, profile);
      await page.waitForTimeout(100);

      const file = path.join(localeDir, `${profile.code}.png`);
      await screenLocator.screenshot({ path: file, type: 'png', animations: 'disabled' });
      const size = reshapePng(file);
      captured += 1;
      console.log(`✓ ${locale}/${profile.code}.png ← ${profile.screen} (${size}) — ${profile.note}`);
    }
  }

  await browser.close();
  console.log(`\nCaptured ${captured} sticky-phone PNGs into ${outRoot}`);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});

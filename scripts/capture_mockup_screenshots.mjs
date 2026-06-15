/**
 * Capture screen-only PNGs from the canonical v5 HTML mockup (no device chrome).
 *
 * Source: Miravelys_Marketing_Presentation_Package/web/mockups/miravelys-redesign-v5
 * Output: src/assets/mockups/en/screen-*.png @ 2× (780×1688)
 *
 * Run: npm run capture:mockup-screens
 */
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import {
  DISPLAY_RADIUS_PX,
  LOGICAL_HEIGHT,
  LOGICAL_WIDTH,
  MOCKUP_SCREEN_PROFILES,
} from './lib/mockup_screen_profiles.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.resolve(__dirname, '..');
const mockupHtml = path.resolve(
  webRoot,
  '../Miravelys_Marketing_Presentation_Package/web/mockups/miravelys-redesign-v5/index.html',
);
const outDir = path.resolve(webRoot, 'src/assets/mockups/en');
const trimScript = path.resolve(__dirname, 'lib/trim_screen_png.py');

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
  /* Freeze reference pose — no transition blur in screenshots */
  .phone__screen.is-active {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
  .phone__screen {
    animation: none !important;
    transition: none !important;
  }
  .mira-art--live .scene,
  .mira-art--portal.mira-art--live .scene,
  .ref-bg .scene {
    animation: none !important;
    transform: scale(1.04) !important;
  }
  .mira-art--portal::before,
  .breath-env__warm,
  .breath-env__sky,
  .breath-env__rays,
  .breath-env__fog,
  .breath-env__floor,
  .skeleton {
    animation: none !important;
  }
  * {
    scroll-behavior: auto !important;
  }
`;

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

      const inner = document.querySelector('.phone__inner');
      if (inner) {
        inner.setAttribute('data-reading', 'default');
      }

      const scroll = section.querySelector('.scroll');
      if (scroll) {
        scroll.scrollTop = scrollTop ?? 0;
      }

      section.querySelectorAll('.mira-art--live .scene').forEach(scene => {
        scene.style.animation = 'none';
        scene.style.transform = 'scale(1.04)';
      });
    },
    { screenId: profile.screen, scrollTop: profile.scrollTop ?? 0 },
  );
}

async function waitForScreenPaint(page, screenId) {
  await page.waitForSelector(`.phone__screen[data-screen="${screenId}"].is-active`, {
    state: 'visible',
    timeout: 15000,
  });

  await page.evaluate(() => document.fonts.ready);

  await page.evaluate(
    id =>
      new Promise(resolve => {
        const section = document.querySelector(`.phone__screen[data-screen="${id}"]`);
        if (!section) {
          resolve();
          return;
        }
        const svgs = section.querySelectorAll('svg');
        if (!svgs.length) {
          requestAnimationFrame(() => requestAnimationFrame(resolve));
          return;
        }
        let pending = 0;
        const done = () => {
          pending -= 1;
          if (pending <= 0) requestAnimationFrame(() => requestAnimationFrame(resolve));
        };
        svgs.forEach(svg => {
          pending += 1;
          if (svg.querySelector('use')) {
            requestAnimationFrame(done);
          } else {
            done();
          }
        });
        if (pending === 0) requestAnimationFrame(() => requestAnimationFrame(resolve));
      }),
    screenId,
  );

  await page.waitForTimeout(180);
}

function reshapePng(file) {
  const result = spawnSync('python3', [trimScript, file], { encoding: 'utf8' });
  if (result.status !== 0) {
    throw new Error(result.stderr || result.stdout || `Trim failed for ${file}`);
  }
  return result.stdout.trim();
}

async function main() {
  await mkdir(outDir, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: LOGICAL_WIDTH + 40, height: LOGICAL_HEIGHT + 80 },
    deviceScaleFactor: 2,
  });

  await page.goto(`file://${mockupHtml}`, { waitUntil: 'load' });
  await page.addStyleTag({ content: CAPTURE_CSS });
  await page.locator('.phone__inner').waitFor({ state: 'visible' });

  const screenLocator = page.locator('.phone__inner');

  for (const profile of MOCKUP_SCREEN_PROFILES) {
    await showScreen(page, profile.screen);
    await waitForScreenPaint(page, profile.screen);
    await applyScreenProfile(page, profile);
    await page.waitForTimeout(profile.settleMs ?? 80);

    const file = path.join(outDir, `${profile.id}.png`);
    await screenLocator.screenshot({
      path: file,
      type: 'png',
      animations: 'disabled',
      omitBackground: false,
    });
    const size = reshapePng(file);
    console.log(`✓ ${profile.id} ← ${profile.screen} (${size}) — ${profile.note}`);
  }

  await browser.close();
  console.log(`\nCaptured ${MOCKUP_SCREEN_PROFILES.length} reference-grade v5 screens into src/assets/mockups/en/`);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});

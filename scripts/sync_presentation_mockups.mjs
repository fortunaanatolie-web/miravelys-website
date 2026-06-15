/**
 * Optional: crop ChatGPT presentation device PNGs (legacy — not used by build:mockups).
 *
 * Canonical product screens come from v5 capture — npm run build:mockups
 */
import { mkdir, readdir, unlink } from 'node:fs/promises';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.resolve(__dirname, '..');
const packageRoot = path.resolve(webRoot, '../Miravelys_Marketing_Presentation_Package');
const sourceRoot = path.join(packageRoot, '02_individual_screen_mockups_9x16');
const outRoot = path.join(webRoot, 'src/assets/mockups');
const cropScript = path.join(__dirname, 'lib/extract_screen_from_device_png.py');

const LANGS = ['en', 'ru', 'ro', 'fr', 'hi', 'zh', 'de', 'ja', 'es', 'pt'];

/**
 * Presentation file index → website asset.
 * Index matches "ChatGPT Image … (N).png" in 02_individual_screen_mockups_9x16/{lang}/.
 *
 * Package screens (verified):
 *  1 Welcome · 2 Onboarding · 3 Weekly Mirror · 4 Get Clear step 1 (Name it)
 *  5 Sort it · 6 One question · 7 Truth line · 8 Calm hub · 9 Breathe · 10 Sleep
 */
const SCREEN_MAP = [
  { asset: 'screen-welcome', index: 1 },
  { asset: 'screen-clear', index: 4 },
  { asset: 'screen-truth', index: 7 },
  { asset: 'screen-calm', index: 8 },
  { asset: 'screen-rest', index: 10 },
  { asset: 'screen-mirror', index: 3 },
];

/** Home exists only in v5 capture — never write a misleading fallback here. */
const EN_ONLY_ASSETS = ['screen-today'];

async function findIndexedPng(dir, index) {
  const files = await readdir(dir);
  const suffix = `(${index}).png`;
  const match = files.find(name => name.endsWith(suffix));
  if (!match) throw new Error(`Missing (*${suffix}) in ${dir}`);
  return path.join(dir, match);
}

function cropToScreenOnly(source, dest) {
  const result = spawnSync('python3', [cropScript, source, dest], { encoding: 'utf8' });
  if (result.status !== 0) {
    throw new Error(result.stderr || result.stdout || `Crop failed for ${source}`);
  }
  return result.stdout.trim();
}

async function removeEnOnlyAssets(langOut) {
  for (const asset of EN_ONLY_ASSETS) {
    const file = path.join(langOut, `${asset}.png`);
    try {
      await unlink(file);
      console.log(`• removed ${path.basename(langOut)}/${asset}.png (canonical en capture)`);
    } catch {
      // not present
    }
  }
}

async function main() {
  let copied = 0;

  for (const lang of LANGS) {
    if (lang === 'en') {
      console.log('• en — skipped (use capture:mockup-screens for canonical v5 screens)');
      continue;
    }
    const langDir = path.join(sourceRoot, lang);
    const langOut = path.join(outRoot, lang);
    await mkdir(langOut, { recursive: true });
    await removeEnOnlyAssets(langOut);

    for (const screen of SCREEN_MAP) {
      const src = await findIndexedPng(langDir, screen.index);
      const dest = path.join(langOut, `${screen.asset}.png`);
      const size = cropToScreenOnly(src, dest);
      copied += 1;
      console.log(`✓ ${lang}/${screen.asset}.png (${size})`);
    }
  }

  console.log(
    `\nSynced ${copied} cropped screen mockups (${LANGS.length - 1} languages × ${SCREEN_MAP.length} screens).`,
  );
  console.log('Note: screen-today (Home) uses en/ from capture:mockup-screens for all languages.');
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});

/**
 * Copy canonical v5 EN screen PNGs to every language folder.
 * Product UI is English-only in v5 — site copy localizes beside the same screens.
 */
import { copyFile, mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.resolve(__dirname, '..');
const enDir = path.join(webRoot, 'src/assets/mockups/en');
const outRoot = path.join(webRoot, 'src/assets/mockups');

const LANGS = ['ru', 'ro', 'fr', 'hi', 'zh', 'de', 'ja', 'es', 'pt'];

async function main() {
  const files = (await readdir(enDir)).filter(name => name.endsWith('.png'));
  if (!files.length) {
    throw new Error('No EN mockups found — run capture:mockup-screens first');
  }

  let copied = 0;
  for (const lang of LANGS) {
    const langOut = path.join(outRoot, lang);
    await mkdir(langOut, { recursive: true });
    for (const file of files) {
      await copyFile(path.join(enDir, file), path.join(langOut, file));
      copied += 1;
    }
    console.log(`✓ ${lang}/ (${files.length} screens from canonical v5)`);
  }

  console.log(`\nDistributed ${copied} canonical mockups across ${LANGS.length} languages.`);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});

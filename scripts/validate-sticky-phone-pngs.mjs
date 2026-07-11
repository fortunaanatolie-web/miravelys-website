import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const publicRoot = path.join(root, 'public/miravelys-screenshots/sticky-phone');

const PHONE_RATIO = 1170 / 2532; // ~0.462
const RATIO_MIN = 0.455;
const RATIO_MAX = 0.470;

const locales = ['en', 'ru', 'ro', 'fr', 'hi', 'zh', 'de', 'ja', 'es', 'pt'];
const codes = ['overview', 'write', 'layers', 'patterns', 'body', 'sounds', 'privacy'];

let errors = 0;
let checked = 0;

function readPngDimensions(filePath) {
  const buffer = fs.readFileSync(filePath);
  if (buffer.length < 24 || buffer.toString('ascii', 1, 4) !== 'PNG') return null;
  if (buffer.length === 0) return null;
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

console.log('Validating sticky-phone PNGs...');

for (const locale of locales) {
  const localeDir = path.join(publicRoot, locale);
  if (!fs.existsSync(localeDir)) {
    for (const code of codes) {
      console.error(`❌ ${locale}/${code}.png missing`);
      errors++;
    }
    continue;
  }

  for (const code of codes) {
    const pngPath = path.join(localeDir, `${code}.png`);

    if (!fs.existsSync(pngPath)) {
      console.error(`❌ ${locale}/${code}.png missing`);
      errors++;
      continue;
    }

    const dims = readPngDimensions(pngPath);
    if (!dims) {
      console.error(`❌ ${locale}/${code}.png invalid PNG or unreadable`);
      errors++;
      continue;
    }

    const ratio = dims.width / dims.height;
    if (ratio < RATIO_MIN || ratio > RATIO_MAX) {
      console.error(
        `❌ ${locale}/${code}.png wrong ratio ${ratio.toFixed(3)} (${dims.width}x${dims.height})`,
      );
      errors++;
      continue;
    }

    checked++;
    console.log(`✅ ${locale}/${code}.png ${dims.width}x${dims.height} ratio ${ratio.toFixed(3)}`);
  }
}

if (errors > 0) {
  console.error(`\nValidation FAILED with ${errors} errors (${checked}/${locales.length * codes.length} valid).`);
  process.exit(1);
}

console.log(`\n✅ Validation PASSED! All ${checked} sticky-phone PNGs are valid (aspect ratio ~${PHONE_RATIO.toFixed(3)}).`);

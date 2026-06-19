import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const SCREENSHOTS_DIR = path.join(ROOT_DIR, 'public', 'miravelys-screenshots', 'sticky-phone');

const REQUIRED_LOCALES = ['en', 'ru', 'ro', 'fr', 'hi', 'zh', 'de', 'ja', 'es', 'pt'];
const REQUIRED_CODES = ['overview', 'write', 'layers', 'patterns', 'body', 'sounds', 'privacy'];

async function getWebpDimensions(filePath) {
  const handle = await fs.open(filePath, 'r');
  const buffer = Buffer.alloc(30);
  await handle.read(buffer, 0, 30, 0);
  await handle.close();

  if (buffer.toString('ascii', 0, 4) !== 'RIFF') return null;
  if (buffer.toString('ascii', 8, 12) !== 'WEBP') return null;

  const type = buffer.toString('ascii', 12, 16);
  if (type === 'VP8X') {
    const width = 1 + buffer.readUIntLE(24, 3);
    const height = 1 + buffer.readUIntLE(27, 3);
    return { width, height };
  } else if (type === 'VP8 ') {
    const width = buffer.readUInt16LE(26) & 0x3fff;
    const height = buffer.readUInt16LE(28) & 0x3fff;
    return { width, height };
  } else if (type === 'VP8L') {
    const b1 = buffer[21];
    const b2 = buffer[22];
    const b3 = buffer[23];
    const b4 = buffer[24];
    const width = 1 + (((b2 & 0x3f) << 8) | b1);
    const height = 1 + (((b4 & 0xf) << 10) | (b3 << 2) | ((b2 & 0xc0) >> 6));
    return { width, height };
  }
  return null;
}

async function validate() {
  let hasErrors = false;
  console.log('Validating sticky-phone screenshots...');

  for (const locale of REQUIRED_LOCALES) {
    const localeDir = path.join(SCREENSHOTS_DIR, locale);
    
    let dirExists = true;
    try {
      const stat = await fs.stat(localeDir);
      if (!stat.isDirectory()) dirExists = false;
    } catch {
      dirExists = false;
    }

    if (!dirExists) {
      console.error(`❌ ${locale}/sticky-phone missing language folder`);
      hasErrors = true;
      continue;
    }

    for (const code of REQUIRED_CODES) {
      const filePath = path.join(localeDir, `${code}.webp`);
      const relPath = `${locale}/sticky-phone/${code}.webp`;

      try {
        const stat = await fs.stat(filePath);
        if (stat.size === 0) {
          console.error(`❌ ${relPath} empty file`);
          hasErrors = true;
          continue;
        }

        const dims = await getWebpDimensions(filePath);
        if (!dims) {
          console.error(`❌ ${relPath} could not read dimensions (not valid webp?)`);
          hasErrors = true;
          continue;
        }

        const ratio = dims.width / dims.height;
        if (ratio < 0.455 || ratio > 0.470) {
          console.error(`❌ ${relPath} wrong ratio ${ratio.toFixed(3)} (${dims.width}x${dims.height})`);
          hasErrors = true;
        } else {
          console.log(`✅ ${relPath} ${dims.width}x${dims.height} ratio ${ratio.toFixed(3)}`);
        }

      } catch (err) {
        console.error(`❌ ${relPath} missing`);
        hasErrors = true;
      }
    }
  }

  if (hasErrors) {
    console.error('\nScreenshot validation failed.');
    process.exit(1);
  } else {
    console.log('\nAll screenshots validated successfully!');
  }
}

validate().catch(err => {
  console.error(err);
  process.exit(1);
});

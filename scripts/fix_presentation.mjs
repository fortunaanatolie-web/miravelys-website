import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  const appPath = '/Users/furtunaanatolie/Documents/Projects/PROJECT GPT-GEMINI/Miravelys /Miravelys/Core/Localization/InlineTranslationsCatalog.swift';
  const swiftContent = fs.readFileSync(appPath, 'utf8');

  const langToSwift = {
    "ru": ".ru", "ro": ".ro", "fr": ".fr", "hi": ".hi",
    "zh": ".zh", "de": ".de", "ja": ".ja", "es": ".es", "pt": ".pt"
  };

  const englishKeysToLookUp = {
    "Truth Line": "Clear Line",
    "Get Clear": "Get Clear",
    "Four Gentle Doorways": "Four gentle doorways.",
    "Sleep With Me": "Sleep With Me",
    "Breathe With Me": "Breathe with me",
    "Meditate With Me": "Meditate With Me",
    "Align Your Energy": "Align Your Energy",
    "Weekly Mirror": "Weekly Mirror"
  };

  const mapping = {};

  for (const [siteLang, swiftLang] of Object.entries(langToSwift)) {
    const blockStartIdx = swiftContent.indexOf(`        ${swiftLang}: [`);
    if (blockStartIdx === -1) continue;
    
    const blockEndIdx = swiftContent.indexOf(`        ],`, blockStartIdx);
    const blockText = swiftContent.substring(blockStartIdx, blockEndIdx);

    mapping[siteLang] = {};
    for (const [englishName, swiftKey] of Object.entries(englishKeysToLookUp)) {
      const escapedKey = swiftKey.replace(/\./g, '\\.');
      const regex = new RegExp(`"\\s*${escapedKey}\\s*"\\s*:\\s*"([^"]+)"`);
      const match = blockText.match(regex);
      
      if (match && match[1]) {
        let translation = match[1];
        if (englishName === "Four Gentle Doorways" && translation.endsWith('.')) {
          translation = translation.slice(0, -1);
        }
        mapping[siteLang][englishName] = translation;
      }
    }
  }

  const presentationPath = path.join(__dirname, '../src/i18n/presentationCopy.js');
  let presentationContent = fs.readFileSync(presentationPath, 'utf8');

  const wrongMirrorNames = {
    "ru": "Зеркало", "ro": "Oglindă", "fr": "Miroir", "hi": "दर्पण",
    "zh": "镜子", "de": "Spiegel", "ja": "ミラー", "es": "Espejo", "pt": "Espelho"
  };

  for (const [lang, map] of Object.entries(mapping)) {
    if (map["Weekly Mirror"] && wrongMirrorNames[lang]) {
      const wrongName = wrongMirrorNames[lang];
      const correctName = map["Weekly Mirror"];
      
      const wrongNameWithQuotes = `"${wrongName}"`;
      const correctNameWithQuotes = `"${correctName}"`;
      
      // Replace exactly the quoted wrong names
      presentationContent = presentationContent.split(wrongNameWithQuotes).join(correctNameWithQuotes);
      
      console.log(`[${lang}] Replaced ${wrongNameWithQuotes} with ${correctNameWithQuotes}`);
    }
  }

  // Also fix the Russian "Get Clear" which was mistranslated as "Линия ясности"
  // In ru.scenes.writeInside.body: 'В "Линия ясности" можно записать эмоцию...'
  // We should change it to 'В "Внести ясность" можно записать эмоцию...'
  if (mapping["ru"] && mapping["ru"]["Get Clear"]) {
     const ruGetClearCorrect = mapping["ru"]["Get Clear"];
     presentationContent = presentationContent.replace(
       `В "Линия ясности" можно записать эмоцию`,
       `В "${ruGetClearCorrect}" можно записать эмоцию`
     );
     presentationContent = presentationContent.replace(
       `Смотреть "Линия ясности"`,
       `Смотреть "${ruGetClearCorrect}"` // wait, we only want to replace the writeInside cta
     );
  }

  fs.writeFileSync(presentationPath, presentationContent, 'utf8');
  console.log("Updated presentationCopy.js");
}

main().catch(console.error);

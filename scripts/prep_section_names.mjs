import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  const { siteCopy } = await import('../src/i18n/siteCopy.js');

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
    if (blockStartIdx === -1) {
      console.warn(`Language block ${swiftLang} not found in Swift file.`);
      continue;
    }
    const blockEndIdx = swiftContent.indexOf(`        ],`, blockStartIdx);
    const blockText = swiftContent.substring(blockStartIdx, blockEndIdx);

    mapping[siteLang] = {};
    for (const [englishName, swiftKey] of Object.entries(englishKeysToLookUp)) {
      const escapedKey = swiftKey.replace(/\\./g, '\\\\.');
      const regex = new RegExp(`"\\s*${escapedKey}\\s*"\\s*:\\s*"([^"]+)"`);
      const match = blockText.match(regex);
      
      if (match && match[1]) {
        let translation = match[1];
        if (englishName === "Four Gentle Doorways" && translation.endsWith('.')) {
          translation = translation.slice(0, -1);
        }
        mapping[siteLang][englishName] = translation;
      } else {
        console.warn(`Translation for ${swiftKey} not found in ${swiftLang}. Using english fallback.`);
        mapping[siteLang][englishName] = englishName;
      }
    }
  }

  const updatedLocales = {};

  for (const [lang, map] of Object.entries(mapping)) {
    if (!siteCopy[lang]) continue;
    
    // Deep clone the locale
    const localeCopy = JSON.parse(JSON.stringify(siteCopy[lang]));

    // Update works.steps
    if (localeCopy.works && localeCopy.works.steps) {
      localeCopy.works.steps = localeCopy.works.steps.map(step => {
        let newTitle = step.title;
        let newBody = step.body;

        for (const [enTerm, translatedTerm] of Object.entries(map)) {
          // Wrap the translated term in double quotes
          const finalTerm = `"${translatedTerm}"`;
          
          const titleRegex = new RegExp(`\\b${enTerm}\\b`, 'g');
          newTitle = newTitle.replace(titleRegex, finalTerm);

          const bodyRegex = new RegExp(`\\b${enTerm}\\b`, 'g');
          newBody = newBody.replace(bodyRegex, finalTerm);
        }

        return { ...step, title: newTitle, body: newBody };
      });
    }

    if (localeCopy.explanation && localeCopy.explanation.blocks) {
      localeCopy.explanation.blocks = localeCopy.explanation.blocks.map(block => {
        let newTitle = block.title;
        let newBody = block.body;
        for (const [enTerm, translatedTerm] of Object.entries(map)) {
          const finalTerm = `"${translatedTerm}"`;
          
          const titleRegex = new RegExp(`\\b${enTerm}\\b`, 'g');
          newTitle = newTitle.replace(titleRegex, finalTerm);

          const bodyRegex = new RegExp(`\\b${enTerm}\\b`, 'g');
          newBody = newBody.replace(bodyRegex, finalTerm);
        }
        return { ...block, title: newTitle, body: newBody };
      });
    }

    updatedLocales[lang] = localeCopy;
  }

  // Write out to temp_injections.js
  const outputPath = path.join(__dirname, 'temp_injections.js');
  let outputStr = "export const injections = {\n";
  for (const lang of Object.keys(updatedLocales)) {
    outputStr += `"${lang}": ${JSON.stringify(updatedLocales[lang], null, 2)},\n`;
  }
  outputStr += "};\n";

  fs.writeFileSync(outputPath, outputStr, 'utf8');
  console.log("Wrote temp_injections.js");
}

main().catch(console.error);

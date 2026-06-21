import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  const { siteCopy } = await import('../src/i18n/siteCopy.js');

  const mapping = {
    "ru": { "Home": "Главная", "Truth Line": "Линия ясности", "Get Clear": "Линия ясности", "Calm Now": "Сначала спокойствие", "Sleep Now": "Засыпай со мной", "Weekly Mirror": "Зеркало" },
    "ro": { "Home": "Acasă", "Truth Line": "Linie clară", "Get Clear": "Linie clară", "Calm Now": "Calmul mai întâi", "Sleep Now": "Dormi cu mine", "Weekly Mirror": "Oglindă" },
    "fr": { "Home": "Accueil", "Truth Line": "Ligne claire", "Get Clear": "Ligne claire", "Calm Now": "Le calme d'abord", "Sleep Now": "Dors avec moi", "Weekly Mirror": "Miroir" },
    "hi": { "Home": "होम", "Truth Line": "स्पष्ट रेखा", "Get Clear": "स्पष्ट रेखा", "Calm Now": "पहले शांति", "Sleep Now": "मेरे साथ सोएं", "Weekly Mirror": "दर्पण" },
    "zh": { "Home": "首页", "Truth Line": "清晰线索", "Get Clear": "清晰线索", "Calm Now": "先平复心情", "Sleep Now": "和我一起入睡", "Weekly Mirror": "镜子" },
    "de": { "Home": "Start", "Truth Line": "Klare Linie", "Get Clear": "Klare Linie", "Calm Now": "Zuerst Ruhe", "Sleep Now": "Schlaf mit mir", "Weekly Mirror": "Spiegel" },
    "ja": { "Home": "ホーム", "Truth Line": "明確なライン", "Get Clear": "明確なライン", "Calm Now": "まずは穏やかに", "Sleep Now": "一緒に眠る", "Weekly Mirror": "ミラー" },
    "es": { "Home": "Inicio", "Truth Line": "Línea clara", "Get Clear": "Línea clara", "Calm Now": "La calma primero", "Sleep Now": "Duerme conmigo", "Weekly Mirror": "Espejo" },
    "pt": { "Home": "Início", "Truth Line": "Linha clara", "Get Clear": "Linha clara", "Calm Now": "Calma primeiro", "Sleep Now": "Durma comigo", "Weekly Mirror": "Espelho" }
  };

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
          // Replace only whole words to be safe, or just exact matches for these specific terms
          const titleRegex = new RegExp(`\\b${enTerm}\\b`, 'g');
          newTitle = newTitle.replace(titleRegex, translatedTerm);

          const bodyRegex = new RegExp(`\\b${enTerm}\\b`, 'g');
          newBody = newBody.replace(bodyRegex, translatedTerm);
        }

        return { ...step, title: newTitle, body: newBody };
      });
    }

    // Also update `works.steps` if they were part of `explanation.blocks`?
    // Let's check `explanation.blocks` titles too.
    if (localeCopy.explanation && localeCopy.explanation.blocks) {
      localeCopy.explanation.blocks = localeCopy.explanation.blocks.map(block => {
        let newTitle = block.title;
        let newBody = block.body;
        for (const [enTerm, translatedTerm] of Object.entries(map)) {
          const titleRegex = new RegExp(`\\b${enTerm}\\b`, 'g');
          newTitle = newTitle.replace(titleRegex, translatedTerm);

          const bodyRegex = new RegExp(`\\b${enTerm}\\b`, 'g');
          newBody = newBody.replace(bodyRegex, translatedTerm);
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

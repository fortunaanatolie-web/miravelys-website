import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  const { siteCopy } = await import('../src/i18n/siteCopy.js');

  const mapping = {
    "ru": { "Truth Line": "Линия ясности", "Get Clear": "Линия ясности", "Four Gentle Doorways": "Четыре мягких дверных проема", "Sleep With Me": "Засыпай со мной", "Breathe With Me": "Дыши со мной", "Meditate With Me": "Медитируй со мной", "Align Your Energy": "Выровняйте свою энергию", "Weekly Mirror": "Зеркало" },
    "ro": { "Truth Line": "Linie clară", "Get Clear": "Linie clară", "Four Gentle Doorways": "Patru intrări blânde", "Sleep With Me": "Dormi cu mine", "Breathe With Me": "Respiră cu mine", "Meditate With Me": "Meditează cu mine", "Align Your Energy": "Aliniază-ți energia", "Weekly Mirror": "Oglindă" },
    "fr": { "Truth Line": "Ligne claire", "Get Clear": "Ligne claire", "Four Gentle Doorways": "Quatre portes douces", "Sleep With Me": "Dors avec moi", "Breathe With Me": "Respire avec moi", "Meditate With Me": "Médite avec moi", "Align Your Energy": "Alignez votre énergie", "Weekly Mirror": "Miroir" },
    "hi": { "Truth Line": "स्पष्ट रेखा", "Get Clear": "स्पष्ट रेखा", "Four Gentle Doorways": "चार कोमल प्रवेश द्वार", "Sleep With Me": "मेरे साथ सोएं", "Breathe With Me": "मेरे साथ साँस लें", "Meditate With Me": "मेरे साथ ध्यान करें", "Align Your Energy": "अपनी ऊर्जा को संरेखित करें", "Weekly Mirror": "दर्पण" },
    "zh": { "Truth Line": "清晰线索", "Get Clear": "清晰线索", "Four Gentle Doorways": "四个温柔的门口", "Sleep With Me": "和我一起入睡", "Breathe With Me": "与我呼吸", "Meditate With Me": "与我一起冥想", "Align Your Energy": "调整你的能量", "Weekly Mirror": "镜子" },
    "de": { "Truth Line": "Klare Linie", "Get Clear": "Klare Linie", "Four Gentle Doorways": "Vier sanfte Türen", "Sleep With Me": "Schlaf mit mir", "Breathe With Me": "Atme mit mir", "Meditate With Me": "Meditiere mit mir", "Align Your Energy": "Richten Sie Ihre Energie aus", "Weekly Mirror": "Spiegel" },
    "ja": { "Truth Line": "明確なライン", "Get Clear": "明確なライン", "Four Gentle Doorways": "4つの優しい入り口", "Sleep With Me": "一緒に眠る", "Breathe With Me": "一緒に呼吸", "Meditate With Me": "一緒に瞑想しましょう", "Align Your Energy": "エネルギーを整える", "Weekly Mirror": "ミラー" },
    "es": { "Truth Line": "Línea clara", "Get Clear": "Línea clara", "Four Gentle Doorways": "Cuatro puertas suaves", "Sleep With Me": "Duerme conmigo", "Breathe With Me": "Respira conmigo", "Meditate With Me": "Medita conmigo", "Align Your Energy": "Alinea tu energía", "Weekly Mirror": "Espejo" },
    "pt": { "Truth Line": "Linha clara", "Get Clear": "Linha clara", "Four Gentle Doorways": "Quatro portas suaves", "Sleep With Me": "Durma comigo", "Breathe With Me": "Respire comigo", "Meditate With Me": "Medite comigo", "Align Your Energy": "Alinhe sua energia", "Weekly Mirror": "Espelho" }
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

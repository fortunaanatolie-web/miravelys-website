import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const presentationCopyPath = path.join(__dirname, '../src/i18n/presentationCopy.js');
let content = fs.readFileSync(presentationCopyPath, 'utf8');

const mapping = {
  "ru": { "Get Clear": "Линия ясности", "Truth Line": "Линия ясности", "Four Gentle Doorways": "Четыре мягких входа", "Weekly Mirror": "Зеркало", "Sleep With Me": "Засыпай со мной", "Breathe With Me": "Дыши со мной", "Meditate With Me": "Медитируй со мной", "Align Your Energy": "Настрой свою энергию" },
  "ro": { "Get Clear": "Linie clară", "Truth Line": "Linie clară", "Four Gentle Doorways": "Patru uși blânde", "Weekly Mirror": "Oglindă", "Sleep With Me": "Dormi cu mine", "Breathe With Me": "Respiră cu mine", "Meditate With Me": "Meditează cu mine", "Align Your Energy": "Aliniază-ți energia" },
  "fr": { "Get Clear": "Ligne claire", "Truth Line": "Ligne claire", "Four Gentle Doorways": "Quatre portes douces", "Weekly Mirror": "Miroir", "Sleep With Me": "Dors avec moi", "Breathe With Me": "Respire avec moi", "Meditate With Me": "Médite avec moi", "Align Your Energy": "Aligne ton énergie" },
  "hi": { "Get Clear": "स्पष्ट रेखा", "Truth Line": "स्पष्ट रेखा", "Four Gentle Doorways": "चार कोमल द्वार", "Weekly Mirror": "दर्पण", "Sleep With Me": "मेरे साथ सोएं", "Breathe With Me": "मेरे साथ सांस लें", "Meditate With Me": "मेरे साथ ध्यान करें", "Align Your Energy": "अपनी ऊर्जा को संरेखित करें" },
  "zh": { "Get Clear": "清晰线索", "Truth Line": "清晰线索", "Four Gentle Doorways": "四个温柔入口", "Weekly Mirror": "镜子", "Sleep With Me": "和我一起入睡", "Breathe With Me": "和我一起呼吸", "Meditate With Me": "和我一起冥想", "Align Your Energy": "调整你的能量" },
  "de": { "Get Clear": "Klare Linie", "Truth Line": "Klare Linie", "Four Gentle Doorways": "Vier sanfte Türen", "Weekly Mirror": "Spiegel", "Sleep With Me": "Schlaf mit mir", "Breathe With Me": "Atme mit mir", "Meditate With Me": "Meditiere mit mir", "Align Your Energy": "Richte deine Energie aus" },
  "ja": { "Get Clear": "明確なライン", "Truth Line": "明確なライン", "Four Gentle Doorways": "四つの優しい入口", "Weekly Mirror": "ミラー", "Sleep With Me": "一緒に眠る", "Breathe With Me": "一緒に呼吸する", "Meditate With Me": "一緒に瞑想する", "Align Your Energy": "エネルギーを整える" },
  "es": { "Get Clear": "Línea clara", "Truth Line": "Línea clara", "Four Gentle Doorways": "Cuatro puertas suaves", "Weekly Mirror": "Espejo", "Sleep With Me": "Duerme conmigo", "Breathe With Me": "Respira conmigo", "Meditate With Me": "Medita conmigo", "Align Your Energy": "Alinea tu energía" },
  "pt": { "Get Clear": "Linha clara", "Truth Line": "Linha clara", "Four Gentle Doorways": "Quatro portas suaves", "Weekly Mirror": "Espelho", "Sleep With Me": "Durma comigo", "Breathe With Me": "Respire comigo", "Meditate With Me": "Medite comigo", "Align Your Energy": "Alinhe sua energia" }
};

let modifiedContent = content;

for (const [lang, map] of Object.entries(mapping)) {
  const regex = new RegExp(`const ${lang} = \\{([\\s\\S]*?)\\n\\};`, 'g');
  
  modifiedContent = modifiedContent.replace(regex, (match, blockContent) => {
    let updatedBlock = blockContent;
    for (const [enTerm, translatedTerm] of Object.entries(map)) {
      const finalTerm = `"${translatedTerm}"`;
      // We want to replace occurrences of enTerm
      const termRegex = new RegExp(`\\b${enTerm}\\b`, 'g');
      updatedBlock = updatedBlock.replace(termRegex, finalTerm);
    }
    return `const ${lang} = {${updatedBlock}\n};`;
  });
}

fs.writeFileSync(presentationCopyPath, modifiedContent, 'utf8');
console.log("Updated presentationCopy.js with quoted localized section names.");

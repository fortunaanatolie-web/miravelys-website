import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const siteCopyPath = path.join(__dirname, '../src/i18n/siteCopy.js');
let content = fs.readFileSync(siteCopyPath, 'utf8');

const replacements = {
  "ru": [
    ["Home принимает тебя там, где ты есть", "Главная принимает тебя там, где ты есть"],
    ["Truth Line распутывает клубок", "Линия ясности распутывает клубок"],
    ["Calm Now бережёт твой мир", "Сначала спокойствие бережёт твой мир"],
    ["Sleep Now уважает твой отдых", "Засыпай со мной уважает твой отдых"],
    ["Weekly Mirror отражает с заботой", "Зеркало отражает с заботой"]
  ],
  "ro": [
    ["Home te întâmpină acolo unde ești", "Acasă te întâmpină acolo unde ești"],
    ["Truth Line descurcă nodul", "Linie clară descurcă nodul"],
    ["Calm Now îți protejează liniștea", "Calmul mai întâi îți protejează liniștea"],
    ["Sleep Now îți respectă odihna", "Dormi cu mine îți respectă odihna"],
    ["Weekly Mirror reflectă cu grijă", "Oglindă reflectă cu grijă"]
  ],
  "fr": [
    ["Home vous rejoint là où vous êtes", "Accueil vous rejoint là où vous êtes"],
    ["Truth Line démêle le nœud", "Ligne claire démêle le nœud"],
    ["Calm Now protège votre paix", "Le calme d'abord protège votre paix"],
    ["Sleep Now respecte votre repos", "Dors avec moi respecte votre repos"],
    ["Weekly Mirror reflète avec soin", "Miroir reflète avec soin"]
  ],
  "hi": [
    ["Home आपको वहीं मिलता है जहाँ आप हैं", "होम आपको वहीं मिलता है जहाँ आप हैं"],
    ["Truth Line उलझन को सुलझाती है", "स्पष्ट रेखा उलझन को सुलझाती है"],
    ["Calm Now आपकी शांति की रक्षा करता है", "पहले शांति आपकी शांति की रक्षा करता है"],
    ["Sleep Now आपके आराम का सम्मान करता है", "मेरे साथ सोएं आपके आराम का सम्मान करता है"],
    ["Weekly Mirror देखभाल के साथ दर्शाता है", "दर्पण देखभाल के साथ दर्शाता है"]
  ],
  "zh": [
    ["Home 会在你所在的地方与你相遇", "首页 会在你所在的地方与你相遇"],
    ["Truth Line 能解开结", "清晰线索 能解开结"],
    ["Calm Now 会保护你的平静", "先平复心情 会保护你的平静"],
    ["Sleep Now 会尊重你的休息", "和我一起入睡 会尊重你的休息"],
    ["Weekly Mirror 会用心地反映", "镜子 会用心地反映"]
  ],
  "de": [
    ["Home holt dich da ab, wo du bist", "Start holt dich da ab, wo du bist"],
    ["Truth Line entwirrt den Knoten", "Klare Linie entwirrt den Knoten"],
    ["Calm Now beschützt deinen Frieden", "Zuerst Ruhe beschützt deinen Frieden"],
    ["Sleep Now respektiert deine Ruhe", "Schlaf mit mir respektiert deine Ruhe"],
    ["Weekly Mirror reflektiert mit Sorgfalt", "Spiegel reflektiert mit Sorgfalt"]
  ],
  "ja": [
    ["Homeは今のあなたを受け入れます", "ホームは今のあなたを受け入れます"],
    ["Truth Lineが絡まりを解く", "明確なラインが絡まりを解く"],
    ["Calm Nowがあなたの平穏を守る", "まずは穏やかにがあなたの平穏を守る"],
    ["Sleep Nowは休息を尊重する", "一緒に眠るは休息を尊重する"],
    ["Weekly Mirrorは気遣いとともに映し出す", "ミラーは気遣いとともに映し出す"]
  ],
  "es": [
    ["Home te encuentra donde estás", "Inicio te encuentra donde estás"],
    ["Truth Line desenreda el lío", "Línea clara desenreda el lío"],
    ["Calm Now protege tu paz", "La calma primero protege tu paz"],
    ["Sleep Now respeta tu descanso", "Duerme conmigo respeta tu descanso"],
    ["Weekly Mirror refleja con cuidado", "Espejo refleja con cuidado"]
  ],
  "pt": [
    ["O Home encontra-te onde estás", "O Início encontra-te onde estás"],
    ["Home encontra-te onde estás", "Início encontra-te onde estás"], // Fallback
    ["Truth Line desembaraça a confusão", "Linha clara desembaraça a confusão"],
    ["Calm Now protege a tua paz", "Calma primeiro protege a tua paz"],
    ["Sleep Now respeita o teu descanso", "Durma comigo respeita o teu descanso"],
    ["Weekly Mirror reflete com cuidado", "Espelho reflete com cuidado"]
  ]
};

let modifiedContent = content;

for (const [lang, langReplacements] of Object.entries(replacements)) {
  for (const [oldStr, newStr] of langReplacements) {
    if (modifiedContent.includes(oldStr)) {
        modifiedContent = modifiedContent.replace(oldStr, newStr);
        console.log(`Replaced in ${lang}: "${oldStr}" -> "${newStr}"`);
    } else {
        console.log(`Warning: Could not find "${oldStr}" in ${lang}`);
    }
  }
}

fs.writeFileSync(siteCopyPath, modifiedContent, 'utf8');
console.log("Updated siteCopy.js with localized section names.");

import fs from 'fs';

const siteCopyPath = 'src/i18n/siteCopy.js';
const newEnPath = '/Users/furtunaanatolie/.gemini/antigravity-ide/brain/02eb3fde-3a7f-4236-97b2-24ffb8eac92e/scratch/en_siteCopy.js';

let siteCopy = fs.readFileSync(siteCopyPath, 'utf8');
const newEn = fs.readFileSync(newEnPath, 'utf8');

// The newEn string contains:
// const siteCopy = {
//   "en": {
//      ...
//   }
// };
// We need to extract the "en" object and put it into the actual siteCopy string.

// Let's just use regex to replace the "en": { ... } block before "ru": {
const enStart = siteCopy.indexOf('"en": {');
const ruStart = siteCopy.indexOf('"ru": {');

if (enStart !== -1 && ruStart !== -1) {
  // Extract just the "en": { ... } part from newEn
  const newEnStart = newEn.indexOf('"en": {');
  const newEnEnd = newEn.lastIndexOf('}');
  // The last } is for the object, the second to last is for "en"
  
  const extractedEn = newEn.substring(newEnStart, newEn.lastIndexOf('}', newEnEnd - 1) + 1);
  
  const beforeEn = siteCopy.substring(0, enStart);
  const afterEn = siteCopy.substring(ruStart);
  
  const finalFile = beforeEn + extractedEn + ',\n  ' + afterEn;
  
  fs.writeFileSync(siteCopyPath, finalFile, 'utf8');
  console.log("Successfully replaced 'en' section.");
} else {
  console.error("Could not find 'en' or 'ru' block.");
}

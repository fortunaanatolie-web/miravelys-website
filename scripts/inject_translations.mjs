import fs from 'fs';

const siteCopyPath = 'src/i18n/siteCopy.js';
const newTranslationsPath = process.argv[2];

let siteCopy = fs.readFileSync(siteCopyPath, 'utf8');
const newTranslationsContent = fs.readFileSync(newTranslationsPath, 'utf8');

// Use an AST or regex approach? Regex for matching `"key": { ... }` at the top level is tricky if it contains nested brackets.
// We can use a simple bracket matching parser.

function replaceBlock(fileContent, key, newBlockString) {
  const startStr = `"${key}": {`;
  const startIndex = fileContent.indexOf(startStr);
  if (startIndex === -1) return fileContent;

  let braceCount = 0;
  let inString = false;
  let escape = false;
  let endIndex = -1;

  for (let i = startIndex + startStr.length - 1; i < fileContent.length; i++) {
    const char = fileContent[i];
    
    if (escape) {
      escape = false;
      continue;
    }
    
    if (char === '\\') {
      escape = true;
      continue;
    }
    
    if (char === '"') {
      inString = !inString;
      continue;
    }
    
    if (!inString) {
      if (char === '{') {
        braceCount++;
      } else if (char === '}') {
        braceCount--;
        if (braceCount === 0) {
          endIndex = i;
          break;
        }
      }
    }
  }

  if (endIndex !== -1) {
    const before = fileContent.substring(0, startIndex);
    const after = fileContent.substring(endIndex + 1);
    return before + newBlockString + after;
  }
  return fileContent;
}

// Read the keys from the newTranslationsContent
// The newTranslationsContent is like: export const ru_ro_fr = { "ru": { ... }, "ro": { ... }, "fr": { ... } };
// We can use eval or Function to get the object, or just parse it.
// Since it has export const, let's remove that and parse as JSON or JS object.
const objectStr = newTranslationsContent.replace(/export const \w+ = /, '').replace(/;\s*$/, '');

// Wait, the objectStr might not be strict JSON. Let's just use Function to evaluate it.
const getObj = new Function(`return ${objectStr}`);
const obj = getObj();

for (const key of Object.keys(obj)) {
  const newBlockString = `"${key}": ` + JSON.stringify(obj[key], null, 2);
  // Add 2 spaces of indentation to each line
  const indentedBlock = newBlockString.split('\n').map((line, idx) => idx === 0 ? line : '  ' + line).join('\n');
  siteCopy = replaceBlock(siteCopy, key, indentedBlock);
  console.log(`Replaced block for: ${key}`);
}

fs.writeFileSync(siteCopyPath, siteCopy, 'utf8');
console.log('Successfully updated siteCopy.js');

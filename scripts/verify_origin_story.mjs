/** Verifies founder origin story lives on its own page. */
import { languages } from '../src/i18n/siteCopy.js';
import { originCopy, resolveOriginCopy } from '../src/i18n/originCopy.js';
import { nameStoryCopy, resolveNameStoryCopy } from '../src/i18n/nameStoryCopy.js';
import { originBlockOrder } from '../src/config/originBlocks.js';
import fs from 'node:fs';

const errors = [];
const assert = (condition, message) => { if (!condition) errors.push(message); };
const requiredBlockKeys = originBlockOrder.map(block => block.key);

const app = fs.readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8');
const router = fs.readFileSync(new URL('../src/SiteRouter.jsx', import.meta.url), 'utf8');
const page = fs.readFileSync(new URL('../src/pages/FounderStoryPage.jsx', import.meta.url), 'utf8');
const section = fs.readFileSync(new URL('../src/components/marketing/sections/OriginStorySection.jsx', import.meta.url), 'utf8');
const teaser = fs.readFileSync(new URL('../src/components/marketing/sections/StoryTeaserSection.jsx', import.meta.url), 'utf8');

assert(!app.includes('OriginStorySection'), 'Main App must not mount full OriginStorySection');
assert(app.includes('StoryTeaserSection'), 'Main App must include tasteful story teaser link');
assert(router.includes('path="/story"') && router.includes('FounderStoryPage'), 'Router must expose /story FounderStoryPage');
assert(page.includes('OriginStorySection'), 'FounderStoryPage must mount OriginStorySection');
assert(section.includes('id="origin"'), 'OriginStorySection must expose id="origin"');
assert(section.includes('PhoneMockup'), 'Origin story must include phone mockups');
assert(section.includes('NameStorySection'), 'Origin story must render the final name story section');
assert(teaser.includes('to="/story"'), 'Story teaser must link to /story');

for (const language of languages) {
  const code = language.code;
  const origin = resolveOriginCopy(code);
  assert(originCopy[code], `Missing originCopy for ${code}`);
  assert(origin.title, `Missing origin.title in ${code}`);
  assert(origin.cta, `Missing origin.cta in ${code}`);
  assert((origin.intro ?? []).length >= 2, `origin.intro needs paragraphs in ${code}`);
  for (const key of requiredBlockKeys) {
    assert(origin.blocks?.[key], `Missing origin.blocks.${key} in ${code}`);
    assert(origin.blockLabels?.[key], `Missing origin.blockLabels.${key} in ${code}`);
  }
  assert((origin.blocks.questions?.items ?? []).length >= 6, `questions list in ${code}`);
  assert((origin.blocks.whatMindAdds?.transforms ?? []).length >= 5, `transforms in ${code}`);
  assert((origin.blocks.humility?.insights ?? []).length >= 4, `insights in ${code}`);
  assert((origin.blocks.sounds?.types ?? []).length >= 4, `sound types in ${code}`);
  assert((origin.blocks.places?.items ?? []).length >= 5, `places in ${code}`);
  assert((origin.blocks.intention?.audience ?? []).length >= 5, `audience in ${code}`);

  const nameStory = resolveNameStoryCopy(code);
  assert(nameStoryCopy[code], `Missing nameStoryCopy for ${code}`);
  assert(nameStory.title, `Missing nameStory.title in ${code}`);
  assert((nameStory.intro ?? []).length >= 3, `nameStory.intro needs paragraphs in ${code}`);
  assert((nameStory.pieces ?? []).length === 3, `nameStory.pieces must include Mira, vel, lys in ${code}`);
  assert(nameStory.pieces?.map(piece => piece.name).join('|') === 'Mira|vel|lys', `nameStory.pieces must preserve Mira/vel/lys in ${code}`);
  assert((nameStory.closing ?? []).length >= 5, `nameStory.closing needs paragraphs in ${code}`);
  assert(nameStory.finalStatement, `Missing nameStory.finalStatement in ${code}`);
}

if (errors.length) {
  console.error('❌ Origin story verification failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}
console.log(`✅ Origin story verified as separate /story page (${languages.length} languages, ${requiredBlockKeys.length} blocks, localized name chapter).`);

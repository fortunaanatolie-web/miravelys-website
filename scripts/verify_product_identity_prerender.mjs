import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { APP_IDENTITY_ASSETS } from '../src/config/appIdentityAssets.js';
import { resolveAppIdentity } from '../src/config/appIdentity.js';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = join(root, 'dist');
const siteUrl = 'https://miravelys.com';

const routes = [
  ['/products', 'miravelys', 'Products — Miravelys'],
  ['/mirascribe', 'mirascribe', 'MiraScribe — Private Offline Transcription for Mac'],
  ['/mirascribe/support', 'mirascribe', 'MiraScribe Support'],
  ['/mirascribe/privacy', 'mirascribe', 'MiraScribe Privacy'],
  ['/mirascribe/legal', 'mirascribe', 'MiraScribe Legal'],
  ['/mirascribe/acknowledgements', 'mirascribe', 'MiraScribe Acknowledgements'],
  ['/miravoxis', 'miravoxis', 'MiraVoxis — Local Voice Studio for Mac'],
  ['/miravoxis/support', 'miravoxis', 'MiraVoxis Support'],
  ['/miravoxis/privacy', 'miravoxis', 'MiraVoxis Privacy'],
];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function routeFile(path) {
  return join(dist, path.replace(/^\//, ''), 'index.html');
}

function absoluteAsset(path) {
  return path.startsWith('http') ? path : `${siteUrl}${path}`;
}

for (const [path, appId, title] of routes) {
  const identity = resolveAppIdentity(path);
  const assets = identity.assets;
  const html = await readFile(routeFile(path), 'utf8');
  const canonical = `${siteUrl}${path}`;

  assert(identity.id === appId, `${path}: resolver returned ${identity.id}, expected ${appId}`);
  assert(html.includes(`<title>${title}</title>`), `${path}: prerendered title mismatch`);
  assert(html.includes(`<link rel="canonical" href="${canonical}">`), `${path}: prerendered canonical mismatch`);
  assert(html.includes(`content="${canonical}"`), `${path}: social URL does not contain canonical product route`);

  for (const [surface, asset] of [
    ['favicon ICO', assets.faviconIco],
    ['16px icon', assets.icon16],
    ['32px icon', assets.icon32],
    ['48px icon', assets.icon48],
    ['Apple touch icon', assets.appleTouchIcon],
    ['manifest', assets.manifest],
  ]) {
    assert(html.includes(asset), `${path}: prerendered ${surface} is not ${appId}: ${asset}`);
  }

  const socialImage = absoluteAsset(assets.ogImage);
  assert(html.includes(`content="${socialImage}"`), `${path}: prerendered social image is not ${appId}: ${socialImage}`);
  assert(html.includes(`data-app-identity="${appId}"`), `${path}: product identity marker is missing from prerendered head`);

  if (appId !== 'miravelys') {
    const otherIds = ['mirascribe', 'miravoxis'].filter(id => id !== appId);
    for (const otherId of otherIds) {
      const otherAssets = APP_IDENTITY_ASSETS[otherId];
      assert(!html.includes(otherAssets.faviconIco), `${path}: stale ${otherId} favicon leaked into prerendered head`);
      assert(!html.includes(otherAssets.manifest), `${path}: stale ${otherId} manifest leaked into prerendered head`);
    }
  }
}

console.log(JSON.stringify({
  status: 'PASS',
  routes: routes.length,
  contract: 'route = prerendered title = canonical app identity resolver',
}, null, 2));

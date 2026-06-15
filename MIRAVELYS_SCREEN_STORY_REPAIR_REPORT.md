# Miravelys website — screen-story restoration pass

## Reason for this pass
The previous correction made the website more product-accurate, but it weakened the beautiful screen-by-screen app presentation. This pass restores that presentation while keeping the important rule: visible text must explain the Miravelys product experience, not describe images, mockups, frames, or decorative scenes.

## What was restored
A new screen-by-screen product story section was added after the main product reveal journey and before the proof/CTA sections.

It presents every app screen as a dedicated cinematic chapter with:

- one large localized phone mockup;
- dedicated text explaining what that screen does inside Miravelys;
- a before/after emotional shift;
- a clear action to view the same moment inside the app section;
- responsive alternating layout on desktop;
- clean stacked phone-first layout on tablet and mobile.

## Screen pairings

1. **Welcome** — explains beginning without pressure and starting with one honest line.
2. **Today / Home** — explains choosing what helps now: clarity, calming, sleep, or reflection.
3. **Get Clear** — explains writing the emotion, belief, body signal, or repeated thought.
4. **Truth Line** — explains separating moment, emotion, body reaction, story, belief candidate, and unknown.
5. **Calm Now** — explains supporting the body first through breathing, grounding, meditation, and calming sounds.
6. **Sleep With Me** — explains soft nighttime support, parking the loop, and avoiding heavy analysis before rest.
7. **Weekly Mirror** — explains noticing repeated patterns gently with evidence and correction controls.

## Localization
Added full localized copy for the restored screen-story section in all supported languages:

- English
- Russian
- Romanian
- French
- Hindi
- Chinese
- German
- Japanese
- Spanish
- Portuguese

New localization file:

- `src/i18n/screenStoryCopy.js`

## Code added or changed

- Added `src/components/marketing/sections/ScreenStorySection.jsx`
- Added `src/i18n/screenStoryCopy.js`
- Added `src/styles/site-screen-story.css`
- Imported the section into `src/App.jsx`
- Imported the stylesheet in `src/main.jsx`
- Wired each chapter action to set the matching active app screen and scroll to the mockup section.

## Visual repair
The new section keeps the premium Miravelys identity:

- cinematic glass cards;
- warm blurred light;
- large readable typography;
- full, clean phone mockups;
- no extra fake browser frames;
- no clutter around app screens;
- alternating rhythm on desktop;
- mobile-first stacked layout with the phone visible first.

## Content repair
The restored section does **not** say things like:

- “this image shows…”
- “a phone floating…”
- “mockup near the text…”
- “a screenshot showing…”
- “a cinematic preview scene…”

The visible copy explains app purpose, user benefit, and the emotional shift each screen supports.

## Behavior repair
Each screen-story chapter includes an action that:

- sets the related mockup as active;
- scrolls to the app screen section;
- keeps the existing gallery and language switching behavior intact.

## Verification run
The following commands passed:

- `npm run build`
- `npm run verify:miravelys-site`
- `npm run verify:lifestyle-audit`
- `npm run verify:purpose`
- `npm run verify:interactions`
- `npm run verify:responsive`
- `npm run verify:marketing`

## Browser smoke note
A local Chromium/Playwright smoke test was attempted with the system Chromium executable, but navigation to `127.0.0.1` was blocked by the container administrator policy (`ERR_BLOCKED_BY_ADMINISTRATOR`). The repository build and all available verification scripts pass.

## Remaining issues
No code or verification blockers remain in this pass. The only limitation was the container browser navigation policy during manual screenshot testing.

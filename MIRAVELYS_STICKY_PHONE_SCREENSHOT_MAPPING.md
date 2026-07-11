# Miravelys Sticky Phone Screenshot Mapping

Screen-only PNGs for the website iPhone sticky phone (no device chrome).  
Normalized to **1170×2532** (iPhone 13 Pro ratio ~0.462).

## Screen map (all locales)

| Website code | App view / v5 mockup screen | Why it matches the story step |
|---|---|---|
| `overview` | `SimplifiedHomeView` / `home` | Main home / daily guidance entry |
| `write` | `SessionComposerView` capture / `get-clear-1` | Truth writing / Get Clear input |
| `layers` | `SessionComposerView` Truth Line / `get-clear-4` | Fact / story / body layer separation (legacy: `screen-truth`) |
| `patterns` | `EnhancedWeeklyMirrorView` / `weekly-mirror` | Weekly mirror / patterns over time |
| `body` | `CalmFourDoorHubView` / `calm-hub` | Calm My Body First / four gentle doorways |
| `sounds` | `SleepWithMeViews` landing / `sleep` | Sleep / rest / grounding sounds entry |
| `privacy` | Private welcome / `welcome` | Trust + local-first entry (legacy: `screen-welcome`) |

## Generation process

### Primary (website, repeatable)

1. **Script:** `npm run capture:sticky-phone-screens` in the website repo  
2. **Source:** `Miravelys/Miravelys/web/mockups/miravelys-redesign-v5/index.html` (canonical v5 mockup in app repo)  
3. **Localization:** App `L10n+{LOCALE}.swift` string tables applied to mockup DOM before capture  
4. **Output:** `public/miravelys-screenshots/sticky-phone/{locale}/{code}.png`  
5. **Normalize:** `scripts/lib/trim_screen_png.py` → 1170×2532  
6. **Validate:** `npm run validate:sticky-phone-pngs`

### Optional (true SwiftUI simulator captures)

1. **UI test:** `MiravelysUITests/MiravelysCoreFlowUITests/testGenerateWebsiteScreenshot`  
2. **Orchestrator:** `Scripts/generate_sticky_phone_screenshots.py` in the app repo  
3. **Env:** `MIRAVELYS_WEBSITE_SCREENSHOT_OUTPUT`, optional `MIRAVELYS_WEBSITE_SCREENSHOT_LOCALE`  
4. **UITest surfaces:** see table below  

| Code | `MIRAVELYS_UI_TEST_OPEN_SURFACE` / subflow | Extra env |
|---|---|---|
| overview | _(home default)_ | — |
| write | `getClearCapture` | — |
| layers | `getClearCapture` | `MIRAVELYS_UI_TEST_PREFILL_CAPTURE` + advance to inquiry sort deck |
| patterns | `weeklyMirror` | — |
| body | `calmHub` | — |
| sounds | — | `MIRAVELYS_UI_TEST_CALM_SUBFLOW=sleepWithMe` |
| privacy | `settingsPrivacy` | — |

Language: `-autolysisLanguage {locale}` on app launch.

## Per-entry template

```
locale: ro
code: layers
final path: /public/miravelys-screenshots/sticky-phone/ro/layers.png
app source: SessionComposerView inquiry sort deck (Get Clear) / mockup get-clear-2
reason: shows fact / story / body layer separation before the gentle question
image size: 1170x2532
aspect ratio: 0.462
localized: yes
notes: captured via capture_sticky_phone_screenshots.mjs + L10n+RO.swift
```

## Inventory (70 files)

| locale | codes |
|---|---|
| en, ru, ro, fr, hi, zh, de, ja, es, pt | overview, write, layers, patterns, body, sounds, privacy |

## Technical spec

- **Format:** PNG, screen-only (no phone chrome)  
- **Target size:** 1170×2532 (also accepts same-ratio captures normalized via trim script)  
- **Aspect ratio:** 0.455–0.470  
- **Website frame:** `aspect-ratio: 390 / 844`, `object-fit: cover`, `object-position: top center`

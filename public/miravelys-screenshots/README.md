# Miravelys website screenshots

Localized **`.png`** files for the sticky phone and other marketing groups. Paths are resolved from `src/lib/miravelysScreenshots.js` — **do not hardcode paths in React components**.

## Path pattern

```
/miravelys-screenshots/{group}/{locale}/{code}.png
```

**Locales:** `en`, `ru`, `ro`, `fr`, `hi`, `zh`, `de`, `ja`, `es`, `pt`

## Sticky phone (complete)

```
public/miravelys-screenshots/sticky-phone/{locale}/{overview|write|layers|patterns|body|sounds|privacy}.png
```

Regenerate:

```bash
npm run capture:sticky-phone-screens
npm run validate:sticky-phone-pngs
```

Source: Miravelys app repo `web/mockups/miravelys-redesign-v5` + `L10n+*.swift` tables. See `MIRAVELYS_STICKY_PHONE_SCREENSHOT_MAPPING.md`.

## Image mode: screen-only

Sticky-phone PNGs are **screen-only** (1170×2532, ratio ~0.462). The CSS iPhone frame wraps them with `object-fit: cover`.

## Validate

```bash
npm run validate:sticky-phone-pngs
npm run validate:sticky-phone-screenshots
```

## Fallback chain (runtime)

1. Request `{locale}/{code}.png` in `public/miravelys-screenshots/`
2. If missing, try English `{code}.png`
3. Legacy bundled PNG from `src/assets/mockups/` (development fallback)
4. Dev placeholder when all sources fail

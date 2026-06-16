# Miravelys website screenshots

Upload localized **`.webp`** files here. The site resolves paths from `src/lib/miravelysScreenshots.js` — **do not hardcode paths in React components**.

## Path pattern

```
/miravelys-screenshots/{group}/{locale}/{code}.webp
```

**Locales:** `en`, `ru`, `ro`, `fr`, `hi`, `zh`, `de`, `ja`, `es`, `pt`

## Groups and required codes

| Group | Codes | Used on |
| --- | --- | --- |
| `sticky-phone` | `overview`, `write`, `layers`, `patterns`, `body`, `sounds`, `privacy` | Main page sticky scroll story, mockup gallery |
| `hero` | `main` | Origin story “places” block |
| `story-page` | `writing`, `grounding`, `reflection` | `/story` founder narrative blocks |
| `grounding` | `breathe`, `meditate`, `sleep`, `align`, `player` | Origin story sounds block |
| `privacy` | `privacy`, `settings`, `correction`, `local-first` | Trust / privacy section |
| `final-cta` | `main` | Origin story finale |
| `secondary` | `contact`, `support`, `privacy-summary`, `early-access` | Reserved for future sections |

## Image mode: internal screen only

Most phone mockups use **screen-only** assets (780×1688 PNG legacy size) placed inside the CSS device frame — **not** full-phone marketing renders.

Exception: future hero/full-device art may use full-phone images; document any such asset in the manifest before use.

## Quality rules

- Format: **WebP**, sRGB
- Match legacy internal screen dimensions unless the manifest entry is updated
- One file per `{group}/{locale}/{code}` — no duplicate naming
- Keep text legible at phone mockup scale on mobile

## Fallback chain (runtime)

1. Request `{locale}/{code}.webp`
2. If missing, try **English** `{code}.webp` (same group)
3. If still missing, load legacy PNG from `src/assets/mockups/{locale}/` via manifest legacy map
4. In development, show a labeled placeholder when all sources fail

## Validate

```bash
npm run validate:screenshots
```

Reports folder structure and wired references. Missing `.webp` files are warnings until you upload them.

## Upload checklist (per locale)

For each locale folder, add the codes listed above. Start with `sticky-phone` (7 files) — that covers the main marketing page scroll story.

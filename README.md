# Miravelys public website

The public site is the marketing companion for Miravelys: a private place to slow down, separate what happened from what the mind added, and notice recurring patterns. It is not positioned as therapy, diagnosis, or an AI authority.

## Public contract

- The homepage follows one story: a recurring loop, the unanswered-message example, the three-part reflection method, support for settling, privacy, and a modest invitation.
- Entries are described as local-first by default. Optional cloud or provider help is always presented as a separate, deliberate choice.
- English lives at canonical unprefixed URLs; the other supported languages live beneath their locale prefix.
- The founder story is authored in English and Russian. Other locale routes disclose the English fallback rather than pretending the story is translated.

## Architecture

- `src/App.jsx` contains the active home journey.
- `src/i18n/loopStoryCopy.js` owns the public product story; `src/i18n/earlyAccessCopy.js` owns the truthful early-access flow.
- `src/styles/site-loop-journey.css` owns the active visual system. Retired presentation and sticky-story styles are no longer imported by the live route.
- `public/` holds source app captures for the internal capture workflow.
- `public-site/` is the curated deployment payload: responsive AVIF app screens, compact JPEG fallbacks, legal/static files, and the social card.
- `scripts/prerender_public_routes.mjs` emits static HTML route shells with canonical URLs, locale alternates, and social metadata after every production build.

## Early access

Set `VITE_WAITLIST_ENDPOINT` to receive `POST` requests containing `email`, `source`, and `language`. Without an endpoint, the website deliberately prepares a `mailto:` request instead of claiming that the visitor has already joined a list.

## Commands

```bash
npm run build
npm run verify:public-contract
```

The verification checks every deployed locale/route shell, responsive screenshot family, canonical/hreflang/social metadata, and the hero asset budget.

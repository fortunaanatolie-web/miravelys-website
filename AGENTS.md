# Repository Engineering Governance

## Evidence > Confidence

This repository follows an evidence-first engineering discipline.

Required loop:

CANONICAL STATE → INSPECT → UNDERSTAND → MAP OWNERSHIP → IDENTIFY ROOT CAUSES → IMPLEMENT → BUILD → RUN → VISUALLY INSPECT → TEST → REPAIR → REVERIFY → ONLY THEN CLAIM COMPLETION.

Rules:

- Treat the current repository and observed runtime as canonical; do not reconstruct current work from memory.
- Runtime behavior outranks plausible-looking source code, comments, plans, and prior reports.
- Before editing, identify the canonical owner of the behavior and preserve unrelated current work.
- Distinguish reasoned conclusions, statically verified conclusions, and runtime-verified conclusions.
- Verify with the strongest available evidence: production build, tests, browser execution, responsive screenshots, accessibility checks, performance inspection, and generated artifacts.
- Never claim fixed, working, complete, optimized, production-ready, premium, or equivalent beyond the evidence obtained.
- Never weaken tests or acceptance criteria to make an implementation pass.
- When evidence contradicts an assumption, stop, reconstruct canonical state, identify the contradiction, repair the root cause, and reverify.
- If required files, runtimes, devices, repositories, credentials, or external services are unavailable, state the limitation explicitly rather than inferring success.

## Website verification

For material website changes, run at minimum:

```bash
npm ci
npm run build
npm run verify:public-contract
```

For visual or interaction changes, also run the relevant Playwright visual/runtime verification and inspect generated desktop and mobile screenshots.

Do not treat JSX/CSS inspection alone as visual verification.

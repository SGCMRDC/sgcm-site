# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
```

No test suite is configured.

## Architecture

Next.js 15 App Router site with React 19, TypeScript, and Tailwind CSS v4.

**Bilingual routing** is handled via duplicated route segments — not `next-intl` or any i18n library:
- English: `app/page.tsx` → `/`, `app/contact/page.tsx` → `/contact`
- French: `app/fr/page.tsx` → `/fr`, `app/contact/fr/page.tsx` → `/contact/fr`

Each page is fully self-contained (`'use client'`). There is no shared layout between language variants, no shared component library, and no i18n abstraction — adding a section or fixing a bug requires updating both the EN and FR versions of each affected page.

**Styling approach**: Tailwind utility classes are used for layout/spacing on sections; inline `style` props handle fine-grained typography, colors, and animations (e.g. hover transitions on nav items). Both patterns coexist in the same components.

**Brand color**: `#C94010` (copper orange) — used for accents, hover underlines, CTA buttons, and section labels throughout.

**Header**: Two-layer sticky header with a top bar (language switcher + office locations) and a main navbar (search toggle + nav links + logo). On scroll (`scrollY > 40`), the background transitions from a transparent gradient to near-opaque black. The search bar expands below the navbar via `maxHeight` animation. This pattern is duplicated across all pages.

**Hero carousel** (`app/page.tsx`): Auto-advances every 5 seconds with a progress bar rendered via inline width style (`width: \`${progress}%\``). Each slide fades via Tailwind `opacity-0/100` + `transition-opacity`. The bottom strip of slide labels also acts as a manual nav.

**Pages currently have no shared components** — `NavItem`, the footer, and the header are copy-pasted between pages. When refactoring into components, keep the EN/FR routing pattern in mind.

# SU-TRA Trafikkskole

React + Vite web app for Sunnhordland Trafikkopplæring.
Uses the LiveSession design system (purple primary, Tailwind, card components).

## Setup in a new Replit project

1. Copy all files from this folder into your new `su-tra-design` Replit project
2. Run `npm install` (or `pnpm install`)
3. Run `npm run dev` to start the dev server

## Pages (all tabs are placeholders — wire up functions as needed)

| Tab | File | Status |
|-----|------|--------|
| Hjem | `src/pages/Hjem.tsx` | Full hero + course cards |
| Kurs | `src/pages/Kurs.tsx` | All 5 course types listed |
| Timeplan | `src/pages/Timeplan.tsx` | Placeholder |
| Min side | `src/pages/MinSide.tsx` | Placeholder |
| Ressursar | `src/pages/Ressurser.tsx` | External links + placeholders |
| Kontakt | `src/pages/Kontakt.tsx` | Form (disabled) + 3 locations |

## Design tokens

- Primary color: `#8B5CF6` (violet/purple)
- Font: Inter
- Card style: white, rounded-2xl, border-slate-100, shadow-sm
- Header: sticky, white, border-b
- Dark hero: slate-900 → primary-900 gradient

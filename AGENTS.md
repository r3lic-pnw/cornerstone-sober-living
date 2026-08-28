<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Cornerstone Sober Living

Marketing + intake site for a Christian ministry that runs sober-living housing
for men. Four pages: Home, About, Contact, Application. Static, no database, no
auth, no CMS. Built and maintained by one person (Jarrell) as a volunteer
project for his pastor.

Deliberately small. Resist adding infrastructure.

## Who reads this site

Design and copy decisions get made for these people, in this order:

1. **A man who needs a bed.** Usually not reading this from inside — almost
   nobody in prison or jail has web access. He's out: in treatment, at a
   halfway house, on a library terminal, on a borrowed phone with a cracked
   screen. He needs to know in ten seconds whether he qualifies and how to
   apply.
2. **Whoever is looking on his behalf** — his mother, his wife, a counselor.
   If he's still inside, this person is the *only* one who will ever see the
   site. She reads it, decides whether to trust it, and relays it by phone,
   visit, or mail.
3. **A referral source** — probation officer, case manager, treatment center
   discharge planner. Wants the requirements, the location, and a phone number.

Nobody in that list is impressed by animation. They are looking for a phone
number and a straight answer.

**A man inside can't use this site, so the site is written to be relayed.** A
phone number someone can read down a visiting-room line, an address that goes
on an envelope, an application that prints on Letter.

Reader 2 can ask anything on his behalf, but the form has to be filled out and
signed by the man himself — inside, he gets a copy from his counselor. Don't
write copy inviting anyone to apply for him.

## Commands

```powershell
npm run dev      # Turbopack dev server on :3000
npm run build    # production build — run before declaring UI work done
npm run lint     # ESLint CLI (not `next lint`, which is gone in 16)
```

## Stack

Next.js 16.3 (App Router) · React 19 · TypeScript · Tailwind v4 · React Compiler.

**Next.js 16 has breaking changes from what you probably remember.** Read the
version-matched docs in `node_modules/next/dist/docs/` before writing anything
framework-shaped — routing, metadata, images, fonts, forms, caching. Notably:
`middleware` is now `proxy`, `next lint` is gone, request APIs (`params`,
`searchParams`, `cookies()`, `headers()`) are async. Don't guess; the docs are
right there.

## Layout

```
src/app/
  layout.tsx           root shell: sticky navy header + <NavMenu/> + <Footer/>
  page.tsx             Home             (placeholder copy)
  about/page.tsx       About            (stub + TODOs)
  application/page.tsx Application      (built; blocked on the PDF)
  contact/page.tsx     Contact          (stub + TODOs)
  globals.css          ALL design tokens live here
  icon.svg             favicon
src/components/
  Layout/              Footer.tsx
  Navigation/          NavMenu.tsx (client, hamburger), navItems.ts
  UI/                  Button.tsx
src/lib/
  ministry.ts          every real-world fact used on more than one page
public/                logos, photos, application PDF
```

Components live in `src/components/<Domain>/`. Keep pages as Server Components;
add `"use client"` only for actual interactivity (the nav menu, the PDF viewer).

Facts that appear on more than one page go in `src/lib/ministry.ts`, never
inline. Unconfirmed values are `null` there and render as a visible TODO block,
so a missing phone number is loud rather than quietly absent.

## Design system

Two brand colors, from the logo — a navy cube with a gold cross:

| | | |
|---|---|---|
| Navy `#082857` | the foundation | structure, headings, dark bands |
| Gold `#FFCC00` | the cross | accent only — CTAs, rules, marks |

Everything else is derived. **All tokens live in `src/app/globals.css`** as
Tailwind v4 `@theme` variables. Use the semantic names (`bg-surface-navy`,
`text-heading`, `text-muted-text`), not the raw ramps (`navy-700`, `gold-400`)
and not stock Tailwind grays — the neutrals here are warm ("sand"), and mixing
in `gray-*` makes the gold look acidic next to it.

Hard rules:

- **`#FFCC00` is never text on a light surface.** It's 1.45:1 on the page
  background. For gold-colored text use `text-accent-ink` (gold-700, 5.0:1).
  Gold as a background with `text-on-accent` on top is fine (12.2:1).
- **Gold stays under ~10% of the surface.** It's the cross in the logo. If it's
  everywhere it stops meaning anything. Navy carries the page.
- **Every text pairing must clear 4.5:1.** The ratios are annotated next to
  each token in `globals.css`. If you invent a new pairing, compute it.
- The ramps carry only the steps in use. Adding one is deliberate — pick it off
  the same hue and annotate its ratio.
- Dark navy sections get the `on-navy` class on their wrapper so the focus ring
  flips from navy to gold. Use `text-on-navy` / `text-on-navy-muted` inside.
- The site is light-only by design. There are no dark-mode tokens; don't add
  `dark:` variants — they'd silently render as no-ops. (If dark mode is ever
  wanted it's one `@media` block remapping the semantic tokens.)
- Page rhythm is alternating full-bleed bands: `background` → `surface-sunken`
  → `surface-navy`. Scripture goes in `surface-gold` callouts with a gold left
  border.

Type: body is the native system sans — no webfont blocking render for the bulk
of the page, which matters on a slow connection. Headings are Source Serif 4,
loaded in `layout.tsx` as `--font-brand-serif` and read through `font-serif`.
Playfair is the display face on the home masthead only; it's a high-contrast
face whose hairlines break up at heading sizes on low-density screens.

## Content rules

These matter more than the code on this project.

**Never invent facts about the ministry.** Not the founding year, not the
number of houses, not the city, not the program rules, not testimonials, not
the pastor's biography, not 501(c)(3) status. Where a real fact is needed and
isn't in `src/lib/ministry.ts` or `docs/notes.md`, write a visible placeholder:

```tsx
{/* TODO(pastor): confirm — see docs/notes.md Q17 */}
<p>TODO: how many houses, and what city do we list publicly?</p>
```

An obviously-unfinished page is recoverable. A plausible-sounding wrong fact on
a housing ministry's website is not. This extends to anything we'd be promising
on the ministry's behalf — don't offer help the ministry hasn't said it gives.

**Language is dignity-first.** Write "men rebuilding their lives," not
"addicts" or "offenders." "Men returning from incarceration," never "ex-cons"
or "felons." Person first, condition second, always. No recovery jargon or
insider church shorthand — assume the reader is scared, is new to this, and is
reading on a phone. Short sentences. Plain words.

**Scripture** is ESV. Every page carrying a quotation needs the Crossway
attribution in the footer (it's in `Footer.tsx` — keep it). Cite book, chapter,
verse, translation.

**Never describe the housing as permanent.** It's a transitional program, and
the resident agreement is written on that basis. The site says "there's no
clock running" instead. That phrasing is deliberate — don't loosen it.

**Tone**: warm and steady, not slick and not saccharine. No stock-photo
optimism, no fundraising urgency, no marketing superlatives. This is a place to
live, described honestly.

## Accessibility bar

Non-negotiable — a meaningful share of visitors are on old phones, are older,
or are using assistive tech.

- 4.5:1 text contrast, 3:1 for input borders and meaningful UI edges.
- Visible focus on everything focusable (the base style is in `globals.css`;
  don't remove outlines).
- Tap targets ≥ 44px. Phone numbers and emails are real `tel:` / `mailto:`
  links so a thumb can dial them.
- Real semantics: one `<h1>` per page, ordered headings, `<nav>`/`<main>`/
  `<footer>`, alt text on every image. The site name in the header is a
  `<span>`, not an `<h1>` — the page owns its h1.
- The Application PDF must be downloadable *without* the in-browser preview
  working. The preview is an enhancement; the download link is the product.

## Working notes

**`docs/` is gitignored and stays that way.** This repo is public; `docs/`
holds unpublished facts about real people and candid working commentary. Never
move a file out of it without asking, and don't quote from it in code comments
or commit messages — cite the question number instead.

- `docs/notes.md` holds the open questions for the pastor, the answers as they
  come in, and draft copy awaiting sign-off. Anything blocked on him goes there
  rather than being guessed at. Question numbers are stable — code and the plan
  cite them, so mark items answered rather than renumbering.
- `docs/questions.md` is the short, meeting-ready cut of the same thing.
- `docs/PLAN.md` is the build order and per-page spec.
- `docs/handbook/` is the handbook rewrite; `docs/reference/` holds the IRS
  determination record.
- `README.md` still says "Holy Ghost Housing," and `public/` still has logos
  under that name. The rename to Cornerstone is confirmed, so those can go.

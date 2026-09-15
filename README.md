# Cornerstone Sober Living

Website for Cornerstone Sober Living, a Christian ministry providing sober
housing for men in Snohomish County, Washington. Built and maintained by
Jarrell Quincy.

## License

The code in this repository is licensed under the [MIT License](LICENSE).

All ministry content, including but not limited to sermon text, branding, logos, photos, and written materials, is the property of Cornerstone Sober Living and is **not** covered by the MIT License. All rights to that content are reserved.

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- TypeScript
- Tailwind CSS
- ESLint
- React Compiler

## Getting Started

Install dependencies and run the dev server:

```powershell
npm install
npm run dev
```

Visit `http://localhost:3000` to view the site locally.

## Working on this

Project instructions are in [`AGENTS.md`](AGENTS.md) — design tokens, content
rules, and the accessibility bar. Read it before changing anything user-facing.

Facts about the ministry live in `src/lib/ministry.ts`. Anything unconfirmed is
`null` there and renders as a visible TODO, so a missing phone number is loud
rather than quietly absent. Don't inline these values into pages.

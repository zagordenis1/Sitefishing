# Sitefishing — Fishing Tackle Shop

A modern, fully static, frontend-only e-commerce website for a fishing-tackle
shop. Built with Next.js 14 (App Router) + TypeScript + Tailwind CSS +
Framer Motion. Deploys to GitHub Pages out of the box.

![Sitefishing hero](https://images.unsplash.com/photo-1545816250-e12bedba42ba?auto=format&fit=crop&w=1600&q=70)

## Features

- **Modern senior-level UI** — minimal, ocean-themed (deep blues / teals),
  glass surfaces, gradient accents, refined typography.
- **Fully responsive**, mobile-first layout.
- **Dark / light mode** with system-preference detection (`next-themes`).
- **Smooth animations** with Framer Motion + Tailwind keyframes.
- **4-language support** — Українська (UA) · English (EN) · Русский (RU) ·
  Polski (PL). Picker in the header, choice persisted in `localStorage`,
  texts swap dynamically.
- **Multi-currency without an API** — UA → UAH (₴), EN → USD ($),
  RU → UAH (₴), PL → PLN (zł). Rates configured in one file
  ([`src/lib/currency.ts`](./src/lib/currency.ts)) and applied on the fly.
- **Catalog** with category filtering, hover effects, and a polished
  product modal that surfaces the seller's phone number and a
  `tel:` "Call now" CTA.
- **Lazy-loaded images** via `next/image` for performance.
- **Component-driven**, easy to extend — products live as a plain TypeScript
  array.
- **Static export** (`next build` → `out/`) — no backend, no server.

## Tech stack

| Concern             | Tool                                |
| ------------------- | ----------------------------------- |
| Framework           | Next.js 14 (App Router, SSG export) |
| Language            | TypeScript                          |
| Styling             | Tailwind CSS                        |
| Animations          | Framer Motion + Tailwind keyframes  |
| Icons               | lucide-react                        |
| Theme               | next-themes (class-based dark mode) |
| i18n                | Custom React-Context dictionary     |
| Currency conversion | Manual rate config (`src/lib/currency.ts`) |

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # Root metadata + providers
│   ├── page.tsx            # Single-page composition
│   ├── icon.svg            # Favicon
│   └── globals.css         # Tailwind + design tokens
├── components/
│   ├── header.tsx          # Sticky header + nav + lang/theme toggles
│   ├── footer.tsx          # Footer with phone CTA
│   ├── language-toggle.tsx
│   ├── theme-toggle.tsx
│   ├── product-card.tsx
│   ├── product-modal.tsx   # Product popup with tel: CTA
│   ├── providers.tsx       # ThemeProvider + LanguageProvider
│   └── sections/
│       ├── hero.tsx
│       ├── features.tsx
│       ├── catalog.tsx
│       ├── about.tsx
│       └── contact.tsx
├── data/
│   ├── products.ts         # Product list (priceUAH = base price)
│   └── contact.ts          # Seller phone, email, etc.
├── i18n/
│   ├── dictionaries.ts     # All UI / product / category copy
│   └── use-translations.tsx
└── lib/
    └── currency.ts         # Currency map + conversion helpers
```

## Getting started

Requirements: Node.js 20+.

```bash
npm install
npm run dev          # http://localhost:3000
npm run lint         # ESLint
npm run typecheck    # tsc --noEmit
npm run build        # static export → out/
```

## Editing content

| What                          | Where                                  |
| ----------------------------- | -------------------------------------- |
| Add / edit a product          | `src/data/products.ts`                 |
| Translate a product or label  | `src/i18n/dictionaries.ts`             |
| Update phone / email / socials | `src/data/contact.ts`                  |
| Change currency rates         | `src/lib/currency.ts` (`currencyByLocale`) |
| Add a new language            | extend `Locale` + add a dictionary entry |
| Theme colors / typography     | `tailwind.config.ts`, `src/app/globals.css` |

### Currency rates

All product prices are stored once, in UAH. Conversion happens client-side
using the per-locale rate from `src/lib/currency.ts`:

```ts
export const currencyByLocale = {
  uk: { code: "UAH", rate: 1,     symbol: "₴",  position: "suffix", ... },
  en: { code: "USD", rate: 0.024, symbol: "$",  position: "prefix", ... },
  ru: { code: "UAH", rate: 1,     symbol: "₴",  position: "suffix", ... }, // RU UI keeps base UAH
  pl: { code: "PLN", rate: 0.097, symbol: "zł", position: "suffix", ... },
};
```

Update the `rate` numbers when courses change — every price on the site
re-renders automatically.

## Deploy to GitHub Pages

A ready-to-use workflow lives at [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml).

1. **Push to `main`.**
2. In the GitHub UI: **Settings → Pages → Build and deployment → Source =
   GitHub Actions.**
3. Wait for the **Deploy to GitHub Pages** workflow to finish.
4. Your site is live at
   `https://<your-username>.github.io/Sitefishing/`.

The workflow:

- Installs deps with `npm ci`
- Builds with `NEXT_PUBLIC_BASE_PATH=/<repo-name>` so all asset URLs work
  under the `/Sitefishing/` subpath
- Adds a `.nojekyll` file so files starting with `_` (Next.js folders) are
  served correctly
- Uploads `out/` and deploys via `actions/deploy-pages@v4`

### Local production build

```bash
NEXT_PUBLIC_BASE_PATH=/Sitefishing npm run build
npx serve out
```

(or any static file server pointed at `out/`).

## License

MIT — feel free to use this as a starting point for your own shop.

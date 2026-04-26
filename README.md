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

### Adding your own products and photos

Products live in two places:

1. `src/data/products.ts` — the product list (id, category, price, image, stock).
2. `src/i18n/dictionaries.ts` — translated `name`, `description` and
   `longDescription` for **all four** locales (UA / EN / RU / PL).

#### 1. Put a photo in `public/products/`

The simplest path is to drop the image into the `public/products/` folder
of this repo (create it if it doesn't exist):

```
public/
└── products/
    └── my-rod.jpg
```

It will be served at the URL `/products/my-rod.jpg`. You can use `.jpg`,
`.png`, `.webp` or `.avif`. Keep images **square or 4:3, ~900 px wide**
to match the existing cards.

> Alternative — paste any public CDN URL (Unsplash, your own hosting,
> etc.) into the `image` field below. Both styles are supported.

#### 2. Add an entry to `src/data/products.ts`

```ts
// src/data/products.ts
export const products: Product[] = [
  // …existing items…
  {
    id: "my-rod",                 // unique slug — used as i18n key
    category: "rods",             // one of: rods | reels | lures | lines | accessories | apparel
    priceUAH: 4290,               // base price in UAH (₴)
    oldPriceUAH: 4990,            // optional — shown struck-through
    image: "/products/my-rod.jpg",// public path or full https URL
    inStock: true,
  },
];
```

The currency is converted automatically per language using
`src/lib/currency.ts` — never put `$` or `zł` in `priceUAH`.

#### 3. Add translations in `src/i18n/dictionaries.ts`

You must add the same `id` to **all four** product blocks
(`ukProducts`, `enProducts`, `ruProducts`, `plProducts`). TypeScript will
warn you if you miss one.

```ts
// inside ukProducts:
"my-rod": {
  name: "Мій новий спінінг",
  description: "Короткий опис для картки в каталозі",
  longDescription:
    "Розгорнутий опис для модального вікна — матеріали, тест, особливості.",
},
// …and the same key inside enProducts / ruProducts / plProducts
```

#### 4. (Optional) Add a brand-new category

If the new product doesn't fit any existing category, edit:

- `src/data/products.ts` — extend the `Category` union and the
  `categories` array.
- `src/i18n/dictionaries.ts` — add the new key to `ukCategories`,
  `enCategories`, `ruCategories`, `plCategories`.

#### 5. Verify and ship

```bash
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit (catches missing translations)
npm run dev        # http://localhost:3000 — eyeball the new card
```

Push to `main` and the GitHub Actions workflow will publish the update
to GitHub Pages automatically.

### Як додати свої товари і фото (українською)

Дані про товари живуть у двох місцях:

1. `src/data/products.ts` — список товарів (id, категорія, ціна, фото, наявність).
2. `src/i18n/dictionaries.ts` — переклади полів `name`, `description` та
   `longDescription` для **усіх чотирьох** мов (UA / EN / RU / PL).

#### 1. Покладіть фото у `public/products/`

Найпростіший шлях — кинути зображення у теку `public/products/`
цього репозиторію (створіть її, якщо немає):

```
public/
└── products/
    └── my-rod.jpg
```

Файл буде доступний за URL `/products/my-rod.jpg`. Підтримуються
формати `.jpg`, `.png`, `.webp` та `.avif`. Тримайте зображення
**квадратними або 4:3, ширина ~900 px**, щоб вони виглядали так само,
як існуючі картки.

> Альтернатива — вставте будь-який публічний URL з CDN (Unsplash,
> власний хостинг тощо) у поле `image` нижче. Обидва варіанти працюють.

#### 2. Додайте запис у `src/data/products.ts`

```ts
// src/data/products.ts
export const products: Product[] = [
  // …вже наявні товари…
  {
    id: "my-rod",                 // унікальний slug — він же ключ у i18n
    category: "rods",             // одне з: rods | reels | lures | lines | accessories | apparel
    priceUAH: 4290,               // базова ціна в гривнях (₴)
    oldPriceUAH: 4990,            // опційно — стара ціна для перекреслення
    image: "/products/my-rod.jpg",// шлях у public/ або повний https URL
    inStock: true,
  },
];
```

Валюта конвертується автоматично залежно від мови — за допомогою
`src/lib/currency.ts`. **Ніколи** не вписуйте `$` чи `zł` у `priceUAH`.

#### 3. Додайте переклади у `src/i18n/dictionaries.ts`

Той самий `id` має зʼявитись у **усіх чотирьох** обʼєктах товарів
(`ukProducts`, `enProducts`, `ruProducts`, `plProducts`). Якщо один із
перекладів пропустите — TypeScript це підкреслить.

```ts
// всередині ukProducts:
"my-rod": {
  name: "Мій новий спінінг",
  description: "Короткий опис для картки в каталозі",
  longDescription:
    "Розгорнутий опис для модального вікна — матеріали, тест, особливості.",
},
// …та такий самий ключ у enProducts / ruProducts / plProducts
```

#### 4. (Опційно) Додати нову категорію

Якщо новий товар не підходить під жодну існуючу категорію — оновіть:

- `src/data/products.ts` — розширте union-тип `Category` та масив
  `categories`.
- `src/i18n/dictionaries.ts` — додайте новий ключ у `ukCategories`,
  `enCategories`, `ruCategories`, `plCategories`.

#### 5. Перевірте і запуште

```bash
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit (зловить пропущені переклади)
npm run dev        # http://localhost:3000 — глянути нову картку
```

Запуште коміт у `main` — GitHub Actions автоматично оновить сайт
на GitHub Pages.

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

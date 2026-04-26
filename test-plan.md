# Test plan — PR #1 (Sitefishing initial site)

## What changed (user-visible)
- Brand-new fishing-tackle e-commerce static site.
- 4 languages (UA / EN / RU / PL) selectable from the header dropdown.
- Currency auto-converts based on language (UAH / USD / RUB / PLN).
- Product cards open a modal with a `tel:` "Call now" CTA.
- Light / dark theme toggle, with localStorage persistence for both language & theme.

## Environment
- Local dev server: `npm run dev` → http://localhost:3000 (already running).
- Browser: Chrome via `computer` tool, fullscreen.

## Reference values (from code, used as expected outputs)

Sample product **carbon-rod-pro** (`src/data/products.ts`) — `priceUAH: 4290`, `oldPriceUAH: 4990`.

Currency table (`src/lib/currency.ts`):
| Locale | Code | Rate (×UAH) | Symbol | Position | Frac digits |
|--------|------|------------:|--------|----------|------------:|
| uk     | UAH  | 1           | ₴      | suffix   | 0           |
| en     | USD  | 0.024       | $      | prefix   | 2           |
| ru     | RUB  | 2.05        | ₽      | suffix   | 0           |
| pl     | PLN  | 0.097       | zł     | suffix   | 2           |

Expected formatted price for **carbon-rod-pro** (4290 UAH):
- UA: `4 290 ₴`
- EN: `$102.96`
- RU: `8 795 ₽` (4290 × 2.05 = 8 794.5 → 0-frac, rounds to 8 795)
- PL: `416.13 zł`

Phone link (`src/data/contact.ts`): `tel:+380501234567`. Display: `+38 (050) 123-45-67`.
localStorage keys: `sitefishing-locale` (i18n), `theme` (next-themes default).

## Test cases

### T1 — Hero renders in default UA + initial currency is UAH
**Steps**
1. Open `http://localhost:3000/`.
2. Look at the hero block.
**Pass criteria (each must hold)**
- Hero contains the Ukrainian phrase "Все для".
- The first product card (carbon-rod-pro) shows a price ending in `₴` (e.g. `4 290 ₴`) and an old price `4 990 ₴`.

### T2 — Language switch updates copy AND currency live (no reload)
**Steps**
1. Click the globe / "UA" button in the header → dropdown opens with UA / EN / RU / PL.
2. Click **EN**.
3. Observe: hero copy now in English ("Everything for ... your perfect ... fishing trip"), product card prices show `$` prefix with 2 decimals (e.g. `$102.96`).
4. Click **RU**. Observe: hero contains "Всё для", carbon-rod-pro card shows `8 795 ₽`.
5. Click **PL**. Observe: hero contains "Wszystko na", carbon-rod-pro card shows `416.13 zł`.
**Pass criteria**
- All four states display the expected localized copy AND the expected formatted currency from the table above.
- This test would visibly fail if either the i18n dictionary or the currency conversion was wired incorrectly: a regression in either layer would leave a mismatched price/text combination on screen.

### T3 — Selected language persists in localStorage and survives reload
**Steps**
1. With **PL** active, reload the page (F5).
2. Inspect via DevTools console: `localStorage.getItem('sitefishing-locale')`.
**Pass criteria**
- After reload, header shows `PL`, hero is in Polish, prices end with `zł`.
- `localStorage.getItem('sitefishing-locale')` returns `"pl"`.

### T4 — Product modal opens with phone CTA pointing to tel:+380501234567
**Steps**
1. Switch back to **UA**.
2. Click the first product card (carbon-rod-pro).
3. Inspect the modal.
**Pass criteria**
- A modal overlay appears with the product image, full description, and a price (`4 290 ₴`).
- Modal contains a button "Подзвонити" whose anchor `href` equals exactly `tel:+380501234567`.
- The displayed phone is `+38 (050) 123-45-67`.
- Pressing **Esc** closes the modal.

### T5 — Dark / light theme toggle + responsive
**Steps**
1. Click the moon/sun toggle in header (current default = dark).
2. Verify body background switches: dark = nearly-black (`rgb(6 12 22)`), light = pale (`rgb(240 249 252)`).
3. Resize the browser to ~390 px width (mobile).
4. Verify the desktop nav links collapse and the burger / mobile menu opens.
**Pass criteria**
- Theme toggle visibly flips colors of background, cards, and gradient accents.
- At 390 px width the burger button is visible AND opening it shows links labeled per the current language (e.g. UA: "Каталог", "Про нас", "Контакти").

## Adversarial check
For each test step, would the same outcome appear if the change were broken?
- T1: No — empty/placeholder copy or missing prices would fail.
- T2: No — if i18n broke, copy would stay UA; if currency broke, suffix `$` would not appear or value would be wrong.
- T3: No — without persistence, reload would drop back to UA.
- T4: No — a broken `tel:` href would fail the exact-match assertion.
- T5: No — a broken theme would not flip CSS variables; broken responsive would keep desktop nav at narrow width.

## Deliverables
- Recording covering T1–T5 in one continuous take.
- Screenshots captured at key moments and embedded in the report.
- Single GitHub PR comment summarizing pass/fail.

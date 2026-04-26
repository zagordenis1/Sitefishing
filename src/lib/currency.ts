import type { Locale } from "@/i18n/dictionaries";

export type CurrencyCode = "UAH" | "USD" | "PLN";

export type CurrencyConfig = {
  code: CurrencyCode;
  symbol: string;
  /**
   * Conversion rate **from** UAH to the target currency.
   * Example: rate 0.024 means 1 UAH = 0.024 USD.
   * Update these values manually when courses change.
   */
  rate: number;
  /** How the formatted value is displayed: symbol-prefix or symbol-suffix. */
  position: "prefix" | "suffix";
  /** Locale used by Intl.NumberFormat for thousands/decimal grouping. */
  numberLocale: string;
  /** Number of fraction digits to show (e.g. USD shows cents). */
  fractionDigits: number;
};

/**
 * Single source of truth for currency rates.
 *
 * All product prices in `src/data/products.ts` are stored in UAH (gravnia).
 * When the active language changes, prices are re-rendered using the
 * matching entry below — there is no API call.
 *
 * To update rates: edit the `rate` field for the affected currencies and
 * commit. Everything else updates automatically.
 */
export const currencyByLocale: Record<Locale, CurrencyConfig> = {
  uk: {
    code: "UAH",
    symbol: "₴",
    rate: 1,
    position: "suffix",
    numberLocale: "uk-UA",
    fractionDigits: 0,
  },
  en: {
    code: "USD",
    symbol: "$",
    rate: 0.024,
    position: "prefix",
    numberLocale: "en-US",
    fractionDigits: 2,
  },
  ru: {
    // Russian UI keeps base UAH pricing — no RUB conversion.
    code: "UAH",
    symbol: "₴",
    rate: 1,
    position: "suffix",
    numberLocale: "uk-UA",
    fractionDigits: 0,
  },
  pl: {
    code: "PLN",
    symbol: "zł",
    rate: 0.097,
    position: "suffix",
    numberLocale: "pl-PL",
    fractionDigits: 2,
  },
};

export function convertFromUAH(priceUAH: number, locale: Locale): number {
  return priceUAH * currencyByLocale[locale].rate;
}

export function formatPrice(priceUAH: number, locale: Locale): string {
  const cfg = currencyByLocale[locale];
  const value = convertFromUAH(priceUAH, locale);
  const formatter = new Intl.NumberFormat(cfg.numberLocale, {
    minimumFractionDigits: cfg.fractionDigits,
    maximumFractionDigits: cfg.fractionDigits,
  });
  const number = formatter.format(value);
  return cfg.position === "prefix"
    ? `${cfg.symbol}${number}`
    : `${number} ${cfg.symbol}`;
}

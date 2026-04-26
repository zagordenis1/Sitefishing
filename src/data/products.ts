export type Category =
  | "rods"
  | "reels"
  | "lures"
  | "lines"
  | "accessories"
  | "apparel";

export type Product = {
  id: string;
  category: Category;
  /** Base price in UAH — converted on the fly via src/lib/currency.ts */
  priceUAH: number;
  image: string;
  inStock: boolean;
  /** Optional pre-discount price in UAH (used to render strike-through). */
  oldPriceUAH?: number;
};

/** Free-licensed product imagery from Unsplash. */
export const products: Product[] = [
  {
    id: "carbon-rod-pro",
    category: "rods",
    priceUAH: 4290,
    oldPriceUAH: 4990,
    image:
      "https://images.unsplash.com/photo-1564689510742-4e9c7584181d?auto=format&fit=crop&w=900&q=80",
    inStock: true,
  },
  {
    id: "baitcaster-reel",
    category: "reels",
    priceUAH: 5750,
    image:
      "https://images.unsplash.com/photo-1516707577704-7a87cad9c8be?auto=format&fit=crop&w=900&q=80",
    inStock: true,
  },
  {
    id: "spinning-reel",
    category: "reels",
    priceUAH: 3290,
    image:
      "https://images.unsplash.com/photo-1542379653-b204bea36ec1?auto=format&fit=crop&w=900&q=80",
    inStock: true,
  },
  {
    id: "lure-pack-jig",
    category: "lures",
    priceUAH: 690,
    image:
      "https://images.unsplash.com/photo-1611532026860-1a73c0a85cf3?auto=format&fit=crop&w=900&q=80",
    inStock: true,
  },
  {
    id: "fishing-line",
    category: "lines",
    priceUAH: 890,
    image:
      "https://images.unsplash.com/photo-1465850049287-0eecaf4f7e7e?auto=format&fit=crop&w=900&q=80",
    inStock: true,
  },
  {
    id: "tackle-box",
    category: "accessories",
    priceUAH: 1290,
    image:
      "https://images.unsplash.com/photo-1583275362400-b2adfd322bff?auto=format&fit=crop&w=900&q=80",
    inStock: true,
  },
  {
    id: "polarized-glasses",
    category: "accessories",
    priceUAH: 1590,
    image:
      "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=900&q=80",
    inStock: false,
  },
  {
    id: "wading-boots",
    category: "apparel",
    priceUAH: 3450,
    oldPriceUAH: 3990,
    image:
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=900&q=80",
    inStock: true,
  },
  {
    id: "fishing-net",
    category: "accessories",
    priceUAH: 1190,
    image:
      "https://images.unsplash.com/photo-1602602068989-a7eee0c5ff63?auto=format&fit=crop&w=900&q=80",
    inStock: true,
  },
];

export const categories: Category[] = [
  "rods",
  "reels",
  "lures",
  "lines",
  "accessories",
  "apparel",
];

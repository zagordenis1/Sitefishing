"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "@/i18n/use-translations";
import type { Product } from "@/data/products";
import { formatPrice } from "@/lib/currency";

type Props = {
  product: Product;
  onSelect: (product: Product) => void;
  index: number;
};

export function ProductCard({ product, onSelect, index }: Props) {
  const { t, locale } = useTranslations();
  const productCopy = t.products[product.id];
  const categoryLabel = t.categories[product.category];

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(product)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 6) * 0.04 }}
      className="card-surface group relative flex flex-col overflow-hidden text-left transition hover:-translate-y-1 hover:border-ocean-400/40 hover:shadow-2xl hover:shadow-ocean-500/10 focus-visible:-translate-y-1"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-ocean-900/10 to-ocean-400/10">
        <Image
          src={product.image}
          alt={productCopy.name}
          fill
          loading="lazy"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <span className="absolute left-3 top-3 pill border border-soft/10 bg-card/85 text-[10px] uppercase tracking-wider">
          {categoryLabel}
        </span>
        {!product.inStock && (
          <span className="absolute right-3 top-3 pill bg-rose-500/90 text-white">
            {t.catalog.outOfStock}
          </span>
        )}
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <span className="pointer-events-none absolute right-3 bottom-3 grid h-9 w-9 translate-y-2 place-items-center rounded-full bg-white/90 text-ocean-800 opacity-0 shadow-md transition-all group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-display text-lg font-semibold leading-tight">
          {productCopy.name}
        </h3>
        <p className="text-sm text-muted">{productCopy.description}</p>
        <div className="mt-auto flex items-end justify-between pt-3">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-xl font-bold text-ocean-700 dark:text-ocean-300">
              {formatPrice(product.priceUAH, locale)}
            </span>
            {product.oldPriceUAH && (
              <span className="text-sm text-muted line-through">
                {formatPrice(product.oldPriceUAH, locale)}
              </span>
            )}
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-ocean-600 transition group-hover:translate-x-1 dark:text-ocean-300">
            {t.catalog.viewDetails}
          </span>
        </div>
      </div>
    </motion.button>
  );
}

"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "@/i18n/use-translations";
import { categories, products, type Category, type Product } from "@/data/products";
import { ProductCard } from "../product-card";
import { ProductModal } from "../product-modal";

type Filter = "all" | Category;

export function Catalog() {
  const { t } = useTranslations();
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<Product | null>(null);

  const filtered = useMemo(
    () => (filter === "all" ? products : products.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="catalog" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {t.catalog.title}
            </h2>
            <p className="mt-2 max-w-xl text-base text-muted">
              {t.catalog.subtitle}
            </p>
          </div>
        </motion.div>

        <div className="mt-8 flex flex-wrap gap-2">
          <FilterChip
            label={t.catalog.all}
            active={filter === "all"}
            onClick={() => setFilter("all")}
          />
          {categories.map((cat) => (
            <FilterChip
              key={cat}
              label={t.categories[cat]}
              active={filter === cat}
              onClick={() => setFilter(cat)}
            />
          ))}
        </div>

        <motion.div
          layout
          className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              index={idx}
              onSelect={setActive}
            />
          ))}
        </motion.div>
      </div>

      <ProductModal product={active} onClose={() => setActive(null)} />
    </section>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
        active
          ? "border-transparent bg-gradient-to-r from-ocean-600 to-ocean-400 text-white shadow-md shadow-ocean-500/30"
          : "border-soft/10 bg-card/60 text-muted hover:bg-card hover:text-[rgb(var(--fg))]"
      }`}
    >
      {label}
    </button>
  );
}

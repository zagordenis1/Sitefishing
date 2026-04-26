"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, Truck, ShieldCheck, X, Tag } from "lucide-react";
import { useTranslations } from "@/i18n/use-translations";
import { formatPrice } from "@/lib/currency";
import { contact } from "@/data/contact";
import type { Product } from "@/data/products";

type Props = {
  product: Product | null;
  onClose: () => void;
};

export function ProductModal({ product, onClose }: Props) {
  const { t, locale } = useTranslations();

  useEffect(() => {
    if (!product) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [product, onClose]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
          className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            aria-label={t.modal.closeAria}
            onClick={onClose}
            className="absolute inset-0 cursor-default bg-black/55 backdrop-blur-sm"
          />
          <motion.div
            initial={{ y: 60, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl bg-card shadow-2xl shadow-ocean-900/30 sm:rounded-3xl"
          >
            <button
              type="button"
              aria-label={t.modal.closeAria}
              onClick={onClose}
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-card/90 backdrop-blur transition hover:scale-105 hover:bg-card"
            >
              <X className="h-4 w-4" aria-hidden />
            </button>

            <div className="grid gap-0 sm:grid-cols-[1.05fr_1fr]">
              <div className="relative aspect-square w-full bg-gradient-to-br from-ocean-900/15 to-ocean-300/15 sm:aspect-auto">
                <Image
                  src={product.image}
                  alt={t.products[product.id].name}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="flex flex-col gap-4 p-6 sm:p-8">
                <span className="pill self-start border border-soft/10 bg-card text-[11px] uppercase tracking-wider">
                  <Tag className="h-3 w-3" aria-hidden />
                  {t.categories[product.category]}
                </span>

                <h3
                  id="product-modal-title"
                  className="font-display text-2xl font-bold leading-tight sm:text-3xl"
                >
                  {t.products[product.id].name}
                </h3>

                <p className="text-sm leading-relaxed text-muted">
                  {t.products[product.id].longDescription}
                </p>

                <div className="flex items-baseline gap-3">
                  <span className="font-display text-3xl font-bold text-ocean-600 dark:text-ocean-300">
                    {formatPrice(product.priceUAH, locale)}
                  </span>
                  {product.oldPriceUAH && (
                    <span className="text-base text-muted line-through">
                      {formatPrice(product.oldPriceUAH, locale)}
                    </span>
                  )}
                  <span
                    className={`pill ml-auto ${
                      product.inStock
                        ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
                        : "bg-rose-500/15 text-rose-600 dark:text-rose-300"
                    }`}
                  >
                    {product.inStock ? t.catalog.inStock : t.catalog.outOfStock}
                  </span>
                </div>

                <div className="grid gap-2 rounded-2xl border border-soft/10 bg-[rgba(var(--bg),0.5)] p-4 text-sm">
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex items-center gap-2 text-muted">
                      <Truck className="h-4 w-4" aria-hidden />
                      {t.modal.deliveryLabel}
                    </span>
                    <span className="font-medium">
                      {t.modal.deliveryValue}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex items-center gap-2 text-muted">
                      <ShieldCheck className="h-4 w-4" aria-hidden />
                      {t.modal.warrantyLabel}
                    </span>
                    <span className="font-medium">
                      {t.modal.warrantyValue}
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl border border-ocean-500/20 bg-gradient-to-br from-ocean-500/10 to-ocean-400/5 p-4">
                  <h4 className="font-display text-base font-semibold">
                    {t.modal.callTitle}
                  </h4>
                  <p className="mt-1 text-sm text-muted">{t.modal.callBody}</p>
                  <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <a
                      href={`tel:${contact.phone}`}
                      className="btn-primary flex-1 justify-center"
                    >
                      <Phone className="h-4 w-4" aria-hidden />
                      {t.modal.callButton}
                    </a>
                    <span className="text-center font-display text-base font-semibold tracking-wide sm:text-left">
                      {contact.phoneDisplay}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

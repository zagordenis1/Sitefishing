"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Truck, Award, MessagesSquare } from "lucide-react";
import { useTranslations } from "@/i18n/use-translations";

const ICONS = [Award, Truck, MessagesSquare, ShieldCheck];

export function Features() {
  const { t } = useTranslations();

  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl font-bold tracking-tight sm:text-4xl"
        >
          {t.features.title}
        </motion.h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.features.items.map((item, idx) => {
            const Icon = ICONS[idx] ?? ShieldCheck;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="card-surface group flex flex-col gap-3 p-6 transition hover:-translate-y-1 hover:border-ocean-400/40"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-ocean-600 to-ocean-400 text-white shadow-md shadow-ocean-500/30">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="font-display text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";
import { useTranslations } from "@/i18n/use-translations";

export function About() {
  const { t } = useTranslations();

  return (
    <section id="about" className="relative py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-soft/10 md:aspect-square"
        >
          <Image
            src="https://images.unsplash.com/photo-1545816250-e12bedba42ba?auto=format&fit=crop&w=1100&q=80"
            alt="Fishing at sunset"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-ocean-900/60 via-ocean-900/10 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
            <span className="pill bg-white/85 text-ocean-900">
              {new Date().getFullYear() - 2014}+ years
            </span>
            <span className="pill bg-ocean-500/90 text-white">
              Made by anglers
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {t.about.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {t.about.body}
          </p>
          <ul className="mt-6 space-y-3">
            {t.about.bullets.map((line) => (
              <li key={line} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-ocean-500/15 text-ocean-700 dark:text-ocean-300">
                  <Check className="h-3.5 w-3.5" aria-hidden />
                </span>
                <span className="text-sm">{line}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

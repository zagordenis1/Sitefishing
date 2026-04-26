"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles, Waves } from "lucide-react";
import { useTranslations } from "@/i18n/use-translations";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  const { t } = useTranslations();

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="ocean-bg pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18] dark:opacity-25 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(8,145,178,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(8,145,178,0.4) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.08 }}
          className="flex flex-col items-start"
        >
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="pill border border-soft/10 bg-card/80 text-ocean-700 dark:text-ocean-200"
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            {t.hero.eyebrow}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            {t.hero.titlePrefix}{" "}
            <span className="gradient-text">{t.hero.titleAccent}</span>
            <br />
            {t.hero.titleSuffix}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#catalog" className="btn-primary">
              {t.hero.ctaPrimary}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a href="#contact" className="btn-ghost">
              <Phone className="h-4 w-4" aria-hidden />
              {t.hero.ctaSecondary}
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mt-12 grid w-full max-w-2xl grid-cols-3 gap-4"
          >
            {[
              { value: t.hero.stat1Value, label: t.hero.stat1Label },
              { value: t.hero.stat2Value, label: t.hero.stat2Label },
              { value: t.hero.stat3Value, label: t.hero.stat3Label },
            ].map((stat) => (
              <div
                key={stat.label}
                className="card-surface px-4 py-4 sm:px-5 sm:py-5"
              >
                <div className="font-display text-2xl font-bold text-ocean-600 dark:text-ocean-300 sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-muted sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <Waves
        className="pointer-events-none absolute -bottom-6 left-1/2 -z-10 h-40 w-[120%] -translate-x-1/2 text-ocean-500/15 dark:text-ocean-400/10"
        aria-hidden
      />
    </section>
  );
}

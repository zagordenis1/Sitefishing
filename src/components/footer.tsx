"use client";

import { Fish, Heart } from "lucide-react";
import { useTranslations } from "@/i18n/use-translations";
import { contact } from "@/data/contact";

export function Footer() {
  const { t } = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-soft/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-ocean-600 to-ocean-400 text-white shadow-lg shadow-ocean-500/30">
            <Fish className="h-5 w-5" aria-hidden />
          </span>
          <div>
            <div className="font-display text-base font-bold">
              Site<span className="gradient-text">fishing</span>
            </div>
            <div className="text-xs text-muted">{t.footer.tagline}</div>
          </div>
        </div>

        <div className="flex flex-col gap-1 text-sm text-muted md:items-end">
          <a
            href={`tel:${contact.phone}`}
            className="font-display text-base font-semibold text-[rgb(var(--fg))] transition hover:text-ocean-600 dark:hover:text-ocean-300"
          >
            {contact.phoneDisplay}
          </a>
          <span className="inline-flex items-center gap-1">
            © {year} Sitefishing · {t.footer.rights}
          </span>
          <span className="inline-flex items-center gap-1 text-xs">
            {t.footer.builtWith}
            <Heart className="h-3 w-3 text-rose-500" aria-hidden />
          </span>
        </div>
      </div>
    </footer>
  );
}

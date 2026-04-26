"use client";

import { useEffect, useRef, useState } from "react";
import { Globe, Check } from "lucide-react";
import { useTranslations } from "@/i18n/use-translations";
import { locales, type Locale } from "@/i18n/dictionaries";

const labels: Record<Locale, { code: string; name: string }> = {
  uk: { code: "UA", name: "Українська" },
  en: { code: "EN", name: "English" },
  ru: { code: "RU", name: "Русский" },
  pl: { code: "PL", name: "Polski" },
};

export function LanguageToggle() {
  const { locale, setLocale, t } = useTranslations();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label={t.nav.toggleLang}
        title={t.nav.toggleLang}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-10 items-center gap-2 rounded-full glass px-3 text-sm font-semibold tracking-wide transition hover:scale-[1.03] active:scale-95"
      >
        <Globe className="h-4 w-4" aria-hidden />
        <span>{labels[locale].code}</span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-12 z-50 w-44 overflow-hidden rounded-2xl glass-strong p-1.5 shadow-xl shadow-ocean-900/20"
        >
          {locales.map((code) => {
            const active = code === locale;
            return (
              <li key={code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => {
                    setLocale(code);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition ${
                    active
                      ? "bg-ocean-500/15 text-ocean-700 dark:text-ocean-200"
                      : "hover:bg-ocean-500/10"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xs font-bold tracking-wider opacity-70">
                      {labels[code].code}
                    </span>
                    <span className="font-medium">{labels[code].name}</span>
                  </span>
                  {active && <Check className="h-4 w-4" aria-hidden />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

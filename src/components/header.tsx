"use client";

import { useEffect, useState } from "react";
import { Fish, Menu, X } from "lucide-react";
import { useTranslations } from "@/i18n/use-translations";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";

const NAV = [
  { href: "#home", key: "home" as const },
  { href: "#catalog", key: "catalog" as const },
  { href: "#about", key: "about" as const },
  { href: "#contact", key: "contact" as const },
];

export function Header() {
  const { t } = useTranslations();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        scrolled
          ? "py-2 backdrop-blur-xl bg-card/70 border-b border-soft/10"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="group flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-ocean-600 to-ocean-400 text-white shadow-lg shadow-ocean-500/30 transition-transform group-hover:rotate-[-8deg]">
            <Fish className="h-5 w-5" aria-hidden />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            Site<span className="gradient-text">fishing</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted transition hover:bg-card hover:text-[rgb(var(--fg))]"
            >
              {t.nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            aria-label={t.nav.menu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full glass md:hidden"
          >
            {open ? (
              <X className="h-4 w-4" aria-hidden />
            ) : (
              <Menu className="h-4 w-4" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-4 mt-2 rounded-2xl glass-strong p-2 shadow-xl md:hidden">
          {NAV.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-medium hover:bg-card"
            >
              {t.nav[item.key]}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useTranslations } from "@/i18n/use-translations";

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslations();

  useEffect(() => setMounted(true), []);

  const isDark = (mounted ? resolvedTheme ?? theme : "dark") === "dark";

  return (
    <button
      type="button"
      aria-label={t.nav.toggleTheme}
      title={t.nav.toggleTheme}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative h-10 w-10 rounded-full glass grid place-items-center transition hover:scale-105 active:scale-95"
    >
      <Sun
        className={`h-4 w-4 transition ${
          isDark ? "scale-0 opacity-0" : "scale-100 opacity-100"
        } absolute`}
        aria-hidden
      />
      <Moon
        className={`h-4 w-4 transition ${
          isDark ? "scale-100 opacity-100" : "scale-0 opacity-0"
        } absolute`}
        aria-hidden
      />
    </button>
  );
}

"use client";

import * as React from "react";
import { ui, projectTextFr, skillCategoryFr, type Locale } from "./translations";
import type { Project } from "@/lib/types";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: typeof ui.en;
}

const LanguageContext = React.createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "portfolio-locale";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>("en");

  React.useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "fr") {
      setLocaleState(stored);
    }
  }, []);

  React.useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = React.useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const toggleLocale = React.useCallback(() => {
    setLocale(locale === "en" ? "fr" : "en");
  }, [locale, setLocale]);

  const value = React.useMemo(
    () => ({ locale, setLocale, toggleLocale, t: ui[locale] as typeof ui.en }),
    [locale, setLocale, toggleLocale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

/** Returns `project` with its prose fields swapped for French when locale is "fr"; falls back to English if no translation exists for the slug. Technologies and architectureFlow are left as-is (product/tool names). */
export function useLocalizedProject(project: Project): Project {
  const { locale } = useLanguage();
  const fr = projectTextFr[project.slug];
  if (locale === "en" || !fr) return project;
  return { ...project, ...fr };
}

/** Returns the French label for a skill category, falling back to the English original when no translation is registered. */
export function useLocalizedSkillCategory(category: string): string {
  const { locale } = useLanguage();
  if (locale === "en") return category;
  return skillCategoryFr[category] ?? category;
}

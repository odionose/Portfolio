"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function LanguageToggle() {
  const { locale, toggleLocale } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={locale === "en" ? "Switch to French" : "Passer en anglais"}
      className="flex h-8 min-w-8 items-center justify-center rounded-full px-2 text-xs font-medium tracking-wide text-muted transition-colors duration-200 ease-editorial hover:text-ink"
    >
      {locale === "en" ? "FR" : "EN"}
    </button>
  );
}

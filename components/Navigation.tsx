"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function Navigation() {
  const [open, setOpen] = React.useState(false);
  const { t } = useLanguage();

  const links = [
    { href: "/#about", label: t.nav.about },
    { href: "/#skills", label: t.nav.skills },
    { href: "/#projects", label: t.nav.work },
    { href: "/#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-5 sm:px-10">
        <Link href="/" className="font-display text-[0.95rem] tracking-tight text-ink">
          <b>Nathaniel Odion</b>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors duration-200 ease-editorial hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          {/* <a
            href="#contact"
            className="text-sm text-muted transition-colors duration-200 ease-editorial hover:text-ink"
          >
            {t.nav.resume}
          </a> */}
          <LanguageToggle />
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-8 w-8 items-center justify-center text-ink"
          >
            {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-base text-ink"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

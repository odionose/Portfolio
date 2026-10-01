"use client";

import { profile } from "@/lib/data";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="rule">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <div>
          <p className="text-ink">{profile.name}</p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            title="LinkedIn"
            className="transition-colors hover:text-ink"
          >
            <Linkedin size={18} strokeWidth={1.75} aria-hidden="true" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            title="GitHub"
            className="transition-colors hover:text-ink"
          >
            <Github size={18} strokeWidth={1.75} aria-hidden="true" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label={t.footer.email}
            title={t.footer.email}
            className="transition-colors hover:text-ink"
          >
            <Mail size={18} strokeWidth={1.75} aria-hidden="true" />
          </a>
        </div>

        <p>© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  );
}

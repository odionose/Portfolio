"use client";

import { Send } from "lucide-react";
import { profile } from "@/lib/data";
import { SectionLabel } from "./SectionLabel";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="rule">
      <div className="mx-auto max-w-content px-6 py-20 sm:px-10 sm:py-28">
        <SectionLabel index="04" label={t.sectionLabels.contact} />

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="font-display text-display-md text-ink">{t.contact.heading}</h2>

            <p className="mt-6 max-w-prose text-sm text-muted">
              {t.contact.orEmail}{" "}
              <a
                href={`mailto:${profile.email}`}
                className="text-ink underline decoration-line underline-offset-4 transition-colors duration-200 ease-editorial hover:text-accent"
              >
                {profile.email}
              </a>
            </p>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              <a href={profile.linkedin} target="_blank" rel="noreferrer noopener" className="transition-colors duration-200 ease-editorial hover:text-ink">
                LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer noopener" className="transition-colors duration-200 ease-editorial hover:text-ink">
                GitHub
              </a>
            </div>
          </div>

          <form onSubmit={(event) => event.preventDefault()} className="space-y-5">
            <div>
              <label htmlFor="contact-name" className="label-meta mb-2 block">
                {t.contact.formName}
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                className="w-full rounded-[3px] border border-line bg-surface px-4 py-2.5 text-[0.95rem] text-ink outline-none transition-colors duration-200 ease-editorial focus:border-accent"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="label-meta mb-2 block">
                {t.contact.formEmail}
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                className="w-full rounded-[3px] border border-line bg-surface px-4 py-2.5 text-[0.95rem] text-ink outline-none transition-colors duration-200 ease-editorial focus:border-accent"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="label-meta mb-2 block">
                {t.contact.formMessage}
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-[3px] border border-line bg-surface px-4 py-2.5 text-[0.95rem] text-ink outline-none transition-colors duration-200 ease-editorial focus:border-accent"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-[3px] bg-accent px-5 py-2.5 text-sm font-medium text-surface transition-opacity duration-200 ease-editorial hover:opacity-90"
            >
              <Send className="h-4 w-4" strokeWidth={2} />
              {t.contact.formSubmit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

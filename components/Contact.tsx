"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { profile } from "@/lib/data";
import { SectionLabel } from "./SectionLabel";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: real visitors never tick this box
    if (data.get("botcheck")) return;

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: "New message from your portfolio",
          from_name: "Portfolio contact form",
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

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

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Honeypot field, hidden from people */}
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

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
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 rounded-[3px] bg-accent px-5 py-2.5 text-sm font-medium text-surface transition-opacity duration-200 ease-editorial hover:opacity-90 disabled:opacity-60"
            >
              <Send className="h-4 w-4" strokeWidth={2} />
              {status === "sending" ? t.contact.formSending : t.contact.formSubmit}
            </button>

            <p role="status" aria-live="polite" className="min-h-[1.25rem] text-sm text-muted">
              {status === "success" && t.contact.formSuccess}
              {status === "error" && t.contact.formError}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

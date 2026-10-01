"use client";

import { SectionLabel } from "./SectionLabel";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="rule">
      <div className="mx-auto grid max-w-content gap-10 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionLabel index="01" label={t.sectionLabels.about} />
          <h2 className="font-display text-display-md text-ink">
            {t.about.heading}
          </h2>
        </div>

        <div className="space-y-5 text-[1.05rem] leading-relaxed text-ink/90 lg:pt-1">
          {t.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

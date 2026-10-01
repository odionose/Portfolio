"use client";

import {
  BarChart3,
  Cloud,
  Code2,
  Database,
  Workflow,
} from "lucide-react";
import { skills } from "@/lib/data";
import { SectionLabel } from "./SectionLabel";
import { useLanguage, useLocalizedSkillCategory } from "@/lib/i18n/LanguageProvider";

const skillIcons = [Code2, Workflow,Code2, Database,Cloud,Code2,BarChart3 ];

function SkillCard({ group, index }: { group: (typeof skills)[number]; index: number }) {
  const Icon = skillIcons[index % skillIcons.length];
  const category = useLocalizedSkillCategory(group.category);

  return (
    <article className="group relative min-h-[145px] rounded-[4px] border border-line bg-surface-raised p-6 transition-all duration-300 ease-editorial hover:-translate-y-1 hover:border-accent hover:shadow-[0_18px_50px_rgba(20,21,26,0.08)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="label-meta mb-3">{String(index + 1).padStart(2, "0")}</p>
          <h3 className="font-display text-xl font-semibold text-ink">{category}</h3>
        </div>

        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[3px] bg-accent text-surface transition-transform duration-300 group-hover:rotate-6">
          <Icon className="h-5 w-5" strokeWidth={2} />
        </span>
      </div>

      <p className="mt-6 text-sm leading-6 text-muted">{group.items.join(", ")}</p>
    </article>
  );
}

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="rule">
      <div className="mx-auto max-w-content px-6 py-20 sm:px-10 sm:py-28">
        <SectionLabel index="02" label={t.sectionLabels.skills} />

        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-display text-display-md text-ink">{t.skills.heading}</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <SkillCard key={group.category} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";
import type { Project } from "@/lib/types";
import { SectionLabel } from "./SectionLabel";
import { useLanguage, useLocalizedProject } from "@/lib/i18n/LanguageProvider";

function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();
  const localized = useLocalizedProject(project);

  return (
    <div className="group flex flex-col justify-between rounded-[4px] border border-line bg-surface-raised p-5 transition-all duration-300 ease-editorial hover:-translate-y-1 hover:border-accent hover:shadow-[0_18px_50px_rgba(20,21,26,0.08)] sm:p-6">
      <Link href={`/work/${project.slug}`} className="block">
        <div className="mb-4 flex items-start justify-between gap-3">
          <span className="label-meta">{project.number}</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-[3px] bg-accent text-surface transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </span>
        </div>

        <h3 className="font-display text-xl leading-tight text-ink sm:text-2xl">
          {project.name}
        </h3>
        <p className="mt-2 line-clamp-2 max-w-prose text-sm leading-relaxed text-muted">
          {localized.oneLiner}
        </p>
      </Link>

      <div className="mt-4">
        <p className="line-clamp-1 text-xs text-muted">{project.technologies.join(" · ")}</p>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noreferrer noopener"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 rounded-[3px] border border-line px-2.5 py-1 text-xs font-medium text-ink transition-colors duration-200 ease-editorial hover:border-accent hover:text-accent"
          >
            <Github className="h-3.5 w-3.5" strokeWidth={1.75} />
            {t.work.viewGithub}
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer noopener"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 rounded-[3px] border border-line px-2.5 py-1 text-xs font-medium text-ink transition-colors duration-200 ease-editorial hover:border-accent hover:text-accent"
            >
              <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.75} />
              {t.work.viewLive}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function SelectedWork() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="rule">
      <div className="mx-auto max-w-content px-6 py-16 sm:px-10 sm:py-20">
        <SectionLabel index="03" label={t.sectionLabels.work} />
        <h2 className="mb-8 max-w-prose font-display text-display-md text-ink">
          {t.work.heading}
        </h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

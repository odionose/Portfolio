"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";
import { useLanguage, useLocalizedProject } from "@/lib/i18n/LanguageProvider";

export function ProjectDetail({ project }: { project: Project }) {
  const { t } = useLanguage();
  const localized = useLocalizedProject(project);

  return (
    <div className="mx-auto max-w-content px-6 pb-24 pt-14 sm:px-10 sm:pt-20">
      <Link
        href="/#projects"
        className="group mb-14 inline-flex items-center gap-2 text-sm text-muted transition-colors duration-200 ease-editorial hover:text-ink"
      >
        <ArrowLeft
          size={14}
          strokeWidth={1.5}
          className="transition-transform duration-200 ease-editorial group-hover:-translate-x-1"
        />
        {t.work.allWork}
      </Link>

      <div className="border-t border-line pt-8">
        <span className="label-meta">{project.number}</span>
        <h1 className="mt-4 max-w-3xl font-display text-display-lg text-ink">{project.name}</h1>
        <p className="mt-5 max-w-prose text-lg leading-relaxed text-muted">{localized.oneLiner}</p>
        <p className="mt-8 text-sm text-ink/70">{project.technologies.join(" · ")}</p>
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="space-y-12">
          <Block title={t.work.overview} body={localized.problem} />
          <Block title={t.work.approach} body={localized.approach} />
          <Block title={t.work.contribution} body={localized.contribution} />
        </div>

        <div className="space-y-12">
          <Block title={t.work.architecture} body={localized.architecture} />

          {project.architectureFlow && (
            <div>
              <p className="label-meta mb-5">{t.work.pipeline}</p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
                {project.architectureFlow.map((stage, i) => (
                  <span key={stage} className="flex items-center gap-3">
                    <span className="border border-line px-3 py-1.5 text-sm text-ink/85">
                      {stage}
                    </span>
                    {i < project.architectureFlow!.length - 1 && (
                      <span className="text-muted" aria-hidden>
                        →
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          )}

          {localized.results.length > 0 && (
            <div>
              <p className="label-meta mb-5">{t.work.results}</p>
              <ul className="space-y-3">
                {localized.results.map((r) => (
                  <li key={r} className="border-t border-line pt-3 text-[1.05rem] text-ink">
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <p className="label-meta mb-5">{t.work.source}</p>
            <div className="flex flex-col gap-3">
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-1.5 text-sm text-ink"
              >
                {t.work.viewGithub}
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  className="transition-transform duration-200 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex items-center gap-1.5 text-sm text-accent"
                >
                  {t.work.liveDemo}
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.5}
                    className="transition-transform duration-200 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <p className="label-meta mb-4">{title}</p>
      <p className="max-w-prose text-[1.05rem] leading-relaxed text-ink/90">{body}</p>
    </div>
  );
}

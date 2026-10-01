"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { profile } from "@/lib/data";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto grid max-w-content gap-12 px-6 pb-20 pt-16 sm:px-10 sm:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 lg:pb-28 lg:pt-32">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.h1 variants={item} className="font-display text-display-xl text-ink">
          {profile.name}
        </motion.h1>

        <motion.p variants={item} className="mt-4 font-display text-display-md text-muted">
          {t.hero.title}
        </motion.p>

        <motion.p variants={item} className="mt-8 max-w-prose text-lg leading-relaxed text-ink/90">
          {t.hero.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center rounded-[3px] bg-accent px-6 py-3 text-sm font-semibold text-surface transition-opacity duration-200 hover:opacity-90"
          >
            {t.hero.getInTouch}
          </a>
          <a
            href="#projects"
            className="inline-flex min-h-12 items-center justify-center rounded-[3px] border border-line bg-surface px-6 py-3 text-sm font-semibold text-ink transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            {t.hero.viewWork}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            title="GitHub"
            className="ml-1 inline-flex h-11 w-11 items-center justify-center rounded-[3px] border border-line text-ink transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            <Github size={19} strokeWidth={1.75} aria-hidden="true" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            title="LinkedIn"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[3px] border border-line text-ink transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            <Linkedin size={19} strokeWidth={1.75} aria-hidden="true" />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="lg:justify-self-end"
      >
        <div className="relative mx-auto w-full max-w-[380px] lg:max-w-[420px]">
          <div className="absolute -bottom-3 -left-3 h-full w-full border border-line" aria-hidden="true" />
          <div className="relative overflow-hidden border border-line bg-surface-raised">
            <Image
              src="/images/nathaniel-odion.png"
              alt="Portrait of Nathaniel Odion"
              width={840}
              height={840}
              priority
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 80vw, 420px"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

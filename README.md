# Nathaniel Odion — Portfolio

A minimal editorial portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Overview

This project is a personal portfolio and case-study site. The homepage presents:

- an intro section
- about section
- skills section
- selected projects
- contact section

Each project can also have its own dedicated detail page under `/work/[slug]`.

## Stack

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons

## Getting started

Requirements:

- Node.js 18.17+

Install dependencies:

```bash
npm install
```

Run the app in development mode:

```bash
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build
npm run start
```

## Project structure

```text
app/
  layout.tsx
  page.tsx
  globals.css
  sitemap.ts
  robots.ts
  work/[slug]/page.tsx

components/
  Navigation.tsx
  Hero.tsx
  About.tsx
  Skills.tsx
  SelectedWork.tsx
  Contact.tsx
  ProjectDetail.tsx
  SectionLabel.tsx
  LanguageToggle.tsx
  Footer.tsx
  ThemeToggle.tsx
  ThemeProvider.tsx

lib/
  data.ts
  types.ts
  i18n/
    LanguageProvider.tsx
    translations.ts

public/
  images/
```

## Content updates

Most portfolio copy and content live in `lib/data.ts`.

Common edits:

- profile details
- work/projects list
- skill groups
- contact info

Translations live in `lib/i18n/translations.ts`.

## Deployment

This app can be deployed on any host that supports Next.js, including Vercel.

Typical flow:

```bash
npm run build
npm run start
```

## Notes

- The project does not require a database or CMS.
- The app includes light/dark theme support via CSS variables and a theme provider.
- English and French UI translations are maintained in `lib/i18n/translations.ts`.

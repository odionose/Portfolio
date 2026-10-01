import type { MetadataRoute } from "next";
import { projects } from "@/lib/data";

// TODO: replace with the production domain before deploying.
const siteUrl = "https://nathanielodion.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", ...projects.map((p) => `/work/${p.slug}`)];
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}

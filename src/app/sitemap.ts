import type { MetadataRoute } from "next";
import { industries, services } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/services", "/industries", "/pricing", "/about", "/contact", "/privacy", "/terms", ...services.map((s) => `/services/${s.slug}`), ...industries.map((i) => `/industries/${i.slug}`)];
  return paths.map((p) => ({ url: `${site.siteUrl}${p}`, lastModified: new Date() }));
}

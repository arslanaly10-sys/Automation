import type { MetadataRoute } from "next";
import { caseStudies, industries, services } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/services", "/industries", "/pricing", "/about", "/contact", "/privacy", "/terms", "/security", "/ai-receptionist-vs-hiring", ...services.map((s) => `/services/${s.slug}`), ...industries.map((i) => `/industries/${i.slug}`), ...(caseStudies.length ? ["/case-studies", ...caseStudies.map((c) => `/case-studies/${c.slug}`)] : [])];
  return paths.map((p) => ({ url: `${site.siteUrl}${p}`, lastModified: new Date() }));
}

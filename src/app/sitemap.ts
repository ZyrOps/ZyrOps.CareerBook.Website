import type { MetadataRoute } from "next";
import { allPages, pageHref, sectionKeys } from "@/content";
import { absoluteUrl } from "@/lib/site";

const priority: Record<string, number> = {
  solutions: 0.9,
  platform: 0.9,
  industries: 0.8,
  countries: 0.8,
  resources: 0.6,
  company: 0.6,
  trust: 0.4,
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/"), changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/request-demo"), changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/contact"), changeFrequency: "monthly", priority: 0.8 },
    ...sectionKeys.map((key) => ({
      url: absoluteUrl(`/${key}`),
      changeFrequency: "weekly" as const,
      priority: priority[key],
    })),
    ...allPages.map((p) => ({
      url: absoluteUrl(pageHref(p)),
      lastModified: p.lastUpdated,
      changeFrequency: p.section === "resources" ? ("weekly" as const) : ("monthly" as const),
      priority: Math.max(0.3, priority[p.section] - 0.1),
    })),
  ];
}

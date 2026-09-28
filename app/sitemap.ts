import type { MetadataRoute } from "next";
import { ROUTES } from "@/lib/routes";
import { SITE_URL } from "@/lib/site";

// Real routes only — "#section" fragments are never listed.
const entries: { path: string; changeFrequency: "weekly" | "monthly"; priority: number }[] = [
  { path: ROUTES.home, changeFrequency: "weekly", priority: 1 },
  { path: ROUTES.events, changeFrequency: "weekly", priority: 0.8 },
  { path: ROUTES.about, changeFrequency: "monthly", priority: 0.8 },
  { path: ROUTES.activities, changeFrequency: "monthly", priority: 0.7 },
  { path: ROUTES.education, changeFrequency: "monthly", priority: 0.7 },
  { path: ROUTES.centers, changeFrequency: "monthly", priority: 0.7 },
  { path: ROUTES.donate, changeFrequency: "monthly", priority: 0.8 },
  { path: ROUTES.membership, changeFrequency: "monthly", priority: 0.6 },
  { path: ROUTES.contact, changeFrequency: "monthly", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return entries.map(({ path, changeFrequency, priority }) => ({
    url: path === ROUTES.home ? SITE_URL : `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}

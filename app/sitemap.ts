import type { MetadataRoute } from "next"
import { translations } from "@/lib/i18n/translations"

const baseUrl = "https://ameni-azouz.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = translations.en.projects.items.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectRoutes,
  ]
}

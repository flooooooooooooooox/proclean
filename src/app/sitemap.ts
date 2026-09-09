import type { MetadataRoute } from "next";
import { realisations, services, siteConfig } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = siteConfig.url;

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...services.map((service) => ({
      url: `${base}/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${base}/realisations`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    ...realisations.map((item) => ({
      url: `${base}/realisations/${item.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    {
      url: `${base}/zones-intervention`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/entreprise-nettoyage-caen`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { url: `${base}/a-propos`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/demande-de-devis`, lastModified: now, changeFrequency: "yearly", priority: 0.9 },
  ];
}

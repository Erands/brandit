import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://branditafrica.com";

  const pages = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/contact",
    "/blog",
    "/privacy",
    "/terms",
    "/cookies",
  ];

  const locales = ["en", "fr"];

  return locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority:
        page === ""
          ? 1
          : page === "/services"
          ? 0.9
          : page === "/portfolio"
          ? 0.9
          : 0.8,
    }))
  );
}
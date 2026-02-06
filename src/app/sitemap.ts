import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://rustamnabizade.com";

  const routes = [
    "",
    "/work",
    "/services",
    "/about",
    "/contact",
    "/work/azerbaijan",
    "/work/india",
    "/work/turkey",
    "/work/uk",
    "/work/uzbekistan",
  ];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}

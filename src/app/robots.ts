import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://rustamnabizade.com/sitemap.xml",
    host: "https://rustamnabizade.com",
  };
}

import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const url = "https://madina-tiles-work.vercel.app"
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${url}/sitemap.xml`,
    host: url,
  }
}

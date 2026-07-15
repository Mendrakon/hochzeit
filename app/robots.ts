import type { MetadataRoute } from "next";

// Bei output: 'export' muss die Route explizit als statisch markiert werden.
export const dynamic = "force-static";

// Verbietet allen Crawlern den Zugriff auf die gesamte Seite.
// Wird beim Build zu einer statischen /robots.txt generiert (auch bei output: 'export').
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}

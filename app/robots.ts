import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["GPTBot", "ClaudeBot", "PerplexityBot", "Bytespider", "CCBot"],
        disallow: "/",
      },
      {
        userAgent: ["Google-Extended", "Applebot-Extended"],
        allow: "/",
      },
    ],
    sitemap: "https://zabegmosobr.ru/sitemap.xml",
  };
}

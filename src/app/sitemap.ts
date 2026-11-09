import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/ministry";

/* No lastModified: stamping every page with the build time tells crawlers
   everything changed on every deploy, which teaches them to ignore the field.
   Add a real date per page if that ever matters. Google ignores priority and
   changeFrequency, so they're left out too. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl },
    { url: `${siteUrl}/application` },
    { url: `${siteUrl}/contact` },
    { url: `${siteUrl}/about` },
  ];
}

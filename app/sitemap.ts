import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://personal-portfolio-rho-three-90.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projects/fresh-corner`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projects/saas-dashboard`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projects/ecommerce`,
      lastModified: new Date(),
    },
  ];
}
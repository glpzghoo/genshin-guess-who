import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://genshin-gw.com';

  // Static pages like home, about, etc.
  const staticPages = [{ url: baseUrl, lastModified: new Date() }];

  // Dynamic game mode pages
  const gameModes = [
    {
      url: `${baseUrl}/daily`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/endless`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  return [...staticPages, ...gameModes];
}

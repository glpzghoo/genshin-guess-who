import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://genshin-gw.com';

  // Static pages like home, about, etc.
  const staticPages = [{ url: baseUrl, lastModified: new Date('2025-10-13') }];

  const gamePages = [
    {
      url: `${baseUrl}/daily`,
      lastModified: new Date('2025-10-13'),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/endless`,
      lastModified: new Date('2025-10-13'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  return [...staticPages, ...gamePages];
}

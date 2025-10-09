import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://genshin-gw.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/', // allow all pages
    },
    sitemap: `${baseUrl}/sitemap.xml`, // tell bots where your sitemap is
  };
}

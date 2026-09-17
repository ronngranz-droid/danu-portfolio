import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const isPreview = process.env.VERCEL_ENV === 'preview';

  if (isPreview) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
      sitemap: 'https://kuze3ez.is-a.dev/sitemap.xml',
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: 'https://kuze3ez.is-a.dev/sitemap.xml',
  };
}

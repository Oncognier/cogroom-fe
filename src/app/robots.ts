import type { MetadataRoute } from 'next';
import { BASE_URL } from '@/constants/common';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/adminguard/', '/authguard/'],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}

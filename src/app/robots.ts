import type { MetadataRoute } from 'next';

import { BASE_URL } from '@/constants/common';

export default function robots(): MetadataRoute.Robots {
  if (process.env.DEPLOY_ENV === 'development' || process.env.DEPLOY_ENV === 'staging') {
    return {
      rules: {
        userAgent: '*',
        disallow: ['/'],
      },
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/adminguard/', '/authguard/'],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}

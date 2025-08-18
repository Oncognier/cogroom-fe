import type { MetadataRoute } from 'next';

import { BASE_URL } from '@/constants/common';
import { DEFAULT_OG_THUMBNAIL, STREAK_SHARE_IMAGE_URLS } from '@/constants/image';

const currentDate = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  if (process.env.DEPLOY_ENV === 'development' || process.env.DEPLOY_ENV === 'staging') return [];

  return [
    {
      url: BASE_URL,
      lastModified: currentDate,
      priority: 1,
      images: [DEFAULT_OG_THUMBNAIL],
    },
    {
      url: `${BASE_URL}/daily`,
      lastModified: currentDate,
      priority: 0.9,
      images: [STREAK_SHARE_IMAGE_URLS[1]],
    },
    {
      url: `${BASE_URL}/community`,
      lastModified: currentDate,
      priority: 0.8,
      images: [DEFAULT_OG_THUMBNAIL],
    },
    {
      url: `${BASE_URL}/content`,
      lastModified: currentDate,
      priority: 0.8,
      images: [DEFAULT_OG_THUMBNAIL],
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: currentDate,
      priority: 0.5,
      images: [DEFAULT_OG_THUMBNAIL],
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: currentDate,
      priority: 0.5,
      images: [DEFAULT_OG_THUMBNAIL],
    },
    {
      url: `${BASE_URL}/marketing`,
      lastModified: currentDate,
      priority: 0.5,
      images: [DEFAULT_OG_THUMBNAIL],
    },
  ];
}

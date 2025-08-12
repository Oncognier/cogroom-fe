export const getMetaPixelId = (): string | null => {
  if (process.env.NEXT_PUBLIC_DEPLOY_ENV === 'production') {
    return process.env.NEXT_PUBLIC_META_PIXEL_ID || null;
  }

  return null;
};

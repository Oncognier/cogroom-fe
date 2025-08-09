export const getKakaoPixelId = (): string | null => {
  if (process.env.NEXT_PUBLIC_DEPLOY_ENV === 'production') {
    return '7682705293895384587';
  }

  return null;
};

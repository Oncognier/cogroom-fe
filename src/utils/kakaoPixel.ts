export const getKakaoPixelId = (): string | null => {
  if (process.env.NEXT_PUBLIC_DEPLOY_ENV === 'production') {
    return process.env.NEXT_PUBLIC_KAKAO_PIXEL_ID || null;
  }

  return null;
};

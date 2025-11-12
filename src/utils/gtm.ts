export const getGTMId = (): string | null => {
  if (process.env.NEXT_PUBLIC_DEPLOY_ENV === 'production' || process.env.NEXT_PUBLIC_DEPLOY_ENV === 'staging') {
    return process.env.NEXT_PUBLIC_GTM_ID || null;
  }

  return null;
};

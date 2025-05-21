export const mockingServer = async () => {
  const isServer = process.env.NEXT_RUNTIME === 'nodejs';
  const isDev = process.env.NODE_ENV !== 'production';
  const isEnabled = process.env.NEXT_PUBLIC_MSW_ENABLED !== 'false';

  if (isServer && isDev && isEnabled) {
    const { server } = await import('@/mocks/server');
    server.listen();
  }
};

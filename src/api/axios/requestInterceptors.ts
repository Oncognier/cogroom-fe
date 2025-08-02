import type { InternalAxiosRequestConfig } from 'axios';

const isServer = typeof window === 'undefined';

export const cookiesInterceptor = async (req: InternalAxiosRequestConfig) => {
  if (isServer) {
    const { cookies } = await import('next/headers');
    const cookieHeader = await cookies();

    req.headers.cookie = cookieHeader
      .getAll()
      .map((c) => `${c.name}=${c.value}`)
      .join('; ');
  }
  return req;
};

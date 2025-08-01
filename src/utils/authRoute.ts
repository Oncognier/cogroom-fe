import { AUTH_REQUIRED_PATHS } from '@/constants/authRoutes';

export const isAuthRequiredPath = (currentPath: string) => {
  return AUTH_REQUIRED_PATHS.some(
    (protectedPath) => currentPath === protectedPath || currentPath.startsWith(`${protectedPath}/`),
  );
};

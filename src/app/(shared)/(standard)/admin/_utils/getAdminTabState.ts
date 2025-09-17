import { TabBarState } from '@/components/atoms/TabBar/TabBar.styled';

export const getAdminTabState = (pathname: string, href: string, role: string): TabBarState => {
  if (role === 'CONTENT_PROVIDER' && !href.includes('/contents')) return 'disabled';
  if (pathname === href || pathname.startsWith(`${href}/`)) {
    return 'active';
  }
  return 'default';
};

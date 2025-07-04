'use client';

import { redirect } from 'next/navigation';

import Loading from '@/components/organisms/Loading/Loading';
import useGetUserSummary from '@/hooks/api/member/useGetUserSummary';

export default function Admin() {
  const { data, isLoading } = useGetUserSummary();

  const role = data?.memberRole;

  if (isLoading) return <Loading />;

  if (role === 'CONTENT_PROVIDER') {
    redirect('/admin/contents');
  }

  redirect('/admin/notices');
}

'use client';

import { useRouter } from 'next/navigation';

import SolidButton from '@/components/atoms/SolidButton/SolidButton';

export default function Contents() {
  const router = useRouter();

  return (
    <SolidButton
      size='sm'
      color='primary'
      label='추가하기'
      interactionVariant='normal'
      onClick={() => router.push('/admin/contents/create/daily')}
    />
  );
}

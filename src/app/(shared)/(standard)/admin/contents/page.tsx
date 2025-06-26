'use client';

import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import { useRouter } from 'next/navigation';

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

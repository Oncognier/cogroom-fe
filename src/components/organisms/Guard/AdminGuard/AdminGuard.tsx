'use client';

import { useRouter } from 'next/navigation';

import SolidButton from '@/components/atoms/SolidButton/SolidButton';

import * as S from './AdminGuard.styled';

export default function AdminGuard() {
  const router = useRouter();

  return (
    <S.AdminGuard>
      <S.MessageWrapper>
        <S.MainMessage>해당 기능은 권한이 있는 사용자만 이용할 수 있어요!</S.MainMessage>
      </S.MessageWrapper>

      <SolidButton
        size='sm'
        color='primary'
        label='홈으로 가기'
        interactionVariant='normal'
        onClick={() => router.push('/')}
      />
    </S.AdminGuard>
  );
}

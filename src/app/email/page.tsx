'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo } from 'react';

import { useCheckEmailQuery } from '@/hooks/api/auth/useCheckEmail';

import * as S from './page.styled';

export default function Email() {
  const searchParams = useSearchParams();

  const userEmail = searchParams.get('userEmail');
  const verificationCode = searchParams.get('verificationCode');

  const isParamsValid = !!userEmail && !!verificationCode;

  const queryParams = useMemo(() => {
    return {
      userEmail: userEmail ?? '',
      verificationCode: verificationCode ?? '',
    };
  }, [userEmail, verificationCode]);

  const { data, isLoading, isError } = useCheckEmailQuery(queryParams, isParamsValid);

  useEffect(() => {
    if (isParamsValid && data && !isLoading) {
      window.close();
    }
  }, [data, isLoading, isParamsValid]);

  let message = '';
  if (!isParamsValid) {
    message = '잘못된 접근입니다.';
  } else if (isLoading) {
    message = '이메일 인증 확인 중...';
  } else if (isError) {
    message = '이메일 인증에 실패했습니다.';
  } else {
    message = '이메일 인증이 완료되었습니다. 창을 닫습니다...';
  }

  return (
    <S.Email>
      <S.MainMessage>{message}</S.MainMessage>
    </S.Email>
  );
}

'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import Loading from '@/components/organisms/Loading/Loading';
import { useLoginMutation } from '@/hooks/api/auth/useLogin';

export default function OAuthCallback() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const { login } = useLoginMutation();

  useEffect(() => {
    if (!code) return;
    login({ provider: 'KAKAO', code });
  }, [code, login]);

  return <Loading />;
}

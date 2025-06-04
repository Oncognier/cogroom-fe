'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { useLogInMutation } from '@/hooks/api/auth/useLogInMutation';

export default function OAuthCallback() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const { mutateLogIn } = useLogInMutation();

  useEffect(() => {
    if (!code) return;
    mutateLogIn({ provider: 'KAKAO', code });
  }, [code, mutateLogIn]);

  return <div>Loading...</div>;
}

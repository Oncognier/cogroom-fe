'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { useLoginMutation } from '@/hooks/api/auth/useLoginMutation';

export default function OAuthCallback() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const { mutateLogin } = useLoginMutation();

  useEffect(() => {
    if (!code) return;
    mutateLogin({ provider: 'KAKAO', code });
  }, [code, mutateLogin]);

  return <div>Loading...</div>;
}

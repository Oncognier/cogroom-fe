'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import Loading from '@/components/organisms/Loading/Loading';
import { useLoginMutation } from '@/hooks/api/auth/useLogin';

export default function OAuthCallback() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const provider = searchParams.get('provider');
  const state = searchParams.get('state') ?? undefined;
  const { login } = useLoginMutation();

  useEffect(() => {
    if (!code || !provider) return;
    login({ code, provider: provider.toUpperCase(), state });
  }, [code, login]);

  return <Loading />;
}

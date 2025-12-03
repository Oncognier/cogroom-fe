'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Payments() {
  const router = useRouter();

  useEffect(() => {
    router.push('/admin/payments/management');
  }, [router]);

  return null;
}

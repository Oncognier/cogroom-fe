'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function MemberDetail() {
  const { memberId } = useParams<{ memberId: string }>();
  const router = useRouter();

  useEffect(() => {
    router.replace(`/admin/users/${memberId}/daily`);
  }, [memberId, router]);

  return null;
}

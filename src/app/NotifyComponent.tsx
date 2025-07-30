'use client';

import { useEffect } from 'react';

import { useAppModalStore } from '@/stores/useModalStore';

export default function NotifyComponent() {
  const { open } = useAppModalStore();

  useEffect(() => {
    open('notify');
  }, [open]);

  return null;
}

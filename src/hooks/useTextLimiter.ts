'use client';

import { useEffect, useMemo } from 'react';

import { useShake } from './useShake';

export function useTextLimiter(maxLength: number, value: string, onChange: (limitedValue: string) => void) {
  const { isShaking, triggerShake } = useShake();

  useEffect(() => {
    if (value.length > maxLength) {
      const limitedValue = value.slice(0, maxLength);
      triggerShake();
      onChange(limitedValue);
    }
  }, [value, maxLength, triggerShake, onChange]);

  const isOverLimit = useMemo(() => value.length >= maxLength, [value, maxLength]);

  return {
    isShaking,
    isOverLimit,
  };
}

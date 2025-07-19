import { useState, useEffect } from 'react';

import { useShake } from './useShake';

export function useTextLimiter(maxLength: number, initialValue: string = '') {
  const [value, setValue] = useState(initialValue);
  const { isShaking, triggerShake } = useShake();

  useEffect(() => {
    if (value.length > maxLength) {
      setValue(value.slice(0, maxLength));
      triggerShake();
    }
  }, [value, maxLength, triggerShake]);

  return {
    value,
    setValue,
    isShaking,
    isOverLimit: value.length >= maxLength,
  };
}

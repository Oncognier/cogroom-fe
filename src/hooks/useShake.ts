import { useCallback, useEffect, useState } from 'react';

export function useShake() {
  const [isShaking, setIsShaking] = useState(false);

  const triggerShake = useCallback(() => {
    setIsShaking(true);
  }, []);

  useEffect(() => {
    if (isShaking) {
      const timeout = setTimeout(() => setIsShaking(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isShaking]);

  return { isShaking, triggerShake };
}

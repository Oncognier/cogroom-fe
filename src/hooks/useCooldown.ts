import { useEffect, useState, useRef } from 'react';

export function useCooldown(duration: number) {
  const [isCooldown, setIsCooldown] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const start = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsCooldown(true);
    timerRef.current = setTimeout(() => setIsCooldown(false), duration);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return {
    value: isCooldown,
    start,
  };
}

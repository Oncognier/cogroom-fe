import { FetchNextPageOptions } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';

interface UseScrollProps {
  nextPage: boolean;
  fetchNext: (options?: FetchNextPageOptions) => Promise<unknown>; // fetchNextPage
  threshold?: number;
  rootMargin?: string;
  minIntervalMs?: number;
}

export default function useScroll({
  nextPage,
  fetchNext,
  threshold = 1,
  rootMargin = '0px',
  minIntervalMs = 0,
}: UseScrollProps) {
  const observerRef = useRef<HTMLDivElement>(null);

  const busyRef = useRef(false);
  const leftSinceLastFetch = useRef(true);
  const lastCallTsRef = useRef(0);

  useEffect(() => {
    const el = observerRef.current;
    if (!el || !nextPage) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          leftSinceLastFetch.current = true;
          return;
        }

        if (!leftSinceLastFetch.current) return;
        if (busyRef.current) return;

        const now = Date.now();
        if (minIntervalMs > 0 && now - lastCallTsRef.current < minIntervalMs) return;

        busyRef.current = true;
        leftSinceLastFetch.current = false;
        lastCallTsRef.current = now;

        fetchNext().finally(() => {
          busyRef.current = false;
        });
      },
      { root: null, rootMargin, threshold },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [nextPage, fetchNext, threshold, rootMargin]);

  return { observerRef };
}

import { Ref } from 'react';

import * as S from './InfiniteScrollSentinel.styled';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

interface InfiniteScrollSentinelProps {
  observerRef: Ref<HTMLDivElement>;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
}

export default function InfiniteScrollSentinel({
  observerRef,
  hasNextPage,
  isFetchingNextPage,
}: InfiniteScrollSentinelProps) {
  if (!hasNextPage) return null;
  return <S.Sentinel ref={observerRef}>{isFetchingNextPage && <LoadingSpinner />}</S.Sentinel>;
}

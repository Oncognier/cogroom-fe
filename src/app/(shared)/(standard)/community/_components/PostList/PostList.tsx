'use client';

import { useMemo, useState } from 'react';

import InfiniteScrollSentinel from '@/components/atoms/InfiniteScrollSentinel/InfiniteScrollSentinel';
import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import Loading from '@/components/organisms/Loading/Loading';
import PostCard from '@/components/organisms/PostCard/PostCard';
import useGetPostList from '@/hooks/api/post/useGetPostList';
import useScroll from '@/hooks/useScroll';

import * as S from './PostList.styled';

type CatValue = 'all' | 1 | 2 | 3;

const FILTERS: { label: string; value: CatValue }[] = [
  { label: '전체', value: 'all' },
  { label: '데일리 공유', value: 1 },
  { label: '사색/고민', value: 2 },
  { label: '칼럼', value: 3 },
];

export default function PostList() {
  const [selected, setSelected] = useState<CatValue>('all');

  const categoryId = selected === 'all' ? undefined : selected;
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } = useGetPostList({ categoryId });

  const posts = useMemo(() => data?.pages.flatMap((p) => p.data) ?? [], [data]);

  const { observerRef } = useScroll({
    nextPage: hasNextPage,
    fetchNext: fetchNextPage,
  });

  return (
    <S.PostList>
      <S.ButtonFilter>
        {FILTERS.map(({ label, value }) => {
          const isActive = selected === value;
          return (
            <SolidButton
              key={value}
              size='sm'
              label={label}
              color={isActive ? 'primary' : 'assistive'}
              interactionVariant='normal'
              onClick={() => setSelected(value)}
            />
          );
        })}
      </S.ButtonFilter>

      {isLoading && posts.length === 0 ? (
        <Loading />
      ) : (
        <S.ListWrapper>
          {posts.map((post) => (
            <PostCard
              key={post.postId}
              post={post}
            />
          ))}
        </S.ListWrapper>
      )}

      <InfiniteScrollSentinel
        observerRef={observerRef}
        hasNextPage={!!hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </S.PostList>
  );
}

'use client';

import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

import SortButton from '@/app/(shared)/(standard)/mypage/_components/SortButton/SortButton';
import MessageCircleX from '@/assets/icons/message-circle-x.svg';
import InfiniteScrollSentinel from '@/components/atoms/InfiniteScrollSentinel/InfiniteScrollSentinel';
import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import SearchFilter from '@/components/molecules/SearchFilter/SearchFilter';
import EmptyState from '@/components/organisms/EmptyState/EmptyState';
import PostCard from '@/components/organisms/PostCard/PostCard';
import PostCardSkeleton from '@/components/organisms/PostCard/PostCardSkeleton/PostCardSkeleton';
import { POST_CATEGORY_SELECT_OPTIONS } from '@/constants/common';
import useGetUserLikePost from '@/hooks/api/member/useGetUserLikePost';
import { useCategoryParam } from '@/hooks/queryParams/useCategoryParam';
import { useDateRangeParams } from '@/hooks/queryParams/useDateRangeParams';
import { useKeywordParam } from '@/hooks/queryParams/useKeywordParam';
import { useSortParam } from '@/hooks/queryParams/useSortParam';
import useScroll from '@/hooks/useScroll';
import { useAuthStore } from '@/stores/useAuthStore';

import * as S from './page.styled';

export default function LikesPosts() {
  const router = useRouter();

  const [categoryId] = useCategoryParam();
  const [keyword] = useKeywordParam();
  const [{ startDate, endDate }] = useDateRangeParams();
  const [sort, setSort] = useSortParam('latest');

  const isUnknown = useAuthStore((s) => s.isUnknown());
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } = useGetUserLikePost({
    sort,
    categoryId,
    keyword,
    startDate,
    endDate,
  });

  const total = data?.pages?.[0]?.totalElements ?? 0;
  const posts = useMemo(() => (data?.pages ?? []).flatMap((p) => p.data ?? []), [data]);

  const { observerRef } = useScroll({
    nextPage: !!hasNextPage,
    fetchNext: fetchNextPage,
  });

  const handleSortChange = () => setSort(sort === 'latest' ? 'oldest' : 'latest');
  const handleGoToCommunity = () => router.push('/community');

  const renderHeader = () => (
    <S.FilterHeader>
      <SearchFilter
        totalTitle='전체 글'
        total={isLoading || isUnknown ? 0 : total}
        fields={{
          dateRange: { startDateName: 'startDate', endDateName: 'endDate' },
          select: [
            {
              name: 'category',
              placeholder: '카테고리 선택',
              options: POST_CATEGORY_SELECT_OPTIONS,
              isMulti: true,
            },
          ],
          search: [{ name: 'keyword', placeholder: '글 제목 입력' }],
        }}
        action={{ label: '검색하기' }}
      />

      <S.ListControlsWrapper>
        <S.SwitchLikeButtonWrapper>
          <SolidButton
            label='포스팅'
            color='primary'
            size='sm'
            interactionVariant='normal'
            onClick={() => router.push('/mypage/community/likes/posts')}
          />
          <SolidButton
            label='댓글'
            color='assistive'
            size='sm'
            interactionVariant='normal'
            onClick={() => router.push('/mypage/community/likes/comments')}
          />
        </S.SwitchLikeButtonWrapper>

        <SortButton
          sort={sort}
          onClick={handleSortChange}
        />
      </S.ListControlsWrapper>
    </S.FilterHeader>
  );

  const renderContent = () => {
    if (isLoading || isUnknown) {
      return (
        <S.LikePostList>
          {Array.from({ length: 3 }).map((_, index) => (
            <PostCardSkeleton key={index} />
          ))}
        </S.LikePostList>
      );
    }

    if (posts.length === 0) {
      return (
        <EmptyState
          icon={<MessageCircleX />}
          description='꼭 마음에 담아두고 싶던 글이 있나요?'
          buttonLabel='글 보러가기'
          buttonAction={handleGoToCommunity}
        />
      );
    }

    return (
      <>
        <S.LikePostList>
          {posts.map((post) => (
            <PostCard
              key={post.postId}
              post={post}
            />
          ))}
        </S.LikePostList>

        <InfiniteScrollSentinel
          observerRef={observerRef}
          hasNextPage={!!hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      </>
    );
  };

  return (
    <S.LikesPosts>
      {renderHeader()}
      {renderContent()}
    </S.LikesPosts>
  );
}

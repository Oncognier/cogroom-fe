'use client';

import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

import SortButton from '@/app/(shared)/(standard)/mypage/_components/SortButton/SortButton';
import MessageCircleX from '@/assets/icons/message-circle-x.svg';
import InfiniteScrollSentinel from '@/components/atoms/InfiniteScrollSentinel/InfiniteScrollSentinel';
import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import SearchFilter from '@/components/molecules/SearchFilter/SearchFilter';
import EmptyState from '@/components/organisms/EmptyState/EmptyState';
import Loading from '@/components/organisms/Loading/Loading';
import PostCard from '@/components/organisms/PostCard/PostCard';
import { POST_CATEGORY_SELECT_OPTIONS } from '@/constants/common';
import useGetUserLikePost from '@/hooks/api/member/useGetUserLikePost';
import useScroll from '@/hooks/useScroll';
import { useUrlSearchParams } from '@/hooks/useUrlSearchParams';
import { SortType } from '@/types/member';

import * as S from './page.styled';

export default function LikesPosts() {
  const router = useRouter();
  const { updateSearchParams, getSearchParam, getSearchParamAsDate, getSearchParamAsArray } = useUrlSearchParams();
  const [sort, setSort] = useState<SortType>('latest');

  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } = useGetUserLikePost({
    sort,
    categoryId: getSearchParamAsArray('categoryId').map(Number) || undefined,
    keyword: getSearchParam('keyword') ?? '',
    startDate: getSearchParamAsDate('startDate') ?? undefined,
    endDate: getSearchParamAsDate('endDate') ?? undefined,
  });

  const total = data?.pages?.[0]?.totalElements;
  const posts = useMemo(() => (data?.pages ?? []).flatMap((p) => p.data ?? []), [data]);

  const { observerRef } = useScroll({
    nextPage: !!hasNextPage,
    fetchNext: fetchNextPage,
  });

  const handleSortChange = () => {
    const next = sort === 'latest' ? 'oldest' : 'latest';
    setSort(next);
    updateSearchParams({ sort: next });
  };

  const handleGoToCommunity = () => router.push('/community');

  if (isLoading) return <Loading />;

  return (
    <S.LikesPosts>
      <S.FilterHeader>
        <SearchFilter
          totalTitle='전체 글'
          total={total}
          fields={{
            dateRange: { startDateName: 'startDate', endDateName: 'endDate' },
            select: [
              {
                name: 'categoryId',
                placeholder: '카테고리 선택',
                options: POST_CATEGORY_SELECT_OPTIONS,
                isMulti: true,
              },
            ],
            search: [{ name: 'keyword', placeholder: '글 제목 입력' }],
          }}
          actions={[{ type: 'submit', label: '검색하기' }]}
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

      {posts.length === 0 ? (
        <EmptyState
          icon={<MessageCircleX />}
          description='꼭 마음에 담아두고 싶던 글이 있나요?'
          buttonLabel='글 보러가기'
          buttonAction={handleGoToCommunity}
        />
      ) : (
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
      )}
    </S.LikesPosts>
  );
}

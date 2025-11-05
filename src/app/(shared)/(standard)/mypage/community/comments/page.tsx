'use client';

import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

import CommentListRow from '@/app/(shared)/(standard)/mypage/_components/CommentListRow/CommentListRow';
import SortButton from '@/app/(shared)/(standard)/mypage/_components/SortButton/SortButton';
import MessageCircleX from '@/assets/icons/message-circle-x.svg';
import InfiniteScrollSentinel from '@/components/atoms/InfiniteScrollSentinel/InfiniteScrollSentinel';
import SearchFilter from '@/components/molecules/SearchFilter/SearchFilter';
import EmptyState from '@/components/organisms/EmptyState/EmptyState';
import Loading from '@/components/organisms/Loading/Loading';
import { POST_CATEGORY_SELECT_OPTIONS } from '@/constants/common';
import useGetUserComment from '@/hooks/api/member/useGetUserComment';
import { useCategoryParam } from '@/hooks/queryParams/useCategoryParam';
import { useDateRangeParams } from '@/hooks/queryParams/useDateRangeParams';
import { useKeywordParam } from '@/hooks/queryParams/useKeywordParam';
import { useSortParam } from '@/hooks/queryParams/useSortParam';
import useScroll from '@/hooks/useScroll';

import * as S from './page.styled';

export default function Comments() {
  const router = useRouter();

  const [categoryId] = useCategoryParam();
  const [keyword] = useKeywordParam();
  const [{ startDate, endDate }] = useDateRangeParams();
  const [sort, setSort] = useSortParam('latest');

  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } = useGetUserComment({
    sort,
    categoryId,
    keyword,
    startDate,
    endDate,
  });

  const total = data?.pages?.[0]?.totalElements ?? 0;
  const comments = useMemo(() => (data?.pages ?? []).flatMap((p) => p.data ?? []), [data]);

  const { observerRef } = useScroll({
    nextPage: !!hasNextPage,
    fetchNext: fetchNextPage,
  });

  const handleSortChange = () => setSort(sort === 'latest' ? 'oldest' : 'latest');
  const handleGoToCommunity = () => router.push('/community');

  if (isLoading) return <Loading />;

  return (
    <S.UserComment>
      <S.FilterHeader>
        <SearchFilter
          totalTitle='전체 댓글'
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
            search: [{ name: 'keyword', placeholder: '댓글 내용 입력' }],
          }}
          action={{ label: '검색하기' }}
        />

        <S.SortButtonWrapper>
          <SortButton
            sort={sort}
            onClick={handleSortChange}
          />
        </S.SortButtonWrapper>
      </S.FilterHeader>

      {comments.length === 0 ? (
        <EmptyState
          icon={<MessageCircleX />}
          description='다른 코그니어 글에 댓글을 달아봐요'
          buttonLabel='댓글 달러가기'
          buttonAction={handleGoToCommunity}
        />
      ) : (
        <>
          <S.CommentList>
            {comments.map((comment) => (
              <CommentListRow
                key={comment.commentId}
                commentData={comment}
              />
            ))}
          </S.CommentList>

          <InfiniteScrollSentinel
            observerRef={observerRef}
            hasNextPage={!!hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
          />
        </>
      )}
    </S.UserComment>
  );
}

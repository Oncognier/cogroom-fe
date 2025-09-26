'use client';

import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

import CommentListRow from '@/app/(shared)/(standard)/mypage/_components/CommentListRow/CommentListRow';
import MyPageScrollXWrapper from '@/app/(shared)/(standard)/mypage/_components/MyPageScrollXWrapper/MyPageScrollXWrapper';
import SortButton from '@/app/(shared)/(standard)/mypage/_components/SortButton/SortButton';
import MessageCircleX from '@/assets/icons/message-circle-x.svg';
import InfiniteScrollSentinel from '@/components/atoms/InfiniteScrollSentinel/InfiniteScrollSentinel';
import SearchFilter from '@/components/molecules/SearchFilter/SearchFilter';
import EmptyState from '@/components/organisms/EmptyState/EmptyState';
import Loading from '@/components/organisms/Loading/Loading';
import { CATEGORY_SELECT_OPTIONS } from '@/constants/common';
import useGetUserComment from '@/hooks/api/member/useGetUserComment';
import useScroll from '@/hooks/useScroll';
import { useUrlSearchParams } from '@/hooks/useUrlSearchParams';
import { SortType } from '@/types/member';

import * as S from './page.styled';

export default function Comments() {
  const router = useRouter();
  const { updateSearchParams, getSearchParam, getSearchParamAsDate, getSearchParamAsArray } = useUrlSearchParams();
  const [sort, setSort] = useState<SortType>('latest');

  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } = useGetUserComment({
    sort,
    categoryId: getSearchParamAsArray('categoryId').map(Number) || undefined,
    keyword: getSearchParam('keyword') ?? '',
    startDate: getSearchParamAsDate('startDate') ?? undefined,
    endDate: getSearchParamAsDate('endDate') ?? undefined,
  });

  const total = data?.pages?.[0]?.totalElements;

  const comments = useMemo(() => (data?.pages ?? []).flatMap((p) => p.data ?? []), [data]);

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
    <S.UserComment>
      <MyPageScrollXWrapper>
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
                  options: CATEGORY_SELECT_OPTIONS,
                  isMulti: true,
                },
              ],
              search: [{ name: 'keyword', placeholder: '댓글 내용 입력' }],
            }}
            actions={[{ type: 'submit', label: '검색하기' }]}
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
      </MyPageScrollXWrapper>
    </S.UserComment>
  );
}

'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import CommentListRow from '@/app/(shared)/(standard)/mypage/_components/CommentListRow/CommentListRow';
import SortButton from '@/app/(shared)/(standard)/mypage/_components/SortButton/SortButton';
import MessageCircleX from '@/assets/icons/message-circle-x.svg';
import NumberPagination from '@/components/molecules/NumberPagination/NumberPagination';
import SearchFilter from '@/components/molecules/SearchFilter/SearchFilter';
import EmptyState from '@/components/organisms/EmptyState/EmptyState';
import Loading from '@/components/organisms/Loading/Loading';
import { CATEGORY_SELECT_OPTIONS } from '@/constants/common';
import useGetCommentList from '@/hooks/api/member/useGetCommentList';
import { useUrlSearchParams } from '@/hooks/useUrlSearchParams';
import { SortType } from '@/types/member';
import { formatDayAsDashYYYYMMDD } from '@/utils/date/formatDay';

import * as S from './page.styled';

export default function Comments() {
  const router = useRouter();
  const { updateSearchParams, getSearchParam, getSearchParamAsDate, getSearchParamAsArray } = useUrlSearchParams();
  const [sort, setSort] = useState<SortType>('latest');
  const [currentPage, setCurrentPage] = useState(Number(getSearchParam('page') ?? 0));

  const { data, isLoading } = useGetCommentList({
    page: currentPage,
    sort,
    category: getSearchParamAsArray('category').map(Number).filter(Boolean),
    keyword: getSearchParam('keyword') ?? '',
    startDate: formatDayAsDashYYYYMMDD(getSearchParamAsDate('startDate')),
    endDate: formatDayAsDashYYYYMMDD(getSearchParamAsDate('endDate')),
  });

  const handleGoToCommunity = () => {
    router.push('/community');
  };

  const totalPages = data?.totalPages ?? 1;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    updateSearchParams({ page: page + 1 });
  };

  const handleSortChange = () => {
    const newSort = sort === 'latest' ? 'oldest' : 'latest';
    setSort(newSort);
    updateSearchParams({ sort: newSort });
  };

  const urlPageNum = Number(getSearchParam('page') ?? 0);

  useEffect(() => {
    if (urlPageNum > 0) {
      setCurrentPage(urlPageNum - 1);
    }
  }, [urlPageNum]);

  if (isLoading) return <Loading />;

  if (data?.data.length === 0)
    return (
      <EmptyState
        icon={<MessageCircleX />}
        description='다른 코그니어 글에 댓글을 달아봐요'
        buttonLabel='댓글 달러가기'
        buttonAction={handleGoToCommunity}
      />
    );

  return (
    <S.UserComment>
      <S.FilterHeader>
        <SearchFilter
          totalTitle='전체 댓글'
          total={data?.totalElements}
          fields={{
            dateRange: {},
            select: [
              {
                name: 'category',
                placeholder: '카테고리 선택',
                options: CATEGORY_SELECT_OPTIONS,
                isMulti: true,
              },
            ],
            search: { placeholder: '댓글 내용 입력' },
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

      <S.CommentList>
        {data?.data.map((comment) => (
          <CommentListRow
            key={comment.commentId}
            commentData={comment}
          />
        ))}
      </S.CommentList>

      <S.Pagination>
        <NumberPagination
          size='nm'
          currentPage={currentPage + 1}
          totalPages={totalPages}
          onPageChange={(page) => handlePageChange(page - 1)}
        />
      </S.Pagination>
    </S.UserComment>
  );
}

'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import CommentListRow from '@/app/(shared)/(standard)/mypage/_components/CommentListRow/CommentListRow';
import SortButton from '@/app/(shared)/(standard)/mypage/_components/SortButton/SortButton';
import MessageCircleX from '@/assets/icons/message-circle-x.svg';
import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import NumberPagination from '@/components/molecules/NumberPagination/NumberPagination';
import SearchFilter from '@/components/molecules/SearchFilter/SearchFilter';
import EmptyState from '@/components/organisms/EmptyState/EmptyState';
import Loading from '@/components/organisms/Loading/Loading';
import { POST_CATEGORY_SELECT_OPTIONS } from '@/constants/common';
import useGetUserLikeComment from '@/hooks/api/member/useGetUserLikeComment';
import { useUrlSearchParams } from '@/hooks/useUrlSearchParams';
import { SortType } from '@/types/member';
import { formatDayAsDashYYYYMMDD } from '@/utils/date/formatDay';

import * as S from './page.styled';

export default function LikesComments() {
  const router = useRouter();
  const { updateSearchParams, getSearchParam, getSearchParamAsDate, getSearchParamAsArray } = useUrlSearchParams();
  const [sort, setSort] = useState<SortType>('latest');
  const [currentPage, setCurrentPage] = useState(Number(getSearchParam('page') ?? 0));

  const { data: UserLikeCommentData, isLoading } = useGetUserLikeComment({
    page: currentPage,
    sort,
    categoryId: getSearchParamAsArray('categoryId').map(Number) || undefined,
    keyword: getSearchParam('keyword') ?? '',
    startDate: formatDayAsDashYYYYMMDD(getSearchParamAsDate('startDate')),
    endDate: formatDayAsDashYYYYMMDD(getSearchParamAsDate('endDate')),
  });

  const handleGoToCommunity = () => {
    router.push('/community');
  };

  const totalPages = UserLikeCommentData?.totalPages ?? 1;

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

  if (!UserLikeCommentData)
    return (
      <EmptyState
        icon={<MessageCircleX />}
        description='꼭 마음에 담아두고 싶던 글이 있나요?'
        buttonLabel='글 보러가기'
        buttonAction={handleGoToCommunity}
      />
    );

  return (
    <S.UserSave>
      <S.FilterHeader>
        <SearchFilter
          totalTitle='전체 댓글'
          total={UserLikeCommentData?.totalElements}
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
            search: { placeholder: '댓글 내용 입력' },
          }}
          actions={[{ type: 'submit', label: '검색하기' }]}
        />

        <S.ListControlsWrapper>
          <S.SwitchLikeButtonWrapper>
            <SolidButton
              label='포스팅'
              color='assistive'
              size='sm'
              interactionVariant='normal'
              onClick={() => {
                router.push('/mypage/community/likes/posts');
              }}
            />
            <SolidButton
              label='댓글'
              color='primary'
              size='sm'
              interactionVariant='normal'
              onClick={() => {
                router.push('/mypage/community/likes/comments');
              }}
            />
          </S.SwitchLikeButtonWrapper>
          <SortButton
            sort={sort}
            onClick={handleSortChange}
          />
        </S.ListControlsWrapper>
      </S.FilterHeader>

      <S.SaveList>
        {UserLikeCommentData?.data.map((comment) => (
          <CommentListRow
            key={comment.commentId}
            commentData={comment}
          />
        ))}
      </S.SaveList>

      <S.Pagination>
        <NumberPagination
          size='nm'
          currentPage={currentPage + 1}
          totalPages={totalPages}
          onPageChange={(page) => handlePageChange(page - 1)}
        />
      </S.Pagination>
    </S.UserSave>
  );
}

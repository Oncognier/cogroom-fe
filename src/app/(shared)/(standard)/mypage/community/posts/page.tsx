'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import SortButton from '@/app/(shared)/(standard)/mypage/_components/SortButton/SortButton';
import MessageCircleX from '@/assets/icons/message-circle-x.svg';
import NumberPagination from '@/components/molecules/NumberPagination/NumberPagination';
import SearchFilter from '@/components/molecules/SearchFilter/SearchFilter';
import EmptyState from '@/components/organisms/EmptyState/EmptyState';
import Loading from '@/components/organisms/Loading/Loading';
import PostCard from '@/components/organisms/PostCard/PostCard';
import { POST_CATEGORY_SELECT_OPTIONS } from '@/constants/common';
import useGetUserPostList from '@/hooks/api/member/useGetUserPostList';
import { useUrlSearchParams } from '@/hooks/useUrlSearchParams';
import { SortType } from '@/types/member';
import { formatDayAsDashYYYYMMDD } from '@/utils/date/formatDay';

import * as S from './page.styled';

export default function Posts() {
  const router = useRouter();
  const { updateSearchParams, getSearchParam, getSearchParamAsDate, getSearchParamAsArray } = useUrlSearchParams();
  const [sort, setSort] = useState<SortType>('latest');
  const [currentPage, setCurrentPage] = useState(Number(getSearchParam('page') ?? 0));

  const { data: UserPostsData, isLoading } = useGetUserPostList({
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

  const totalPages = UserPostsData?.totalPages ?? 1;

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

  useEffect(() => {
    console.log(UserPostsData, 'UserPostsData');
  }, [UserPostsData]);

  if (isLoading) return <Loading />;

  if (!UserPostsData)
    return (
      <EmptyState
        icon={<MessageCircleX />}
        description='코그니어 커뮤니티에 첫 글을 써 보세요!'
        buttonLabel='커뮤니티 바로가기'
        buttonAction={handleGoToCommunity}
      />
    );

  return (
    <S.UserPost>
      <S.FilterHeader>
        <SearchFilter
          title={`전체 글`}
          fields={{
            dateRange: {},
            select: [
              {
                name: 'category',
                placeholder: '카테고리 선택',
                options: POST_CATEGORY_SELECT_OPTIONS,
                isMulti: false,
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

      <S.PostList>
        {UserPostsData.data.map((post, index) => {
          return (
            <PostCard
              key={index}
              post={post}
            />
          );
        })}
      </S.PostList>

      <S.Pagination>
        <NumberPagination
          size='nm'
          currentPage={currentPage + 1}
          totalPages={totalPages}
          onPageChange={(page) => handlePageChange(page - 1)}
        />
      </S.Pagination>
    </S.UserPost>
  );
}

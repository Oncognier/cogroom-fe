import { useMemo } from 'react';

import CommentField from '@/app/(shared)/(standard)/community/post/[id]/_components/CommentField/CommentField';
import CommentList from '@/app/(shared)/(standard)/community/post/[id]/_components/CommentList/CommentList';
import InfiniteScrollSentinel from '@/components/atoms/InfiniteScrollSentinel/InfiniteScrollSentinel';
import { useGetComments } from '@/hooks/api/comment/useGetComments';
import useScroll from '@/hooks/useScroll';

import * as S from './PostComments.styled';

interface PostCommentsProps {
  postId: string;
  commentCount?: number;
}

export default function PostComments({ postId, commentCount }: PostCommentsProps) {
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } = useGetComments(postId);

  const comments = useMemo(() => {
    const result =
      data?.pages.flatMap((page) => {
        return page.data;
      }) ?? [];

    return result;
  }, [data]);

  const { observerRef } = useScroll({
    nextPage: !!hasNextPage,
    fetchNext: fetchNextPage,
  });

  return (
    <S.PostCommentsWrapper>
      <S.CommentsTopWrapper>
        <S.CommentsHeader>댓글 {commentCount}개</S.CommentsHeader>
        <CommentField postId={postId} />
      </S.CommentsTopWrapper>

      <CommentList
        comments={comments}
        postId={postId}
        isLoading={isLoading && comments.length === 0}
      />

      <InfiniteScrollSentinel
        observerRef={observerRef}
        hasNextPage={!!hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </S.PostCommentsWrapper>
  );
}

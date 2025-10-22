'use client';

import LoadingSpinner from '@/components/atoms/LoadingSpinner/LoadingSpinner';
import CommentItem from '@/app/(shared)/(standard)/community/post/[id]/_components/CommentItem/CommentItem';
import { Comment } from '@/types/comment';

import * as S from './CommentList.styled';

interface CommentListProps {
  comments: Comment[];
  postId: string;
  isLoading?: boolean;
}

export default function CommentList({ comments, postId, isLoading = false }: CommentListProps) {
  if (isLoading) {
    return (
      <S.LoadingWrapper>
        <LoadingSpinner />
      </S.LoadingWrapper>
    );
  }

  if (!comments || comments.length === 0) return null;

  return (
    <S.CommentListWrapper>
      {comments
        .filter((comment) => comment)
        .map((comment) => (
          <CommentItem
            key={comment.commentId}
            postId={postId}
            comment={comment}
          />
        ))}
    </S.CommentListWrapper>
  );
}

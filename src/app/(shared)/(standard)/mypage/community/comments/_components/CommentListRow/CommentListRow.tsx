import { useRouter } from 'next/navigation';

import ArrowTurnDownRight from '@/assets/icons/arrowturndownright.svg';
import type { Comment } from '@/types/comment';
import { formatDayAsSlashYYMMDD } from '@/utils/date/formatDay';

import * as S from './CommentListRow.styled';

type CommentListRowProps = {
  commentData: Comment;
};

export default function CommentListRow({ commentData }: CommentListRowProps) {
  const router = useRouter();

  const { comment, parentId, post, createdAt } = commentData;

  // TODO: CommentListRow onClick
  const handleClick = () => {
    router.push(`/post/${post.postId}`);
  };

  return (
    <S.CommentListRow>
      <S.CommentLeft>
        {parentId && (
          <S.CommentIcon>
            <ArrowTurnDownRight />
          </S.CommentIcon>
        )}
        <S.Comment>{comment}</S.Comment>
      </S.CommentLeft>

      <S.CommentRight>
        <S.Post>
          <S.PostIcon>
            <ArrowTurnDownRight />
          </S.PostIcon>
          <S.PostTitle>{post.title}</S.PostTitle>
        </S.Post>
        <S.CommentCreatedAt>{formatDayAsSlashYYMMDD(createdAt)}</S.CommentCreatedAt>
      </S.CommentRight>
    </S.CommentListRow>
  );
}

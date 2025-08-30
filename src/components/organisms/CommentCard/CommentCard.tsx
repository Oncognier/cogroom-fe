import { useRouter } from 'next/navigation';

import ArrowTurnDownRight from '@/assets/icons/arrowturndownright.svg';
import type { Comment } from '@/types/post';
import { formatDayAsSlashYYMMDD } from '@/utils/date/formatDay';

import * as S from './CommentCard.styled';

type CommentCardProps = {
  commentData: Comment;
};

export default function CommentCard({ commentData }: CommentCardProps) {
  const router = useRouter();

  const { comment, parentId, post, createdAt } = commentData;

  // TODO: CommentCard onClick
  const handleClick = () => {
    router.push(`/post/${post.postId}`);
  };

  return (
    <S.CommentCard>
      <S.CommentLeft>
        {parentId && (
          <S.Icon>
            <ArrowTurnDownRight />
          </S.Icon>
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
    </S.CommentCard>
  );
}

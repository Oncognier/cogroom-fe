import BookmarkIcon from '@/assets/icons/bookmark.svg';
import HeartIcon from '@/assets/icons/heart.svg';
import IconButton from '@/components/atoms/IconButton/IconButton';
import { useTogglePostLike } from '@/hooks/api/post/useTogglePostLike';
import { useTogglePostSave } from '@/hooks/api/post/useTogglePostSave';
import { formatCountPlus } from '@/utils/formatText';

import * as S from './PostLikesSaved.styled';

interface PostLikesSavedProps {
  postId: string;
  likeCount?: number;
  isLiked?: boolean;
  saveCount?: number;
  isSaved?: boolean;
}

export default function PostLikesSaved({
  postId,
  likeCount = 0,
  isLiked = false,
  saveCount = 0,
  isSaved = false,
}: PostLikesSavedProps) {
  const togglePostLikeMutation = useTogglePostLike();
  const togglePostSaveMutation = useTogglePostSave();

  const handleLikeClick = () => {
    if (togglePostLikeMutation.isPending) return;
    togglePostLikeMutation.mutate({ postId, isLiked });
  };

  const handleSaveClick = () => {
    if (togglePostSaveMutation.isPending) return;
    togglePostSaveMutation.mutate({ postId, isSaved });
  };

  return (
    <S.PostLikeSavedWrapper>
      <S.IconTextWrapper>
        <IconButton
          size='4rem'
          variant={isLiked ? 'solid' : 'outlined'}
          interactionVariant='normal'
          onClick={handleLikeClick}
          isDisabled={togglePostLikeMutation.isPending}
          aria-busy={togglePostLikeMutation.isPending}
        >
          <HeartIcon />
        </IconButton>
        <S.CountText>{formatCountPlus(likeCount)}</S.CountText>
      </S.IconTextWrapper>

      <S.IconTextWrapper>
        <IconButton
          size='4rem'
          variant={isSaved ? 'solid' : 'outlined'}
          interactionVariant='normal'
          onClick={handleSaveClick}
          isDisabled={togglePostSaveMutation.isPending}
          aria-busy={togglePostSaveMutation.isPending}
        >
          <BookmarkIcon />
        </IconButton>
        <S.CountText>{formatCountPlus(saveCount)}</S.CountText>
      </S.IconTextWrapper>
    </S.PostLikeSavedWrapper>
  );
}

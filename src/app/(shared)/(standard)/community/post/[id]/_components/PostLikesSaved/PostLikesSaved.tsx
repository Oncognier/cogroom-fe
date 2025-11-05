import BookmarkIcon from '@/assets/icons/bookmark.svg';
import HeartIcon from '@/assets/icons/heart.svg';
import IconButton from '@/components/atoms/IconButton/IconButton';
import { useLikePost } from '@/hooks/api/post/useLikePost';
import { useSavePost } from '@/hooks/api/post/useSavePost';
import { useAuthStore } from '@/stores/useAuthStore';
import { useAppModalStore } from '@/stores/useModalStore';
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
  const { likePost } = useLikePost();
  const { savePost } = useSavePost();
  const { open } = useAppModalStore();
  const isAuth = useAuthStore((s) => s.isAuth());

  const handleLikeClick = () => {
    if (!isAuth) {
      open('login');
      return;
    }
    likePost({ postId, isLiked });
  };

  const handleSaveClick = () => {
    if (!isAuth) {
      open('login');
      return;
    }
    savePost({ postId, isSaved });
  };

  return (
    <S.PostLikeSavedWrapper>
      <S.IconTextWrapper>
        <IconButton
          size='4rem'
          variant={isLiked ? 'solid' : 'outlined'}
          interactionVariant='normal'
          onClick={handleLikeClick}
          isDisabled={false}
          aria-busy={false}
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
          isDisabled={false}
          aria-busy={false}
        >
          <BookmarkIcon />
        </IconButton>
        <S.CountText>{formatCountPlus(saveCount)}</S.CountText>
      </S.IconTextWrapper>
    </S.PostLikeSavedWrapper>
  );
}

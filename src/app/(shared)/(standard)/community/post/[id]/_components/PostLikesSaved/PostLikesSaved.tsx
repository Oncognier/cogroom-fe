import { useState } from 'react';

import BookmarkIcon from '@/assets/icons/bookmark.svg';
import HeartIcon from '@/assets/icons/heart.svg';
import IconButton from '@/components/atoms/IconButton/IconButton';
import { useTogglePostLike } from '@/hooks/api/post/useTogglePostLike';
import { useTogglePostSave } from '@/hooks/api/post/useTogglePostSave';
import { formatCountPlus } from '@/utils/formatText';

import * as S from './PostLikesSaved.styled';

interface PostLikesSavedProps {
  postId: string;
  likeCount: number;
  isLiked: boolean;
  saveCount: number;
  isSaved: boolean;
}

export default function PostLikesSaved({
  postId,
  likeCount: initialLikeCount,
  isLiked: initialIsLiked,
  saveCount: initialSaveCount,
  isSaved: initialIsSaved,
}: PostLikesSavedProps) {
  const [likeCount, setLikeCount] = useState(initialLikeCount);
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [saveCount, setSaveCount] = useState(initialSaveCount);
  const [isSaved, setIsSaved] = useState(initialIsSaved);

  const togglePostLikeMutation = useTogglePostLike();
  const togglePostSaveMutation = useTogglePostSave();

  const handleLikeClick = () => {
    const newIsLiked = !isLiked;
    const newLikeCount = newIsLiked ? likeCount + 1 : likeCount - 1;

    setIsLiked(newIsLiked);
    setLikeCount(newLikeCount);

    togglePostLikeMutation.mutate(
      { postId, isLiked },
      {
        onError: () => {
          setIsLiked(!newIsLiked);
          setLikeCount(newIsLiked ? likeCount : likeCount + 1);
        },
      },
    );
  };

  const handleSaveClick = () => {
    const newIsSaved = !isSaved;
    const newSaveCount = newIsSaved ? saveCount + 1 : saveCount - 1;

    setIsSaved(newIsSaved);
    setSaveCount(newSaveCount);

    togglePostSaveMutation.mutate(
      { postId, isSaved },
      {
        onError: () => {
          setIsSaved(!newIsSaved);
          setSaveCount(newIsSaved ? saveCount : saveCount + 1);
        },
      },
    );
  };

  return (
    <S.PostLikeSavedWrapper>
      <S.IconTextWrapper>
        <IconButton
          size='4rem'
          variant={isLiked ? 'solid' : 'outlined'}
          interactionVariant='normal'
          onClick={handleLikeClick}
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
        >
          <BookmarkIcon />
        </IconButton>

        <S.CountText>{formatCountPlus(saveCount)}</S.CountText>
      </S.IconTextWrapper>
    </S.PostLikeSavedWrapper>
  );
}

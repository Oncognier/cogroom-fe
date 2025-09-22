'use client';

import { useRouter } from 'next/navigation';

import BookmarkFill from '@/assets/icons/bookmark-fill.svg';
import Bookmark from '@/assets/icons/bookmark.svg';
import CommentFill from '@/assets/icons/comment-fill.svg';
import Comment from '@/assets/icons/comment.svg';
import HeartFill from '@/assets/icons/heart-fill.svg';
import Heart from '@/assets/icons/heart.svg';
import AvatarPerson from '@/components/atoms/AvatarPerson/AvatarPerson';
import SolidTag from '@/components/atoms/SolidTag/SolidTag';
import Thumbnail from '@/components/atoms/Thumbnail/Thumbnail';
import { POST_CATEGORY_META, PostCategory } from '@/constants/common';
import { DEFAULT_THUMBNAIL } from '@/constants/image';
import { useTogglePostLike } from '@/hooks/api/post/useTogglePostLike';
import { useTogglePostSave } from '@/hooks/api/post/useTogglePostSave';
import { useAppModalStore, useSimpleModalStore } from '@/stores/useModalStore';
import type { Post } from '@/types/post';
import { formatRelativeKorean } from '@/utils/date/formatDay';
import { formatCountPlus, getDisplayName } from '@/utils/formatText';

import * as S from './PostCardMobile.styled';
import MetaItem from '../MetaItem/MetaItem';
import Checkbox from '@/components/atoms/Checkbox/Checkbox';
import { useAuthStore } from '@/stores/useAuthStore';

interface PostCardMobileProps {
  post: Post;
  isEdit?: boolean;
  isSelected?: boolean;
  onToggleSelect?: (checked: boolean) => void;
}

export default function PostCardMobile({
  post,
  isEdit = false,
  isSelected = false,
  onToggleSelect,
}: PostCardMobileProps) {
  const { open: openAppModal } = useAppModalStore();
  const isAuth = useAuthStore((s) => s.isAuth());
  const router = useRouter();

  const {
    postId,
    title,
    thumbnailUrl,
    category,
    myStatus,
    viewCount: viewCountProp,
    likeCount: likeCountProp,
    commentCount,
    saveCount: saveCountProp,
    createdAt,
  } = post;

  const categoryMeta = POST_CATEGORY_META[category.name as PostCategory];

  const isLiked = Boolean(myStatus?.isLiked);
  const isSaved = Boolean(myStatus?.isSaved);
  const likeCount = likeCountProp ?? 0;
  const saveCount = saveCountProp ?? 0;

  const togglePostLikeMutation = useTogglePostLike();
  const togglePostSaveMutation = useTogglePostSave();

  const handleCardClick = () => {
    if (isAuth) {
      router.push(`/community/post/${postId}`);
      return;
    }
    openAppModal('login');
  };

  const onToggleLike = () => {
    if (togglePostLikeMutation.isPending) return;
    togglePostLikeMutation.mutate({ postId: String(postId), isLiked });
  };

  const onToggleSave = () => {
    if (togglePostSaveMutation.isPending) return;
    togglePostSaveMutation.mutate({ postId: String(postId), isSaved });
  };

  return (
    <S.PostCardMobile onClick={handleCardClick}>
      <Thumbnail
        ratio='16_10'
        src={thumbnailUrl || DEFAULT_THUMBNAIL}
        radius
      />

      <S.Body>
        {isEdit && (
          <Checkbox
            isChecked={!!isSelected}
            onToggle={(checked) => onToggleSelect?.(checked)}
            size='sm'
            interactionVariant='normal'
          />
        )}

        <S.Main>
          {categoryMeta && (
            <SolidTag
              label={categoryMeta.label}
              color={categoryMeta.color}
            />
          )}

          <S.Title>{title}</S.Title>

          <S.MetaRow>
            <MetaItem
              count={likeCount}
              icon={<Heart />}
              fillIcon={<HeartFill />}
              isActive={isLiked}
              onClick={onToggleLike}
              disabled={togglePostLikeMutation.isPending}
            />
            <MetaItem
              count={commentCount || 0}
              icon={<Comment />}
              fillIcon={<CommentFill />}
              isActive={false}
            />
            <MetaItem
              count={saveCount}
              icon={<Bookmark />}
              fillIcon={<BookmarkFill />}
              isActive={isSaved}
              onClick={onToggleSave}
              disabled={togglePostSaveMutation.isPending}
            />
          </S.MetaRow>

          <S.MetaRow>
            <S.MetaText>조회수 {formatCountPlus(viewCountProp || 0)}</S.MetaText>
            <S.MetaText>{formatRelativeKorean(createdAt)}</S.MetaText>
          </S.MetaRow>
        </S.Main>
      </S.Body>
    </S.PostCardMobile>
  );
}

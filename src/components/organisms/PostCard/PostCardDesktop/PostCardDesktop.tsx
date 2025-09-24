'use client';

import { useRouter } from 'next/navigation';

import BookmarkFill from '@/assets/icons/bookmark-fill.svg';
import Bookmark from '@/assets/icons/bookmark.svg';
import CommentFill from '@/assets/icons/comment-fill.svg';
import Comment from '@/assets/icons/comment.svg';
import HeartFill from '@/assets/icons/heart-fill.svg';
import Heart from '@/assets/icons/heart.svg';
import AvatarPerson from '@/components/atoms/AvatarPerson/AvatarPerson';
import Checkbox from '@/components/atoms/Checkbox/Checkbox';
import SolidTag from '@/components/atoms/SolidTag/SolidTag';
import Thumbnail from '@/components/atoms/Thumbnail/Thumbnail';
import { POST_CATEGORY_META, PostCategory } from '@/constants/common';
import { DEFAULT_THUMBNAIL } from '@/constants/image';
import { useTogglePostLike } from '@/hooks/api/post/useTogglePostLike';
import { useTogglePostSave } from '@/hooks/api/post/useTogglePostSave';
import { useAuthStore } from '@/stores/useAuthStore';
import { useAppModalStore, useSimpleModalStore } from '@/stores/useModalStore';
import { formatRelativeKorean } from '@/utils/date/formatDay';
import { formatCountPlus, getDisplayName } from '@/utils/formatText';

import * as S from './PostCardDesktop.styled';
import MetaItem from '../MetaItem/MetaItem';
import { PostCardProps } from '../PostCard';

export default function PostCardDesktop({ post, isEdit = false, isSelected = false, onToggleSelect }: PostCardProps) {
  const router = useRouter();
  const { open: openAppModal } = useAppModalStore();
  const { open: openSimpleModal } = useSimpleModalStore();
  const isAuth = useAuthStore((s) => s.isAuth());

  const {
    postId,
    title,
    thumbnailUrl,
    category,
    author,
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

  const stop = (e: React.SyntheticEvent) => e.stopPropagation();

  const handleProfile = (e: React.SyntheticEvent) => {
    stop(e);
    if (author?.authorId && !author.isAnonymous) {
      openSimpleModal('userProfile', { memberId: String(author.authorId) });
    }
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
    <S.PostCardDesktop onClick={handleCardClick}>
      {isEdit && (
        <Checkbox
          isChecked={!!isSelected}
          onToggle={(checked) => onToggleSelect?.(checked)}
          size='sm'
          interactionVariant='normal'
        />
      )}

      <S.CardContainer>
        <S.ThumbnailWrapper>
          <Thumbnail
            ratio='16_10'
            src={thumbnailUrl || DEFAULT_THUMBNAIL}
            radius
          />
        </S.ThumbnailWrapper>

        <S.Body>
          <S.Main>
            <S.MainHeader>
              <S.Title>{title}</S.Title>
              {author && (
                <S.UserProfile onClick={handleProfile}>
                  <AvatarPerson
                    type='icon'
                    size='xsm'
                    src={author.profileUrl || undefined}
                  />
                  <S.Nickname>{getDisplayName(author.displayName, author.isAnonymous)}</S.Nickname>
                </S.UserProfile>
              )}
            </S.MainHeader>

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
          </S.Main>

          <S.Aside onClick={stop}>
            {categoryMeta && (
              <SolidTag
                label={categoryMeta.label}
                color={categoryMeta.color}
              />
            )}
            <S.SideMeta>
              <S.MetaText>조회수 {formatCountPlus(viewCountProp || 0)}</S.MetaText>
              <S.MetaText>{formatRelativeKorean(createdAt)}</S.MetaText>
            </S.SideMeta>
          </S.Aside>
        </S.Body>
      </S.CardContainer>
    </S.PostCardDesktop>
  );
}

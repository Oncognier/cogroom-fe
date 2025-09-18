'use client';

import { useRouter } from 'next/navigation';
import { useSimpleModalStore } from '@/stores/useModalStore';

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
import type { Post } from '@/types/post';
import { formatRelativeKorean } from '@/utils/date/formatDay';
import { formatCountPlus, getDisplayName } from '@/utils/formatText';
import { useTogglePostLike } from '@/hooks/api/post/useTogglePostLike';
import { useTogglePostSave } from '@/hooks/api/post/useTogglePostSave';

import MetaItem from './MetaItem/MetaItem';
import * as S from './PostCard.styled';

type PostCardProps = { post: Post };

export default function PostCard({ post }: PostCardProps) {
  const router = useRouter();
  const { open: openSimpleModal } = useSimpleModalStore();

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

  const handleCardClick = () => router.push(`/community/post/${postId}`);

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
    <S.PostCard onClick={handleCardClick}>
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
    </S.PostCard>
  );
}

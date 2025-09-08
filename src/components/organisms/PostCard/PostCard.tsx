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
import type { Post } from '@/types/post';
import { formatRelativeKorean } from '@/utils/date/formatDay';
import { formatCountPlus, getDisplayName } from '@/utils/formatText';

import MetaItem from './MetaItem/MetaItem';
import * as S from './PostCard.styled';

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  const router = useRouter();

  const {
    postId,
    title,
    thumbnailUrl,
    category,
    author,
    myStatus,
    viewCount,
    likeCount,
    commentCount,
    saveCount,
    createdAt,
  } = post;

  const categoryMeta = POST_CATEGORY_META[category.name as PostCategory];

  // TODO: PostCard onClick
  const handleClick = () => {
    router.push(`/post/${postId}`);
  };

  return (
    <S.PostCard>
      <S.ThumbnailWrapper>
        <Thumbnail
          ratio='16_10'
          src={thumbnailUrl}
          radius
        />
      </S.ThumbnailWrapper>

      <S.Body>
        <S.Main>
          <S.MainHeader>
            <S.Title>{title}</S.Title>
            {author && (
              <S.UserProfile>
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
              count={likeCount || 0}
              icon={<Heart />}
              fillIcon={<HeartFill />}
              isActive={myStatus?.isLiked}
            />
            <MetaItem
              count={commentCount || 0}
              icon={<Comment />}
              fillIcon={<CommentFill />}
              isActive={myStatus?.isCommented}
            />
            <MetaItem
              count={saveCount || 0}
              icon={<Bookmark />}
              fillIcon={<BookmarkFill />}
              isActive={myStatus?.isSaved}
            />
          </S.MetaRow>
        </S.Main>

        <S.Aside>
          {categoryMeta && (
            <SolidTag
              label={categoryMeta.label}
              color={categoryMeta.color}
            />
          )}
          <S.SideMeta>
            <S.MetaText>조회수 {formatCountPlus(viewCount || 0)}</S.MetaText>
            <S.MetaText>{formatRelativeKorean(createdAt)}</S.MetaText>
          </S.SideMeta>
        </S.Aside>
      </S.Body>
    </S.PostCard>
  );
}

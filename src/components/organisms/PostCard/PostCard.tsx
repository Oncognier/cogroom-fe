'use client';

import { Post } from '@/types/post';

import * as S from './PostCard.styled';
import PostCardDesktop from './PostCardDesktop/PostCardDesktop';
import PostCardMobile from './PostCardMobile/PostCardMobile';

export interface PostCardProps {
  post: Post;
  isEdit?: boolean;
  isSelected?: boolean;
  onToggleSelect?: (checked: boolean) => void;
}

export default function PostCard(props: PostCardProps) {
  return (
    <>
      <S.DesktopOnly>
        <PostCardDesktop {...props} />
      </S.DesktopOnly>
      <S.MobileOnly>
        <PostCardMobile {...props} />
      </S.MobileOnly>
    </>
  );
}

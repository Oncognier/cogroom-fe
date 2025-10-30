'use client';

import * as S from '../PostCard.styled';
import PostCardSkeletonDesktop from './PostCardSkeletonDesktop/PostCardSkeletonDesktop';
import PostCardSkeletonMobile from './PostCardSkeletonMobile/PostCardSkeletonMobile';

export interface PostCardSkeletonProps {
  isEdit?: boolean;
}

export default function PostCardSkeleton(props: PostCardSkeletonProps) {
  return (
    <>
      <S.DesktopOnly>
        <PostCardSkeletonDesktop {...props} />
      </S.DesktopOnly>
      <S.MobileOnly>
        <PostCardSkeletonMobile {...props} />
      </S.MobileOnly>
    </>
  );
}

'use client';

import Bookmark from '@/assets/icons/bookmark.svg';
import Comment from '@/assets/icons/comment.svg';
import Heart from '@/assets/icons/heart.svg';
import Checkbox from '@/components/atoms/Checkbox/Checkbox';
import Skeleton from '@/components/skeleton/Skeleton/Skeleton';

import * as S from './PostCardSkeletonMobile.styled';
import { PostCardSkeletonProps } from '../PostCardSkeleton';

const SKELETON_SIZES = {
  thumbnail: { width: '100%', height: '160px', borderRadius: '8px' },
  category: { width: '6.7rem', height: '3rem', borderRadius: '0.6rem' },
  title: { width: '80%', height: '2.4rem', borderRadius: '0.6rem' },
  metaItem: { width: '3.1rem', height: '1.6rem', borderRadius: '0.4rem' },
  viewCount: { width: '6.7rem', height: '1.6rem', borderRadius: '0.4rem' },
  date: { width: '4rem', height: '1.6rem', borderRadius: '0.4rem' },
} as const;

const MARGINS = {
  category: '0 0 1.2rem 0',
  title: '0 0 2.4rem 0',
} as const;

const SkeletonMetaItem = ({ icon }: { icon: React.ReactNode }) => (
  <S.MetaItem>
    {icon}
    <Skeleton {...SKELETON_SIZES.metaItem} />
  </S.MetaItem>
);

export default function PostCardSkeletonMobile({ isEdit = false }: PostCardSkeletonProps) {
  return (
    <S.PostCardSkeletonMobile>
      <Skeleton {...SKELETON_SIZES.thumbnail} />

      <S.Body>
        {isEdit && (
          <Checkbox
            isChecked={false}
            onToggle={() => {}}
            size='sm'
            interactionVariant='normal'
            isDisabled
          />
        )}

        <S.Main>
          <Skeleton
            {...SKELETON_SIZES.category}
            margin={MARGINS.category}
          />
          <Skeleton
            {...SKELETON_SIZES.title}
            margin={MARGINS.title}
          />

          <S.MetaRow>
            <SkeletonMetaItem icon={<Heart />} />
            <SkeletonMetaItem icon={<Comment />} />
            <SkeletonMetaItem icon={<Bookmark />} />
          </S.MetaRow>

          <S.MetaRow>
            <Skeleton {...SKELETON_SIZES.viewCount} />
            <Skeleton {...SKELETON_SIZES.date} />
          </S.MetaRow>
        </S.Main>
      </S.Body>
    </S.PostCardSkeletonMobile>
  );
}

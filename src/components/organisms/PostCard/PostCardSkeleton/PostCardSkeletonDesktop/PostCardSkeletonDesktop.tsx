'use client';

import Bookmark from '@/assets/icons/bookmark.svg';
import Comment from '@/assets/icons/comment.svg';
import Heart from '@/assets/icons/heart.svg';
import AvatarPerson from '@/components/atoms/AvatarPerson/AvatarPerson';
import Checkbox from '@/components/atoms/Checkbox/Checkbox';
import Skeleton from '@/components/skeleton/Skeleton/Skeleton';

import * as S from './PostCardSkeletonDesktop.styled';
import { PostCardSkeletonProps } from '../PostCardSkeleton';

const SKELETON_SIZES = {
  thumbnail: { width: '17.4rem', height: '100%', borderRadius: '1.2rem' },
  title: { width: '36.7rem', height: '2.4rem', borderRadius: '0.6rem' },
  nickname: { width: '10rem', height: '1.4rem', borderRadius: '0.4rem' },
  metaItem: { width: '3.1rem', height: '1.6rem', borderRadius: '0.4rem' },
  category: { width: '6.7rem', height: '2.4rem', borderRadius: '0.6rem' },
  viewCount: { width: '6.7rem', height: '1.6rem', borderRadius: '0.4rem' },
  date: { width: '4rem', height: '1.6rem', borderRadius: '0.4rem' },
} as const;

const SkeletonMetaItem = ({ icon }: { icon: React.ReactNode }) => (
  <S.MetaItem>
    {icon}
    <Skeleton {...SKELETON_SIZES.metaItem} />
  </S.MetaItem>
);

export default function PostCardSkeletonDesktop({ isEdit = false }: PostCardSkeletonProps) {
  return (
    <S.PostCardSkeletonDesktop>
      {isEdit && (
        <Checkbox
          isChecked={false}
          onToggle={() => {}}
          size='sm'
          interactionVariant='normal'
          isDisabled
        />
      )}

      <S.CardContainer>
        <S.ThumbnailWrapper>
          <Skeleton {...SKELETON_SIZES.thumbnail} />
        </S.ThumbnailWrapper>

        <S.Body>
          <S.Main>
            <S.MainHeader>
              <Skeleton {...SKELETON_SIZES.title} />
              <S.UserProfile>
                <AvatarPerson
                  type='icon'
                  size='xsm'
                />
                <Skeleton {...SKELETON_SIZES.nickname} />
              </S.UserProfile>
            </S.MainHeader>

            <S.MetaRow>
              <SkeletonMetaItem icon={<Heart />} />
              <SkeletonMetaItem icon={<Comment />} />
              <SkeletonMetaItem icon={<Bookmark />} />
            </S.MetaRow>
          </S.Main>

          <S.Aside>
            <Skeleton {...SKELETON_SIZES.category} />
            <S.SideMeta>
              <Skeleton {...SKELETON_SIZES.viewCount} />
              <Skeleton {...SKELETON_SIZES.date} />
            </S.SideMeta>
          </S.Aside>
        </S.Body>
      </S.CardContainer>
    </S.PostCardSkeletonDesktop>
  );
}

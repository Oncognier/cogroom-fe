import AvatarPerson from '@/components/atoms/AvatarPerson/AvatarPerson';
import Breadcrumb from '@/components/molecules/Breadcrumb/Breadcrumb';
import Skeleton from '@/components/skeleton/Skeleton/Skeleton';

import * as SS from './PostSkeleton.styled';
import * as S from '../../page.styled';

interface PostSkeletonProps {
  isDaily?: boolean;
}

export default function PostSkeleton({ isDaily = false }: PostSkeletonProps) {
  return (
    <S.PostPageContainer>
      <Breadcrumb
        items={[
          { name: '홈', href: '/' },
          { name: '커뮤니티', href: '/community' },
        ]}
      />
      <S.PostSectionsWrapper>
        <SS.HeaderSection>
          <Skeleton
            width='100%'
            height='3.8rem'
            borderRadius='1.2rem'
          />
          <Skeleton
            width='11.2rem'
            height='1.6rem'
            borderRadius='0.4rem'
          />
        </SS.HeaderSection>

        <SS.AuthorSection>
          <SS.AuthorInfo>
            <AvatarPerson
              type='image'
              size='md'
            />
            <Skeleton
              width='10rem'
              height='1.8rem'
              borderRadius='0.4rem'
            />
          </SS.AuthorInfo>
          <SS.Divider />
        </SS.AuthorSection>

        <SS.ContentSection>
          {isDaily ? (
            <SS.DailyContent>
              <Skeleton
                width='100%'
                height='39rem'
                borderRadius='1.2rem'
              />
              <Skeleton
                width='100%'
                height='9.6rem'
              />
            </SS.DailyContent>
          ) : (
            <Skeleton
              width='100%'
              height='9.6rem'
            />
          )}
        </SS.ContentSection>

        <SS.LikesSection>
          <Skeleton
            width='17.1rem'
            height='4rem'
            borderRadius='1.2rem'
          />
          <SS.Divider />
        </SS.LikesSection>
      </S.PostSectionsWrapper>
    </S.PostPageContainer>
  );
}

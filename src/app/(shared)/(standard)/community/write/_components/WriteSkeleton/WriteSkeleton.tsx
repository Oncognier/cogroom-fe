import Breadcrumb from '@/components/molecules/Breadcrumb/Breadcrumb';
import Skeleton from '@/components/skeleton/Skeleton/Skeleton';

import * as SS from './WriteSkeleton.styled';
import CommunityDescription from '../../../_components/CommunityDescription';
import * as S from '../../../write/page.styled';

export default function WriteSkeleton() {
  return (
    <S.Container>
      <S.MobileGuard>
        <Breadcrumb
          items={[
            { name: '홈', href: '/' },
            { name: '커뮤니티', href: '/community' },
          ]}
        />

        <CommunityDescription />
      </S.MobileGuard>

      <S.WriteForm>
        <Skeleton
          width='5rem'
          height='2rem'
          borderRadius='0.4rem'
        />
        <Skeleton
          width='15rem'
          height='4.6rem'
          borderRadius='1.2rem'
        />
        <Skeleton
          width='6rem'
          height='1.25rem'
        />

        <Skeleton
          width='2.5rem'
          height='2rem'
          borderRadius='0.4rem'
        />

        <Skeleton
          width='100%'
          height='4.8rem'
          borderRadius='1.2rem'
        />

        <SS.EditorSkeletonBox>
          <Skeleton
            width='100%'
            height='4.8rem'
            borderRadius='1.2rem'
          />
        </SS.EditorSkeletonBox>

        <Skeleton
          width='100%'
          height='81.2rem'
          borderRadius='1.2rem'
        />

        <S.ButtonWrapper>
          <Skeleton
            width='9rem'
            height='4.8rem'
            borderRadius='1.2rem'
          />
        </S.ButtonWrapper>
      </S.WriteForm>
    </S.Container>
  );
}

'use client';

import { usePathname, useRouter } from 'next/navigation';

import ChevronDown from '@/assets/icons/chevrondown.svg';
import IconButton from '@/components/atoms/IconButton/IconButton';
import SolidButton from '@/components/atoms/SolidButton/SolidButton';

import * as S from './layout.styled';

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const isPosts = pathname?.startsWith('/admin/community/posts');
  const isComments = pathname?.startsWith('/admin/community/comments');

  const goPosts = () => {
    if (!isPosts) router.push('/admin/community/posts');
  };
  const goComments = () => {
    if (!isComments) router.push('/admin/community/comments');
  };

  return (
    <S.CommunityLayout>
      <S.NavigationHeader>
        <S.PageSwitcher>
          <S.PageTitle>포스팅 관리</S.PageTitle>
          <IconButton
            size='4rem'
            variant='normal'
            interactionVariant='normal'
          >
            <ChevronDown />
          </IconButton>
        </S.PageSwitcher>

        <S.NavButtonWrapper>
          <SolidButton
            size='sm'
            label='포스팅'
            color={isPosts ? 'primary' : 'assistive'}
            interactionVariant='normal'
            onClick={goPosts}
          />
          <SolidButton
            size='sm'
            label='댓글'
            color={isComments ? 'primary' : 'assistive'}
            interactionVariant='normal'
            onClick={goComments}
          />
        </S.NavButtonWrapper>
      </S.NavigationHeader>

      {children}
    </S.CommunityLayout>
  );
}

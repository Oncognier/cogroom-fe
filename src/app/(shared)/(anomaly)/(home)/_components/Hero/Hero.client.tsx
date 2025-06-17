'use client';

import { useRouter } from 'next/navigation';

import ArrowRight from '@/assets/icons/arrowright.svg';
import { useAuthStore } from '@/stores/useAuthStore';
import { useModalStore } from '@/stores/useModalStore';

import * as S from './Hero.styled';

export default function HeroClient() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const { open } = useModalStore();
  const router = useRouter();

  const handleClick = () => {
    if (isLoggedIn) {
      router.push('/daily');
    } else {
      open('login', undefined);
    }
  };

  return (
    <S.ButtonWrapper onClick={handleClick}>
      슬쩍 열어보기
      <S.Icon className='icon'>
        <ArrowRight />
      </S.Icon>
    </S.ButtonWrapper>
  );
}

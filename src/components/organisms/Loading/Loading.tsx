'use client';

import { useEffect, useState } from 'react';

import { FRAME_COUNT, FRAME_DURATION, SPRITE_WIDTH } from '@/constants/common';
import { DEFAULT_LOADING } from '@/constants/image';

import * as S from './Loading.styled';

export default function Loading() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % FRAME_COUNT);
    }, FRAME_DURATION);
    return () => clearInterval(interval);
  }, []);

  return (
    <S.Loading>
      <S.Sprite
        frame={frame}
        image={DEFAULT_LOADING}
        frameWidth={SPRITE_WIDTH}
      />
      <S.Text>로딩중</S.Text>
    </S.Loading>
  );
}

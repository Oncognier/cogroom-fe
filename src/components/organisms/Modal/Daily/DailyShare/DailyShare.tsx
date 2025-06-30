'use client';

import Image from 'next/image';

import Kakao from '@/assets/icons/kakao.svg';
import Upload from '@/assets/icons/upload.svg';
import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import { SHARE_DAILY_URL } from '@/constants/common';
import { STREAK_SHARE_IMAGE_URLS } from '@/constants/image';
import { useAlertModalStore, useAppModalStore } from '@/stores/useModalStore';
import kakaoShare from '@/utils/api/kakaoShare';

import * as S from './DailyShare.styled';

export interface DailyShareProps {
  dailyStreak: number;
}

export default function DailyShare({ dailyStreak }: DailyShareProps) {
  const { close } = useAppModalStore();
  const { open } = useAlertModalStore();
  const randomImageUrl = STREAK_SHARE_IMAGE_URLS[Math.floor(Math.random() * STREAK_SHARE_IMAGE_URLS.length)];

  const handleLinkShare = () => {
    const url = SHARE_DAILY_URL;

    navigator.clipboard
      .writeText(url)
      .then(() => {
        open('alert', { message: '링크가 복사되었어요!' });
      })
      .catch(() => {
        open('alert', { message: '복사에 실패했어요. 다시 시도해주세요.' });
      });

    close();
  };

  const handleKakaoShare = () => {
    kakaoShare(dailyStreak, randomImageUrl);
    close();
  };

  return (
    <S.DailyShare>
      <S.ImageWrapper>
        <Image
          src={randomImageUrl}
          alt='shareImage'
          fill
        />
      </S.ImageWrapper>

      <S.Title>
        물방울 스트릭을
        <br />
        <S.Highlight>{dailyStreak}일째 </S.Highlight>
        유지 중이에요
      </S.Title>

      <S.ButtonWrapper>
        <OutlinedButton
          label='공유하기'
          size='sm'
          color='secondary'
          iconRight={<Upload />}
          interactionVariant='normal'
          onClick={handleLinkShare}
        />

        <S.KakaoShareButton onClick={handleKakaoShare}>
          <Kakao />
        </S.KakaoShareButton>
      </S.ButtonWrapper>
    </S.DailyShare>
  );
}

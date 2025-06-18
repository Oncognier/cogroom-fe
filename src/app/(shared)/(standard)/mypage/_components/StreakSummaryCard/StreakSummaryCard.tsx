'use client';

import TextButton from '@/components/atoms/TextButton/TextButton';
import { SHARE_DAILY_URL } from '@/constants/common';

import * as S from './StreakSummaryCard.styled';

interface StreakSummaryCardProps {
  dailyStreak?: number;
}
export default function StreakSummaryCard({ dailyStreak }: StreakSummaryCardProps) {
  const handleShare = () => {
    const url = SHARE_DAILY_URL;

    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert('링크가 복사되었어요! 🎉');
      })
      .catch(() => {
        alert('복사에 실패했어요. 다시 시도해주세요.');
      });
  };

  return (
    <S.StreakSummaryCard>
      <S.TextWrapper>
        <S.MainText>데일리 스트릭 </S.MainText>
        <S.StreakDayText>{dailyStreak}일째</S.StreakDayText>
      </S.TextWrapper>

      <TextButton
        size='sm'
        color='assistive'
        label='공유하기'
        interactionVariant='normal'
        onClick={handleShare}
      />
    </S.StreakSummaryCard>
  );
}

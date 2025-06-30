'use client';

import TextButton from '@/components/atoms/TextButton/TextButton';
import { useAppModalStore } from '@/stores/useModalStore';

import * as S from './StreakSummaryCard.styled';

interface StreakSummaryCardProps {
  dailyStreak: number;
}
export default function StreakSummaryCard({ dailyStreak }: StreakSummaryCardProps) {
  const { open } = useAppModalStore();

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
        onClick={() => open('dailyShare', { dailyStreak })}
      />
    </S.StreakSummaryCard>
  );
}

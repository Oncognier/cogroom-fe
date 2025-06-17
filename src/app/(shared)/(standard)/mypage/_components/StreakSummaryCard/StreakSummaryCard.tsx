import TextButton from '@/components/atoms/TextButton/TextButton';
import * as S from './StreakSummaryCard.styled';

export default function StreakSummaryCard() {
  return (
    <S.StreakSummaryCard>
      <S.TextWrapper>
        <S.MainText>데일리 스트릭 </S.MainText>
        <S.StreakDayText>10일째</S.StreakDayText>
      </S.TextWrapper>

      <TextButton
        size='sm'
        color='assistive'
        label='공유하기'
        interactionVariant='normal'
      />
    </S.StreakSummaryCard>
  );
}

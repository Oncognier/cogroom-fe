'use client';

import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import { useSubmitDailyAnswerMutation } from '@/hooks/api/daily/useSubmitDailyAnswer';
import { useAlertModalStore } from '@/stores/useModalStore';

import * as S from './DailyFirstAnswer.styled';

export interface DailyFirstAnswerProps {
  assignedQuestionId: number;
  answer: string;
}

export default function DailyFirstAnswer({ assignedQuestionId, answer }: DailyFirstAnswerProps) {
  const { close } = useAlertModalStore();
  const { submitDailyAnswer } = useSubmitDailyAnswerMutation();

  const handleSubmit = () => {
    close();
    submitDailyAnswer({ assignedQuestionId, answer });
  };

  return (
    <S.Container>
      <S.Title>작성한 답변은 오늘 자정까지만 바꿀 수 있어요</S.Title>

      <OutlinedButton
        label='확인'
        size='sm'
        color='assistive'
        interactionVariant='normal'
        fillContainer
        onClick={handleSubmit}
        type='submit'
      />
    </S.Container>
  );
}

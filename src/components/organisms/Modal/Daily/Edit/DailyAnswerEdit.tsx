'use client';

import { useRouter } from 'next/navigation';

import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import { useEditDailyAnswerMutation } from '@/hooks/api/daily/useEditDailyAnswer';
import { useAlertModalStore } from '@/stores/useModalStore';

import * as S from './DailyAnswerEdit.styled';

export interface DailyAnswerEditProps {
  assignedQuestionId: number;
  answer: string;
  redirectTo?: string;
}

export default function DailyAnswerEdit({ assignedQuestionId, answer, redirectTo }: DailyAnswerEditProps) {
  const router = useRouter();
  const { close } = useAlertModalStore();
  const { editDailyAnswer } = useEditDailyAnswerMutation();

  const handleClick = () => {
    editDailyAnswer({ assignedQuestionId, answer });
    close();
    if (redirectTo) {
      router.push(redirectTo);
    }
  };

  return (
    <S.DailyAnswerEdit>
      <S.TextWrapper>
        <S.Title>답변을 수정하시겠어요?</S.Title>
      </S.TextWrapper>

      <OutlinedButton
        label='수정하기'
        size='sm'
        color='secondary'
        interactionVariant='normal'
        onClick={handleClick}
        type='submit'
      />
    </S.DailyAnswerEdit>
  );
}

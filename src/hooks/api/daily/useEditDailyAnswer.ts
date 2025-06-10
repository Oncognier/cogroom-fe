'use client';

import { useMutation } from '@tanstack/react-query';

import { dailyApi } from '@/api/dailyApis';
import { useModalStore } from '@/stores/useModalStore';

// 답변 수정
export const useEditDailyAnswerMutation = () => {
  const { open } = useModalStore();

  const mutation = useMutation({
    mutationFn: dailyApi.editDailyAnswer,
    onSuccess: () => {
      open('dailyAnswerEdit', undefined);
    },
    onError: () => {
      // FIXME: 모달로 변경
      alert('답변 수정에 실패했습니다. 잠시 후 다시 시도해주세요.');
    },
  });

  return { editDailyAnswer: mutation.mutate };
};

'use client';

import { useMutation } from '@tanstack/react-query';

import { dailyApi } from '@/api/dailyApis';

// 답변 수정
export const useEditDailyAnswerMutation = () => {
  const mutation = useMutation({
    mutationFn: dailyApi.editDailyAnswer,
    onSuccess: () => {
      alert('수정되었습니다.');
    },
    onError: () => {
      // FIXME: 모달로 변경
      alert('답변 수정에 실패했습니다. 잠시 후 다시 시도해주세요.');
    },
  });

  return { editDailyAnswer: mutation.mutate };
};

'use client';

import { useMutation } from '@tanstack/react-query';

import { dailyApi } from '@/api/dailyApis';
import { useModalStore } from '@/stores/useModalStore';

// 답변 제출
export const useSubmitDailyAnswerMutation = () => {
  const { open } = useModalStore();
  const mutation = useMutation({
    mutationFn: dailyApi.submitDailyAnswer,
    onSuccess: () => {
      open('dailyAnswerPost', { redirectTo: '/daily' });
    },
    onError: () => {
      // FIXME: 모달로 변경
      alert('답변 제출에 실패했습니다. 잠시 후 다시 시도해주세요.');
    },
  });

  return { submitDailyAnswer: mutation.mutate };
};

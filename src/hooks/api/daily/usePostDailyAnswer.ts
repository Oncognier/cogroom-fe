'use client';

import { useMutation } from '@tanstack/react-query';

import { postDailyAnswer } from '@/api/dailyApis';
import { useModalStore } from '@/stores/useModalStore';

// 답변 제출
export const usePostDailyAnswerMutation = () => {
  const { open } = useModalStore();

  return useMutation({
    mutationFn: postDailyAnswer,
    onSuccess: () => {
      open('dailyAnswerPost', { redirectTo: '/daily' });
    },
    onError: () => {
      // FIXME: 모달로 변경
      alert('답변 제출에 실패했습니다. 잠시 후 다시 시도해주세요.');
    },
  });
};

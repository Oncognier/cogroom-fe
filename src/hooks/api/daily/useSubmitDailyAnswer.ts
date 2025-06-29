'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { dailyApi } from '@/api/dailyApis';
import { DAILY_QUERY_KEYS, STREAK_QUERY_KEYS } from '@/constants/queryKeys';
import { useModalStore } from '@/stores/useModalStore';

// 답변 제출
export const useSubmitDailyAnswerMutation = () => {
  const queryClient = useQueryClient();

  const { open } = useModalStore();

  const mutation = useMutation({
    mutationFn: dailyApi.submitDailyAnswer,
    onSuccess: () => {
      open('dailyAnswerPost', { redirectTo: '/daily' });
      queryClient.invalidateQueries({ queryKey: [...DAILY_QUERY_KEYS.DAILY] });
      queryClient.invalidateQueries({ queryKey: [...STREAK_QUERY_KEYS.STREAK] });
    },
    onError: (error) => {
      // FIXME: 모달로 변경
      alert('답변 제출에 실패했습니다. 잠시 후 다시 시도해주세요.');
    },
  });

  return { submitDailyAnswer: mutation.mutate };
};

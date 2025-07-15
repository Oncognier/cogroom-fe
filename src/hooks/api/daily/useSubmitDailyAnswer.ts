'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { HTTPError } from '@/api/axios/errors/HTTPError';
import { dailyApi } from '@/api/dailyApis';
import { DAILY_QUERY_KEYS, STREAK_QUERY_KEYS } from '@/constants/queryKeys';
import { useAppModalStore, useAlertModalStore } from '@/stores/useModalStore';

export const useSubmitDailyAnswerMutation = () => {
  const queryClient = useQueryClient();

  const { open: openApp } = useAppModalStore();
  const { open: openAlert } = useAlertModalStore();

  const mutation = useMutation({
    mutationFn: dailyApi.submitDailyAnswer,
    onSuccess: () => {
      openApp('dailyAnswerPost', { redirectTo: '/mypage/activity/daily' });
      queryClient.invalidateQueries({ queryKey: [...DAILY_QUERY_KEYS.DAILY] });
      queryClient.invalidateQueries({ queryKey: [...STREAK_QUERY_KEYS.STREAK] });
    },
    onError: (error: HTTPError) => {
      switch (error.code) {
        case 'ANSWER_NOTBLANK_ERROR':
          openAlert('error', { message: '한 글자라도 적어주세요' });
          break;
        case 'ANSWER_SIZE_ERROR':
          openAlert('error', { message: '내용을 조금만 줄여볼까요?' });
          break;
        case 'ANSWER_TIME_EXPIRED':
          openAlert('error', { message: '앗.. 자정이 지나 수정할 수 없어요' });
          break;
        default:
          openAlert('error', { message: error.message });
          break;
      }
    },
  });

  return { submitDailyAnswer: mutation.mutate };
};

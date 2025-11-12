'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { HTTPError } from '@/api/axios/errors/HTTPError';
import { dailyApi } from '@/api/dailyApis';
import { DAILY_QUERY_KEYS } from '@/constants/queryKeys';
import { useAlertModalStore } from '@/stores/useModalStore';

export const useEditDailyAnswerMutation = () => {
  const queryClient = useQueryClient();
  const { open } = useAlertModalStore();

  const mutation = useMutation({
    mutationFn: dailyApi.editDailyAnswer,
    onSuccess: (_, variables) => {
      // ✅ GTM 이벤트 전송
      if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'daily_answer_edit_success',
          questionId: variables.answer, // 필요 시
          timestamp: new Date().toISOString(),
        });
      }

      // 기존 동작 유지
      open('alert', { message: '수정되었습니다.' });
      queryClient.invalidateQueries({ queryKey: [...DAILY_QUERY_KEYS.DAILY_QUESTION_ANSWER] });
    },
    onError: (error: HTTPError) => {
      switch (error.code) {
        case 'ANSWER_NOTBLANK_ERROR':
          open('alert', { message: '한 글자라도 적어주세요' });
          break;
        case 'ANSWER_SIZE_ERROR':
          open('alert', { message: '내용을 조금만 줄여볼까요?' });
          break;
        case 'ANSWER_TIME_EXPIRED':
          open('alert', { message: '앗.. 자정이 지나 수정할 수 없어요' });
          break;
        default:
          open('error', { message: error.message });
          break;
      }
    },
  });

  return { editDailyAnswer: mutation.mutate };
};

'use client';

import { useMutation, useQuery } from '@tanstack/react-query';

import { useModalStore } from '@/stores/useModalStore';

import { getDaily, patchDailyAnswer, postDailyAnswer } from '../_api/dailyApis';

// 스트릭, 질문, 답변 조회
export default function useDailyQuery() {
  const { data } = useQuery({
    queryKey: ['daily-question'],
    queryFn: getDaily,
  });

  return data;
}

// 답변 제출
export const usePostDailyAnswerMutation = () => {
  const { open } = useModalStore();

  return useMutation({
    mutationFn: postDailyAnswer,
    onSuccess: () => {
      open('dailyAnswerPost', { redirectTo: '/daily' });
    },
    onError: () => {
      alert('답변 제출에 실패했습니다. 잠시 후 다시 시도해주세요.');
    },
  });
};

// 답변 수정
export const usePatchDailyAnswerMutation = () => {
  const { open } = useModalStore();

  return useMutation({
    mutationFn: patchDailyAnswer,
    onSuccess: () => {
      open('dailyAnswerEdit', undefined);
    },
    onError: () => {
      alert('답변 수정에 실패했습니다. 잠시 후 다시 시도해주세요.');
    },
  });
};
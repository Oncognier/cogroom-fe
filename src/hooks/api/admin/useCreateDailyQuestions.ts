import { useMutation, useQueryClient } from '@tanstack/react-query';

import { adminApi } from '@/api/adminApi';
import { useAlertModalStore } from '@/stores/useModalStore';

export const useCreateDailyQuestionsMutation = () => {
  const { open } = useAlertModalStore();

  const mutation = useMutation({
    mutationFn: adminApi.createDailyQuestions,
    onSuccess: () => {},
    onError: () => {
      open('error', { message: '데일리 질문 추가에 실패했습니다.' });
    },
  });

  return { createDailyQuestions: mutation.mutate };
};

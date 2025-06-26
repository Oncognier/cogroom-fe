import { useMutation, useQueryClient } from '@tanstack/react-query';
import { adminApi } from '@/api/adminApi';

export const useCreateDailyQuestionsMutation = () => {
  const mutation = useMutation({
    mutationFn: adminApi.createDailyQuestions,
    onSuccess: () => {},
    onError: () => {
      alert('데일이 질문 추가에 실패했습니다.');
    },
  });

  return { createDailyQuestions: mutation.mutate };
};

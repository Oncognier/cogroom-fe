import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { adminApi } from '@/api/adminApi';
import { ADMIN_QUERY_KEYS } from '@/constants/queryKeys';
import { useAlertModalStore } from '@/stores/useModalStore';

export const useCreateDailyQuestionsMutation = () => {
  const { open } = useAlertModalStore();
  const queryClient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: adminApi.createDailyQuestions,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [...ADMIN_QUERY_KEYS.ADMIN_DAILY_LIST] });
      router.push('/admin/contents');
    },
    onError: () => {
      open('error', { message: '데일리 질문 추가에 실패했습니다.' });
    },
  });

  return { createDailyQuestions: mutation.mutate };
};

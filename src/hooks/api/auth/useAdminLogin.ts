import { useMutation, useQueryClient } from '@tanstack/react-query';

import { authApi } from '@/api/authApis';
import { DAILY_QUERY_KEYS, MEMBER_QUERY_KEYS, STREAK_QUERY_KEYS } from '@/constants/queryKeys';
import { useAlertModalStore } from '@/stores/useModalStore';

export const useAdminLoginMutation = () => {
  const queryClient = useQueryClient();
  const { open: openAlert } = useAlertModalStore();

  const mutation = useMutation({
    mutationFn: authApi.adminLogin,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [...MEMBER_QUERY_KEYS.MEMBER_SUMMARY] });
      queryClient.invalidateQueries({ queryKey: [...DAILY_QUERY_KEYS.DAILY] });
      queryClient.invalidateQueries({ queryKey: [...STREAK_QUERY_KEYS.STREAK] });
    },
    onError: () => {
      openAlert('error', { message: '로그인 중 오류가 발생했습니다.' });
    },
  });

  return { adminLogin: mutation.mutate };
};

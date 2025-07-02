import { useMutation, useQueryClient } from '@tanstack/react-query';

import { adminApi } from '@/api/adminApi';
import { ADMIN_QUERY_KEYS } from '@/constants/queryKeys';
import { useAlertModalStore } from '@/stores/useModalStore';

export const useDeleteMemberMutation = () => {
  const queryClient = useQueryClient();
  const { open } = useAlertModalStore();

  const mutation = useMutation({
    mutationFn: adminApi.deleteMember,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [...ADMIN_QUERY_KEYS.ADMIN_MEMBER_LIST] });
    },
    onError: () => {
      open('error', { message: '회원 삭제에 실패했습니다.' });
    },
  });

  return { deleteMember: mutation.mutate };
};

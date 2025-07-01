import { useMutation, useQueryClient } from '@tanstack/react-query';

import { adminApi } from '@/api/adminApi';
import { useAlertModalStore } from '@/stores/useModalStore';
import { ADMIN_QUERY_KEYS } from '@/constants/queryKeys';

interface ChangeMemberRoleParams {
  nickname: string;
  currentRole: string;
  changedRole: string;
}

export const useChangeMemberRoleMutation = ({ nickname, currentRole, changedRole }: ChangeMemberRoleParams) => {
  const { open } = useAlertModalStore();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: adminApi.changeMemberRole,
    onSuccess: () => {
      open('alert', {
        message: `“${nickname}”님의 등급이\n${currentRole} → ${changedRole}(으)로\n변경되었습니다.`,
      });
      queryClient.invalidateQueries({ queryKey: [...ADMIN_QUERY_KEYS.ADMIN_MEMBER_LIST] });
    },
    onError: () => {
      open('error', { message: '권한 변경에 실패하였습니다.' });
    },
  });

  return { changeMemberRole: mutation.mutate };
};

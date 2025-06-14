import { useMutation, useQueryClient } from '@tanstack/react-query';

import { memberApi } from '@/api/memberApis';
import { MEMBER_QUERY_KEYS } from '@/constants/queryKeys';

export const useEditUserInfoMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: memberApi.editUserInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [...MEMBER_QUERY_KEYS.MEMBER_INFO] });
    },
    onError: () => {
      alert('정보 수정에 실패했습니다. 잠시 후 다시 시도해주세요.');
    },
  });

  return { editUserInfo: mutation.mutate };
};

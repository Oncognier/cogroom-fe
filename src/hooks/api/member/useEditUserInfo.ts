import { UseFormSetError } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { memberApi } from '@/api/memberApis';
import { MEMBER_QUERY_KEYS } from '@/constants/queryKeys';
import { SettingFormFields } from '@/app/(shared)/(standard)/mypage/setting/page';
import { setValidationError } from '@/utils/validators/setValidationError';

export const useEditUserInfoMutation = (setError?: UseFormSetError<SettingFormFields>) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: memberApi.editUserInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [...MEMBER_QUERY_KEYS.MEMBER_SUMMARY] });
    },
    onError: (error) => {
      setValidationError<SettingFormFields>(error, setError);
    },
  });

  return { editUserInfo: mutation.mutate };
};

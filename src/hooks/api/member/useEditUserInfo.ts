import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UseFormSetError } from 'react-hook-form';

import { memberApi } from '@/api/memberApis';
import { MEMBER_QUERY_KEYS } from '@/constants/queryKeys';
import { useAlertModalStore } from '@/stores/useModalStore';
import { SettingFormFields } from '@/types/form';
import { setValidationError } from '@/utils/validators/setValidationError';

export const useEditUserInfoMutation = (setError?: UseFormSetError<SettingFormFields>) => {
  const { open } = useAlertModalStore();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: memberApi.editUserInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [...MEMBER_QUERY_KEYS.MEMBER_SUMMARY] });
      open('alert', { message: '저장되었습니다.' });
    },
    onError: (error) => {
      setValidationError<SettingFormFields>(error, setError);
    },
  });

  return { editUserInfo: mutation.mutate };
};

import { UseFormSetError } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { memberApi } from '@/api/memberApis';
import { MEMBER_QUERY_KEYS } from '@/constants/queryKeys';
import { SettingFormFields } from '@/app/(shared)/(standard)/mypage/setting/page';
import { ErrorResponseData } from '@/api/axios/types';
import { VALIDATION_FIELD_MAP, VALIDATION_MESSAGE, ValidationErrorKey } from '@/constants/validationMessages';

export const useEditUserInfoMutation = (setError?: UseFormSetError<SettingFormFields>) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: memberApi.editUserInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [...MEMBER_QUERY_KEYS.MEMBER_SUMMARY] });
    },
    onError: (error: ErrorResponseData) => {
      const code = error.code as ValidationErrorKey;
      const field = VALIDATION_FIELD_MAP[code];

      if (field && setError) {
        setError(field as keyof SettingFormFields, {
          message: VALIDATION_MESSAGE[code],
        });
      } else alert('정보 수정에 실패했습니다. 잠시 후 다시 시도해주세요.');
    },
  });

  return { editUserInfo: mutation.mutate };
};

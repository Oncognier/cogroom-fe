import { useMutation } from '@tanstack/react-query';

import { authApi } from '@/api/authApis';

export const useSignupMutation = () => {
  const mutation = useMutation({
    mutationFn: authApi.signup,
    onError: () => {
      alert('회원가입에 실패했습니다. 잠시 후 다시 시도해주세요.');
    },
  });

  return { signup: mutation.mutate };
};

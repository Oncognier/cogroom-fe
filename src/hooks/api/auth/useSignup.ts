import { useMutation } from '@tanstack/react-query';

import authApis from '@/api/authApis';

export const useSignupMutation = () => {
  const signupMutation = useMutation({
    mutationFn: authApis.postSignup,
    onError: () => {
      alert('회원가입에 실패했습니다. 잠시 후 다시 시도해주세요.');
    },
  });

  return { mutateSignup: signupMutation.mutate };
};

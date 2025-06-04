import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { postLogIn } from '@/api/authApis';

export const useLogInMutation = () => {
  const router = useRouter();

  const logInMutation = useMutation({
    mutationFn: postLogIn,
    onSuccess: ({ needSignup }) => {
      router.push('/');
      //console.log(needSignup);
    },
    onError: () => {
      alert('오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      router.push('/');
    },
  });

  return { mutateLogIn: logInMutation.mutate };
};

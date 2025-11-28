import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { paymentApi } from '@/api/paymentApis';

export const useCompletePlanMutation = () => {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: paymentApi.completePlan,
    onSuccess: async () => {
      router.push('/');
    },
    onError: () => {
      alert('결제에 실패하였습니다');
    },
  });

  return { completePlan: mutation.mutate };
};

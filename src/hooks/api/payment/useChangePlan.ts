import { useMutation } from '@tanstack/react-query';

import { paymentApi } from '@/api/paymentApis';

export const useChangePlanMutation = () => {
  const mutation = useMutation({
    mutationFn: paymentApi.changePlan,
    onSuccess: async () => {},
    onError: () => {
      alert('결제에 실패하였습니다');
    },
  });

  return { changePlan: mutation.mutate };
};

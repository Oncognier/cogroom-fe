import { useMutation } from '@tanstack/react-query';

import { memberApi } from '@/api/memberApis';

export default function useRegisterCoupon() {
  const mutation = useMutation({
    mutationFn: memberApi.registerCoupon,
  });

  return {
    registerCoupon: mutation.mutate,
    registerCouponAsync: mutation.mutateAsync,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
    data: mutation.data,
  };
}

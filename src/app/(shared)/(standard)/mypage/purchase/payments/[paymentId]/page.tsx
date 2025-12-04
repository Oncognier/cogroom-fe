'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

import Loading from '@/components/organisms/Loading/Loading';
import { PaymentDetail } from '@/components/organisms/Payment/PaymentDetail/PaymentDetail';
import useGetPaymentDetail from '@/hooks/api/payment/useGetPaymentDetail';
import { useAlertModalStore } from '@/stores/useModalStore';

export default function PaymentDetailPage() {
  const params = useParams();
  const paymentId = params.paymentId as string;
  const router = useRouter();
  const { open: openAlert } = useAlertModalStore();

  const {
    data: paymentDetail,
    isLoading,
    error,
  } = useGetPaymentDetail({
    paymentHistoryId: Number(paymentId),
  });

  useEffect(() => {
    if (!error) return;

    const errorCode = (error as { response?: { data?: { errorCode?: string; message?: string } } })?.response?.data
      ?.errorCode;

    if (errorCode) {
      const errorMessages: Record<string, string> = {
        MEMBER_NOT_FOUND_ERROR: '사용자를 찾을 수 없습니다.',
        PAYMENT_RECORD_NOT_FOUND: '결제 기록을 찾을 수 없습니다.',
      };

      const message =
        errorMessages[errorCode] ||
        (error as { response?: { data?: { message?: string } } })?.response?.data?.message ||
        '오류가 발생했습니다.';

      openAlert('alert', { message, type: 'alert' });
    }
  }, [error, openAlert]);

  useEffect(() => {
    if (!isLoading && !paymentDetail) {
      router.back();
    }
  }, [isLoading, paymentDetail, router]);

  if (isLoading) return <Loading />;
  if (!paymentDetail) return null;

  return <PaymentDetail paymentData={paymentDetail} />;
}

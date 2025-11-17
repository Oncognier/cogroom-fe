import { useChangePlanMutation } from '@/hooks/api/payment/useChangePlan';
import { useVerifyPaymentMutation } from '@/hooks/api/payment/useVerifyPayment';
import { requestIdentityVerification } from '@/utils/portone';

/**
 * 결제 플로우를 처리하는 커스텀 훅
 *
 * - 빌링키가 있으면 플랜 변경만 수행
 * - 없으면 본인인증 후 결제 검증 요청 수행
 */
export const usePaymentProcessor = () => {
  const { changePlan } = useChangePlanMutation();
  const { verifyPayment } = useVerifyPaymentMutation();

  const startPaymentFlow = async (paymentHistoryId: number, billingKeyExists: boolean) => {
    // 이미 빌링키가 있으면 플랜 변경만 요청
    if (billingKeyExists) {
      changePlan({ paymentHistoryId });
      return;
    }

    // 본인인증
    const identityRes = await requestIdentityVerification();

    if (!identityRes) {
      alert('본인인증에 실패하였습니다');
      return;
    }

    // 사용자 정보 및 결제 정보 가져와서 빌링키 생성
    verifyPayment({
      identityVerificationId: identityRes.identityVerificationId,
      paymentHistoryId,
    });
  };

  return { startPaymentFlow };
};

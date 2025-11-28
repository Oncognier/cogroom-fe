import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { loadPaymentState } from '@/stores/paymentStorage';

import { usePaymentProcessor } from './usePaymentProcessor';

/**
 * 본인 인증 리다이렉트 후 결제 플로우를 재개하는 로직을 담당하는 훅
 */
export const usePaymentResume = () => {
  const searchParams = useSearchParams();
  const { handleNewPayment } = usePaymentProcessor();
  const [isResuming, setIsResuming] = useState(false); // 결제 재개 처리 중 상태

  useEffect(() => {
    // 1. URL 쿼리에서 identityVerificationId가 있는지 확인 (본인 인증 후 리다이렉트된 경우)
    const identityVerificationId = searchParams.get('identityVerificationId');
    const code = searchParams.get('code');

    if (code) {
      // 실패 시 URL 정리 (무한 호출 방지 및 깔끔한 URL 유지)
      if (typeof window !== 'undefined') {
        const url = new URL(window.location.href);
        url.searchParams.delete('code');
        url.searchParams.delete('identityVerificationId');
        url.searchParams.delete('identityVerificationTxId');
        url.searchParams.delete('message');
        url.searchParams.delete('transactionType');

        window.history.replaceState(null, '', url.toString());
      }
      alert('본인인증에 실패했습니다. 처음부터 다시 시도해주세요.');
      return;
    }

    if (identityVerificationId) {
      if (typeof window !== 'undefined') {
        const url = new URL(window.location.href);
        url.searchParams.delete('identityVerificationId');
        url.searchParams.delete('identityVerificationTxId');
        url.searchParams.delete('message');
        url.searchParams.delete('transactionType');
        window.history.replaceState(null, '', url.toString());
      }

      // 2. Session Storage에서 저장된 결제 상태를 로드
      const storedState = loadPaymentState();

      if (storedState) {
        // 3. 결제 재개 로직 실행
        const resumePayment = async () => {
          setIsResuming(true);
          try {
            await handleNewPayment(storedState.paymentHistoryId, storedState.paymentMethod, identityVerificationId);
          } catch (error) {
            alert('결제 재개에 실패하였습니다.');
          } finally {
            setIsResuming(false);
          }
        };

        resumePayment();
      } else {
        // 세션 만료 등으로 데이터가 없는 경우
        alert('이전 결제 정보를 찾을 수 없습니다. 처음부터 다시 시도해주세요.');
      }
    }
  }, []);

  return { isResuming };
};

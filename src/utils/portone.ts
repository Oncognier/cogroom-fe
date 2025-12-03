import PortOne from '@portone/browser-sdk/v2';

import { PORTONE } from '@/constants/api';
import { PaymentMethod, RegisteredPaymentMethod } from '@/types/payment';

export type IdentityResponse = {
  identityVerificationId: string;
} | null;

export type BillingCustomer = {
  fullName?: string;
  phoneNumber?: string;
  email?: string;
};

export type BillingRequestParams = {
  finalPrice: number;
  planName: string;
  paymentHistoryId?: number;
  customer?: BillingCustomer;
};

const ALERT_PAYMENT_ERROR = '결제 시스템 설정에 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.';

/**
 * 본인 인증 요청 유틸리티 함수
 * 필요한 결제 상태는 호출 전 Session Storage에 저장됩니다.
 */
export const requestIdentityVerification = async (): Promise<IdentityResponse | null> => {
  if (!PORTONE.STORE_ID || !PORTONE.CHANNEL_KEYS.IDENTITY || !PORTONE.IDENTITY_REDIRECT_URL) {
    alert(ALERT_PAYMENT_ERROR);
    return null;
  }

  const id = `identity-verification-${crypto.randomUUID()}`;

  const response = await PortOne.requestIdentityVerification({
    storeId: PORTONE.STORE_ID,
    identityVerificationId: id,
    channelKey: PORTONE.CHANNEL_KEYS.IDENTITY,
    redirectUrl: PORTONE.IDENTITY_REDIRECT_URL,
  });

  if (!response || response.code) {
    return null;
  }

  return response;
};

/**
 * 이니시스 카드 정기결제 빌링키 요청 유틸 함수
 */
export const requestInicisBillingKey = async (opts: BillingRequestParams) => {
  if (!PORTONE.STORE_ID || !PORTONE.CHANNEL_KEYS.INICIS) {
    alert(ALERT_PAYMENT_ERROR);
    return null;
  }

  const { finalPrice, paymentHistoryId, planName, customer } = opts;

  return await PortOne.requestIssueBillingKey({
    storeId: PORTONE.STORE_ID,
    currency: 'KRW',
    redirectUrl: PORTONE.PAYMENT_REDIRECT_URL,
    offerPeriod: { interval: '1m' },

    displayAmount: finalPrice,
    billingKeyMethod: 'CARD',
    channelKey: PORTONE.CHANNEL_KEYS.INICIS,
    issueId: String(paymentHistoryId),
    issueName: planName,
    customer,
  });
};

/**
 * 카카오페이 정기결제 빌링키 요청 유틸 함수
 */
export const requestKakaoBillingKey = async (opts: BillingRequestParams) => {
  if (!PORTONE.STORE_ID || !PORTONE.CHANNEL_KEYS.KAKAO) {
    alert(ALERT_PAYMENT_ERROR);
    return null;
  }

  const { finalPrice, paymentHistoryId, planName } = opts;

  return await PortOne.requestIssueBillingKey({
    storeId: PORTONE.STORE_ID,
    currency: 'KRW',
    redirectUrl: PORTONE.PAYMENT_REDIRECT_URL,

    displayAmount: finalPrice,
    billingKeyMethod: 'EASY_PAY',
    channelKey: PORTONE.CHANNEL_KEYS.KAKAO,
    issueId: String(paymentHistoryId),
    issueName: planName,
  });
};

/**
 * 휴대폰 정기결제 빌링키 요청 유틸 함수
 */
export const requestMobileBillingKey = async (opts: BillingRequestParams) => {
  if (!PORTONE.STORE_ID || !PORTONE.CHANNEL_KEYS.INICIS) {
    alert(ALERT_PAYMENT_ERROR);
    return null;
  }

  const { finalPrice, paymentHistoryId, planName, customer } = opts;

  return await PortOne.requestIssueBillingKey({
    storeId: PORTONE.STORE_ID,
    currency: 'KRW',
    redirectUrl: PORTONE.PAYMENT_REDIRECT_URL,
    offerPeriod: { interval: '1m' },

    displayAmount: finalPrice,
    billingKeyMethod: 'MOBILE',
    channelKey: PORTONE.CHANNEL_KEYS.INICIS,
    issueId: String(paymentHistoryId),
    issueName: planName,
    customer,
  });
};

/**
 * 결제 수단에 따라 적절한 빌링키 발급 요청 유틸 함수를 호출하는 메인 함수
 */
export const requestBillingKey = async (method: PaymentMethod, params: BillingRequestParams) => {
  switch (method) {
    case 'CARD':
      return requestInicisBillingKey(params);
    case 'KAKAO_PAY':
      return requestKakaoBillingKey(params);
    case 'PHONE':
      return requestMobileBillingKey(params);
    default:
      throw new Error(`[requestBillingKey] Unsupported billing method: ${method}`);
  }
};

/**
 * @typedef {Object} PaymentStatus
 * @property {boolean} hasCARD - CARD 타입 결제 수단 등록 여부
 * @property {boolean} hasKAKAOPAY - KAKAO_PAY 타입 결제 수단 등록 여부
 */

/**
 * 등록된 결제 수단 목록에서 CARD 또는 KAKAO_PAY 타입의 등록 여부를 확인합니다.
 *
 * @param {RegisteredPaymentMethod[]} paymentMethods - 등록된 결제 수단 객체 배열
 * @returns {PaymentStatus} - CARD 및 KAKAO_PAY의 등록 상태 객체
 */
export const checkPaymentMethods = (paymentMethods: RegisteredPaymentMethod[]) => {
  const result = {
    hasCARD: false,
    hasKAKAOPAY: false,
  };

  if (!Array.isArray(paymentMethods) || paymentMethods === null) {
    return result;
  }

  for (const method of paymentMethods) {
    if (result.hasCARD && result.hasKAKAOPAY) {
      break;
    }

    if (method.isPresent === true) {
      switch (method.paymentType) {
        case 'CARD':
          result.hasCARD = true;
          break;
        case 'KAKAO_PAY':
          result.hasKAKAOPAY = true;
          break;
      }
    }
  }

  return result;
};

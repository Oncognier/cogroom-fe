import PortOne from '@portone/browser-sdk/v2';

import { PORTONE } from '@/constants/api';

export type IdentityResponse = {
  identityVerificationId: string;
} | null;

export const requestIdentityVerification = async (): Promise<IdentityResponse> => {
  if (!PORTONE.STORE_ID || !PORTONE.CHANNEL_KEY_IDENTITY) {
    return null;
  }

  const id = `identity-verification-${crypto.randomUUID()}`;

  const response = await PortOne.requestIdentityVerification({
    storeId: PORTONE.STORE_ID,
    identityVerificationId: id,
    channelKey: PORTONE.CHANNEL_KEY_IDENTITY,
  });

  return response ?? null;
};

export type IssueBillingKeyParams = {
  finalPrice: number;
  paymentHistoryId: number;
  planName: string;
  customer: {
    fullName?: string;
    phoneNumber?: string;
    email?: string;
  };
};

export const requestIssueBillingKey = async (opts: IssueBillingKeyParams) => {
  if (!PORTONE.STORE_ID || !PORTONE.CHANNEL_KEY_SUBSCRIPTION) {
    return null;
  }

  const { finalPrice, paymentHistoryId, planName, customer } = opts;

  const response = await PortOne.requestIssueBillingKey({
    displayAmount: finalPrice,
    currency: 'KRW',
    storeId: PORTONE.STORE_ID,
    billingKeyMethod: 'CARD',
    channelKey: PORTONE.CHANNEL_KEY_SUBSCRIPTION,
    issueId: String(paymentHistoryId),
    issueName: planName,
    redirectUrl: PORTONE.REDIRECT_URL,
    offerPeriod: {
      interval: '1m',
    },
    customer: {
      fullName: customer.fullName,
      phoneNumber: customer.phoneNumber,
      email: customer.email,
    },
  });

  return response ?? null;
};

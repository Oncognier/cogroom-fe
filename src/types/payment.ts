import { ApiResponse } from './api';

export interface Plan {
  planId: number;
  name: string;
  basePrice: number;
  baseDiscountAmount: number;
  baseDiscountRate: number;
  finalPrice: number;
  monthlyPrice: number;
  billingCycle: 'MONTHLY' | 'YEARLY';
  description: string;
  status: 'ACTIVE' | 'INACTIVE';
}

export interface PlanInfo extends Plan {
  paymentHistoryId: number;
  expiresAt: string;
  isSubscribed: boolean;
}

export interface PlanInfoRequest {
  planId: number;
  isTrial: boolean;
}

export interface PlanInfoResponse extends ApiResponse {
  result: PlanInfo;
}

export interface PlansResponse extends ApiResponse {
  result: Plan[];
}

export interface BillingKeyResponse extends ApiResponse {
  result: {
    isExist: boolean;
  };
}

export type PaymentMethod = 'CARD' | 'PHONE' | 'KAKAO';

export interface CompletePlanRequest {
  paymentHistoryId: number;
  paymentMethod: PaymentMethod;
}

export interface VerifyPaymentRequest {
  identityVerificationId?: string;
  paymentHistoryId: number;
}

export interface VerifyPaymentData {
  email?: string;
  phoneNumber?: string;
  name?: string;
  paymentHistoryId: number;
  finalPrice: number;
  planName: string;
}

export interface VerifyPaymentResponse extends ApiResponse {
  result: VerifyPaymentData;
}

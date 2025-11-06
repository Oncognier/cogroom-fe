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

export interface ChangePlanRequest {
  paymentHistoryId: number;
}

export interface VerifyPaymentRequest {
  identityVerificationId: string;
  paymentHistoryId: number;
}

export interface VerifyPaymentResponse extends ApiResponse {
  result: {
    email: string;
    phoneNumber: string;
    name: string;
    paymentHistoryId: number;
    finalPrice: number;
    planName: string;
  };
}

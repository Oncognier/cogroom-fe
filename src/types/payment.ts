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

export interface PaymentHistory {
  id: number;
  plan: string;
  isPaid: boolean;
  amount: number;
  paymentDate: string;
  status: 'COMPLETED' | 'PENDING' | 'FAILED' | 'CANCELED';
}

export interface PaymentHistoryResponse extends ApiResponse {
  result: {
    payments: PaymentHistory[];
    totalCount: number;
  };
}

export interface PaymentHistoryItem {
  paymentHistoryId: number;
  amount: number;
  status: string;
  planId: number;
  planName: string;
  paymentDate: string;
}

export interface PaymentHistoryApiResponse extends ApiResponse {
  result: {
    data: PaymentHistoryItem[];
    nextCursor: number;
    last: boolean;
    totalElements: number;
  };
}

export interface PaymentHistoryParams {
  cursor?: number;
  sort?: string;
  size?: number;
}

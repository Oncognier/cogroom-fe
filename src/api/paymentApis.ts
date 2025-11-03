import { AxiosResponse } from 'axios';

import { END_POINTS } from '@/constants/api';
import { ApiResponse } from '@/types/api';
import {
  BillingKeyResponse,
  ChangePlanRequest,
  PlanInfoRequest,
  PlanInfoResponse,
  PlansResponse,
  VerifyPaymentRequest,
  VerifyPaymentResponse,
} from '@/types/payment';

import { axiosInstance } from './axios/axiosInstance';

/** 플랜 정보 조회 */
const getPlanInfo = async (params: PlanInfoRequest) => {
  const { data } = await axiosInstance.get<PlanInfoResponse>(END_POINTS.PAYMENTS.PLAN, { params });

  return data.result;
};

/** 플랜 정보 전체 조회 */
const getPlans = async () => {
  const { data } = await axiosInstance.get<PlansResponse>(END_POINTS.PAYMENTS.PLANS);

  return data.result;
};

/** 빌링키 조회 — 신규 결제자 / 플랜 업데이트 대상 확인용 */
const getBillingKey = async () => {
  const { data } = await axiosInstance.get<BillingKeyResponse>(END_POINTS.PAYMENTS.BILLING_KEY);

  return data.result;
};

/** 플랜 변경 */
const changePlan = async ({ paymentHistoryId }: ChangePlanRequest) => {
  const { data } = await axiosInstance.patch<ApiResponse>(END_POINTS.PAYMENTS.CHANGE_PLAN, { paymentHistoryId });

  return data;
};

/** 결제 인증 정보 조회 */
const verifyPayment = async ({ identityVerificationId, paymentHistoryId }: VerifyPaymentRequest) => {
  const { data } = await axiosInstance.post<VerifyPaymentRequest, AxiosResponse<VerifyPaymentResponse>>(
    END_POINTS.PAYMENTS.VERIFY,
    { identityVerificationId, paymentHistoryId },
  );

  return data.result;
};

export const paymentApi = { getPlanInfo, getPlans, getBillingKey, changePlan, verifyPayment };

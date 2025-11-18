import { HTTP_STATUS_CODE } from '@/constants/api';
import { RegisterCouponResponse, COUPON_ERROR_MESSAGES } from '@/types/coupon';

export const registerCouponSuccess: RegisterCouponResponse = {
  code: HTTP_STATUS_CODE.OK,
  message: '요청에 성공했습니다.',
};

export const registerCouponNotFound: RegisterCouponResponse = {
  code: HTTP_STATUS_CODE.NOT_FOUND,
  message: COUPON_ERROR_MESSAGES.COUPON_NOT_FOUND,
};

export const registerCouponExpired: RegisterCouponResponse = {
  code: HTTP_STATUS_CODE.BAD_REQUEST,
  message: COUPON_ERROR_MESSAGES.COUPON_EXPIRED,
};

export const registerCouponAlreadyUsed: RegisterCouponResponse = {
  code: HTTP_STATUS_CODE.CONFLICT,
  message: COUPON_ERROR_MESSAGES.COUPON_ALREADY_USED,
};

export const registerCouponNotApplicable: RegisterCouponResponse = {
  code: HTTP_STATUS_CODE.BAD_REQUEST,
  message: COUPON_ERROR_MESSAGES.COUPON_NOT_APPLICABLE,
};

export const registerCouponMemberNotFound: RegisterCouponResponse = {
  code: HTTP_STATUS_CODE.NOT_FOUND,
  message: COUPON_ERROR_MESSAGES.MEMBER_NOT_FOUND_ERROR,
};

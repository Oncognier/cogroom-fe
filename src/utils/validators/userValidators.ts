import { VALIDATION_MESSAGE } from '@/constants/validationMessages';

export const regex = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  phone: /^[0-9-]*$/,
  nickname: /^[가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9]+$/,
};

export const validateEmail = (v: string): true | string => {
  if (!regex.email.test(v)) {
    return VALIDATION_MESSAGE.EMAIL_PATTERN_ERROR;
  }
  return true;
};

export const validatePhoneNumber = (v: string | undefined): true | string => {
  if (!v || v.trim() === '') return true;

  if (!regex.phone.test(v)) {
    return VALIDATION_MESSAGE.PHONENUMBER_INVALID_CHARACTERS_ERROR;
  }

  const digits = v.replace(/[^0-9]/g, '');
  if (digits.length > 11) {
    return VALIDATION_MESSAGE.PHONENUMBER_TOO_LONG_ERROR;
  }

  return true;
};

export const validateNickname = (v: string): true | string => {
  if (!regex.nickname.test(v)) {
    return VALIDATION_MESSAGE.NICKNAME_INVALID_CHARACTERS_ERROR;
  }

  if (/^\d+$/.test(v)) {
    return VALIDATION_MESSAGE.NICKNAME_ONLY_NUMBERS_ERROR;
  }

  if (v.length > 10) {
    return VALIDATION_MESSAGE.NICKNAME_TOO_LONG_ERROR;
  }

  return true;
};

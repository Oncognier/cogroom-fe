import { VALIDATION_MESSAGE } from '@/constants/validationMessages';

export const regex = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  phone: /^[0-9-]*$/,
  nickname: /^[가-힣a-zA-Z0-9]+$/,
};

export const validateEmail = (v: string) => {
  if (!regex.email.test(v)) {
    const { type, message } = VALIDATION_MESSAGE.EMAIL.INVALID;
    return `${type}: ${message}`;
  }
  return true;
};

export const validatePhoneNumber = (v: string | undefined) => {
  if (!v || v.trim() === '') return true;

  if (!regex.phone.test(v)) {
    const { type, message } = VALIDATION_MESSAGE.PHONE.INVALID_CHARACTERS;
    return `${type}: ${message}`;
  }

  const digits = v.replace(/[^0-9]/g, '');
  if (digits.length > 11) {
    const { type, message } = VALIDATION_MESSAGE.PHONE.TOO_LONG;
    return `${type}: ${message}`;
  }

  return true;
};

export const validateNickname = (v: string) => {
  if (!regex.nickname.test(v)) {
    const { type, message } = VALIDATION_MESSAGE.NICKNAME.INVALID_CHARACTERS;
    return `${type}: ${message}`;
  }

  if (/^\d+$/.test(v)) {
    const { type, message } = VALIDATION_MESSAGE.NICKNAME.ONLY_NUMBERS;
    return `${type}: ${message}`;
  }

  if (v.length > 10) {
    const { type, message } = VALIDATION_MESSAGE.NICKNAME.TOO_LONG;
    return `${type}: ${message}`;
  }

  return true;
};

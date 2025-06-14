export const VALIDATION_TYPE = {
  NORMAL: 'normal',
  ERROR: 'error',
  WARNING: 'warning',
  SUCCESS: 'success',
  DISABLE: 'disable',
} as const;

export type ValidationType = (typeof VALIDATION_TYPE)[keyof typeof VALIDATION_TYPE];

export const VALIDATION_MESSAGE = {
  EMAIL: {
    INVALID: {
      type: VALIDATION_TYPE.NORMAL,
      message: '이메일 형식이 아닙니다.',
    },
  },
  PHONE: {
    INVALID_CHARACTERS: {
      type: VALIDATION_TYPE.NORMAL,
      message: '전화번호는 숫자와 하이픈(-)만 입력할 수 있습니다.',
    },
    TOO_LONG: {
      type: VALIDATION_TYPE.NORMAL,
      message: '전화번호는 숫자 기준으로 11자리 이하로 입력해주세요.',
    },
  },
  NICKNAME: {
    INVALID_CHARACTERS: {
      type: VALIDATION_TYPE.NORMAL,
      message: '닉네임은 한글, 영문, 숫자만 사용할 수 있습니다.',
    },
    ONLY_NUMBERS: {
      type: VALIDATION_TYPE.NORMAL,
      message: '닉네임은 숫자만으로 만들 수 없습니다.',
    },
    TOO_LONG: {
      type: VALIDATION_TYPE.NORMAL,
      message: '닉네임은 10자 이내여야 합니다.',
    },
  },
} as const;

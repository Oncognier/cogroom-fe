export const VALIDATION_MESSAGE = {
  EMAIL_PATTERN_ERROR: '이메일 형식이 아닙니다.',
  EMAIL_NOT_VERIFIED_ERROR: '이메일 인증이 실패했습니다.',
  EMAIL_EMPTY_FILED_ERROR: '이메일은 필수입니다.',
  EMAIL_DUPLICATE_ERROR: '이미 존재하는 이메일입니다.',

  PHONENUMBER_PATTERN_ERROR: '전화번호 형식이 올바르지 않습니다.',
  PHONENUMBER_INVALID_CHARACTERS_ERROR: '전화번호는 숫자와 하이픈(-)만 입력할 수 있습니다.',
  PHONENUMBER_TOO_LONG_ERROR: '전화번호는 숫자 기준으로 11자리 이하로 입력해주세요.',

  NICKNAME_INVALID_CHARACTERS_ERROR: '닉네임은 한글, 영문, 숫자만 사용할 수 있습니다.',
  NICKNAME_ONLY_NUMBERS_ERROR: '닉네임은 숫자만으로 만들 수 없습니다.',
  NICKNAME_TOO_LONG_ERROR: '닉네임은 10자 이내여야 합니다.',
  NICKNAME_DUPLICATE_ERROR: '이미 사용 중인 닉네임입니다.',
  NICKNAME_EMPTY_FILED_ERROR: '닉네임은 필수입니다.',
} as const;

export type ValidationErrorKey = keyof typeof VALIDATION_MESSAGE;

export const VALIDATION_FIELD_MAP: Partial<Record<ValidationErrorKey, string>> = {
  EMAIL_PATTERN_ERROR: 'email',
  EMAIL_NOT_VERIFIED_ERROR: 'email',
  EMAIL_EMPTY_FILED_ERROR: 'email',
  EMAIL_DUPLICATE_ERROR: 'email',

  PHONENUMBER_PATTERN_ERROR: 'phoneNumber',
  PHONENUMBER_INVALID_CHARACTERS_ERROR: 'phoneNumber',
  PHONENUMBER_TOO_LONG_ERROR: 'phoneNumber',

  NICKNAME_INVALID_CHARACTERS_ERROR: 'nickname',
  NICKNAME_ONLY_NUMBERS_ERROR: 'nickname',
  NICKNAME_TOO_LONG_ERROR: 'nickname',
  NICKNAME_DUPLICATE_ERROR: 'nickname',
  NICKNAME_EMPTY_FILED_ERROR: 'nickname',
} as const;

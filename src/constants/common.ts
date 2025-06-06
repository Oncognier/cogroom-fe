export const NAV_ITEMS = [
  { label: '데일리', href: '/daily' },
  { label: '콘텐츠', href: '/content' },
  { label: '커뮤니티', href: '/community' },
] as const;

export const SIGNUP_STEP = {
  CHECK_ORIGINAL_EMAIL: 'CHECK_ORIGINAL_EMAIL',
  INPUT_NEW_EMAIL: 'INPUT_NEW_EMAIL',
  VERIFY_EMAIL: 'VERIFY_EMAIL',
  COMPLETE: 'COMPLETE',
} as const;

export type SignupStep = (typeof SIGNUP_STEP)[keyof typeof SIGNUP_STEP];

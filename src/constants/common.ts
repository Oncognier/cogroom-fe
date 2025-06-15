export const HEADER_NAV_ITEMS = [
  { label: '데일리', href: '/daily' },
  { label: '콘텐츠', href: '/content' },
  { label: '커뮤니티', href: '/community' },
] as const;

export const SIDEBAR_NAV_ITEMS = [
  { label: '개인정보 설정', href: '/mypage/setting' },
  { label: '학습 및 활동 기록', href: '/mypage/activity' },
  { label: '구매 기록', href: '/mypage/purchase' },
  { label: '커뮤니티 활동', href: '/mypage/community' },
  { label: '푸시 및 카톡 알림', href: '/mypage/notification' },
] as const;

export const SIGNUP_STEP = {
  CHECK_ORIGINAL_EMAIL: 'CHECK_ORIGINAL_EMAIL',
  INPUT_NEW_EMAIL: 'INPUT_NEW_EMAIL',
  VERIFY_EMAIL: 'VERIFY_EMAIL',
  COMPLETE: 'COMPLETE',
} as const;

export type SignupStep = (typeof SIGNUP_STEP)[keyof typeof SIGNUP_STEP];

export const WEEK_DAYS = ['월', '화', '수', '목', '금', '토', '일'] as const;

export const SOCIAL_LINKS = {
  YOUTUBE: 'https://www.youtube.com/@oncognier',
  INSTAGRAM: 'https://www.instagram.com/on.cognier',
  THREADS: 'https://www.threads.com/@on.cognier',
} as const;

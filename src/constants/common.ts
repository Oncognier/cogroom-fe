import { DEFAULT_COGPOINT_IMAGE1, DEFAULT_COGPOINT_IMAGE2, DEFAULT_COGPOINT_IMAGE3 } from '@/constants/image';

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

export const DEFAULT_DAILY_QUESTION = '내가 생각하는 ‘나’는 어떤 모습인가요?';

export const COGPOINT_CARDS = [
  {
    src: DEFAULT_COGPOINT_IMAGE1,
    subtitle: 'for self growth',
    title: '나보다 나를 더 잘 아는\n자기이해 플랫폼',
    content: '무의식적으로 해온 생각과 나도 몰랐던\n나의 마음들을 알아차려요',
  },
  {
    src: DEFAULT_COGPOINT_IMAGE2,
    subtitle: 'scientific method',
    title: '6가지 인지과학 분야로\n체계적인 성장을',
    content: '단순한 학습이 아닌, 과학적 학문 기반으로',
  },
  {
    src: DEFAULT_COGPOINT_IMAGE3,
    subtitle: 'for self growth',
    title: '나보다 나를 더 잘 아는\n자기이해 플랫폼',
    content: '무의식적으로 해온 생각과 나도 몰랐던 나의\n마음들을 알아차려요',
  },
];

export const PAGINATION_VISIBLE_RANGE = 5;

export const USER_ROLE_META = {
  USER: {
    label: '일반회원',
    tagType: 'solid' as const,
    color: 'gray' as const,
  },
  ADMIN: {
    label: '관리자',
    tagType: 'solid' as const,
    color: 'blue' as const,
  },
  CONTENT_PROVIDER: {
    label: '콘텐츠제공자',
    tagType: 'outlined' as const,
    color: 'blue' as const,
  },
};

export type UserRole = keyof typeof USER_ROLE_META;

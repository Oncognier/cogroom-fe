import Graph from '@/assets/icons/graph.svg';
import HandHeart from '@/assets/icons/handheart.svg';
import Smile from '@/assets/icons/smile.svg';
import { DeployEnv, SelectOption } from '@/types/common';

export const BASE_URL = 'https://cogroom.com';

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

export const LEVEL_SELECT_OPTIONS: SelectOption[] = [
  { label: '기초', value: 'BASIC' },
  { label: '기본', value: 'NORMAL' },
  { label: '심화', value: 'ADVANCED' },
];

export const CATEGORY_SELECT_OPTIONS: SelectOption[] = [
  { label: '심리학', value: 1 },
  { label: '뇌과학', value: 2 },
  { label: '철학', value: 3 },
  { label: '인류학', value: 4 },
  { label: '언어학', value: 5 },
  { label: '컴퓨터공학', value: 6 },
  { label: '기타', value: 7 },
];

export const SIGNUP_STEP = {
  CHECK_ORIGINAL_EMAIL: 'CHECK_ORIGINAL_EMAIL',
  INPUT_NEW_EMAIL: 'INPUT_NEW_EMAIL',
  VERIFY_EMAIL: 'VERIFY_EMAIL',
  COMPLETE: 'COMPLETE',
} as const;

export type SignupStep = (typeof SIGNUP_STEP)[keyof typeof SIGNUP_STEP];

export const WITHDRAW_STEP = {
  SUPPORT_CONTACT: 'SUPPORT_CONTACT',
  CONFIRM: 'CONFIRM',
  INPUT_REASON: 'INPUT_REASON',
  COMPLETE: 'COMPLETE',
} as const;

export type WithdrawStep = (typeof WITHDRAW_STEP)[keyof typeof WITHDRAW_STEP];

export const WEEK_DAYS = ['월', '화', '수', '목', '금', '토', '일'] as const;

export const SOCIAL_LINKS = {
  YOUTUBE: 'https://www.youtube.com/@oncognier',
  INSTAGRAM: 'https://www.instagram.com/on.cognier',
  THREADS: 'https://www.threads.com/@on.cognier',
} as const;

export const DEFAULT_DAILY_QUESTION = '내가 생각하는 ‘나’는 어떤 모습인가요?';

export const COGPOINT_CARDS = [
  {
    icon: Smile,
    subtitle: 'for self growth',
    title: '나보다 나를 더 잘 아는\n자기이해 플랫폼',
    content: '무의식적으로 해온 생각과 나도 몰랐던 나의 마음들을 알아차려요',
  },
  {
    icon: Graph,
    subtitle: 'scientific method',
    title: '6가지 인지과학 분야로\n체계적인 성장을',
    content: '단순한 학습이 아닌, 과학적 학문 기반으로',
  },
  {
    icon: HandHeart,
    subtitle: 'droplet to ocean',
    title: '한 방울씩 성찰이 쌓여\n내면의 깊은 바다로',
    content: '매일 질문에 답하고, 지식을 쌓으며, 함께 소통하고 성장해요',
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

export const CATEGORY_META = {
  심리학: {
    label: '심리학',
    color: 'orange' as const,
  },
  뇌과학: {
    label: '뇌과학',
    color: 'blue' as const,
  },
  철학: {
    label: '철학',
    color: 'green' as const,
  },
  인류학: {
    label: '인류학',
    color: 'violet' as const,
  },
  언어학: {
    label: '언어학',
    color: 'pink' as const,
  },
  컴퓨터공학: {
    label: '컴퓨터공학',
    color: 'cyan' as const,
  },
  기타: {
    label: '기타',
    color: 'gray' as const,
  },
};

export type Category = keyof typeof CATEGORY_META;

export const LEVEL_META = {
  BASIC: {
    label: '기초',
  },
  NORMAL: {
    label: '기본',
  },
  ADVANCED: {
    label: '심화',
  },
} as const;

export type Level = keyof typeof LEVEL_META;

export const QUICK_DATE_SELECT = [
  { label: '최근 7일', value: 7 },
  { label: '최근 30일', value: 30 },
  { label: '최근 90일', value: 90 },
];

export const SHARE_DAILY_URL = process.env.NEXT_PUBLIC_SHARE_DAILY_URL || 'https://preview.cogroom.com/daily';

export const ROLE_LABELS = {
  ADMIN: '관리자',
  USER: '일반회원',
  CONTENT_PROVIDER: '콘텐츠 제공자',
} as const;

export type RoleKey = keyof typeof ROLE_LABELS;
export const ROLE_OPTIONS: RoleKey[] = ['ADMIN', 'USER', 'CONTENT_PROVIDER'];

export const SPRITE_WIDTH = 257;
export const FRAME_COUNT = 9;
export const FRAME_DURATION = 800;
export const DAILY_MAX_LENGTH = 101;

export const DEPLOY_ENV = (process.env.NEXT_PUBLIC_DEPLOY_ENV ?? 'production') as DeployEnv;

export const USER_INTERVIEW_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeNXXBCdvAPksPRyA2PT3zafIjX6Yc9RZ0RFb0m4mtEEbmMuQ/viewform';
export const DAILY_FEEDBACK_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeZ-6SkoxlPCltFvF4G20XXEsuyk3FjGFsBN5Kbrh1Rjru2Xg/viewform';
export const ONCOGNIER_URL = 'https://www.oncognier.com/';

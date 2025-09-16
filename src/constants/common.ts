import Graph from '@/assets/icons/graph.svg';
import HandHeart from '@/assets/icons/handheart.svg';
import Smile from '@/assets/icons/smile.svg';
import { DeployEnv, SelectOption, TableHeaderItem } from '@/types/common';

/* ---------- 기본 URL/환경 ---------- */
export const BASE_URL = 'https://cogroom.com';
export const DEPLOY_ENV = (process.env.NEXT_PUBLIC_DEPLOY_ENV ?? 'production') as DeployEnv;

/* ---------- 네비게이션 ---------- */
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

/* ---------- 메타 데이터 ---------- */
export const CATEGORY_LABELS = {
  PSYCHOLOGY: '심리학',
  NEUROSCIENCE: '뇌과학',
  PHILOSOPHY: '철학',
  ANTHROPOLOGY: '인류학',
  LINGUISTICS: '언어학',
  COMPUTER_SCIENCE: '컴퓨터공학',
  OTHERS: '기타',
} as const;

export const POST_CATEGORY_LABELS = {
  DAILY_SHARE: '데일리 공유',
  REFLECTION: '사색/고민',
  COLUMN: '칼럼',
} as const;

export const LEVEL_LABELS = {
  BASIC: '기초',
  NORMAL: '기본',
  ADVANCED: '심화',
} as const;

export const CATEGORY_META = {
  [CATEGORY_LABELS.PSYCHOLOGY]: { label: CATEGORY_LABELS.PSYCHOLOGY, color: 'orange' as const },
  [CATEGORY_LABELS.NEUROSCIENCE]: { label: CATEGORY_LABELS.NEUROSCIENCE, color: 'blue' as const },
  [CATEGORY_LABELS.PHILOSOPHY]: { label: CATEGORY_LABELS.PHILOSOPHY, color: 'green' as const },
  [CATEGORY_LABELS.ANTHROPOLOGY]: { label: CATEGORY_LABELS.ANTHROPOLOGY, color: 'violet' as const },
  [CATEGORY_LABELS.LINGUISTICS]: { label: CATEGORY_LABELS.LINGUISTICS, color: 'pink' as const },
  [CATEGORY_LABELS.COMPUTER_SCIENCE]: { label: CATEGORY_LABELS.COMPUTER_SCIENCE, color: 'cyan' as const },
  [CATEGORY_LABELS.OTHERS]: { label: CATEGORY_LABELS.OTHERS, color: 'gray' as const },
};

export type Category = keyof typeof CATEGORY_META;

export const POST_CATEGORY_META = {
  [POST_CATEGORY_LABELS.DAILY_SHARE]: { label: POST_CATEGORY_LABELS.DAILY_SHARE, color: 'blue' as const },
  [POST_CATEGORY_LABELS.REFLECTION]: { label: POST_CATEGORY_LABELS.REFLECTION, color: 'blue' as const },
  [POST_CATEGORY_LABELS.COLUMN]: { label: POST_CATEGORY_LABELS.COLUMN, color: 'blue' as const },
};

export type PostCategory = keyof typeof POST_CATEGORY_META;

export const LEVEL_META = {
  BASIC: { label: LEVEL_LABELS.BASIC },
  NORMAL: { label: LEVEL_LABELS.NORMAL },
  ADVANCED: { label: LEVEL_LABELS.ADVANCED },
} as const;

export type Level = keyof typeof LEVEL_META;

export const ROLE_LABELS = {
  USER: '일반회원',
  ADMIN: '관리자',
  CONTENT_PROVIDER: '콘텐츠 제공자',
} as const;

export type RoleKey = keyof typeof ROLE_LABELS;

export const ROLE_OPTIONS: RoleKey[] = ['ADMIN', 'USER', 'CONTENT_PROVIDER'];

export const USER_ROLE_META = {
  USER: { label: ROLE_LABELS.USER, tagType: 'solid' as const, color: 'gray' as const },
  ADMIN: { label: ROLE_LABELS.ADMIN, tagType: 'solid' as const, color: 'blue' as const },
  CONTENT_PROVIDER: { label: ROLE_LABELS.CONTENT_PROVIDER, tagType: 'outlined' as const, color: 'blue' as const },
};

/* ---------- 셀렉트 옵션 ---------- */
export const LEVEL_SELECT_OPTIONS: SelectOption[] = [
  { label: LEVEL_LABELS.BASIC, value: 'BASIC' },
  { label: LEVEL_LABELS.NORMAL, value: 'NORMAL' },
  { label: LEVEL_LABELS.ADVANCED, value: 'ADVANCED' },
];

export const CATEGORY_SELECT_OPTIONS: SelectOption[] = [
  { label: CATEGORY_LABELS.PSYCHOLOGY, value: 1 },
  { label: CATEGORY_LABELS.NEUROSCIENCE, value: 2 },
  { label: CATEGORY_LABELS.PHILOSOPHY, value: 3 },
  { label: CATEGORY_LABELS.ANTHROPOLOGY, value: 4 },
  { label: CATEGORY_LABELS.LINGUISTICS, value: 5 },
  { label: CATEGORY_LABELS.COMPUTER_SCIENCE, value: 6 },
  { label: CATEGORY_LABELS.OTHERS, value: 7 },
];

export const POST_CATEGORY_SELECT_OPTIONS: SelectOption[] = [
  { label: POST_CATEGORY_LABELS.DAILY_SHARE, value: 1 },
  { label: POST_CATEGORY_LABELS.REFLECTION, value: 2 },
  { label: POST_CATEGORY_LABELS.COLUMN, value: 3 },
];

export const QUICK_DATE_SELECT = [
  { label: '최근 7일', value: 7 },
  { label: '최근 30일', value: 30 },
  { label: '최근 90일', value: 90 },
];

/* ---------- 테이블 헤더 ---------- */
export const USER_TABLE_HEADER_ITEMS: TableHeaderItem[] = [
  { label: '회원 번호', mode: 'fix', width: '12rem', align: 'center' },
  { label: '프로필', mode: 'fix', width: '12rem', align: 'center' },
  { label: '회원 정보', mode: 'expand', align: 'left' },
  { label: '가입일', mode: 'fix', width: '12rem', align: 'center' },
] as const;

export const CONTENTS_TABLE_HEADER_ITEMS: TableHeaderItem[] = [
  { label: '카테고리', mode: 'fix', width: '20.8rem', align: 'center' },
  { label: '질문 내용', mode: 'expand', align: 'center' },
  { label: '난이도', mode: 'fix', width: '12rem', align: 'center' },
] as const;

export const DAILY_TABLE_HEADER_ITEMS: TableHeaderItem[] = [
  { label: '작성자', mode: 'fix', width: '12rem', align: 'center' },
  { label: '카테고리', mode: 'fix', width: '20.8rem', align: 'center' },
  { label: '질문 내용', mode: 'expand', align: 'center' },
  { label: '난이도', mode: 'fix', width: '12rem', align: 'center' },
  { label: '업데이트일', mode: 'fix', width: '12rem', align: 'center' },
] as const;

export const ADMIN_POSTS_TABLE_HEADER_ITEMS: TableHeaderItem[] = [
  { label: '고유번호', mode: 'fix', width: '9rem', align: 'center' },
  { label: '글 내용', mode: 'expand', align: 'center' },
  { label: '작성자', mode: 'fix', width: '10rem', align: 'center' },
  { label: '작성일시', mode: 'fix', width: '10rem', align: 'center' },
] as const;

export const ADMIN_COMMENTS_TABLE_HEADER_ITEMS: TableHeaderItem[] = [
  { label: '고유번호', mode: 'fix', width: '9rem', align: 'center' },
  { label: '댓글 내용', mode: 'expand', align: 'center' },
  { label: '작성자', mode: 'fix', width: '10rem', align: 'center' },
  { label: '작성일시', mode: 'fix', width: '10rem', align: 'center' },
] as const;

/* ---------- 회원가입/탈퇴 스텝 ---------- */
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

/* ---------- UI/기능 관련 ---------- */
export const WEEK_DAYS = ['월', '화', '수', '목', '금', '토', '일'] as const;
export const PAGINATION_VISIBLE_RANGE = 5;
export const DAILY_MAX_LENGTH = 101;

export const SPRITE_WIDTH = 257;
export const FRAME_COUNT = 9;
export const FRAME_DURATION = 800;

export const DEFAULT_DAILY_QUESTION = '내가 생각하는 ‘나’는 어떤 모습인가요?';

/* ---------- 카드/컨텐츠 ---------- */
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

/* ---------- 외부 링크 ---------- */
export const SOCIAL_LINKS = {
  YOUTUBE: 'https://www.youtube.com/@oncognier',
  INSTAGRAM: 'https://www.instagram.com/on.cognier',
  THREADS: 'https://www.threads.com/@on.cognier',
} as const;

export const SHARE_DAILY_URL = process.env.NEXT_PUBLIC_SHARE_DAILY_URL || 'https://preview.cogroom.com/daily';

export const USER_INTERVIEW_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeNXXBCdvAPksPRyA2PT3zafIjX6Yc9RZ0RFb0m4mtEEbmMuQ/viewform';

export const DAILY_FEEDBACK_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeZ-6SkoxlPCltFvF4G20XXEsuyk3FjGFsBN5Kbrh1Rjru2Xg/viewform';

export const ONCOGNIER_URL = 'https://www.oncognier.com/';

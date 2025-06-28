const AUTH_QUERY_KEYS = {
  AUTH: ['auth'],
  AUTH_REISSUE: ['auth', 'reissue'],
} as const;

const MEMBER_QUERY_KEYS = {
  MEMBER: ['member'],
  MEMBER_INFO: ['member', 'info'],
  MEMBER_SUMMARY: ['member', 'summary'],
  MEMBER_DAILY: ['member', 'daily'],
  MEMBER_DASHBOARD: ['member', 'dashboard'],
} as const;

const DAILY_QUERY_KEYS = {
  DAILY: ['streak', 'question', 'answer'],
} as const;

const STREAK_QUERY_KEYS = {
  STREAK_DAYS: 'streak_days',
} as const;

const ADMIN_QUERY_KEYS = {
  ADMIN: ['admin'],
  ADMIN_MEMBER_LIST: ['admin', 'member_list'],
  ADMIN_MEMBER_DAILY: ['admin', 'daily'],
} as const;

export { AUTH_QUERY_KEYS, MEMBER_QUERY_KEYS, DAILY_QUERY_KEYS, STREAK_QUERY_KEYS, ADMIN_QUERY_KEYS };

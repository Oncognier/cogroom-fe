const AUTH_QUERY_KEYS = {
  AUTH: ['auth'],
  AUTH_REISSUE: ['auth', 'reissue'],
} as const;

const MEMBER_QUERY_KEYS = {
  MEMBER: ['member'],
  MEMBER_SUMMARY: ['member', 'info', 'summary'],
  MEMBER_INFO: ['member', 'info'],
} as const;

const DAILY_QUERY_KEYS = {
  DAILY: ['streak', 'question', 'answer'],
} as const;

const STREAK_QUERY_KEYS = {
  STREAK_DAYS: 'streak_days',
} as const;

export { AUTH_QUERY_KEYS, MEMBER_QUERY_KEYS, DAILY_QUERY_KEYS, STREAK_QUERY_KEYS };

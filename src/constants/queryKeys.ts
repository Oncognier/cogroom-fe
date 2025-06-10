const USER_QUERY_KEYS = {
  USER_SUMMARY: 'user_summary',
  USER_INFO: 'user_info',
} as const;

const DAILY_QUERY_KEYS = {
  DAILY: ['streak', 'question', 'answer'],
} as const;

const STREAK_QUERY_KEYS = {
  STREAK_DAYS: 'streak_days',
} as const;

export { USER_QUERY_KEYS, DAILY_QUERY_KEYS, STREAK_QUERY_KEYS };

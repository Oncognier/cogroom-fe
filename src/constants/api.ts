export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const API_V1 = `${BASE_URL}/api/v1`;

const BASE_PATH_V1 = {
  AUTH: `${API_V1}/auth`,
  MEMBERS: `${API_V1}/members`,

  NOTICES: `${API_V1}/notices`,
  DAILY: `${API_V1}/daily`,
  CONTENTS: `${API_V1}/contents`,
  FILE: `${API_V1}/files`,
  STREAKS: `${API_V1}/streaks`,

  ADMIN: `${API_V1}/admin`,
} as const;

export const END_POINTS_V1 = {
  AUTH: {
    SIGNUP: `${BASE_PATH_V1.AUTH}/signup`,
    LOGIN: `${BASE_PATH_V1.AUTH}/login`,
    LOGOUT: `${BASE_PATH_V1.AUTH}/logout`,
    SEND_EMAIL: `${BASE_PATH_V1.AUTH}/email-verification`,
    CHECK_EMAIL: `${BASE_PATH_V1.AUTH}/check-verification`,
    EMAIL_VERIFIED_STATUS: `${BASE_PATH_V1.AUTH}/email/status`,
    NICKNAME: `${BASE_PATH_V1.AUTH}/nickname`,
    REISSUE_TOKEN: `${BASE_PATH_V1.AUTH}/reissue`,
  },
  MEMBERS: {
    MY: BASE_PATH_V1.MEMBERS,
    SUMMARY: `${BASE_PATH_V1.MEMBERS}/me/summary`,
    INFO: `${BASE_PATH_V1.MEMBERS}/me`,
    INFO_EDIT: `${BASE_PATH_V1.MEMBERS}/me`,
    CHECK_NICKNAME: `${BASE_PATH_V1.MEMBERS}/me/nickname`,
    DASHBOARD: `${BASE_PATH_V1.MEMBERS}/me/dashboard`,
    DAILY: `${BASE_PATH_V1.MEMBERS}/me/daily`,
    ORDERS: `${BASE_PATH_V1.MEMBERS}/orders`,
    WITHDRAW: `${BASE_PATH_V1.MEMBERS}/me/withdraw`,
  },

  DAILY: {
    QUESTIONS: `${BASE_PATH_V1.DAILY}/questions`,
    ANSWERS: `${BASE_PATH_V1.DAILY}/answers`,
    ANSWERS_EDIT: (answerId: string) => `${BASE_PATH_V1.DAILY}/answers/${answerId}`,
    CALENDAR: `${BASE_PATH_V1.DAILY}/calendar`,
    HAS_ANSWERED: `${BASE_PATH_V1.DAILY}/has-answered`,
  },
  CONTENTS: {
    CONTENTS: BASE_PATH_V1.CONTENTS,
    RECOMMEND_CONTENTS: `${BASE_PATH_V1.CONTENTS}/recommendations`,
    CONTENT: (contentId: string) => `${BASE_PATH_V1.CONTENTS}/${contentId}`,
    CONTENT_REVIEW: (contentId: string) => `${BASE_PATH_V1.CONTENTS}/${contentId}/reviews`,
  },
  NOTICES: {
    NOTICES: BASE_PATH_V1.NOTICES,
  },
  FILE: {
    PRESIGNED_URL: `${BASE_PATH_V1.FILE}/preSigned-url/upload`,
  },
  STREAKS: {
    CALENDAR: `${BASE_PATH_V1.STREAKS}/calendar`,
    DAILY_STREAK: `${BASE_PATH_V1.STREAKS}/daily-streak`,
  },

  ADMIN: {
    MEMBERS: {
      LIST: `${BASE_PATH_V1.ADMIN}/members`,
      DELETE: `${BASE_PATH_V1.ADMIN}/members`,
      MEMBER: (memberId: string) => `${BASE_PATH_V1.ADMIN}/members/${memberId}`,
      CHANGE_ROLE: (memberId: string) => `${BASE_PATH_V1.ADMIN}/members/${memberId}`,
      DAILY: (memberId: string) => `${BASE_PATH_V1.ADMIN}/members/${memberId}/daily`,
      CONTENTS: (memberId: string) => `${BASE_PATH_V1.ADMIN}/members/${memberId}/contents`,
    },
    DAILY: {
      QUESTIONS: `${BASE_PATH_V1.ADMIN}/daily/questions`,
      QUESTIONS_CREATE: `${BASE_PATH_V1.ADMIN}/daily/questions`,
      QUESTIONS_EDIT: (questionId: string) => `${BASE_PATH_V1.ADMIN}/daily/questions/${questionId}`,
      QUESTIONS_DELETE: (questionId: string) => `${BASE_PATH_V1.ADMIN}/daily/questions/${questionId}`,
    },
    CONTENTS: {
      CONTENTS: `${BASE_PATH_V1.ADMIN}/contents`,
      CONTENTS_STATUS: `${BASE_PATH_V1.ADMIN}/contents/status`,
      CONTENTS_CREATE: `${BASE_PATH_V1.ADMIN}/contents`,
      CONTENTS_EDIT: (contentId: string) => `${BASE_PATH_V1.ADMIN}/contents/${contentId}`,
      CONTENTS_DELETE: (contentId: string) => `${BASE_PATH_V1.ADMIN}/contents/${contentId}`,
    },
    NOTICES: {
      NOTICES_CREATE: `${BASE_PATH_V1.ADMIN}/notices`,
      NOTICES_EDIT: (noticeId: string) => `${BASE_PATH_V1.ADMIN}/notices/${noticeId}`,
      NOTICES_DELETE: (noticeId: string) => `${BASE_PATH_V1.ADMIN}/notices/${noticeId}`,
    },
    ORDERS: {
      ORDERS: `${BASE_PATH_V1.ADMIN}/orders`,
    },
  },
} as const;

export const HTTP_STATUS_CODE = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
};

export const ERROR_CODE = {
  TOKEN_REISSUE_FAILED: 'TOKEN_REISSUE_FAILED',
  TOKEN_NOT_FOUND_ERROR: 'TOKEN_NOT_FOUND_ERROR',
  TOKEN_EXPIRED_ERROR: 'TOKEN_EXPIRED_ERROR',
  TOKEN_INVALID_ERROR: 'TOKEN_INVALID_ERROR',
  ALREADY_BLACK_LIST: 'ALREADY_BLACK_LIST',
  FORBIDDEN_ERROR: 'FORBIDDEN_ERROR',
};

export const REFRESH_TOKEN_COOKIE_NAME = 'refreshToken';

const KAKAO_CLIENT_ID = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;

const OAUTH_BASE_URL = process.env.NEXT_PUBLIC_OAUTH_BASE_URL;

const REDIRECT_BASE_URL = `${OAUTH_BASE_URL}/callback`;

export const KAKAO_AUTH_API_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_BASE_URL}&response_type=code`;

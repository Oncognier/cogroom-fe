export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const API_V1 = `${BASE_URL}/api/v1`;
const API_V2 = `${BASE_URL}/api/v2`;

const BASE_PATH_V1 = {
  AUTH: `${API_V1}/auth`,
  MEMBERS: `${API_V1}/members`,
  DAILY: `${API_V1}/daily`,
  STREAKS: `${API_V1}/streaks`,
  POSTS: `${API_V1}/posts`,
  COMMENTS: `${API_V1}/comments`,
  ADMIN: `${API_V1}/admin`,
  FILES: `${API_V1}/files`,
} as const;

const BASE_PATH_V2 = {
  AUTH: `${API_V2}/auth`,
  MEMBERS: `${API_V2}/members`,
  DAILY: `${API_V2}/daily`,
  STREAKS: `${API_V2}/streaks`,
  POSTS: `${API_V2}/posts`,
  COMMENTS: `${API_V2}/comments`,
  ADMIN: `${API_V2}/admin`,
  FILES: `${API_V2}/files`,
} as const;

export const END_POINTS = {
  AUTH: {
    /** 회원가입 (POST, 소셜/로컬 통합) */
    SIGNUP: `${BASE_PATH_V2.AUTH}/signup`,

    /** 로그인 (POST, 소셜/로컬 통합) */
    LOGIN: `${BASE_PATH_V1.AUTH}/login`,

    /** 로그아웃 (POST) */
    LOGOUT: `${BASE_PATH_V1.AUTH}/logout`,

    /** 토큰 재발급 (POST) */
    REISSUE: `${BASE_PATH_V1.AUTH}/reissue`,

    /** 인증 이메일 전송 (POST) */
    EMAIL_VERIFICATION: `${BASE_PATH_V1.AUTH}/email-verification`,

    /** 이메일 인증 여부 확인 (GET) */
    EMAIL_STATUS: `${BASE_PATH_V1.AUTH}/email/status`,

    /** 이메일 인증 완료 처리 (GET) */
    EMAIL_CHECK_VERIFICATION: `${BASE_PATH_V1.AUTH}/check-verification`,
  },

  MEMBERS: {
    /** 내 기본 정보 조회/수정 (GET / PATCH) */
    ME: `${BASE_PATH_V1.MEMBERS}/me`,

    /** 요약 정보 조회 (GET, 닉네임/사진) */
    SUMMARY: `${BASE_PATH_V1.MEMBERS}/me/summary`,

    /** 마이페이지 대시보드 조회 (GET) */
    DASHBOARD: `${BASE_PATH_V1.MEMBERS}/me/dashboard`,

    /** 닉네임 중복 검사 (POST) */
    NICKNAME_CHECK: `${BASE_PATH_V1.MEMBERS}/me/nickname`,

    /** 알림 설정 조회/수정 (GET / PATCH) */
    NOTIFICATIONS: `${BASE_PATH_V1.MEMBERS}/me/notifications`,

    /** 내가 작성한 게시글 목록 조회 / 일괄 삭제 (GET / DELETE) */
    POSTS: `${BASE_PATH_V1.MEMBERS}/me/posts`,

    /** 내가 저장한 게시글 목록 조회 (GET) */
    POSTS_SAVES: `${BASE_PATH_V1.MEMBERS}/me/posts/saves`,

    /** 내가 좋아요한 게시글 목록 조회 (GET) */
    POSTS_LIKES: `${BASE_PATH_V1.MEMBERS}/me/posts/likes`,

    /** 내가 작성한 댓글/대댓글 목록 조회 (GET) */
    COMMENTS: `${BASE_PATH_V1.MEMBERS}/me/comments`,

    /** 내가 좋아요한 댓글 목록 조회 (GET) */
    COMMENTS_LIKES: `${BASE_PATH_V1.MEMBERS}/me/comments/likes`,

    /** 데일리 질문 및 답변 조회 (GET) */
    DAILY: `${BASE_PATH_V1.MEMBERS}/me/daily`,

    /** 특정 회원 프로필 조회 (GET) */
    PROFILE: (memberId: string) => `${BASE_PATH_V1.MEMBERS}/${memberId}/profile`,

    /** 회원 탈퇴 (DELETE) */
    WITHDRAW: `${BASE_PATH_V1.MEMBERS}/me/withdraw`,
  },

  DAILY: {
    /** 데일리 질문 조회 (GET) */
    QUESTIONS: `${BASE_PATH_V1.DAILY}/questions`,

    /** 데일리 답변 등록/수정 (POST / PATCH) */
    ANSWERS: `${BASE_PATH_V1.DAILY}/answers`,

    /** 이전 답변 존재 여부 조회 (GET) */
    HAS_ANSWERED: `${BASE_PATH_V1.DAILY}/has-answered`,
  },

  STREAKS: {
    /** 데일리 스트릭 연속 일수 조회 (GET) */
    DAILY_STREAK: `${BASE_PATH_V1.STREAKS}/daily-streak`,

    /** 물방울(스트릭) 캘린더 기록 조회 (GET) */
    CALENDAR: `${BASE_PATH_V1.STREAKS}/calendar`,
  },

  POSTS: {
    /** 게시글 목록 조회 / 작성 (GET / POST) */
    ROOT: `${BASE_PATH_V1.POSTS}`,

    /** 게시글 카테고리 목록 조회 (GET) */
    CATEGORIES: `${BASE_PATH_V1.POSTS}/categories`,

    /** 게시글 상세 조회 / 수정 / 삭제 (GET / PATCH / DELETE) */
    BY_ID: (postId: string) => `${BASE_PATH_V1.POSTS}/${postId}`,

    /** 게시글 좋아요 등록 / 취소 (POST / DELETE) */
    LIKES: (postId: string) => `${BASE_PATH_V1.POSTS}/${postId}/likes`,

    /** 게시글 저장 / 저장 취소 (POST / DELETE) */
    SAVES: (postId: string) => `${BASE_PATH_V1.POSTS}/${postId}/saves`,

    COMMENTS: {
      /** 게시글 댓글 목록 조회 / 작성 (GET / POST) */
      ROOT: (postId: string) => `${BASE_PATH_V1.POSTS}/${postId}/comments`,
    },
  },

  COMMENTS: {
    /** 댓글 수정 / 삭제 (PATCH / DELETE) */
    BY_ID: (commentId: string) => `${BASE_PATH_V1.COMMENTS}/${commentId}`,

    /** 댓글 좋아요 등록 / 취소 (POST / DELETE) */
    LIKES: (commentId: string) => `${BASE_PATH_V1.COMMENTS}/${commentId}/likes`,
  },

  ADMIN: {
    MEMBERS: {
      /** 회원 목록 조회 / 일괄 삭제 (GET / DELETE) */
      ROOT: `${BASE_PATH_V1.ADMIN}/members`,

      /** 특정 회원 권한 변경 (PATCH) */
      CHANGE_ROLE: (memberId: string) => `${BASE_PATH_V1.ADMIN}/members/${memberId}`,

      /** 특정 회원 데일리 콘텐츠 조회 (GET) */
      DAILY: (memberId: string) => `${BASE_PATH_V1.ADMIN}/members/${memberId}/daily`,
    },

    DAILY: {
      /** 데일리 질문 목록 조회 / 등록 (GET / POST) */
      QUESTIONS: `${BASE_PATH_V1.ADMIN}/daily/questions`,
    },

    COMMUNITY: {
      /** 커뮤니티 게시글 목록 조회 (GET) */
      POSTS: `${BASE_PATH_V1.ADMIN}/community/posts`,

      /** 커뮤니티 댓글 목록 조회 (GET) */
      COMMENTS: `${BASE_PATH_V1.ADMIN}/community/comments`,
    },
  },

  FILES: {
    /** 프리사인드 업로드 URL 발급 (POST) */
    PRESIGNED_UPLOAD: `${BASE_PATH_V1.FILES}/preSigned-url/upload`,
  },
} as const;

export const HTTP_STATUS_CODE = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
};

export const ERROR_CODE = {
  TOKEN_INVALID_ERROR: 'TOKEN_INVALID_ERROR',
  TOKEN_BLACK_LIST_ERROR: 'TOKEN_BLACK_LIST_ERROR',
  ACCESS_TOKEN_EMPTY_ERROR: 'ACCESS_TOKEN_EMPTY_ERROR',
  REFRESH_TOKEN_EMPTY_ERROR: 'REFRESH_TOKEN_EMPTY_ERROR',
  FORBIDDEN_ERROR: 'FORBIDDEN_ERROR',
};

export const REFRESH_TOKEN_COOKIE_NAME = 'refreshToken';

const KAKAO_CLIENT_ID = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
const NAVER_CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

const OAUTH_BASE_URL = process.env.NEXT_PUBLIC_OAUTH_BASE_URL;

const REDIRECT_BASE_URL = `${OAUTH_BASE_URL}/callback`;

export const KAKAO_AUTH_API_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_BASE_URL}?provider=kakao&response_type=code`;
export const NAVER_AUTH_API_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${REDIRECT_BASE_URL}?provider=naver&state=STATE_STRING`;
export const GOOGLE_AUTH_API_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${REDIRECT_BASE_URL}?provider=google&response_type=code&scope=openid%20email%20profile&access_type=offline&prompt=consent`;

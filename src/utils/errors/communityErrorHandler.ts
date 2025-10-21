import { HTTPError } from '@/api/axios/errors/HTTPError';

const COMMUNITY_ERROR_MESSAGES = {
  // 공통 에러
  MEMBER_NOT_FOUND_ERROR: '사용자를 찾을 수 없습니다.',
  FORBIDDEN_ERROR: '사용자 권한이 없습니다.',

  // 게시글 관련 에러
  POST_NOT_FOUND_ERROR: '게시글을 찾을 수 없습니다.',
  POST_FORBIDDEN_ERROR: '본인이 작성한 게시글만 수정/삭제가 가능합니다.',
  POST_ALREADY_DELETED_ERROR: '이미 삭제된 게시글입니다.',
  POST_HIDDEN_ERROR: '숨김 처리된 게시글입니다.',

  // 댓글 관련 에러
  COMMENT_NOT_FOUND_ERROR: '댓글을 찾을 수 없습니다.',
  COMMENT_FORBIDDEN_ERROR: '본인이 작성한 댓글만 수정/삭제가 가능합니다.',
  COMMENT_ALREADY_DELETED_ERROR: '이미 삭제된 댓글입니다.',
  COMMENT_HIDDEN_ERROR: '숨김 처리된 댓글입니다.',
  WITHDRAWN_USER_COMMENT_ERROR: '탈퇴한 사용자의 댓글입니다.',

  // 좋아요 관련 에러
  ALREADY_LIKED_ERROR: '이미 좋아요한 게시글입니다.',
  NOT_LIKED_ERROR: '좋아요를 하지 않은 게시글입니다.',

  // 저장 관련 에러
  ALREADY_SAVED_ERROR: '이미 저장한 게시글입니다.',
  NOT_SAVED_ERROR: '저장을 하지 않은 게시글입니다.',

  // 유효성 검증 에러
  TITLE_NOTBLANK_ERROR: '게시글 제목을 1자 이상 작성해주세요.',
  TITLE_SIZE_ERROR: '게시글 제목은 50자 이하여야 합니다.',
  CONTENT_NOTBLANK_ERROR: '댓글 내용을 1자 이상 작성해주세요.',
  CONTENT_SIZE_ERROR: '댓글 내용은 1000자 이하여야 합니다.',

  // 카테고리 관련 에러
  CATEGORY_WRITE_FORBIDDEN_ERROR: '선택한 카테고리의 게시글을 작성할 수 있는 권한이 없습니다.',
  CATEGORY_NOT_ALLOWED_ANONYMOUS_POST_ERROR: '익명 게시글을 등록할 수 없는 카테고리입니다.',

  // 익명 관련 에러
  POST_NOT_ALLOWED_ANONYMOUS_COMMENT_ERROR: '익명 게시글에만 익명 댓글을 달 수 있습니다.',
} as const;

const DEFAULT_ERROR_MESSAGES = {
  POST: '게시글 처리에 실패했습니다.',
  COMMENT: '댓글 처리에 실패했습니다.',
  LIKE: '좋아요 처리에 실패했습니다.',
  SAVE: '저장 처리에 실패했습니다.',
  DELETE: '삭제 처리에 실패했습니다.',
  UPDATE: '수정 처리에 실패했습니다.',
  CREATE: '작성 처리에 실패했습니다.',
} as const;

export const communityErrorHandler = (
  error: HTTPError,
  openAlert: (type: 'alert' | 'error', options: { message: string }) => void,
  defaultErrorType: keyof typeof DEFAULT_ERROR_MESSAGES = 'POST',
) => {
  const errorMessage = COMMUNITY_ERROR_MESSAGES[error.code as keyof typeof COMMUNITY_ERROR_MESSAGES];

  if (errorMessage) {
    openAlert('alert', { message: errorMessage });
  } else {
    openAlert('error', {
      message: error.message || DEFAULT_ERROR_MESSAGES[defaultErrorType],
    });
  }
};

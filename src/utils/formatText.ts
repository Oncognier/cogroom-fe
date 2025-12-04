// 숫자를 지정된 자릿수만큼 포맷팅
export const formatToDigits = (num: number, digits: number): string => {
  return num.toString().padStart(digits, '0');
};

/**
 * 숫자 카운트를 "999+", "9,999+" 등 임계값 기반으로 표시하는 유틸 함수
 *
 * 규칙:
 * - 0 ~ (threshold - 1) : 로케일 기준으로 천단위 구분 그대로 표기 (toLocaleString 사용)
 * - threshold 이상      : "{threshold - 1}+" 로 고정 표기
 *
 * @param value     표시할 숫자 (좋아요/댓글/저장 등 카운트)
 * @param threshold 임계값 (기본값: 1000 → 1000 이상이면 "999+")
 * @returns 규칙에 맞게 변환된 문자열
 *
 * @example
 * formatCountPlus(999);               // "999"
 * formatCountPlus(1000);              // "999+"
 * formatCountPlus(12345, 10000);      // "9,999+"
 */
export function formatCountPlus(value?: number, threshold = 1000): string {
  if (value == null) return '';

  const safe = Number.isFinite(value) ? Math.max(0, Math.floor(value)) : 0;

  if (safe >= threshold) {
    return `${(threshold - 1).toLocaleString()}+`;
  }
  return safe.toLocaleString();
}

/**
 * 작성자의 표시 이름을 반환하는 유틸 함수
 *
 * 규칙:
 * - isCommentDelete가 true                   → "삭제된 댓글"
 * - nickname이 null이고 isAnonymous가 false → "탈퇴함"
 * - nickname이 null이고 isAnonymous가 true  → "익명"
 * - 그 외                                   → nickname 그대로
 *
 * @example
 * getDisplayName("코그니어1", false); // "코그니어1"
 * getDisplayName(null, true);         // "익명"
 * getDisplayName(null, false);        // "탈퇴함"
 * getDisplayName("코그니어1", false, true);  // "삭제된 댓글"
 */
export function getDisplayName(nickname: string | null, isAnonymous: boolean, isCommentDelete?: boolean): string {
  if (isCommentDelete) {
    return '삭제된 댓글';
  }

  if (nickname === null) {
    return isAnonymous ? '익명' : '탈퇴함';
  }

  return nickname;
}

// isAnonymous === true → "(익명) 홍길동"
// isAnonymous === false → "홍길동"
export function getAdminDisplayName(nickname: string, isAnonymous: boolean): string {
  if (isAnonymous) {
    return `(익명) ${nickname}`;
  }
  return nickname;
}

/**
 * description 문자열을 // 기준으로 파싱하는 함수
 * @param description 플랜의 description 문자열
 * @returns string[] 파싱된 항목 배열
 */
export const parsePlanDescription = (description: string): string[] => {
  if (!description) return [];

  return description
    .split('//') // "//" 기준 분리
    .map((item) => item.trim()) // 공백 제거
    .filter((item) => item.length > 0); // 빈 문자열 제거
};

/**
 * ID를 주문번호 형식으로 변환하는 함수
 * @param id 숫자 또는 숫자 문자열
 * @returns ORD00000123 형식의 주문번호
 *
 * @example
 * formatOrderNumber(123);     // "ORD00000123"
 * formatOrderNumber("456");   // "ORD00000456"
 * formatOrderNumber(12345);   // "ORD00012345"
 */
export const formatOrderNumber = (id: number | string): string => {
  const num = Number(id).toString();
  const padded = num.padStart(8, '0');
  return `ORD${padded}`;
};

/**
 * ID를 주문번호 prefix와 숫자로 분리하는 함수
 * @param id 숫자 또는 숫자 문자열
 * @returns { prefix: "ORD", number: "00000123" } 형식의 객체
 *
 * @example
 * splitOrderNumber(123);     // { prefix: "ORD", number: "00000123" }
 * splitOrderNumber("456");   // { prefix: "ORD", number: "00000456" }
 * splitOrderNumber(12345);   // { prefix: "ORD", number: "00012345" }
 */
export const splitOrderNumber = (id: number | string): { prefix: string; number: string } => {
  const num = Number(id).toString();
  const padded = num.padStart(8, '0');
  return {
    prefix: 'ORD',
    number: padded,
  };
};

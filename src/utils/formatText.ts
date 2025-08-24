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
export function formatCountPlus(value: number, threshold = 1000): string {
  const safe = Number.isFinite(value) ? Math.max(0, Math.floor(value)) : 0;

  if (safe >= threshold) {
    return `${(threshold - 1).toLocaleString()}+`;
  }
  return safe.toLocaleString();
}


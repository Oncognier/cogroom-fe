// 문자열 또는 Date를 Date 객체로 변환하기 위한 함수
export function ensureDate(input: Date | string): Date {
  return input instanceof Date ? new Date(input.getTime()) : new Date(input);
}

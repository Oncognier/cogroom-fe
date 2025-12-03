import { WEEK_DAYS } from '@/constants/common';
import { createDateFormatter } from '@/utils/date/createDateFormatter';
import { formatToDigits } from '@/utils/formatText';

// YYYY-MM-DD 형식으로 포맷팅 (2025-08-04)
export const formatDayAsDashYYYYMMDD = createDateFormatter((date) => {
  return `${date.getFullYear()}-${formatToDigits(date.getMonth() + 1, 2)}-${formatToDigits(date.getDate(), 2)}`;
});

// YYYY/MM/DD 형식으로 포맷팅 (2025/08/04)
export const formatDayAsSlashYYYYMMDD = createDateFormatter((date) => {
  return `${date.getFullYear()}/${formatToDigits(date.getMonth() + 1, 2)}/${formatToDigits(date.getDate(), 2)}`;
});

// YY/MM/DD 형식으로 포맷팅 (25/08/04)
export const formatDayAsSlashYYMMDD = createDateFormatter((date) => {
  const year = String(date.getFullYear()).slice(-2);
  return `${year}/${formatToDigits(date.getMonth() + 1, 2)}/${formatToDigits(date.getDate(), 2)}`;
});

// YYYY.MM.DD 형식으로 포맷팅 (2025.10.29)
export const formatDayAsDotYYYYMMDD = createDateFormatter((date) => {
  return `${date.getFullYear()}.${formatToDigits(date.getMonth() + 1, 2)}.${formatToDigits(date.getDate(), 2)}`;
});

// MM/DD 형식으로 포맷팅 (08/04)
export const formatDayAsSlashMMDD = createDateFormatter((date) => {
  return `${formatToDigits(date.getMonth() + 1, 2)}/${formatToDigits(date.getDate(), 2)}`;
});

// YYYY년 MM월 형식으로 포맷팅 (2025년 08월)
export const formatDayAsYYYYMM = createDateFormatter((date) => {
  return `${date.getFullYear()}년 ${formatToDigits(date.getMonth() + 1, 2)}월`;
});

// YYYY년 MM월 DD일 형식으로 포맷팅 (2025년 08월 04일)
export const formatDayAsYYYYMMDD = createDateFormatter((date) => {
  return `${date.getFullYear()}년 ${formatToDigits(date.getMonth() + 1, 2)}월 ${formatToDigits(date.getDate(), 2)}일`;
});

// HH:mm 형식으로 포맷팅 (예: 13:32)
export const formatTimeAsHHmm = createDateFormatter((date) => {
  return `${formatToDigits(date.getHours(), 2)}:${formatToDigits(date.getMinutes(), 2)}`;
});

// HH:mm:ss 형식으로 포맷팅 (예: 13:32:45)
export const formatTimeAsHHmmss = createDateFormatter((date) => {
  return `${formatToDigits(date.getHours(), 2)}:${formatToDigits(date.getMinutes(), 2)}:${formatToDigits(date.getSeconds(), 2)}`;
});

// YYYY.MM.DD HH:MM 형식으로 포맷팅 (2024.12.31 23:59)
export const formatDateTimeAsDotYYYYMMDDHHMM = createDateFormatter((date) => {
  const datePart = formatDayAsDotYYYYMMDD(date);
  const timePart = formatTimeAsHHmm(date);
  return `${datePart} ${timePart}`;
});

// 요일 반환 (월~일)
export const formatWeekday = createDateFormatter((date) => {
  const idx = date.getDay();
  return idx === 0 ? WEEK_DAYS[6] : WEEK_DAYS[idx - 1];
});

/**
 * 두 날짜 사이의 범위를 표시하는 문자열 반환 (YY/MM/DD ~ YY/MM/DD)
 * @param start 시작 날짜
 * @param end 종료 날짜
 * @returns 포맷된 문자열 또는 undefined
 */
export const formatDateRangeLabel = (start?: Date | string | null, end?: Date | string | null): string => {
  const startFormatted = start ? formatDayAsSlashYYMMDD(start) : undefined;
  const endFormatted = end ? formatDayAsSlashYYMMDD(end) : undefined;

  if (startFormatted && endFormatted) {
    return `${startFormatted} ~ ${endFormatted}`;
  } else if (startFormatted) {
    return `${startFormatted} ~`;
  } else if (endFormatted) {
    return `~ ${endFormatted}`;
  }
  return '';
};

/**
 * 주어진 시각을 한국어 상대시간 문자열로 포맷합니다.
 *
 * 규칙:
 * - 1분 미만: "방금 전"
 * - 1시간 미만: "N분 전"
 * - 24시간 미만: "N시간 전"
 * - 8일 미만(= 1~7일): "N일 전"
 * - 8일 이상: "YYYY-MM-DD" (기존 formatDayAsDashYYYYMMDD 재사용)
 */
export const formatRelativeKorean = createDateFormatter((date) => {
  const now = new Date();
  let diffMs = now.getTime() - date.getTime();
  if (diffMs < 0) diffMs = 0; // 미래 시각은 "방금 전" 쪽 규칙에 수렴하도록 0으로 클램프

  const minuteMs = 60 * 1000;
  const hourMs = 60 * minuteMs;
  const dayMs = 24 * hourMs;

  if (diffMs < minuteMs) return '방금 전';
  if (diffMs < hourMs) return `${Math.floor(diffMs / minuteMs)}분 전`;
  if (diffMs < 24 * hourMs) return `${Math.floor(diffMs / hourMs)}시간 전`;
  if (diffMs < 8 * dayMs) return `${Math.floor(diffMs / dayMs)}일 전`;

  return formatDayAsDashYYYYMMDD(date);
});

/**
 * 시작 날짜부터 종료 날짜까지의 일수 계산
 * @param startDate 시작 날짜
 * @param endDate 종료 날짜 (기본값: 오늘)
 * @returns 일수 차이
 */
export const calculateDaysBetween = (startDate: Date | string, endDate: Date | string = new Date()): number => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  // 시간을 00:00:00으로 초기화하여 정확한 일수 계산
  start.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);

  const diffTime = end.getTime() - start.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return Math.max(0, diffDays);
};

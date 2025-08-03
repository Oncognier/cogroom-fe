import { WEEK_DAYS } from '@/constants/common';
import { createDateFormatter } from '@/utils/date/createDateFormatter';
import { formatToTwoDigits } from '@/utils/formatText';

// YYYY-MM-DD 형식으로 포맷팅 (2025-08-04)
export const formatDayAsDashYYYYMMDD = createDateFormatter((date) => {
  return `${date.getFullYear()}-${formatToTwoDigits(date.getMonth() + 1)}-${formatToTwoDigits(date.getDate())}`;
});

// YYYY/MM/DD 형식으로 포맷팅 (2025/08/04)
export const formatDayAsSlashYYYYMMDD = createDateFormatter((date) => {
  return `${date.getFullYear()}/${formatToTwoDigits(date.getMonth() + 1)}/${formatToTwoDigits(date.getDate())}`;
});

// YY/MM/DD 형식으로 포맷팅 (25/08/04)
export const formatDayAsSlashYYMMDD = createDateFormatter((date) => {
  const year = String(date.getFullYear()).slice(-2);
  return `${year}/${formatToTwoDigits(date.getMonth() + 1)}/${formatToTwoDigits(date.getDate())}`;
});

// MM/DD 형식으로 포맷팅 (08/04)
export const formatDayAsSlashMMDD = createDateFormatter((date) => {
  return `${formatToTwoDigits(date.getMonth() + 1)}/${formatToTwoDigits(date.getDate())}`;
});

// YYYY년 MM월 형식으로 포맷팅 (2025년 08월)
export const formatDayAsYYYYMM = createDateFormatter((date) => {
  return `${date.getFullYear()}년 ${formatToTwoDigits(date.getMonth() + 1)}월`;
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

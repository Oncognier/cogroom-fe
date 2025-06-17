import { Dayjs } from 'dayjs';

import { WEEK_DAYS } from '@/constants/common';

export function formatDayAsDashYYYYMMDD(date: Dayjs): string {
  return date.format('YYYY-MM-DD');
}

export function formatDayAsDotYYMMDD(date: Dayjs): string {
  return date.format('YY.MM.DD');
}

export function formatDayAsSlashYYMMDD(date: Dayjs): string {
  return date.format('YY/MM/DD');
}

export function formatDayAsSlashYYMMDDmmss(date: Dayjs): string {
  return date.format('YY/MM/DD mm:ss');
}

export function formatDayAsSlashMMDD(date: Dayjs): string {
  return date.format('MM/DD');
}

export function formatDayAsWeekday(date: Dayjs): string {
  const dayIndex = date.day(); // dayjs에서 0: 일요일 ~ 6: 토요일
  return WEEK_DAYS[dayIndex === 0 ? 6 : dayIndex - 1];
}

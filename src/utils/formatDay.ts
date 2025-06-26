import { Dayjs } from 'dayjs';

import { WEEK_DAYS } from '@/constants/common';

export function formatDayAsDashYYYYMMDD(date: Dayjs): string {
  return date.format('YYYY-MM-DD');
}

export function formatDayAsDashYYMMDD(date: Dayjs): string {
  return date.format('YY-MM-DD');
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

export function formatDayAsYYYYMM(date: Dayjs): string {
  return date.format('YYYY년 MM월');
}

export function formatDayAsWeekday(date: Dayjs): string {
  const dayIndex = date.day();
  return WEEK_DAYS[dayIndex === 0 ? 6 : dayIndex - 1];
}

export function formatDateRangeLabel(selectedStartDate?: Dayjs | null, selectedEndDate?: Dayjs | null): string {
  if (selectedStartDate && selectedEndDate) {
    return `${formatDayAsSlashYYMMDD(selectedStartDate)} ~ ${formatDayAsSlashYYMMDD(selectedEndDate)}`;
  } else if (selectedStartDate) {
    return `${formatDayAsSlashYYMMDD(selectedStartDate)} ~`;
  } else if (selectedEndDate) {
    return `~ ${formatDayAsSlashYYMMDD(selectedEndDate)}`;
  } else {
    return '';
  }
}

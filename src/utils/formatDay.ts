import { Dayjs } from 'dayjs';

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

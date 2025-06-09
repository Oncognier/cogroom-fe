import dayjs from 'dayjs';

export function formatDayAsYYMMDD(date: Date): string {
  return dayjs(date).format('YY.MM.DD');
}

export function formatDateToYYYYMMDD(date: Date): string {
  return dayjs(date).format('YYYY-MM-DD');
}

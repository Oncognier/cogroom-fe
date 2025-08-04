import { formatDayAsDashYYYYMMDD } from './formatDay';

// week의 시작일 반환
function getStartOfWeek(input: Date | Date = new Date()): Date {
  const start = input;
  const jsDay = start.getDay();
  const isoDay = jsDay === 0 ? 7 : jsDay;
  start.setDate(start.getDate() - (isoDay - 1));
  start.setHours(0, 0, 0, 0);
  return start;
}

// week의 종료일 반환
function getEndOfWeek(input: Date | Date = new Date()): Date {
  const end = getStartOfWeek(input);
  end.setDate(end.getDate() + 6);
  return end;
}

// 날짜를 1일씩 증가
function addOneDay(date: Date): Date {
  const day = new Date(date);
  day.setDate(day.getDate() + 1);
  return day;
}

// 월 별로 Calendar 날짜 반환
export function getCalendarMonthDateStrings(): string[] {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const start = getStartOfWeek(firstDay);
  const end = getEndOfWeek(lastDay);

  const calendarMonthDates: string[] = [];
  let current = start;
  while (current <= end) {
    const fmt = formatDayAsDashYYYYMMDD(current);
    if (fmt) calendarMonthDates.push(fmt);
    current = addOneDay(current);
  }
  return calendarMonthDates;
}

// 주 별로 Calendar 날짜 반환
export function getCalendarWeekDateStrings(): string[] {
  const start = getStartOfWeek();
  const end = getEndOfWeek();

  const calendarWeekDates: string[] = [];
  let current = start;
  while (current <= end) {
    const fmt = formatDayAsDashYYYYMMDD(current);
    if (fmt) calendarWeekDates.push(fmt);
    current = addOneDay(current);
  }
  return calendarWeekDates;
}

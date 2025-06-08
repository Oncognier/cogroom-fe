// Streak
export function formatDayAsYYMMDD(date = new Date()): string {
  const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}.${month}.${day}`;
}

// Calendar
export function formatDateToYYYYMMDD(date: Date): string {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getCalendarMonthDates(year: number, month: number): Date[] {
  const dates: Date[] = [];

  const firstDayOfMonth = new Date(year, month - 1, 1);
  const lastDayOfMonth = new Date(year, month, 0);

  const startDay = getStartOfWeek(firstDayOfMonth);
  const endDay = getEndOfWeek(lastDayOfMonth);

  const current = new Date(startDay);

  while (current <= endDay) {
    const dateObj = new Date(current);

    dates.push(dateObj);

    current.setDate(current.getDate() + 1);
  }

  return dates;
}

export function getCalendarWeekDates(reference: Date): Date[] {
  const start = getStartOfWeek(reference);
  const dates = [];

  for (let i = 0; i < 7; i++) {
    const current = new Date(start);
    current.setDate(start.getDate() + i);

    dates.push(current);
  }

  return dates;
}

function getStartOfWeek(date: Date): Date {
  const clonedDate = new Date(date);
  const dayOfWeek = clonedDate.getDay();

  const daysToSubtract = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  clonedDate.setDate(clonedDate.getDate() - daysToSubtract);
  return clonedDate;
}

function getEndOfWeek(date: Date): Date {
  const clonedDate = new Date(date);
  const dayOfWeek = clonedDate.getDay();

  const daysToAdd = dayOfWeek === 6 ? 0 : 7 - dayOfWeek;
  clonedDate.setDate(clonedDate.getDate() + daysToAdd);
  return clonedDate;
}

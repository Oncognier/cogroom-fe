import dayjs, { Dayjs } from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';

//eslint-disable-next-line
dayjs.extend(isoWeek);

export function getCalendarMonthDates(BaseDate: Dayjs): Dayjs[] {
  const firstDay = BaseDate.startOf('month');
  const lastDay = BaseDate.endOf('month');

  const start = firstDay.startOf('isoWeek');
  const end = lastDay.endOf('isoWeek');

  const dates: Dayjs[] = [];
  let current = start;

  while (current.isBefore(end) || current.isSame(end, 'day')) {
    dates.push(current);
    current = current.add(1, 'day');
  }

  return dates;
}

export function getCalendarWeekDates(reference: Dayjs | Date): Dayjs[] {
  const start = dayjs(reference).startOf('isoWeek');
  //eslint-disable-next-line
  return Array.from({ length: 7 }, (_, i) => start.add(i, 'day'));
}

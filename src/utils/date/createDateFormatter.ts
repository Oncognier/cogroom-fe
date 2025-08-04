import { ensureDate } from './ensureDate';

// Date 포맷터의 안정성을 위한 유틸
export function createDateFormatter<T>(formatter: (date: Date) => T): (input?: Date | string | null) => T | undefined {
  return (input) => {
    if (input == null) return undefined;
    return formatter(ensureDate(input));
  };
}

export const formatPhoneNumber = (value: string): string => {
  const digits = value.replace(/[^0-9]/g, '');

  if (digits.length === 9) {
    // 예: 02-123-4567
    return `${digits.slice(0, 2)}-${digits.slice(2, 5)}-${digits.slice(5)}`;
  }

  if (digits.length === 10) {
    // 예: 031-234-5678
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  }

  if (digits.length > 10) {
    // 예: 010-1234-5678 또는 그 이상
    return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
  }

  return value;
};

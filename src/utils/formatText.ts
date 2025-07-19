export const formatToSixDigits = (num: number): string => {
  return num.toString().padStart(6, '0');
};

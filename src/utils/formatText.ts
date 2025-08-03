export const formatToTwoDigits = (num: number): string => {
  return num.toString().padStart(2, '0');
};

export const formatToSixDigits = (num: number): string => {
  return num.toString().padStart(6, '0');
};

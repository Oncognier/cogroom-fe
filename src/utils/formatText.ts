// 숫자를 지정된 자릿수만큼 포맷팅
export const formatToDigits = (num: number, digits: number): string => {
  return num.toString().padStart(digits, '0');
};

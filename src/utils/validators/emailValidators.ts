export const validateEmail = (v: string) => {
  if (!v.includes('@')) return 'normal: 이메일 형식이 아닙니다.';
  return true;
};

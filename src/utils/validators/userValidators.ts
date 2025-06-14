export const regex = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  phone: /^[0-9-]*$/,
  nickname: /^[가-힣a-zA-Z0-9]+$/,
};

export const validateEmail = (v: string) => {
  if (!regex.email.test(v)) {
    return 'normal: 이메일 형식이 아닙니다.';
  }
  return true;
};

export const validatePhoneNumber = (v: string | undefined) => {
  if (!v || v.trim() === '') {
    return true;
  }

  if (!regex.phone.test(v)) {
    return 'normal: 전화번호는 숫자와 하이픈(-)만 입력할 수 있습니다.';
  }

  const digits = v.replace(/[^0-9]/g, '');
  if (digits.length > 11) {
    return 'normal: 전화번호는 숫자 기준으로 11자리 이하로 입력해주세요.';
  }

  return true;
};

export const validateNickname = (v: string) => {
  if (!regex.nickname.test(v)) {
    return 'normal: 닉네임은 한글, 영문, 숫자만 사용할 수 있습니다.';
  }

  if (/^\d+$/.test(v)) {
    return 'normal: 닉네임은 숫자만으로 만들 수 없습니다.';
  }

  if (v.length > 10) {
    return 'normal: 닉네임은 10자 이내여야 합니다.';
  }

  return true;
};

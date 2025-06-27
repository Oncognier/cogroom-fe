export interface SignupFormFields {
  email: string;
}

export interface SettingFormFields {
  nickname: string;
  email: string;
  phoneNumber?: string;
  description?: string;
  imageUrl?: string;
}

export interface DailyCreateFormFields {
  level: string;
  categories: number[];
  question1: string;
  question2?: string;
  question3?: string;
}

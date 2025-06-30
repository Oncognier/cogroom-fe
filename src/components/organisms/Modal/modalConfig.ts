import type { ModalMap } from '@/types/modal';

import DailyAnswerEdit from './Daily/Edit/DailyAnswerEdit';
import DailyFirstAnswer from './Daily/FirstAnswer/DailyFirstAnswer';
import DailyAnswerPost, { DailyProps } from './Daily/Post/DailyAnswerPost';
import Login from './Login/Login';
import Logout from './Logout/Logout';
import Signup, { SignupProps } from './Signup/Signup';

export type AppModalProps = {
  login: undefined;
  signup: SignupProps;
  logout: undefined;
  dailyAnswerPost: DailyProps;
  dailyAnswerEdit: DailyProps;
  dailyFirstAnswer: undefined;
};

export const modalRegistry: ModalMap<AppModalProps> = {
  login: {
    Component: Login,
    disableOutsideClick: false,
  },
  signup: {
    Component: Signup,
    disableOutsideClick: false,
  },
  logout: {
    Component: Logout,
    disableOutsideClick: false,
  },
  dailyAnswerPost: {
    Component: DailyAnswerPost,
    disableOutsideClick: false,
  },
  dailyAnswerEdit: {
    Component: DailyAnswerEdit,
    disableOutsideClick: false,
  },
  dailyFirstAnswer: {
    Component: DailyFirstAnswer,
    disableOutsideClick: false,
  },
};

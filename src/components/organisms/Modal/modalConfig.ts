import type { ModalMap } from '@/types/modal';

import Alert, { AlertProps } from './Alert/Alert';
import DailyShare, { DailyShareProps } from './Daily/DailyShare/DailyShare';
import DailyAnswerEdit, { DailyAnswerEditProps } from './Daily/Edit/DailyAnswerEdit';
import DailyFirstAnswer from './Daily/FirstAnswer/DailyFirstAnswer';
import DailyAnswerPost, { DailyAnswerPostProps } from './Daily/Post/DailyAnswerPost';
import Error, { ErrorProps } from './Error/Error';
import Login from './Login/Login';
import Logout from './Logout/Logout';
import Signup, { SignupProps } from './Signup/Signup';

export type AppModalProps = {
  login: undefined;
  signup: SignupProps;
  logout: undefined;
  dailyAnswerPost: DailyAnswerPostProps;
  dailyAnswerEdit: DailyAnswerEditProps;
  dailyFirstAnswer: undefined;
  dailyShare: DailyShareProps;
};

export type AlertModalProps = {
  error: ErrorProps;
  alert: AlertProps;
};

export const AppModalRegistry = {
  login: { Component: Login, disableOutsideClick: false },
  signup: { Component: Signup, disableOutsideClick: false },
  logout: { Component: Logout, disableOutsideClick: false },
  dailyAnswerPost: { Component: DailyAnswerPost, disableOutsideClick: false },
  dailyAnswerEdit: { Component: DailyAnswerEdit, disableOutsideClick: false },
  dailyFirstAnswer: { Component: DailyFirstAnswer, disableOutsideClick: false },
  dailyShare: { Component: DailyShare, disableOutsideClick: false },
} satisfies ModalMap<AppModalProps>;

export const AlertModalRegistry = {
  error: { Component: Error, disableOutsideClick: false },
  alert: { Component: Alert, disableOutsideClick: false },
} satisfies ModalMap<AlertModalProps>;

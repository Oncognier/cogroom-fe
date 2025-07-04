import type { ModalMap } from '@/types/modal';

import Alert, { AlertProps } from './Alert/Alert';
import ChangeRole, { ChangeRoleProps } from './ChangeRole/ChangeRole';
import DailyShare, { DailyShareProps } from './Daily/DailyShare/DailyShare';
import DailyAnswerEdit, { DailyAnswerEditProps } from './Daily/Edit/DailyAnswerEdit';
import DailyAnswerPost, { DailyAnswerPostProps } from './Daily/Post/DailyAnswerPost';
import Error, { ErrorProps } from './Error/Error';
import Login from './Login/Login';
import Logout from './Logout/Logout';
import Signup, { SignupProps } from './Signup/Signup';
import Withdraw from './Withdraw/Withdraw';

export type AppModalProps = {
  login: undefined;
  signup: SignupProps;
  logout: undefined;
  dailyAnswerPost: DailyAnswerPostProps;
  dailyShare: DailyShareProps;
  withdraw: undefined;
};

export type AlertModalProps = {
  error: ErrorProps;
  alert: AlertProps;
  dailyAnswerEdit: DailyAnswerEditProps;
  changeRole: ChangeRoleProps;
};

export const AppModalRegistry = {
  login: { Component: Login, disableOutsideClick: false },
  signup: { Component: Signup, disableOutsideClick: true },
  logout: { Component: Logout, disableOutsideClick: false },
  dailyAnswerPost: { Component: DailyAnswerPost, disableOutsideClick: false },
  dailyShare: { Component: DailyShare, disableOutsideClick: false },
  withdraw: { Component: Withdraw, disableOutsideClick: false },
} satisfies ModalMap<AppModalProps>;

export const AlertModalRegistry = {
  error: { Component: Error, disableOutsideClick: false },
  alert: { Component: Alert, disableOutsideClick: false },
  dailyAnswerEdit: { Component: DailyAnswerEdit, disableOutsideClick: false },
  changeRole: { Component: ChangeRole, disableOutsideClick: false },
} satisfies ModalMap<AlertModalProps>;

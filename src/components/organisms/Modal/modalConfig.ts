import type { ModalMap } from '@/types/modal';

import Login from './Login/Login';
import Signup, { SignupProps } from './Signup/Signup';

export type AppModalProps = {
  login: undefined;
  signup: SignupProps;
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
};

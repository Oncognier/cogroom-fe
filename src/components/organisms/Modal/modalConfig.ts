import type { ModalMap } from '@/types/modalTypes';
import Login, { LoginProps } from './Login/Login';

export type AppModalProps = {
  login: LoginProps;
};

export const modalRegistry: ModalMap<AppModalProps> = {
  login: {
    Component: Login,
    disableOutsideClick: false,
  },
};

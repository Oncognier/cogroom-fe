import type { ModalMap } from '@/types/modal';

import Login from './Login/Login';

export type AppModalProps = {
  login: undefined;
};

export const modalRegistry: ModalMap<AppModalProps> = {
  login: {
    Component: Login,
    disableOutsideClick: false,
  },
};

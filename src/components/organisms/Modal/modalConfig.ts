import Login, { LoginProps } from './Login/Login';

export interface ModalRegistry {
  login: {
    Component: (props: LoginProps) => React.JSX.Element;
    disableOutsideClick?: boolean;
  };
}

export const modalRegistry: ModalRegistry = {
  login: {
    Component: Login,
    disableOutsideClick: false,
  },
};

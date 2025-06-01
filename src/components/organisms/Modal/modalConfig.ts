import Login, { LoginProps } from './Login/Login';

export interface ModalComponentMap {
  login: {
    Component: (props: LoginProps) => React.JSX.Element;
    disableOutsideClick?: boolean;
  };
}

export const modalComponents: Partial<ModalComponentMap> = {
  login: {
    Component: Login,
    disableOutsideClick: false,
  },
};

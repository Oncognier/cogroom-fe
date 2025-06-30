import React from 'react';

export interface ModalWrapperProps {
  onClose: () => void;
  children: React.ReactNode;
}

export type ComponentPropsOf<C> = C extends React.ComponentType<infer P> ? P : never;

export type ModalMap<T extends Record<string, unknown>> = {
  [K in keyof T]: {
    Component: React.ComponentType<T[K] extends undefined ? Record<string, never> : T[K]>;
    Wrapper?: React.ComponentType<ModalWrapperProps>;
    disableOutsideClick?: boolean;
  };
};

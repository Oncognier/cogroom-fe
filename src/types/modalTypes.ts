export type ModalDefinition<P> = {
  Component: (props: P) => React.JSX.Element;
  disableOutsideClick?: boolean;
};

export type ModalMap<T extends Record<string, unknown>> = {
  [K in keyof T]: ModalDefinition<T[K]>;
};

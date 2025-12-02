import React from 'react';

export interface ModalOptions {
  /** 백드롭 클릭 또는 ESC 키로 모달을 닫을 수 있는지 여부 (기본값: true) */
  closable?: boolean;
  /** 베이스 템플릿의 X 닫기 버튼 표시 여부 (기본값: true) */
  showCloseButton?: boolean;
  /** 모달이 자동으로 닫힐 시간 (밀리초), 0 또는 undefined면 자동 닫기 없음 */
  autoCloseDuration?: number;
  /** 모달이 닫히기 직전에 실행될 이벤트 핸들러 */
  onBeforeClose?: () => void;
}

export interface ModalWrapperProps2 {
  onClose: () => void;
  children: React.ReactNode;
}

// Wrapper는 시스템이 주입하는 onClose 외에 showCloseButton 옵션을 받도록 확장
export interface BaseWrapperProps extends ModalWrapperProps2, Pick<ModalOptions, 'showCloseButton'> {}

export type ComponentPropsOf<C> = C extends React.ComponentType<infer P> ? P : never;

export type ModalComponentProps<T = Record<string, unknown>> = T & ModalOptions;

export type ModalMap2<T extends Record<string, ModalComponentProps<Record<string, unknown>>>> = {
  [K in keyof T]: {
    Component: React.ComponentType<T[K]>;
    Wrapper?: React.ComponentType<BaseWrapperProps>;
  };
};

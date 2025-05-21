// HMR 관련 타입
export interface HotModule {
  hot?: {
    dispose(callback: () => void): void;
  };
}
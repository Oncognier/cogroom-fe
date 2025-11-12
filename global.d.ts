/* eslint-disable @typescript-eslint/no-explicit-any */

export {};

declare global {
  interface Window {
    Kakao: any;
    kakaoPixel: (id: string) => {
      completeRegistration: () => void;
      pageView: () => void;
    };
    // Meta (Facebook) Pixel
    fbq: (action: string, event?: string, parameters?: any) => void;
    dataLayer?: Array<Record<string, any>>;
  }
}

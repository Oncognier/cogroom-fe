import Script from 'next/script';

import EmotionRegistry from '@/lib/emotion/EmotionRegistry';
import { mockingServer } from '@/lib/msw/mockingServer';
import { MSWProvider } from '@/lib/msw/MSWProvider';
import QueryProvider from '@/lib/query/QueryProvider';
import { pretendard } from '@/styles/font';

import KakaoInitializer from './KakaoInitializer';
import ModalProvider from './ModalProvider';

// msw 서버 적용
mockingServer();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='ko'
      className={pretendard.variable}
    >
      <body>
        <Script
          src='https://t1.kakaocdn.net/kakao_js_sdk/2.7.5/kakao.min.js'
          integrity='sha384-dok87au0gKqJdxs7msEdBPNnKSRT+/mhTVzq+qOhcL464zXwvcrpjeWvyj1kCdq6'
          crossOrigin='anonymous'
          strategy='beforeInteractive'
        />
        <KakaoInitializer />
        <EmotionRegistry>
          <MSWProvider>
            <QueryProvider>
              {children}
              <ModalProvider />
            </QueryProvider>
          </MSWProvider>
        </EmotionRegistry>
      </body>
    </html>
  );
}

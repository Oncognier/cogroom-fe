import Header from '@/components/organisms/Header/Header';
import Base from '@/components/organisms/Modal/Base/Base';
import { modalRegistry } from '@/components/organisms/Modal/modalConfig';
import EmotionRegistry from '@/lib/emotion/EmotionRegistry';
import { mockingServer } from '@/lib/msw/mockingServer';
import { MSWProvider } from '@/lib/msw/MSWProvider';
import QueryProvider from '@/lib/query/QueryProvider';
import { pretendard } from '@/styles/font';

import GlobalAuthInitializer from './GlobalAuthInitializer';

// msw 서버 적용
mockingServer();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='ko'
      className={pretendard.variable}
    >
      <body>
        <EmotionRegistry>
          <MSWProvider>
            <QueryProvider>
              <GlobalAuthInitializer />
              <Header />
              {children}
              <Base modalMap={modalRegistry} />
              <div id='modal-root' />
            </QueryProvider>
          </MSWProvider>
        </EmotionRegistry>
      </body>
    </html>
  );
}

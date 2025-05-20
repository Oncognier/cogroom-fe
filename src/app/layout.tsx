import { pretendard } from '@/styles/typography';

import EmotionRegistry from './EmotionRegistry';
import { MSWProvider } from './MSWProvider';

// MSW 서버 적용
if (
  process.env.NEXT_RUNTIME === 'nodejs' &&
  process.env.NODE_ENV !== 'production' &&
  process.env.NEXT_PUBLIC_MSW_ENABLED !== 'false'
) {
  import('@/mocks/server').then(({ server }) => {
    server.listen();
  });
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='ko'
      className={pretendard.variable}
    >
      <body>
        <EmotionRegistry>
          <MSWProvider>{children}</MSWProvider>
        </EmotionRegistry>
      </body>
    </html>
  );
}

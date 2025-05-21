import EmotionRegistry from '@/lib/emotion/EmotionRegistry';
import { mockingServer } from '@/lib/msw/mockingServer';
import { MSWProvider } from '@/lib/msw/MSWProvider';
import { pretendard } from '@/styles/typography';

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
          <MSWProvider>{children}</MSWProvider>
        </EmotionRegistry>
      </body>
    </html>
  );
}

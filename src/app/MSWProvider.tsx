'use client';
import { Suspense, use } from 'react';

import { handlers } from '@/mocks/handlers';

// HMR 관련 타입
interface HotModule {
  hot?: {
    dispose(callback: () => void): void;
  };
}

// MSW 클라이언트 적용
const mockingEnabledPromise =
  typeof window !== 'undefined'
    ? import('@/mocks/browser').then(async ({ worker }) => {
        if (process.env.NODE_ENV === 'production' || process.env.NEXT_PUBLIC_MSW_ENABLED === 'false') {
          return;
        }
        await worker.start({
          onUnhandledRequest(request, print) {
            if (request.url.includes('_next')) {
              return;
            }
            print.warning();
          },
        });
        worker.use(...handlers);
        (module as HotModule).hot?.dispose(() => {
          worker.stop();
        });
      })
    : Promise.resolve();

export function MSWProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // If MSW is enabled, we need to wait for the worker to start,
  // so we wrap the children in a Suspense boundary until it's ready.
  return (
    <Suspense fallback={null}>
      <MSWProviderWrapper>{children}</MSWProviderWrapper>
    </Suspense>
  );
}

function MSWProviderWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  use(mockingEnabledPromise);
  return children;
}

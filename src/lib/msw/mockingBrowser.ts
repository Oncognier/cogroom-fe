import { handlers } from '@/mocks/handlers';

import { HotModule } from './types';

// msw 클라이언트 적용
export const mockingBrowser =
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

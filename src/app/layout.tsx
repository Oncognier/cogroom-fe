import Script from 'next/script';
import { HydrationBoundary, dehydrate, QueryClient } from '@tanstack/react-query';
import EmotionRegistry from '@/lib/emotion/EmotionRegistry';
import { mockingServer } from '@/lib/msw/mockingServer';
import { MSWProvider } from '@/lib/msw/MSWProvider';
import QueryProvider from '@/lib/query/QueryProvider';
import { pretendard } from '@/styles/font';

import AuthComponent from './AuthComponent';
import KakaoInitializer from './KakaoInitializer';
import ModalProvider from './ModalProvider';
import { prefetchAppData } from '@/utils/api/prefetchAppData';

mockingServer();

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  await prefetchAppData(queryClient);

  const dehydratedState = dehydrate(queryClient);

  return (
    <html
      lang='ko'
      className={pretendard.variable}
    >
      <head>
        {/* Google Tag Manager */}
        <Script
          id='gtm-head'
          strategy='beforeInteractive'
        >
          {`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
  `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            title='Google Tag Manager'
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

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
              <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
              <AuthComponent />
              <ModalProvider />
            </QueryProvider>
          </MSWProvider>
        </EmotionRegistry>
      </body>
    </html>
  );
}

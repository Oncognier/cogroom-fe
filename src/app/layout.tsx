import { HydrationBoundary, dehydrate, QueryClient } from '@tanstack/react-query';
import { Metadata } from 'next';
import Script from 'next/script';

import EmotionRegistry from '@/lib/emotion/EmotionRegistry';
import { mockingServer } from '@/lib/msw/mockingServer';
import { MSWProvider } from '@/lib/msw/MSWProvider';
import QueryProvider from '@/lib/query/QueryProvider';
import { pretendard } from '@/styles/font';
import { prefetchAppData } from '@/utils/api/prefetchAppData';
import { getKakaoPixelId } from '@/utils/kakaoPixel';
import { getMetaPixelId } from '@/utils/metaPixel';

import KakaoInitializer from './KakaoInitializer';
import ModalProvider from './ModalProvider';
import ModalProvider2 from './ModalProvider2';

export const metadata: Metadata = {
  verification: {
    other: {
      'naver-site-verification': `${process.env.NEXT_PUBLIC_NAVER_VERIFICATION}`,
    },
  },
};

mockingServer();

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  await prefetchAppData(queryClient);

  const dehydratedState = dehydrate(queryClient);
  const kakaoPixelId = getKakaoPixelId();
  const metaPixelId = getMetaPixelId();

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

        {/* Kakao Pixel */}
        {kakaoPixelId && (
          <>
            <Script
              src='//t1.daumcdn.net/kas/static/kp.js'
              strategy='beforeInteractive'
            />
            <Script
              id='kakao-pixel'
              strategy='afterInteractive'
            >
              {`
                if (typeof kakaoPixel !== 'undefined') {
                  kakaoPixel(${JSON.stringify(kakaoPixelId)}).pageView();
                } else {
                  console.warn('kakaoPixel is not loaded yet');
                }
              `}
            </Script>
          </>
        )}
        {/* End Kakao Pixel */}

        {/* Meta Pixel */}
        {metaPixelId && (
          <Script
            id='meta-pixel'
            strategy='afterInteractive'
          >
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${metaPixelId}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
        {/* End Meta Pixel */}
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

        {/* Meta Pixel (noscript) */}
        {metaPixelId && (
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt='meta-pixel'
              height='1'
              width='1'
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
            />
          </noscript>
        )}
        {/* End Meta Pixel (noscript) */}

        {/* Kakao JavaScript SDK */}
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
              <ModalProvider />
              <ModalProvider2 />
            </QueryProvider>
          </MSWProvider>
        </EmotionRegistry>
      </body>
    </html>
  );
}

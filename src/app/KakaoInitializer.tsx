'use client';

import { useEffect } from 'react';

export default function KakaoInitializer() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!window.Kakao) return;
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
    }
  }, []);

  return null;
}

import { SHARE_DAILY_URL } from '@/constants/common';
import { useAlertModalStore } from '@/stores/useModalStore';

export default function kakaoShare(dailyStreak: number, imageUrl: string) {
  if (typeof window === 'undefined') return;
  const { open } = useAlertModalStore.getState();
  const Kakao = window.Kakao;

  if (!Kakao) {
    open('error', { message: 'Kakao SDK not found' });
    return;
  }

  if (!Kakao.isInitialized()) {
    Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
  }

  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: `물방울 스트릭을 ${dailyStreak}일째 유지 중이에요!`,
      imageUrl: imageUrl,
      link: {
        webUrl: SHARE_DAILY_URL,
        mobileWebUrl: SHARE_DAILY_URL,
      },
    },
  });
}

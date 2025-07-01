'use client';

import { useRouter } from 'next/navigation';

import * as S from './error.styled';

export default function Error() {
  const router = useRouter();

  return (
    <S.ErrorContainer>
      <S.BackgroundVideo
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src='/error_background.mp4'
          type='video/mp4'
        />
        브라우저가 video 태그를 지원하지 않습니다.
      </S.BackgroundVideo>

      <S.Bubble
        src='/bubble-group.png'
        alt='bubbleGroup'
        width={560}
        height={134}
      />

      <S.Content>
        <S.TitleWrapper>
          <S.ErrorCode>500</S.ErrorCode>
          <S.Title>서버가 숨 고르는 중이에요</S.Title>
        </S.TitleWrapper>
        <S.Description>
          코그룸의 바닷속 어딘가에서 문제가 생긴 것 같아요. <br />
          일시적인 오류일 수 있어요. 잠시 후 다시 시도하거나, 오른쪽 아래 글씨를 눌러 홈으로 돌아가 주세요. <br />
          바다는 넓고, 우린 곧 길을 다시 찾을 거예요. 코그룸은 언제나 당신을 기다리고 있어요.
        </S.Description>
      </S.Content>

      <S.Home onClick={() => router.push('/')}>홈으로 가기</S.Home>
    </S.ErrorContainer>
  );
}

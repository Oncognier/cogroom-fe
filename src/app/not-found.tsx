'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import * as S from './not-found.styled';

export default function NotFound() {
  const router = useRouter();

  return (
    <S.NotFoundContainer>
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
          <S.ErrorCode>404</S.ErrorCode>
          <S.Title>잠수중... 없는 페이지에요</S.Title>
        </S.TitleWrapper>
        <S.Description>
          코그룸을 돌아다니다 길을 잃었나요? 걱정 마세요 <br />
          잠시 푸른 바다를 보며 숨을 골라도 좋고, 뒤로가기를 눌러 이전 페이지로 돌아가거나 오른쪽 아래 글씨를 통해
          홈으로 갈 수 있습니다 <br />
          잘못된 길은 없습니다, 물 속에서는 내가 헤엄치는 방향이 곧 나의 길. 당신만의 코그룸을 만드세요
        </S.Description>
      </S.Content>

      <S.Home onClick={() => router.push('/')}>홈으로 가기</S.Home>
    </S.NotFoundContainer>
  );
}

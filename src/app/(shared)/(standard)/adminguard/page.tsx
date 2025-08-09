'use client';

import * as S from './page.styled';

export default function AdminGuard() {
  return (
    <S.AdminGuard>
      <S.MainMessage>권한이 없어요!</S.MainMessage>
    </S.AdminGuard>
  );
}

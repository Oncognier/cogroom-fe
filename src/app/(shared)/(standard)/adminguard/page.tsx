'use client';

import * as S from './page.styled';

export default function AdminGuard() {
  return (
    <S.AdminGuard>
      <S.MainMessage>해당 기능은 권한이 있는 사용자만 이용할 수 있어요!</S.MainMessage>
    </S.AdminGuard>
  );
}

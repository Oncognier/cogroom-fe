'use client';

import styled from '@emotion/styled';

/**
 * ㄴ자형 파란 연결선의 공통 베이스 스타일.
 * - position, border, 색상 등 기본 형태는 동일.
 * - 각 컴포넌트에서 위치(top/left)만 오버라이드해서 사용합니다.
 */
export const ConnectorBase = styled.div`
  position: absolute;

  width: 1.5rem;
  height: 1.4rem;
  background: transparent;
  border-left: 2px solid ${({ theme }) => theme.palette.blue[90]};
  border-bottom: 2px solid ${({ theme }) => theme.palette.blue[90]};
  border-right: none;
  border-radius: 0 0 0 4rem;

  z-index: 1;
  pointer-events: none;
`;

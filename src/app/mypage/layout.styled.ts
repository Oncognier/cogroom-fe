'use client';

import styled from '@emotion/styled';

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  max-width: 1100px;
  margin: 0 auto;
  padding: 3.2rem 2rem;
`;

const Layout = styled.div`
  display: flex;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
`;

const S = {
  MainLayout,
  Layout,
  Content,
};

export default S;

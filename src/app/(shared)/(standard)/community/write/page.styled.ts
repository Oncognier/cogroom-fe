'use client';

import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 120rem;
  margin: 0 auto;
  padding: 0rem 2rem 2rem 2rem;
  gap: 5rem;
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  flex: 1;
`;

export const WriteForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const CategoryBox = styled.div`
  width: 15rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

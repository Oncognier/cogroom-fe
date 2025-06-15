'use client';

import styled from '@emotion/styled';

export const SettingProfile = styled.div`
  position: relative;

  width: 8.3rem;
  height: 8.3rem;
`;

export const SetImage = styled.div`
  position: absolute;
  bottom: 0;
  right: -1.7rem;
`;

export const SettingForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[16]};
`;

export const ButtonWrapper = styled.div`
  margin-top: 0.4rem;
`;

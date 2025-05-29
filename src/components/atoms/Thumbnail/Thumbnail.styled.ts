import styled from '@emotion/styled';

type ThumbnailRatio = '1_1' | '5_4' | '4_3' | '3_2' | '16_10' | '16_9' | '2_1' | '21_9';

export interface ThumbnailStyleProps {
  ratio: ThumbnailRatio;
  portrait?: boolean;
  border?: boolean;
  radius?: boolean;
}

const Thumbnail = styled.div<ThumbnailStyleProps>`
  position: relative;

  width: 100%;
  aspect-ratio: ${({ theme, ratio }) => theme.ratio[ratio]};
  border: 1px solid ${({ theme }) => theme.semantic.line.normal};
  border-radius: ${({ theme }) => theme.radius[12]};
  overflow: hidden;

  ${({ portrait }) => portrait && `height: 100%; width: auto;`};
`;

const S = {
  Thumbnail,
};

export default S;

import { DEFAULT_COMMUNITY_BANNER } from '@/constants/image';

import * as S from './Community.styled';
import Section from '../Section/Section';
import { LineBreakMobile } from '@/styles/helpers/lineBreak';

export default function Community() {
  return (
    <Section
      title='우리는 생각하는 사람들, 코그니어'
      subtitle={
        <>
          혼자서는 닿을 수 없던
          <LineBreakMobile /> 깊은 성찰을 함께 나누는 공간입니다
        </>
      }
    >
      <S.Wrapper>
        <a href='/community'>
          <S.CommunityImage
            src={DEFAULT_COMMUNITY_BANNER}
            alt='community'
            fill
            quality={100}
          />
          <S.TextWrapper>
            <S.TitleWrapper>
              <S.Title>혼자 힘들어하지 마세요</S.Title>
              <S.SubTitle>우리는 생각하는 사람들(cognier)</S.SubTitle>
            </S.TitleWrapper>
            <S.Content>
              생각에 갇혀 괴로워하지도, 정체된 삶에 답답해하지도 말고
              <br />
              함께 이끌고 보듬는 우리 되기를
            </S.Content>
          </S.TextWrapper>
        </a>
      </S.Wrapper>
    </Section>
  );
}

import * as S from './page.styled';

export default function Marketing() {
  return (
    <S.Marketing>
      <S.Title>마케팅 정보 수신동의</S.Title>

      <S.Section>
        <S.Subtitle>제 13조. 광고성 정보 수신동의</S.Subtitle>
        <S.ContentWrapper>
          <S.Content>
            <S.ContentNumber>1.</S.ContentNumber>
            회사는 회원에게 서비스 안내, 이벤트, 프로모션 등 마케팅 목적의 정보를 전자적 방법(이메일, 문자메시지, 앱
            푸시 등)으로 전송할 수 있으며, 이는 사전 동의를 받은 경우에 한합니다.
          </S.Content>
          <S.Content>
            <S.ContentNumber>2.</S.ContentNumber>
            회원은 언제든지 수신 거부를 할 수 있으며, 수신 거부 방법은 각 메시지 하단 또는 이메일을 통한 공지사항 형태로
            안내됩니다.
          </S.Content>
          <S.Content>
            <S.ContentNumber>3.</S.ContentNumber> 마케팅 정보 수신 동의는 필수가 아니며, 동의 여부와 관계없이 기본
            서비스 이용에 제한은 없습니다.
          </S.Content>
        </S.ContentWrapper>
      </S.Section>
    </S.Marketing>
  );
}

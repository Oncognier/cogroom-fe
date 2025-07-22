import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import { useAppModalStore } from '@/stores/useModalStore';

import * as S from './Notify.styled';

export default function Notify() {
  const { close } = useAppModalStore();

  return (
    <S.Notify>
      <S.TextWrapper>
        <S.Title>⚠️ 로그인 오류 안내</S.Title>
        <S.Description>
          코그룸을 찾아주신 여러분께 중요한 안내드립니다.
          <br />
          현재 로그인 과정에서 예기치 못한 오류로 일부 계정 정보가 잘못 표시되는 문제가 확인되었습니다.
          <br />
          회원님의 소중한 개인정보 보호를 위해, 로그인 기능을 일시 중단하고 신속히 원인 해결에 나서고 있습니다.
          <br />
          불편을 드려 진심으로 사과드리며, 문제 해결 및 재오픈 소식을 코그룸 홈페이지와 메일을 통해 안내드리겠습니다.
        </S.Description>
      </S.TextWrapper>

      <OutlinedButton
        size='sm'
        color='primary'
        label='확인'
        fillContainer
        interactionVariant='normal'
        onClick={close}
      />
    </S.Notify>
  );
}

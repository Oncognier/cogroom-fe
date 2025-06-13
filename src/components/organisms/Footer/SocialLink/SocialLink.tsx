import Instagram from '@/assets/icons/instagram.svg';
import Threads from '@/assets/icons/threads.svg';
import Youtube from '@/assets/icons/youtube.svg';
import { SOCIAL_LINKS } from '@/constants/common';

import * as S from './SocialLink.styled';

export default function SocialLink() {
  return (
    <S.SocialLink>
      <S.SocialLinkIcon
        href={SOCIAL_LINKS.YOUTUBE}
        target='_blank'
        rel='noopener noreferrer'
        width={19}
      >
        <Youtube />
      </S.SocialLinkIcon>

      <S.SocialLinkIcon
        href={SOCIAL_LINKS.INSTAGRAM}
        target='_blank'
        rel='noopener noreferrer'
        width={15}
      >
        <Instagram />
      </S.SocialLinkIcon>

      <S.SocialLinkIcon
        href={SOCIAL_LINKS.THREADS}
        target='_blank'
        rel='noopener noreferrer'
        width={15}
      >
        <Threads />
      </S.SocialLinkIcon>
    </S.SocialLink>
  );
}

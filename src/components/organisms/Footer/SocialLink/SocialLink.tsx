import Instagram from '@/assets/icons/instagram.svg';
import Threads from '@/assets/icons/threads.svg';
import Youtube from '@/assets/icons/youtube.svg';

import * as S from './SocialLink.styled';

export default function SocialLink() {
  return (
    <S.SocialLink>
      <a
        href='https://www.youtube.com/@oncognier'
        target='_blank'
        rel='noopener noreferrer'
      >
        <S.SocialLinkIcon width={19}>
          <Youtube />
        </S.SocialLinkIcon>
      </a>

      <a
        href='https://www.instagram.com/oncognier/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <S.SocialLinkIcon width={15}>
          <Instagram />
        </S.SocialLinkIcon>
      </a>

      <a
        href='https://www.threads.com/@on.cognier'
        target='_blank'
        rel='noopener noreferrer'
      >
        <S.SocialLinkIcon width={15}>
          <Threads />
        </S.SocialLinkIcon>
      </a>
    </S.SocialLink>
  );
}

// https://www.instagram.com/on.cognier
// https://www.youtube.com/@oncognier
// https://www.threads.com/@on.cognier

import DotsVerticalIcon from '@/assets/icons/dots-vertical.svg';
import Heart from '@/assets/icons/heart.svg';
import AvatarPerson from '@/components/atoms/AvatarPerson/AvatarPerson';
import Skeleton from '@/components/skeleton/Skeleton/Skeleton';

import * as S from './CommentsSkeleton.styled';

export default function CommentsSkeleton() {
  return (
    <S.CommentsContainer>
      <S.CommentInputSection>
        <Skeleton
          width='7.5rem'
          height='3rem'
          borderRadius='0.6rem'
        />

        <Skeleton
          width='100%'
          height='18rem'
          borderRadius='1.2rem'
        />
      </S.CommentInputSection>

      {/* 댓글 리스트 */}
      <S.CommentsList>
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index}>
            <S.CommentItem>
              {/* 댓글 작성자 */}
              <S.CommentAuthor>
                <S.CommentAuthorLeft>
                  <AvatarPerson
                    type='image'
                    size='sm'
                  />
                  <Skeleton
                    width='10rem'
                    height='2rem'
                    borderRadius='0.4rem'
                  />
                  <Skeleton
                    width='3.8rem'
                    height='2rem'
                    borderRadius='0.4rem'
                  />
                </S.CommentAuthorLeft>

                <S.MenuIcon>
                  <DotsVerticalIcon />
                </S.MenuIcon>
              </S.CommentAuthor>

              <S.CommentContent>
                <Skeleton
                  width='74.6rem'
                  height='13.6rem'
                  borderRadius='1.2rem'
                />

                <S.CommentActions>
                  <S.LikeIcon>
                    <Heart />
                  </S.LikeIcon>
                  <Skeleton
                    width='3.6rem'
                    height='2rem'
                    borderRadius='0.4rem'
                  />
                </S.CommentActions>
              </S.CommentContent>
            </S.CommentItem>

            {index < 2 && <S.CommentDivider />}
          </div>
        ))}
      </S.CommentsList>
    </S.CommentsContainer>
  );
}

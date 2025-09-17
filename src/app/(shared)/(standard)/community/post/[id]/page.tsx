'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { HTTPError } from '@/api/axios/errors/HTTPError';
import MessageCircleX from '@/assets/icons/message-circle-x.svg';
import Breadcrumb from '@/components/molecules/Breadcrumb/Breadcrumb';
import EmptyState from '@/components/organisms/EmptyState/EmptyState';
import Loading from '@/components/organisms/Loading/Loading';
import useGetUserSummaryQuery from '@/hooks/api/member/useGetUserSummary';
import { useGetPost } from '@/hooks/api/post/useGetPost';
import { useAlertModalStore } from '@/stores/useModalStore';

import PostAuthor from './_components/PostAuthor/PostAuthor';
import PostComments from './_components/PostComments/PostComments';
import PostContent from './_components/PostContent/PostContent';
import PostHeader from './_components/PostHeader/PostHeader';
import PostLikesSaved from './_components/PostLikesSaved/PostLikesSaved';
import * as S from './page.styled';

const ERROR_MESSAGES = {
  MEMBER_NOT_FOUND_ERROR: '사용자를 찾을 수 없습니다.',
  FORBIDDEN_ERROR: '사용자 권한이 없습니다.',
  ANSWER_NOT_FOUND_ERROR: '데일리 답변을 찾을 수 없습니다.',
  INTERNAL_SERVER_ERROR: '서버 내부 오류가 발생했습니다.',
  ASSIGNED_QUESTION_NOT_FOUND_ERROR: '테스트',
} as const;

export default function PostPage() {
  const params = useParams();
  const router = useRouter();
  const postId = params?.id as string;
  const { data: post, isLoading, error } = useGetPost(postId);
  const { data: userSummary } = useGetUserSummaryQuery();
  const { open } = useAlertModalStore();

  useEffect(() => {
    if (error instanceof HTTPError && error.code && ERROR_MESSAGES[error.code as keyof typeof ERROR_MESSAGES]) {
      open('alert', {
        message: ERROR_MESSAGES[error.code as keyof typeof ERROR_MESSAGES],
        type: 'alert',
        onConfirm: () => router.back(),
        confirmText: '뒤로 가기',
      });
    }
  }, [error, open, router]);

  if (isLoading) {
    return <Loading />;
  }

  if (!post) {
    return (
      <EmptyState
        description='삭제되었거나 없는 게시물입니다'
        icon={<MessageCircleX />}
        buttonLabel='다른 글 보기'
        buttonAction={() => router.push('/community')}
      />
    );
  }

  return (
    <S.PostPageContainer>
      <Breadcrumb
        items={[
          { name: '홈', href: '/' },
          { name: '커뮤니티', href: '/community' },
        ]}
      />
      <S.PostSectionsWrapper>
        <PostHeader
          title={post.title}
          createdAt={post.createdAt}
          viewCount={post.viewCount}
        />
        <PostAuthor
          author={post.author}
          postId={postId}
          isMine={post.isMine}
          isAdmin={userSummary?.memberRole === 'ADMIN'}
        />
        <PostContent content={post.content} />
        <PostLikesSaved
          postId={postId}
          likeCount={post.likeCount}
          isLiked={post.myStatus.isLiked}
          saveCount={post.saveCount}
          isSaved={post.myStatus.isSaved}
        />
        <PostComments commentCount={post.commentCount} />
      </S.PostSectionsWrapper>
    </S.PostPageContainer>
  );
}

export const getPresignedUrlSuccess = {
  code: 'SUCCESS',
  message: 'URL 발급에 성공했습니다.',
  result: [
    {
      presignedUrl: 'https://s3...',
      accessUrl: 'https://cdn.cogroom.com/profile/abc123.png',
    },
    {
      presignedUrl: 'https://s3...',
      accessUrl: 'https://cdn.cogroom.com/profile/abc132.png',
    },
  ],
};

export const getPresignedUrlError = {
  code: 'EMPTY_FILED_ERROR',
  message: 'URL 발급에 실패했습니다.',
};

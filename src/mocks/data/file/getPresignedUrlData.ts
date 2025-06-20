export const getPresignedUrlSuccess = (fileName: string) => ({
  code: 'SUCCESS',
  message: 'URL 발급에 성공했습니다.',
  result: `https://mock-bucket.s3.amazonaws.com/${fileName}?signature=mocked`,
});

export const getPresignedUrlError = {
  code: 'EMPTY_FILED_ERROR',
  message: 'URL 발급에 실패했습니다.',
};

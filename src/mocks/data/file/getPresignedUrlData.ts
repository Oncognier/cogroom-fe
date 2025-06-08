export const getPresignedUrlSuccess = (fileName: string) => ({
  code: '1000',
  message: 'URL 발급에 성공했습니다.',
  result: `https://mock-bucket.s3.amazonaws.com/${fileName}?signature=mocked`,
});

export const getPresignedUrlError = {
  code: '1001',
  message: 'URL 발급에 실패했습니다.',
};

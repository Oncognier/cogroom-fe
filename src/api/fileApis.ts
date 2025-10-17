import axios from 'axios';

import { END_POINTS_V1 } from '@/constants/api';
import { GetPresignedUrlRequest, PresignedUrlResponse, UploadToS3Request } from '@/types/file';

import { axiosInstance } from './axios/axiosInstance';

/** 프리사인드 업로드 URL 발급 */
const getPresignedUrl = async ({ fileSet }: GetPresignedUrlRequest) => {
  const { data } = await axiosInstance.post<PresignedUrlResponse>(END_POINTS_V1.FILES.PRESIGNED_UPLOAD, { fileSet });
  return data.result;
};

/** S3에 파일 업로드 (직접 요청) */
const uploadToS3 = async ({ preSignedUrl, file }: UploadToS3Request) => {
  await axios.put(preSignedUrl, file, {
    headers: { 'Content-Type': file.type },
  });
};

export const fileApi = {
  getPresignedUrl,
  uploadToS3,
};

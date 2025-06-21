import axios from 'axios';

import { END_POINTS_V1 } from '@/constants/api';
import { GetPresignedUrlRequest, PresignedUrlResponse, UploadToS3Request } from '@/types/file';

import { axiosInstance } from './axios/axiosInstance';

const getPresignedUrl = async ({ fileSet }: GetPresignedUrlRequest) => {
  const { data } = await axiosInstance.post<PresignedUrlResponse>(END_POINTS_V1.FILE.PRESIGNED_URL, { fileSet });

  return data.result;
};

const uploadToS3 = async ({ presignedUrl, file }: UploadToS3Request) => {
  await axios.put(presignedUrl, file, {
    headers: {
      'Content-Type': file.type,
    },
  });

  return presignedUrl.split('?')[0];
};

export const fileApi = {
  getPresignedUrl,
  uploadToS3,
};

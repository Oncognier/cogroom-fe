import axios from 'axios';

import { END_POINTS_V1 } from '@/constants/api';
import { GetPresignedUrlRequest, PresignedUrlResponse, UploadToS3Request } from '@/types/file';

import { axiosInstance } from './axios/axiosInstance';

const getPresignedUrl = async ({ fileSet }: GetPresignedUrlRequest) => {
  const { data } = await axiosInstance.post<PresignedUrlResponse>(END_POINTS_V1.FILE.PRESIGNED_URL, { fileSet });

  return data.result;
};

const uploadToS3 = async ({ preSignedUrl, file }: UploadToS3Request) => {
  console.log(preSignedUrl);
  await axios.put(preSignedUrl, file, {
    headers: {
      'Content-Type': file.type,
    },
  });
};

export const fileApi = {
  getPresignedUrl,
  uploadToS3,
};

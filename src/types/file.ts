import { ApiResponse } from './api';

export interface GetPresignedUrlRequest {
  fileName: string;
  fileType: string;
}

export interface GetPresignedUrlResponse extends ApiResponse {
  result: string;
}

export interface UploadToS3Request {
  presignedUrl: string;
  file: File;
}

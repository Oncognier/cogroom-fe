import { ApiResponse } from './api';

export interface GetPresignedUrlRequest {
  fileSet: Record<string, string>; // { [fileName]: contentType }
}

export interface PresignedUrlItem {
  preSignedUrl: string;
  accessUrl: string;
}

export interface PresignedUrlResponse extends ApiResponse {
  result: PresignedUrlItem[];
}

export interface UploadToS3Request {
  preSignedUrl: string;
  file: File;
}

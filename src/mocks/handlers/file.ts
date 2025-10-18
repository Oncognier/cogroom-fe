import { http, HttpResponse } from 'msw';

import { END_POINTS, HTTP_STATUS_CODE } from '@/constants/api';

import { getPresignedUrlError, getPresignedUrlSuccess } from '../data/file/getPresignedUrlData';

export const fileHandlers = [
  // 프리사인드 업로드 URL 발급
  http.post(END_POINTS.FILES.PRESIGNED_UPLOAD, async ({ request }) => {
    const body = (await request.json()) as { fileSet?: unknown };

    if (!body?.fileSet) {
      return new HttpResponse(JSON.stringify(getPresignedUrlError), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(getPresignedUrlSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // S3에 파일 업로드
  http.put(/https?:\/\/.+/, async () => {
    return new HttpResponse(null, {
      status: HTTP_STATUS_CODE.OK,
    });
  }),
];

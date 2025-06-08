import { http, HttpResponse } from 'msw';

import { END_POINTS_V1, HTTP_STATUS_CODE } from '@/constants/api';

import { getPresignedUrlError, getPresignedUrlSuccess } from '../data/file/getPresignedUrlData';

export const fileHandlers = [
  http.get(END_POINTS_V1.FILE.PRESIGNED_URL, async ({ request }) => {
    const url = new URL(request.url);
    const fileName = url.searchParams.get('fileName');

    if (!fileName) {
      return new HttpResponse(JSON.stringify(getPresignedUrlError), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(getPresignedUrlSuccess(fileName)), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  http.put('https://mock-bucket.s3.amazonaws.com/:fileName', async () => {
    return new HttpResponse(null, {
      status: HTTP_STATUS_CODE.OK,
    });
  }),
];

/**
 * HTML 콘텐츠에서 이미지 URL을 추출합니다.
 * data-original-filename이 있으면 원본 파일명 기반 URL로 변환합니다.
 */
export const extractImageUrls = (htmlContent: string): string[] => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');
  const images = doc.querySelectorAll('img');

  return Array.from(images).map((img) => {
    const originalFileName = img.getAttribute('data-original-filename');

    if (originalFileName) {
      return originalFileName;
    }

    return img.src;
  });
};

/**
 * 기존 이미지와 새 이미지를 비교하여 삭제할 이미지 URL 목록을 생성합니다.
 * 동일한 URL의 개수 차이를 고려합니다.
 */
export const calculateDeleteUrls = (existingImageUrls: string[], newImageUrls: string[]): string[] => {
  const urlCountMap = new Map<string, number>();

  // 기존 이미지 URL 개수 계산
  existingImageUrls.forEach((url) => {
    urlCountMap.set(url, (urlCountMap.get(url) || 0) + 1);
  });

  // 새로운 이미지 URL 개수만큼 차감
  newImageUrls.forEach((url) => {
    if (urlCountMap.has(url)) {
      const currentCount = urlCountMap.get(url)!;
      if (currentCount > 1) {
        urlCountMap.set(url, currentCount - 1);
      } else {
        urlCountMap.delete(url);
      }
    }
  });

  // 남은 URL들을 개수만큼 배열에 추가
  const deleteUrls: string[] = [];
  urlCountMap.forEach((count, url) => {
    for (let i = 0; i < count; i++) {
      deleteUrls.push(url);
    }
  });

  return deleteUrls;
};

/**
 * 카테고리 ID를 기반으로 타입을 결정합니다.
 */
export const getCategoryType = (categoryId: number): 'daily' | 'post' => {
  return categoryId === 1 ? 'daily' : 'post';
};

/**
 * 배열 형태의 카테고리 ID에서 첫 번째 값을 추출합니다.
 */
export const extractCategoryId = (categoryId: number | number[]): number => {
  return Array.isArray(categoryId) ? categoryId[0] : categoryId;
};

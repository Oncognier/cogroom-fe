/**
 * HTML 콘텐츠에서 이미지 URL을 추출합니다.
 */
export const extractImageUrls = (htmlContent: string): string[] => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');
  const images = doc.querySelectorAll('img');
  return Array.from(images).map((img) => img.src);
};

/**
 * 기존 이미지와 새 이미지를 비교하여 삭제할 이미지 URL 목록을 생성합니다.
 */
export const calculateDeleteUrls = (existingImageUrls: string[], newImageUrls: string[]): string[] => {
  return existingImageUrls.filter((url) => !newImageUrls.includes(url));
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

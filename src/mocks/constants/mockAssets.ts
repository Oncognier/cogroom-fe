/**
 * Mock 전용 정적 리소스 상수
 * - 테스트 / MSW 응답 등에서 반복되는 더미 이미지, 기본값 등을 관리
 */
export const MOCK_IMAGE = {
  FEMALE_PROFILE: 'https://cdn.cogroom.com/default_image/Mock_Female.png',
  MALE_PROFILE: 'https://cdn.cogroom.com/default_image/Mock_Male.png',
} as const;

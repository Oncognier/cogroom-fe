import { AdminPaymentHistoryResponse } from '@/types/admin';

/**
 * 데이터 구조:
 * - paymentHistoryId: 주문번호 (화면에서 주문번호로 표시)
 * - memberId: 회원 ID
 * - nickname: 회원 닉네임
 * - planName: 상품명
 * - category: 카테고리 (구독/연간/월간/기타)
 * - count: 수량
 * - price: 결제금액
 * - method: 결제수단 (KAKAO/INICIS/MOBILE)
 * - status: 결제상태 (PAID/CANCELLED/FAILED)
 * - paidAt: 결제일시 (YYYY-MM-DD HH:mm:ss 형식)
 * - paymentMethodId: 결제수단 ID
 */
export const getAdminPaymentHistoryData: AdminPaymentHistoryResponse = {
  code: 'SUCCESS',
  message: '요청에 성공했습니다.',
  result: {
    totalCount: 5,
    totalPrice: 450000,
    totalMember: 3,
    averageAmount: 90000,
    data: [
      {
        paymentHistoryId: 'ORD00000121',
        memberId: 'lee@naver.com',
        nickname: 'S2선로S2',
        planId: 1,
        planName: '프리미엄 플랜/월',
        category: '구독',
        count: 1,
        price: 100000,
        method: 'KAKAO',
        status: 'PAID',
        paidAt: '2025-10-14 20:18:48',
        paymentMethodId: 1,
      },
      {
        paymentHistoryId: 'ORD00000122',
        memberId: 'hahaha@naver.com',
        nickname: '배고파요',
        planId: 2,
        planName: '프리미엄 플랜/연',
        category: '구독',
        count: 1,
        price: 150000,
        method: 'CARD',
        status: 'PAID',
        paidAt: '2025-11-01 14:30:22',
        paymentMethodId: 2,
      },
      {
        paymentHistoryId: 'ORD00000123',
        memberId: 'hihihihi485@gmail.com',
        nickname: '반갑습니다',
        planId: 1,
        planName: '프리미엄 플랜/월',
        category: '구독',
        count: 2,
        price: 50000,
        method: 'CARD',
        status: 'PAID',
        paidAt: '2025-11-15 09:45:11',
        paymentMethodId: 3,
      },
      {
        paymentHistoryId: 'ORD00000124',
        memberId: 'wownice@naver.com',
        nickname: 'S2선로S2',
        planId: 1,
        planName: '프리미엄 플랜/월',
        category: '기타',
        count: 3,
        price: 75000,
        method: 'KAKAO',
        status: 'PENDING',
        paidAt: '2025-11-20 16:12:33',
        paymentMethodId: 1,
      },
      {
        paymentHistoryId: 'ORD00000125',
        memberId: 'kikiki_2@kakao.com',
        nickname: '개발자체크셔츠',
        planId: 1,
        planName: '프리미엄 플랜/월',
        category: '구독',
        count: 1,
        price: 75000,
        method: 'KAKAO',
        status: 'FAILED',
        paidAt: '2025-11-25 11:28:17',
        paymentMethodId: 4,
      },
    ],
    nextCursor: 20,
    last: false,
    totalElements: 123,
  },
};

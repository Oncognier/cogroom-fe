'use client';

import { useEffect, useState } from 'react';

const CONNECTOR_HEIGHT_OFFSET = 18;

/**
 * 댓글-답글 구조에서 "왼쪽 블루라인(BlueLine)"의 실제 높이를 계산하는 훅입니다.
 *
 * 작동 원리
 *   1. containerRef 내부의 `[data-reply-connector]`가 달린 요소들을 모두 탐색합니다.
 *      (예: ReplyConnector, ReplyTextConnector, CommentFieldConnector 등)
 *   2. 그중 **가장 마지막 요소**를 찾아, 그 요소의 하단(bottom) 좌표를 기준점으로 삼습니다.
 *   3. 아바타 요소(anchorRef)의 하단(bottom) 좌표와의 차이를 계산하여,
 *      "라인이 그려져야 할 높이(px)"를 구합니다.
 *   4. 마지막 커넥터(ㄴ자형) 자체의 높이만큼 시각적 보정이 필요하므로,
 *      `CONNECTOR_HEIGHT_OFFSET` 상수를 빼서 반환합니다.
 *
 * 반환값
 *   - `number`: 아바타 하단에서 마지막 reply connector 끝까지의 라인 높이(px)
 *               (커넥터 시각적 높이 보정 포함)
 */
export function useReplyConnectorHeight(
  containerRef: React.RefObject<HTMLElement | null>,
  anchorRef: React.RefObject<HTMLElement | null>,
  extraTopOffset: number = 0,
) {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const anchor = anchorRef.current;
    if (!container || !anchor) return;

    const measure = () => {
      // data-reply-connector가 달린 모든 요소들
      const marks = Array.from(container.querySelectorAll<HTMLElement>('[data-reply-connector]'));
      if (marks.length === 0) {
        setHeight(0);
        return;
      }

      // 마지막 표식
      const last = marks[marks.length - 1];

      const anchorRect = anchor.getBoundingClientRect();
      const lastRect = last.getBoundingClientRect();

      const next = Math.max(0, Math.round(lastRect.bottom - anchorRect.bottom - extraTopOffset));
      setHeight(next);
    };

    // 초기 계산
    measure();

    // 레이아웃 변동 대응: 리사이즈/폰트/이미지 로딩, 컨텐츠 변화
    const roContainer = new ResizeObserver(() => requestAnimationFrame(measure));
    const roAnchor = new ResizeObserver(() => requestAnimationFrame(measure));
    roContainer.observe(container);
    roAnchor.observe(anchor);

    const mo = new MutationObserver(() => requestAnimationFrame(measure));
    mo.observe(container, { childList: true, subtree: true, attributes: true });

    window.addEventListener('resize', measure);

    return () => {
      window.removeEventListener('resize', measure);
      roContainer.disconnect();
      roAnchor.disconnect();
      mo.disconnect();
    };
  }, [containerRef, anchorRef, extraTopOffset]);

  return height - CONNECTOR_HEIGHT_OFFSET;
}

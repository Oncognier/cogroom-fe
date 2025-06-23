export function getPaginationRange(
  currentPage: number,
  totalPages: number,
  visibleRange: number,
): {
  currentGroup: number;
  pageNumbers: number[];
  hasPrevGroup: boolean;
  hasNextGroup: boolean;
} {
  const currentGroup = Math.floor((currentPage - 1) / visibleRange);
  let startPage = currentGroup * visibleRange + 1;
  let endPage = Math.min(startPage + visibleRange - 1, totalPages);

  if (endPage - startPage + 1 < visibleRange) {
    startPage = Math.max(totalPages - visibleRange + 1, 1);
    endPage = totalPages;
  }

  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return {
    currentGroup,
    pageNumbers,
    hasPrevGroup: startPage > 1,
    hasNextGroup: endPage < totalPages,
  };
}

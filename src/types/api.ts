export interface ApiResponse {
  code: number;
  message: string;
}

export interface PaginationResult<T> {
  totalPages: number;
  totalElements: number;
  currentPage: number;
  pageSize: number;
  last: boolean;
  data: T[];
}

export interface CursorPaginationResult<T> {
  data: T[];
  nextCursor: number | null;
  isLast: boolean;
}

export interface AxiosMeta {
  prefetch?: boolean;
}

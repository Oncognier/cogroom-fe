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

export interface PrefetchMeta {
  prefetch?: boolean;
}

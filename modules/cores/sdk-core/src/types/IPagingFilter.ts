export interface IPagingFilter {
  offset: number;
  limit: number;
  sortBy?: string;
  sortDirection?: "asc" | "desc";
}
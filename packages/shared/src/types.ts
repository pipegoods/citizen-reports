/**
 * Shared types for Citizen Reports API (backend + frontend).
 */

export type ReportStatus = "pending" | "process" | "resolved";

export interface ReportEntity {
  id: number;
  title: string;
  description: string;
  status: ReportStatus;
  createdAt: string;
}

export interface PaginationMeta {
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface PaginatedReports<T = ReportEntity> {
  reports: T[];
  meta: PaginationMeta;
}

/** Response shape for GET /api/reports (list with pagination) */
export type ReportsResponse = PaginatedReports<ReportEntity>;

export interface CreateReportDto {
  title: string;
  description: string;
}

export interface UpdateReportDto {
  status: ReportStatus;
}

// Auth (backend + frontend)
export type AuthRole = "ADMIN";

export interface LoginDto {
  email: string;
  password: string;
}

export interface AuthUser {
  id: number;
  email: string;
  role: AuthRole;
}

export interface AuthResponse {
  access_token: string;
  user: AuthUser;
}

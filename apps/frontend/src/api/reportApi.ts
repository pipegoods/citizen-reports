import client from "./client";
import type {
  CreateReportDto,
  ReportEntity,
  ReportsResponse,
  UpdateReportDto,
} from "@citizen-reports/shared";
import { API_REPORTS, DEFAULT_PAGE_SIZE } from "@citizen-reports/shared";
import { getCsrfToken } from "../shared/utils/csrf";

export const reportApi = {
  getReports: (page: number = 1, pageSize: number = DEFAULT_PAGE_SIZE) =>
    client.get<ReportsResponse>(API_REPORTS, {
      params: { page, pageSize },
    }),

  getReportById: (id: number) => client.get<ReportEntity>(`${API_REPORTS}/${id}`),

  createReport: (payload: CreateReportDto) =>
    client.post<ReportEntity>(API_REPORTS, {
      title: payload.title,
      description: payload.description,
    }),

  updateReport: (id: number, payload: UpdateReportDto) => {
    const csrfToken = getCsrfToken();
    if (!csrfToken) {
      throw new Error("CSRF token missing to update");
    }

    return client.put<ReportEntity>(
      `${API_REPORTS}/${id}`,
      {
        status: payload.status,
      },
      {
        headers: {
          "x-csrf-token": csrfToken,
        },
      },
    );
  },

  deleteReport: (id: number) => {
    const csrfToken = getCsrfToken();
    if (!csrfToken) {
      throw new Error("CSRF token missing to delete");
    }
    return client.delete<ReportEntity>(`${API_REPORTS}/${id}`, {
      headers: {
        "x-csrf-token": csrfToken,
      },
    });
  },
};

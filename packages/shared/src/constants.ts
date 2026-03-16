/**
 * Shared constants for Citizen Reports (backend + frontend).
 */

import type { ReportStatus } from "./types.js";

export const REPORT_STATUS_VALUES = [
  "pending",
  "process",
  "resolved",
] as const satisfies readonly ReportStatus[];

export const DEFAULT_PAGE_SIZE = 10;

export const API_REPORTS = "/reports";

export const API_AUTH = "/auth";
export const AUTH_LOGIN = "/auth/login";
export const AUTH_LOGOUT = "/auth/logout";
export const AUTH_SESSION = "/auth/session";

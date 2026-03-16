/**
 * Shared Zod schemas for report validation (single source of truth).
 */

import { z } from "zod";
import { REPORT_STATUS_VALUES } from "./constants.js";

export const createReportSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Title cannot be empty")
    .min(5, "Title must be at least 5 characters"),

  description: z
    .string()
    .trim()
    .min(1, "Description cannot be empty")
    .min(10, "Description must be at least 10 characters"),
});

export type CreateReportForm = z.infer<typeof createReportSchema>;

export const updateReportSchema = z.object({
  status: z.enum(REPORT_STATUS_VALUES),
});

export type UpdateReportForm = z.infer<typeof updateReportSchema>;

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Email must be a valid email address"),
  password: z.string().trim().min(1, "Password is required"),
});

export type LoginForm = z.infer<typeof loginSchema>;

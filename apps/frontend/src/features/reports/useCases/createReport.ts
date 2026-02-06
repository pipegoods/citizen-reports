import { reportApi } from "../../../api/reportApi";
import type { CreateReportDto } from "@citizen-reports/shared";

export const createReport = async (payload: CreateReportDto) => {
  const { data } = await reportApi.createReport(payload);
  return data;
};

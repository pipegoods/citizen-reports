import { reportApi } from "../../../api/reportApi";
import type { UpdateReportDto } from "@citizen-reports/shared";

export const updateReport = async (id: number, payload: UpdateReportDto) => {
  const { data } = await reportApi.updateReport(id, payload);
  return data;
};

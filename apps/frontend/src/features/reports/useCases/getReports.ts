import { reportApi } from "../../../api/reportApi";

export const getReports = async (page: number, pageSize: number) => {
  const { data } = await reportApi.getReports(page, pageSize);
  return data;
};

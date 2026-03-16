import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { DEFAULT_PAGE_SIZE } from "@citizen-reports/shared/constants";
import { getReports } from "../useCases/getReports";

export const useGetReports = (
  page: number,
  pageSize: number = DEFAULT_PAGE_SIZE,
) => {
  return useQuery({
    queryKey: ["reports", page, pageSize],
    queryFn: () => getReports(page, pageSize),
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });
};

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createReport } from "../useCases/createReport";
import type { CreateReportDto, ReportEntity } from "@citizen-reports/shared";

export const useCreateReport = () => {
  const queryClient = useQueryClient();

  return useMutation<ReportEntity, Error, CreateReportDto>({
    mutationFn: createReport,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["reports"],
        exact: false,
      });
    },
  });
};

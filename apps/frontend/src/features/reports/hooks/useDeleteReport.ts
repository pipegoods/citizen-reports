import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteReport } from "../useCases/deleteReport";
import type { ReportEntity } from "@citizen-reports/shared";

export const useDeleteReport = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation<ReportEntity, Error>({
    mutationFn: () => deleteReport(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["reports"],
        exact: false,
      });
    },
  });
};

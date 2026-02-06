import { useSearchParams } from "react-router-dom";
import { DEFAULT_PAGE_SIZE } from "@citizen-reports/shared";
import { getPageFromUrl } from "../utils/pagination";

export const usePagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = getPageFromUrl(searchParams.get("page"));
  const pageSize = DEFAULT_PAGE_SIZE;

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: String(newPage) });
  };

  return {
    page,
    pageSize,
    handlePageChange,
  };
};

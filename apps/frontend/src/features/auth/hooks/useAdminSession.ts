import { useQuery } from "@tanstack/react-query";
import { AUTH_SESSION } from "@citizen-reports/shared";
import client from "../../../api/client";

const checkAdminSession = async () => {
  await client.get(AUTH_SESSION);
  return true;
};

export const useAdminSession = () => {
  return useQuery({
    queryKey: ["admin-session"],
    queryFn: checkAdminSession,
    retry: false
  })
}

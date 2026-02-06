import { authApi } from "../../../api/authApi";
import type { LoginDto } from "@citizen-reports/shared";

export const login = async (payload: LoginDto) => {
  const { data } = await authApi.login(payload);
  return data;
};

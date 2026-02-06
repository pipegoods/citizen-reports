import client from "./client";
import type { LoginDto, AuthResponse } from "@citizen-reports/shared";
import { AUTH_LOGIN, AUTH_LOGOUT } from "@citizen-reports/shared";

export const authApi = {
  login: (payload: LoginDto) =>
    client.post<AuthResponse>(AUTH_LOGIN, {
      email: payload.email,
      password: payload.password,
    }),

  logout: () => client.post(AUTH_LOGOUT),
};

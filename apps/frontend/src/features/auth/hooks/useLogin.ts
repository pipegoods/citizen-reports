import { useMutation } from "@tanstack/react-query";
import { login } from "../useCases/login";
import type { LoginDto, AuthResponse } from "@citizen-reports/shared";

export const useLogin = () => {
  return useMutation<AuthResponse, Error, LoginDto>({
    mutationFn: login,
  });
};

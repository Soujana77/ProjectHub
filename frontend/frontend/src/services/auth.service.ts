import { api } from "@/lib/api";

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export const AuthService = {
  register: async (data: RegisterRequest) => {
    const response = await api.post("/auth/register", data);
    return response.data;
  },

  login: async (data: LoginRequest) => {
    const response = await api.post("/auth/login", data);
    return response.data;
  },
};
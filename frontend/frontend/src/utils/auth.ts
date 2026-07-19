export const AUTH_TOKEN_KEY = "token";

export function getToken() {
  return localStorage.getItem(AUTH_TOKEN_KEY);
}

export function isAuthenticated() {
  return !!getToken();
}

export function clearAuth() {
  localStorage.removeItem(AUTH_TOKEN_KEY);
}
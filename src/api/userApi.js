import { API_BASE_URL } from "./apiConfig";
import { fetchWithAuth } from "./fetchWithAuth";

export const getCurrentUser = (token) =>
  fetchWithAuth(`${API_BASE_URL}/users/me`, {}, token);

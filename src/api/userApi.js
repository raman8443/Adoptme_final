import { API_BASE_URL } from "./apiConfig";

export const getCurrentUser = async (token) => {
  const res = await fetch(`${API_BASE_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Error al obtener el usuario");
  return res.json();
};

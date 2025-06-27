import { API_BASE_URL } from "./apiConfig";

export const getAdoptionsByUser = async (token) => {
  const response = await fetch(`${API_BASE_URL}/adoptions/user-adoptions`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) throw new Error("Error al obtener las adopciones");
  return response.json();
};

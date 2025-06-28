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

export const getAdoptionPreviews = async (token) => {
  const response = await fetch(`${API_BASE_URL}/adoptions/previews`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok)
    throw new Error("Error al obtener la previsualización de adopciones");
  return response.json();
};

export const getAdoptionDetail = async (token, adoptionId) => {
  const response = await fetch(
    `${API_BASE_URL}/adoptions/detail/${adoptionId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok)
    throw new Error("Error al obtener la previsualización de adopciones");
  return response.json();
};

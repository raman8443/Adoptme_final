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

export const approveAdoption = async (adoptionId, token) => {
  const response = await fetch(
    `${API_BASE_URL}/adoptions/approve/${adoptionId}`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) throw new Error("Error al aprobar la adopción");

  return response.json();
};

export const denyAdoption = async (adoptionId, token) => {
  const response = await fetch(`${API_BASE_URL}/adoptions/deny/${adoptionId}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error("Error al denegar la adopción");

  return response.json();
};

export const postAdoptionRequest = async (body, token) => {
  const res = await fetch(`${API_BASE_URL}/adoptions/request`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Error al enviar solicitud");
  return data;
};

export const checkIfUserRequested = async (petId, token) => {
  const response = await fetch(
    `${API_BASE_URL}/adoptions/check?pet_id=${petId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Error al verificar solicitud de adopción");
  }

  return data; // se espera { requested: true } o { requested: false }
};

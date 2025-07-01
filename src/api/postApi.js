import { API_BASE_URL } from "./apiConfig";

export const getPosts = async () => {
  const response = await fetch(`${API_BASE_URL}/posts/get-posts`);
  if (!response.ok) throw new Error("Error al obtener las mascotas");
  return response.json();
};

export const getPost = async (postId) => {
  const response = await fetch(`${API_BASE_URL}/posts/get-post/${postId}`);
  if (!response.ok) throw new Error("Error al obtener la mascota");
  return response.json();
};

export const getLatestPosts = async () => {
  const response = await fetch(`${API_BASE_URL}/posts/get-latest-posts`);
  if (!response.ok) throw new Error("Error al obtener las mascotas");
  return response.json();
};

export const getPostsByUser = async (token) => {
  const response = await fetch(`${API_BASE_URL}/posts/get-user-posts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok)
    throw new Error("Error al obtener las mascotas del usuario");
  return response.json();
};

export const createPost = async (form, photo, token) => {
  const formData = new FormData();

  for (const key in form) {
    formData.append(key, form[key]);
  }

  formData.append("photo", photo);

  const response = await fetch(`${API_BASE_URL}/posts/create`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  const text = await response.text(); // para debug
  try {
    const data = JSON.parse(text);
    if (!response.ok)
      throw new Error(data.message || "Error al crear la mascota");
    return data;
  } catch {
    throw new Error("Error inesperado al crear la mascota: " + text);
  }
};

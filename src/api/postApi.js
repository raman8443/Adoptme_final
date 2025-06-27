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

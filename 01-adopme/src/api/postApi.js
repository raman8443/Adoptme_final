export const getPosts = async () => {
  const response = await fetch(
    "https://proyecto-adopcion-de-mascotas.onrender.com/api/posts/get-posts"
  );
  if (!response.ok) throw new Error("Error al obtener las mascotas");
  return response.json();
};

export const getPost = async (postId) => {
  const response = await fetch(
    `https://proyecto-adopcion-de-mascotas.onrender.com/api/posts/get-post/${postId}`
  );
  if (!response.ok) throw new Error("Error al obtener laa mascota");
  return response.json();
};

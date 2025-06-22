export const getPosts = async () => {
  const response = await fetch(
    "https://proyecto-adopcion-de-mascotas.onrender.com/api/posts/get-posts"
  );
  if (!response.ok) throw new Error("Error al obtener las mascotas");
  return response.json();
};

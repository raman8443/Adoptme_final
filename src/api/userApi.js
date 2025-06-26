export const getCurrentUser = async (token) => {
  const res = await fetch(
    "https://proyecto-adopcion-de-mascotas.onrender.com/api/users/me",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) throw new Error("Error al obtener el usuario");
  return res.json();
};

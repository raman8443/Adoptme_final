export const loginUser = async ({ email, password }) => {
  const res = await fetch(
    "https://proyecto-adopcion-de-mascotas.onrender.com/api/auth/login",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    }
  );

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Error al iniciar sesión");

  return data; // { message, token, user, refreshToken }
};

export const registerUser = async (formData) => {
  const res = await fetch(
    "https://proyecto-adopcion-de-mascotas.onrender.com/api/auth/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  );

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Error al registrarse");
  return data; // también podés devolver token y user si querés loguear automáticamente
};
